import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Input from "./components/input";
import NavBar from "./components/navbar";
import TabComponent from "./components/tabs";

import { Row, Col } from "react-bootstrap";
import Paper from '@material-ui/core/Paper';
import Alert from "react-bootstrap/Alert";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import AccordTab from './components/accordian';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {

  state = {
    word: '',
    output: null,
    error: null
  }


  render() {
    return (
      <React.Fragment>
        <NavBar />
        {/* <div className="container-fluid " style={{
          position: 'absolute', left: '50%', top: '40%',
          transform: 'translate(-50%, -50%)',
          width: '100%', height: '50%', 
        }}>
          <Row style={{ backgroundColor: '' }}>
            <Col className='col-lg-4 col-12 ' >
              <Input
                change={this.handleChange}
                submit={this.onSubmit} />
            </Col>
            <Col className='col-lg-6 col-xs-12  p-1' >
              <Paper style={{ height: '100%', width: '100%' }}>
                {this.listItems()}
              </Paper>
            </Col>

          </Row>
        </div> */}
        <div className="container" style={{
          display: 'flexbox', justifyContent: 'center', alignItems: 'center',
          width: '70%',
        }}>

          <Input
            change={this.handleChange}
            submit={this.onSubmit} />

        </div>

        <div>

          <Paper style={{ height: '100%', width: '100%' }}>
            {this.listItems()}
          </Paper>

        </div>

      </React.Fragment>

    );
  }

  listItems = () => {
    if (this.state.error == null) {
      var out = this.state.output;
      if (out != null) {
        return (
          
          <div>
            <Tabs className="myClass" id="controlled-tab-example" >

              <Tab eventKey={1} title="Meanings">
                <ul>
                  {out.map((o) => {
                    if (o[1] !== '') {
                      return <li key={o[0]}>{o[0]}.<AccordTab message={o[1]}/></li>;
                    }
                    else {
                      return <li key={o[0]}>{o[0]}.</li>
                    }
                  }
                  )}
                </ul>
              </Tab>
              <Tab eventKey={2} title="Antonyms">Tab 2 content</Tab>
              <Tab eventKey={3} title="Synonyms" disabled>Tab 3 content</Tab>

            </Tabs>

          </div>

        );
      }
      else {
        return (null);
      }
    }
    else {
      return (
        <p style={{ color: 'red', fontWeight: 'bold' }} className='p-3'>{this.state.error}</p>);
    }
  }


  handleChange = (e) => {
    this.state.word = e.target.value;
  }

  onSubmit = () => {
    console.log('pressed');
    axios
      .post('/api', { data: this.state.word })
      .then((res) => this.updateRes(res.data));
  }

  updateRes = (data) => {
    if ('error' in data === false) {
      this.setState({
        output: data['output'],
        error: null
      })
    }
    else {
      console.log(data['error']);
      this.setState({
        meanings: null,
        examples: null,
        error: data['error']
      })
    }
  }
}

export default App;
