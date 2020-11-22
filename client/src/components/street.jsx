import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Member from './member';

class Street extends Component {

    handleAddButtonClick = (e) => {
        this.props.addMember({_id: "111"});
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
                    <Member key={member.memberId} member={member} />
                );
            })}

            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td colSpan="3"></td></tr>

            </React.Fragment> 
        );
    }
}
  
export default Street;