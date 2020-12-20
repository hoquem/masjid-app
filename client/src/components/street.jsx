import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Member from './member';

class Street extends Component {

    handleAddButtonClick = (e) => {
        this.props.addMember(this.props.street);
    }

    handleMemberEdit = (m) => {
        console.log("Street - handleMemberUpdate");
        this.props.updateMember(m);
    }

    handleMemberRemove = (m) => {
        console.log("Street - handleMemberRemove");
        this.props.removeMember(m);
    }

    render () {
        return (
            <React.Fragment> 
            <tr className="border-bottom border-success font-weight-bold">
                <td colSpan="3">{this.props.street.name + '  '}
                </td>
                <td>
                    <Button variant="outline-warning" onClick={this.handleAddButtonClick}>+</Button>
                </td>
            </tr>
            {this.props.street.members.map((member) => {
                return (
                    <Member 
                        key={member.memberId} 
                        member={member} 
                        handleMemberEdit={this.handleMemberEdit}
                        handleMemberRemove={this.handleMemberRemove}
                    />
                );
            })}

            <tr><td></td><td></td><td></td></tr>
            <tr><td colSpan="3"></td></tr>

            </React.Fragment> 
        );
    }
}
  
export default Street;