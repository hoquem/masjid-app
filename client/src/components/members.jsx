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
    tempmember:  {Firstname: "firstname", Lastname: "lastname", HouseNo: "1", Street: "street 1", Town: "Luton"},
    isAddNewMember: false,
    members: []
  };

  async componentDidMount() {

    try {
      const res = await axios.get('/members')
      console.log(res.data);
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

  handleMemberEditSave = (m) => {
    if (this.state.isAddNewMember) {
      if (m.Firstname && m.Firstname.length > 0 &&
          m.Lastname && m.Lastname.length > 0 &&
          m.HouseNo && m.HouseNo.length > 0 &&
          m.Street && m.Street.length > 0) {
          //m._id = this.state.members.length + 1; // TODO: get id from database
          m.HouseNo = m.HouseNo.toUpperCase();
          //const newmembers = [...this.state.members, m];
         // this.setState({members: newmembers});
         // async save to back end and then reload
        }
      
    } else {

      // find the member to update
      const member = this.state.members.find(m => m._id === this.state.tempmember._id);
      if( member ) {
        member.Firstnmae = m.Firstname;
        member.HouseNo = m.HouseNo;
        member.Street = m.Street;
        this.setState({members: this.state.members});
      }

    }
    this.hideMemberEditDialog();
  }

  removeMember = (m) => {
    const index = this.state.members.findIndex(function(o){
      return o._id === m._id;
    });

    if (index !== -1) {
      this.state.members.splice(index, 1);
      this.setState({members: this.state.members});
    } 
  }
  
  handleAddNewMemberButtonClick = (e) => {
    const street = {name: ""};
    this.addNewMember(street);
  }

  addNewMember = (street) => {
    this.setState({ 
        tempmember:  {firstname: "", lastname: "", houseno: "", street: street.name,  town: "Luton"},
        isAddNewMember: true
      }, this.showMemberEditDialog);
  }

  updateMember = (m) => {
    console.log(m);
    this.setState({ 
        tempmember: m,
        isAddNewMember: false
      }, this.showMemberEditDialog);
  }


  getStreets () {
    // group members into the streets
    const streets = [];
    this.state.members.forEach((m) => {
     let street = streets.find(s => 
  	    s.name === m.Street
      );
                            
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