import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import axios from 'axios';
//import _ from 'lodash';

import { getStreets } from '../utils/memberutils'

class PrintOut extends Component {
    state = {};

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
                <Button onClick={this.handleButtonClick}>Print to PDF</Button> 
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
        const title = "Bury Park Masjid Membership Roll";
        const date = "May 2021";

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