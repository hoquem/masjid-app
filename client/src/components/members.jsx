// Navigation.jsx
//import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//import _ from 'lodash';

import Street from './street';
import MemberEdit from './memberedit';
import { SearchTextContext } from './searchtextprovider';

class Members extends Component {

    state = {
      modalShow: false,
      tempmember:  {Firstname: "FIRSTNAME", Lastname: "LASTNAME", HouseNo: "1", Street: "STREET 1", Town: "LUTON"},
      isAddNewMember: false,
      members: []
    };

  async componentDidMount() {
    try {
      const res = await axios.get('/members');
      this.setState({members: res.data});
    } catch (error) {
      console.error(error);
    }
  }

  setModalShow = (e) => {
    this.setState({modalShow: e});
  }

  showMemberEditDialog = () => {
    this.setModalShow(true);
  }

  hideMemberEditDialog = () => {
    this.setModalShow(false);
  }

  handleMemberEditCancel = (m) => {
    this.hideMemberEditDialog();
  }

  async saveNewMember(m) {
    if (m.Firstname && m.Firstname.length > 0 &&
        m.Lastname && m.Lastname.length > 0 &&
        m.HouseNo && m.HouseNo.length > 0 &&
        m.Street && m.Street.length > 0) {

        const res = await axios.post('/members', m);  

        const newmembers = [...this.state.members, res.data];
        this.setState({members: newmembers});
    }
  }

  async saveUpdatedMember(m) {
    try {
      //const res = await axios.put('members/' + m._id, m);
      await axios.put('members/' + m._id, m);
      // TODO: update with the member details returned from server? 
    } catch (error) {
      console.error(error);
    }
  }

  async saveDelete(m) {
    try {
      const res = await axios.delete('members/' + m._id, m);

      const index = this.state.members.findIndex(function(o){
        return o._id === res.data._id;
      });

      if (index !== -1) {
        this.state.members.splice(index, 1);
        this.setState({members: this.state.members});
      } 
    } catch (error) {
      console.error(error);
    }
  }

  handleMemberEditSave = (m) => {
    try {
      if (this.state.isAddNewMember) {
        this.saveNewMember(m);
      } else {
        // find the member to update
        const member = this.state.members.find(m => m._id === this.state.tempmember._id);
        if( member ) {
          member.Firstname = m.Firstname;
          member.Lastname = m.Lastname;
          member.HouseNo = m.HouseNo;
          member.Street = m.Street;
          member.Town = m.Town;
          this.saveUpdatedMember(member);
          this.setState({members: this.state.members});
        }
      }

      this.hideMemberEditDialog();
    } catch (error) {
      console.error(error);
    }
  }

  removeMember = (m) => {
    this.saveDelete(m);
  }
  
  handleAddNewMemberButtonClick = (e) => {
    const street = {name: ""};
    this.addNewMember(street);
  }

  addNewMember = (street) => {
    this.setState({ 
        tempmember:  {Firstname: "", Lastname: "", HouseNo: "", Street: street.name,  Town: "LUTON"},
        isAddNewMember: true
      }, this.showMemberEditDialog);
  }

  updateMember = (m) => {
    this.setState({ 
        tempmember: m,
        isAddNewMember: false
      }, this.showMemberEditDialog);
  }


  splitStringOnLastWord = (str) => {
    const i = str.trim().lastIndexOf(" "); 
    if(i === -1) {
      return {
        minusLastWord:  "",
        lastWord: str.trim()
      }
    } else {
      const minusLastWord = str.slice(0, i);
      const lastWord = str.slice(i, str.length);

      return {
        minusLastWord: minusLastWord.trim(),
        lastWord: lastWord.trim()
      }

    }
  }
  
  compareHouseNumbers = (a, b) => {
    // 1. 1 STREET
    // 2. 1A STREET 
    // 3. FLAT A 7 STREET
    //

    const aSplit = this.splitStringOnLastWord(a.toString()); 
    const bSplit = this.splitStringOnLastWord(b.toString()); 

    const aBuilding = aSplit.lastWord;
    const bBuilding = bSplit.lastWord;
    const aUnit = aSplit.minusLastWord;
    const bUnit = bSplit.minusLastWord;


    const reA = /[^a-zA-Z]/g;
    const reN = /[^0-9]/g;

    const astr = aBuilding.toString();
    const bstr = bBuilding.toString();

    const aA = astr.replace(reA, "");
    const bA = bstr.replace(reA, "");
    const aN = parseInt(astr.replace(reN, ""), 10);
    const bN = parseInt(bstr.replace(reN, ""), 10);

    let retval = 0
    if (aN === bN) {
      if (aA.length === 0) {
        if (bA.length === 0) { 
          retval = 0;
        } else {
          retval = -1;
        }
      } else {
        retval = aA.localeCompare(bA);
      }
    } else {
      retval = aN === bN ? 0 : aN > bN ? 1 : -1;
    }

    // compare the unit address of building is the same
    if(retval === 0 ) {
      if(aUnit.length === 0) {
        if (bUnit.length === 0) {
          retval = 0;
        } else {
          retval = -1;
        }
      } else {
        retval = aUnit.localeCompare(bUnit);
      }
    }

    return retval;
  }  

  // Precendence...
  // street alphabetical
  // lower house number
  // lastname alphabetical
  // firstname alphabetical
  compareMembers = (a, b) => {
    let result = 0;
    result = a.Street.localeCompare(b.Street);

    if(result === 0) {
      result = this.compareHouseNumbers(a.HouseNo, b.HouseNo);
    }

    if(result === 0) {
      result = a.Lastname.localeCompare(b.Lastname);
    }

    if(result === 0) {
      result = a.Firstname.localeCompare(b.Firstname);
    }

    return result;
  }

  //////////////////////
  // Get an array of all the streets with the members in the street contained in the object
  // Order the streets alphabetically
  // Order the members in the street with increamenting address
  // Order the members of a same houehold alphatically
  // Remove any streets which wont be displayed becaue of filter
  getStreets = (searchText) => {
    // sort all the members (can be done once after load if order is maintained when new member is added)
    this.state.members.sort((a,b) => {
      //return a.Street.localeCompare(b.Street);
      return this.compareMembers(a, b);
    });

    // group members into the streets
    const streets = [];
    this.state.members.forEach((m) => {
      m.Street = m.Street.toUpperCase();
      // find the street object with the same name as the member street name
      let street = streets.find((s) => { 
        if (s.name === m.Street) {
          return true;  
        } else {
          return false;
        }
      });

      // create the street entry if required
 	    if(!street) {
        street = {
          name: m.Street, members: []
        };
        streets.push(street);
      }

      street.members.push(m); 
    });

    // apply member ID and any filter
    let id = 1;
    streets.forEach((street) => {
      let filteredmembers = [];
      street.members.forEach((m) => {
        
        let clone = Object.assign({},m);
        clone.MemberId = id++; // each member has an number ID in sequence (this is what the masjid need)

        // apply the filter
        if (searchText && searchText.length > 0) {
          if(m.Firstname.includes(searchText) || m.Lastname.includes(searchText) || m.Street.includes(searchText)) {
            filteredmembers.push(clone);
          }
        } else { // no filter
           filteredmembers.push(clone);
        }
      });
      street.members = filteredmembers;
    });

    // remove any empty streets
    return streets.filter((s) => {
      return s.members.length > 0;
    })
  }

    render () {
      let i = this.state.members.length + 1000;
      const streets = this.getStreets(this.context.state.searchText.toLocaleUpperCase());
      const { tempmember } = this.state;

      let component;  
      if( this.state.members.length > 0 ) {
        component = 
          <React.Fragment>
          <MemberEdit
            member={tempmember}
            show={this.state.modalShow}
            onCancel={this.handleMemberEditCancel}
            onSave={this.handleMemberEditSave}
          />

          <Table borderless hover>
          <tbody>
            {streets.map((street) => {
              return (
                <Street 
                  key={i++} 
                  street={street} 
                  addMember={this.addNewMember} 
                  removeMember={this.removeMember} 
                  updateMember={this.updateMember} 
                />
              );
            })}
          </tbody>
        </Table>
        </React.Fragment>;
      } else {
        component = 
          <React.Fragment>
          <MemberEdit
            member={tempmember}
            show={this.state.modalShow}
            onCancel={this.handleMemberEditCancel}
            onSave={this.handleMemberEditSave}
          />
        <div>
          <Button onClick={this.handleAddNewMemberButtonClick}>Add Member</Button>
        </div>
        </React.Fragment>
      }

      return component;
    }
}

Members.contextType = SearchTextContext;
  
export default Members;