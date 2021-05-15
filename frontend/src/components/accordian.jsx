import React, { Component } from 'react';


import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.css';

class AccordTab extends Component {
    render() {
        return (
            <Accordion >


                <Accordion.Toggle as={Button} variant="text" eventKey="0">
                    <p style={{color:'darkBlue'}}>See Example</p>
                        </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <p style={{color:'gray'}}>{this.props.message}</p>
                </Accordion.Collapse>
            </Accordion>
        );
    }
}

export default AccordTab;