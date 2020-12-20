import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class MemberEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      membername: "",
      memberhouse: "",
      memberstreet: ""
      
    }
  }

  handleSave = (e) => {
    const membername = this.state.membername ? this.state.membername : this.props.member.name;
    const memberhouse = this.state.memberhouse ? this.state.memberhouse : this.props.member.house;
    const memberstreet = this.state.memberstreet ? this.state.memberstreet : this.props.member.street;
    const member = {
      name: membername,
      house: memberhouse,
      street: memberstreet
    }
    this.props.onSave(member);
  }
  
  handleCancel = () => {
    const member = {
      name: this.state.membername,
      house: this.state.memberhouse,
      street: this.state.memberstreet
    }
    this.props.onCancel(member);
  }

  render() {
    console.log("Member Edit - RENDER");
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Member details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="membername">Member name</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="First name second name last name"
          aria-label="Membername"
          aria-describedby="membername"
          onChange={e => this.setState({ membername: e.target.value })}
          defaultValue={this.props.member.name}
        />
      </InputGroup>
      <br/>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="house">House</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="House number or name"
          aria-label="House #"
          aria-describedby="house"
          onChange={e => this.setState({ memberhouse: e.target.value })}
          defaultValue={this.props.member.house}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
        <InputGroup.Text id="street">Street</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Street name"
          aria-label="Street"
          aria-describedby="street"
          onChange={e => this.setState({ memberstreet: e.target.value })}
          defaultValue={this.props.member.street}
        />
      </InputGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleCancel}>Cancel</Button>
        <Button variant="primary" onClick={this.handleSave}>Save</Button>
      </Modal.Footer>
    </Modal>
  );}
}

export default MemberEdit;