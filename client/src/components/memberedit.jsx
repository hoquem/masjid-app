import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class MemberEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      membername: props.member.name,
      memberhouse: props.member.house,
      memberstreet: props.member.street
    }
  }

  handleSave = (e) => {
    console.log("MemberEdit - handleSave");
    this.props.member.name = this.state.membername;
    this.props.member.house = this.state.memberhouse;
    this.props.member.street = this.state.memberstreet
    this.props.onSave(this.props.member);
  }
  
  handleCancel = () => {
    console.log("MemberEdit - handleSave");
    this.props.member.name = this.state.membername;
    this.props.member.house = this.state.memberhouse;
    this.props.member.street = this.state.memberstreet
    this.props.onCancel(this.props.member);
  }

  render() {
  return (
    <Modal
      {...this.props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
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
          value={this.state.membername}
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
          value={this.state.memberhouse}
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
          value={this.state.memberstreet}
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