import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import axios from 'axios';
//import _ from 'lodash';

import { getStreets } from '../utils/memberutils'

class PrintOut extends Component {
    state = {
      title: "Bury Park Masjid Membership Roll",
      date: new Date().getFullYear()
    };

    static lineHeight = 8;
    static leftMargin = 20;
    static pageHeight = PrintOut.lineHeight * 20;

    async componentDidMount() {
        try {
            const res = await axios.get('/members');
            this.setState({members: res.data});
          } catch (error) {
            console.error(error);
          }
    }

    render() { 
        return ( 
            <React.Fragment>
            <br/>
            <Container>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control placeholder="Enter title of the report" 
                  onChange={e => this.setState({ title: e.target.value })}
                  defaultValue={this.state.title}
                />
              </Form.Group>

            <Form.Group controlId="formDate">
              <Form.Label>Date</Form.Label>
                <Form.Control placeholder="Date" 
                  onChange={e => this.setState({ date: e.target.value })}
                  defaultValue={this.state.date}  
                />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.handleButtonClick}>
              Print to PDF
            </Button>
          </Container>
          </React.Fragment>
        );
    }


    memberToStringArray = (member) => {
        const retval = [];
        retval.push(member.memberId);
        retval.push(member.Firstname, + " " + member.Lastname);
        retval.push(member.HouseNo + " " + member.Street);
        return retval;
    }

    /**
    * @param {jsPDF} doc 
    * @param {Object} streets 
    * @param {string} streets.name 
    */
    printTitleAndSubTitle = (doc, streets) => {
        const title = this.state.title.toString();
        const date = this.state.date.toString();

        let activeFontSize = doc.getFontSize();
        let lineHeightFactor = doc.getLineHeightFactor();
        let linepos = 20;

        doc.setFontSize(30);
        doc.text(title, 100, linepos, {align: "center"});
        linepos += activeFontSize + lineHeightFactor
        doc.setFontSize(15);
        doc.text(date, 100, linepos, {align: "center"});

        return doc;
    }

    /**
    * @param {jsPDF} doc 
    * @param {Object} street 
    * @param {string} streets.name 
    */
    printStreet = (doc, street, startY) => {
        doc.setFontSize(10);
        
        const header = street.name; 

        const body = [];
        street.members.forEach((m) => {
          const row = [];
          row[0] = m.MemberId;
          row[1] = m.Firstname + " " + m.Lastname;
          row[2] = m.HouseNo + " " + m.Street;

          body.push(row);
        });

        if (startY) {
          doc.autoTable({
              startY: 60,
              head: [
                [
                  {
                    content: header,
                    colSpan: 3,
                    styles: { halign: 'center', fillColor: [22, 160, 133] },
                  },
                ],
              ],
              body: body,
              theme: 'grid',
            });
          } else {
            doc.autoTable({
              head: [
                [
                  {
                    content: header,
                    colSpan: 3,
                    styles: { halign: 'center', fillColor: [22, 160, 133] },
                  },
                ],
              ],
              body: body,
              theme: 'grid',
            });
          }

          return doc 
    }

    handleButtonClick = (e) => {
        const streets = getStreets(this.state.members, "");

        const doc = new jsPDF();
        this.printTitleAndSubTitle(doc);

        let first_iteration = true;
        streets.forEach((s) => {
          if (first_iteration) {
            this.printStreet(doc, s, 30);
            first_iteration = false;
          } else {
            this.printStreet(doc, s);
          }
        });
          
        doc.save('bpjm-members.pdf')

    }
}

export default PrintOut;