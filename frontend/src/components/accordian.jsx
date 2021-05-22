import React, { Component } from 'react';


import Accordion from 'react-bootstrap/Accordion';

import 'bootstrap/dist/css/bootstrap.css';

class AccordTab extends Component {
    render() {
        return (
            <Accordion >

                <Accordion.Toggle as="a" variant="text" eventKey="0">
                    <div style={{color:'darkBlue',cursor:'pointer',width:'fit-content'}}>See Example</div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <p style={{color:'gray'}}>{this.props.message}</p>
                </Accordion.Collapse>
            </Accordion>
        );
    }
}

export default AccordTab;