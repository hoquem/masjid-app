// Navigation.jsx
//import { Link } from "react-router-dom";
import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
//import axios from 'axios';

import Street from './street';
import MemberEdit from './memberedit';

class Members extends Component {
  

  state = {
    modalShow: false,
    tempmember:  {name: "name 1", house: "1", street: "street 1"},
    members: [
      {_id: "1", memberId: "1", name: "name 1", house: "1", street:"street 1"},
      {_id: "2", memberId: "2", name: "name 1", house: "1", street:"street 1"},
      {_id: "3", memberId: "3", name: "name 1", house: "1A", street:"street 1"},
      {_id: "4", memberId: "4", name: "name 1", house: "100", street:"street 2"},
      {_id: "5", memberId: "5", name: "name 1", house: "1B", street:"street 2"},
      {_id: "6", memberId: "6", name: "name 1", house: "1", street:"street 2"},
      {_id: "7", memberId: "7", name: "name 1", house: "2", street:"street 2"},
      {_id: "8", memberId: "8", name: "name 1", house: "9", street:"street 3"},
      {_id: "9", memberId: "9", name: "name 1", house: "1B", street:"street 3"},
      {_id: "10", memberId: "10", name: "name 1", house: "10", street:"street 3"},
      {_id: "11", memberId: "11", name: "name 1", house: "11", street:"street 3"},
      {_id: "12", memberId: "12", name: "name 1", house: "23", street:"street 3"},
    ]
  };

  setModalShow(e) {
    this.setState({modalShow: e});
  }

  showMemberEditDialog() {
    console.log(this.state);
    this.setModalShow(true);
  }

  hideMemberEditDialog() {
    this.setModalShow(false);
  }

  handleMemberEditCancel = (member) => {
    this.hideMemberEditDialog();
  }

  handleMemberEditSave = (member) => {
    console.log("handleMemberEditSave");
    console.log(member);
    console.log(this.state);

    this.hideMemberEditDialog();
  }

  removeMember = (m) => {
    const index = this.state.members.findIndex(function(o){
      return o._id === m._id;
    });

    if (index !== -1) this.state.members.splice(index, 1);

    this.setState({members: this.members}); 
  }

  addNewMember = (m) => {
    const tempmember = {name: "temp name", house: "1TH", street: "temp street"}
    this.setState ({tempmember:  {name: "temp name", house: "1TH", street: "temp street"}},
      this.showMemberEditDialog());
  }

  updateMember = (m) => {
    this.showMemberEditDialog();
  }


    componentDidMount() {
      /*axios.get('/api/v1/say-something').then((res) => {
        const response = res.data;
        this.setState({response});
      });*/
    }

    getStreets () {
      // group members into the streets
      const streets = [];
      this.state.members.forEach((m) => {
  	    let street = streets.find(s => 
    	    s.name === m.street
  	    );
                            
 	      if(!street) {
    	    street = {
            name: m.street, members: []
          };
          streets.push(street);
        }
        street.members.push(m);
      });

      return streets;
    }

    render () {
      let i = this.state.members.length + 1000;
      const streets = this.getStreets();
        return (
          <React.Fragment>
          <MemberEdit
            member={this.state.tempmember}
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
        </React.Fragment>
        );
    }
}
  
export default Members;