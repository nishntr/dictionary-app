import React, { Component } from "react";

export default class Input extends Component {
    render() {
        return (

            <div >
                <div className="form-group p-3">
                    <input type="text" onChange={this.props.change} className="form-control p-3" placeholder="Enter word..." />
                </div>
                <div className=" p-3">
                <button onClick={this.props.submit} className="btn btn-primary btn-block ">Search</button>

                </div>
            </div>

        );
    }
}