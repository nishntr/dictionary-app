import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import Input from "./components/input";
import { Row, Col } from "react-bootstrap";
import Paper from '@material-ui/core/Paper';
import NavBar from './components/navbar';
import Alert from 'react-bootstrap/Alert';

class App extends Component {

  state = {
    word: '',
    meanings: null,
    examples: null,
    error: null
  }


  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="container-fluid " style={{
          position: 'absolute', left: '50%', top: '40%',
          transform: 'translate(-50%, -50%)',
          width: '100%', height: '50%'
        }}>
          <Row style={{ backgroundColor: 'aliceblue' }}>
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
        </div>
      </React.Fragment>

    );
  }

  listItems = () => {
    if (this.state.error == null) {
      var meanings = this.state.meanings;
      // var examples = this.state.examples;
      if (meanings != null) {
        return (
          <Alert transition>
            <div>
            <label className='p-3'><b>Meanings</b></label>
            <ul>
              {meanings.map((m) =>
                <li key={m}>{m}</li>)}
            </ul>
          </div>
          </Alert>

        );
      }
      else {
        return (null);
      }
    }
    else {
      return (<p>{this.state.error}</p>);
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
        meanings: data['meanings'],
        examples: data['examples'],
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
