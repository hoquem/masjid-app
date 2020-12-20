import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

class Member extends Component {
    
    handleEditButtonClick = (e) => {
        console.log("edit button clicked - " + this.props.member.memberId); 
        this.props.handleMemberEdit(this.props.member);
    }

    handleRemoveButtonClick = (e) => {
        console.log("remove button clicked - " + this.props.member.memberId); 
        this.props.handleMemberRemove(this.props.member);
    }

    render () {
        const address = this.props.member.house + " " + this.props.member.street;
        return (
            <tr className="border-bottom">
                <td>{this.props.member.memberId}</td>
                <td>{this.props.member.name}</td>
                <td>{address}</td>
                <td><ButtonGroup size="sm">
                        <Button variant="outline-danger" onClick={this.handleRemoveButtonClick}>r</Button>
                        <Button variant="outline-warning" onClick={this.handleEditButtonClick}>e</Button>
                    </ButtonGroup>
                </td>
            </tr>
        );
    }
}
  
export default Member;