import React, { Component } from "react";
import './input.css';
export default class Input extends Component {
    render() {
        

        return (
            <div >
                <div className=" p-3">
                    <input type="text"  onChange={this.props.change} className="p-3" placeholder="Enter word..." />
                </div>
                <div className=" " style={{textAlign:"center"}}>
                    <button onClick={this.props.submit} className="btn btn-primary  ">Search</button>

                </div>
            </div>

        );
    }
}