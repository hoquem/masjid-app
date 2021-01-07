import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import jsPDF from 'jspdf'
import 'jspdf-autotable'

class PrintOut extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Button onClick={this.handleButtonClick}>Print to PDF</Button> 
            </React.Fragment>
        );
    }

    handleButtonClick = (e) => {
    /*    const lineHeight = 8;
        const leftMargin = 20;
        const pageHeight = lineHeight * 20;

        const doc = new jsPDF();
        doc.setFontSize(10);

        doc.text(leftMargin, 20, 'Questions');
        doc.text(leftMargin, 30, "This belongs to: Mahmudul Hoque");

        for(let i = 1; i <= 12; i++) {
            doc.text(leftMargin, 30 + (i * 10), i + ' x ' + 10 + ' = ___');
        }

        doc.addPage();
        doc.setFontSize(10);
        doc.text(20, 20, 'Answers');

        for(let i = 1; i <= 12; i ++) {
            doc.text(leftMargin, 30 + (i * 10), i + ' x ' + 10 + ' = ' + (i * 10));
        }
        doc.save('Test.pdf');*/

        const doc = new jsPDF();

        doc.autoTable({
            //head: [['Name', 'Email', 'Country']],
            body: [
              ['David', 'david@example.com', 'Sweden'],
              ['Castille', 'castille@example.com', 'Spain'],
              // ...
            ],
          })
          
          doc.save('table.pdf')

    }
}

export default PrintOut;