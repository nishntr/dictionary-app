import React, { Component, createRef, useState } from 'react';
import axios from 'axios';
import Input from "./components/input";
import NavBar from "./components/navbar";
import TabComponent from "./components/tabs";
import AccordTab from './components/accordian';


import Button from "react-bootstrap/Button";
import Paper from '@material-ui/core/Paper';

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


import 'bootstrap/dist/css/bootstrap.css';
import './app.css';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

class App extends Component {
  constructor(props) {
    super(props);
    this.input = createRef();
  }
  state = {
    word: '',
    output: null,
    error: null,
    key: 1,
  }

  render() {
    return (
      <React.Fragment>
        <NavBar />

        <div className="container" id="input" >
          <Input ref={this.input} 
              submit={this.onSubmit} />

        </div>

        <div id='item'>
          <Paper id="paper" >
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

          <div >
            <Tabs defaultActiveKey={1} activeKey={this.state.key} variant="pills" fill
              onSelect={(k) => { this.setState({ key: k }) }}
              id="controlled-tab-example" >

              <Tab eventKey={1} title="Meanings">
                <ul>
                  {out.map((o) => {
                    if (o[1] !== '') {
                      return <li key={o[0]}>{o[0]}.<AccordTab message={o[1]} /></li>;
                    }
                    else {
                      return <li key={o[0]}>{o[0]}.</li>
                    }
                  }
                  )}
                </ul>
              </Tab>
              <Tab eventKey={2} title="Synonyms">

                <ul>
                  {out.map((o, i) => {
                    if (o[2].length > 0) {
                      return <li>{o[2].map((s) => {
                        return <span><Button size='sm' onClick={this.onSynSubmit.bind(this, s)} style={{ textDecoration: "none" }} variant="link">{s}</Button> </span>;
                      })}</li>;


                    }
                    else {
                      return;
                    }

                  })}
                </ul>
              </Tab>

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



  onSubmit = (w) => {
    this.input.current.handleLoading(true);
    this.setState({ word: w });
    axios
      .post('/api', { data: w })
      .then((res) => this.updateRes(res.data));
  }

  onSynSubmit = (s) => {
    this.input.current.handleUpdate(s);
    this.input.current.handleLoading(true);
    this.setState({ word: s });
    axios
      .post('/api', { data: s })
      .then((res) => this.updateRes(res.data));
  }

  updateRes = (data) => {
    if ('error' in data === false) {
      this.setState({
        output: data['output'],
        key: 1,
        error: null,
      })
    }
    else {
      console.log(data['error']);
      this.setState({
        meanings: null,
        examples: null,
        error: data['error'],
      })
    }
    this.input.current.handleLoading(false);

  }
}

export default App;
