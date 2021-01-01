// Navigation.jsx
//import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import Street from './street';
import MemberEdit from './memberedit';

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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
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
      console.log(error);
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

  getStreets () {
    // group members into the streets
    this.state.members.sort((a,b) => {
      return a.Street.localeCompare(b.Street);
    });

    const streets = [];
    this.state.members.forEach((m) => {
      m.Street = m.Street.toUpperCase();
      let street = streets.find((s) => { 
        if (s.name === m.Street) {
          return true;  
        } else {
          return false;
        }
      });
                            
 	    if(!street) {
        street = {
          name: m.Street, members: []
        };
        streets.push(street);
      }
      street.members.push(m);
    });

    // sort the houses
    streets.forEach((street) => {
      street.members.sort((a, b) => {
        var x = a.HouseNo;
        var y = b.HouseNo;
          if (x < y) {return -1;}
          if (x > y) {return 1;}
        return 0;
      });
    });

    let id = 1;
    streets.forEach((street) => {
      let sortedmembers = [];
      street.members.forEach((m) => {
        
        let clone = Object.assign({},m);
        clone.MemberId = id++;
        sortedmembers.push(clone);
      });
      street.members = sortedmembers;
    });

    return streets;
  }

    render () {
      let i = this.state.members.length + 1000;
      const streets = this.getStreets();
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
  
export default Members;