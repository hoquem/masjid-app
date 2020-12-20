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
    isAddNewMember: false,
    members: [
      {_id: "12", memberId: "1", name: "name 1", house: "1", street:"street 1"},
      {_id: "22", memberId: "2", name: "name 1", house: "1", street:"street 1"},
      {_id: "33", memberId: "3", name: "name 1", house: "1A", street:"street 1"},
      {_id: "44", memberId: "4", name: "name 1", house: "100", street:"street 2"},
      {_id: "55", memberId: "5", name: "name 1", house: "1B", street:"street 2"},
      {_id: "66", memberId: "6", name: "name 1", house: "1", street:"street 2"},
      {_id: "77", memberId: "7", name: "name 1", house: "2", street:"street 2"},
      {_id: "86", memberId: "8", name: "name 1", house: "9", street:"street 3"},
      {_id: "94", memberId: "9", name: "name 1", house: "1B", street:"street 3"},
      {_id: "106", memberId: "10", name: "name 1", house: "10", street:"street 3"},
      {_id: "114", memberId: "11", name: "name 1", house: "11", street:"street 3"},
      {_id: "122", memberId: "12", name: "name 1", house: "23", street:"street 3"},
    ]
  };

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
      if (m.name && m.name.length > 0 &&
        m.house && m.house.length > 0 &&
        m.street && m.street.length > 0) {
          m._id = this.state.members.length + 1;
          m.house = m.house.toUpperCase();
          const newmembers = [...this.state.members, m];
          this.setState({members: newmembers})
        }
      
    } else {
      console.log("update existing member" + m);
    }
    this.hideMemberEditDialog();
  }

  removeMember = (m) => {
    console.log("Members - addNewMember");
    const index = this.state.members.findIndex(function(o){
      return o._id === m._id;
    });

    if (index !== -1) this.state.members.splice(index, 1);

    this.setState({members: this.members}); 
  }

  addNewMember = (street) => {
    console.log("Members - addNewMember");
    this.setState({ 
        tempmember: {name: "", house: "", street: street.name},
        isAddNewMember: true
      }, this.showMemberEditDialog);
  }

  updateMember = (m) => {
    console.log("Members - updateMember");
    this.setState({ 
        tempmember: m,
        isAddNewMember: false
      }, this.showMemberEditDialog);
  }


    componentDidMount() {
      /*axios.get('/api/v1/say-something').then((res) => {
        const response = res.data;
        this.setState({response});
      });*/
    }

    getStreets () {
      console.log("getStreets");
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

      // sort the houses
      streets.forEach((street) => {
        street.members.sort((a, b) => {
          var x = a.house;
          var y = b.house;
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
          clone.memberId = id++;
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
        return (
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
        </React.Fragment>
        );
    }
}
  
export default Members;