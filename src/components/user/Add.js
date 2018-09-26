// List.js

import React, { Component } from 'react';
import axios from 'axios';

import '../../App.css';

export default class Add extends Component {

    state = {
        user: '',
        email: '',
        password: ''
    }

    // handleUser = event => {
    //     this.setState({ name: event.target.value });
    // }

    handleChange(field) {
        return (event) => {
            this.setState({ [field]: event.target.value });
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        };

        console.log(user);

        axios.post(`http://localhost:3001/users`, user)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        return (
            <div className="up-component">
                <form onSubmit={this.handleSubmit}>
                    <div className="col-md-12 row">
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input type="text" className="form-control" id="name" name="name" onChange={this.handleChange('name')} aria-describedby="nameHelp" placeholder="Enter name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email" name="email" onChange={this.handleChange('email')} aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>

                    <div className="col-md-12 row">
                        <div className="form-group col-md-12">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange('password')}placeholder="Password" />
                        </div>
                    </div>

                    <div className="col-md-12 text-right">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>

                </form>
            </div>
        );
    }


}