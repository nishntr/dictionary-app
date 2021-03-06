import React, { Component } from "react";
import Spinner from 'react-bootstrap/Spinner';

import './input.css';
export default class Input extends Component {

    state = {
        word: '',
        isLoading: false
    }

    render() {

        return (
            <div >
                <div className=" p-3">
                    <input type="text" value={this.state.word} onKeyPress={this.handleKeyPress}
                        onChange={this.handleChange} className="p-3" placeholder="Enter word..." />
                </div>
                <div style={{ textAlign: "center",paddingTop:"14px" }}>
                    {!this.state.isLoading ? (<button className="button" onClick={this.onSubmit} ref={node => (this.btn = node)} >Search</button>
                    )
                        :   (<Spinner animation="grow" variant="success" />
                        )}

                </div>
            </div>

        );
    }

    handleChange = (e) => {
        this.setState({ word: e.target.value });
    }

    handleUpdate = (s) =>{
        this.setState({word:s});
    }
    handleLoading = (s) =>{
        this.setState({isLoading:s});
    }
    
    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.btn.click();


        }
    }
    onSubmit = () =>{
        if (this.state.word===''){

        }
        else{
            this.props.submit(this.state.word);
        }
    }
}