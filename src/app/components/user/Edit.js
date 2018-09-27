// Add.js

import React, { Component } from 'react';

import { axiosInstance } from '+/app/config'

export default class Add extends Component {

    state = {
        id: '',
        name: '',
        email: '',
        password: ''
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        axiosInstance.get(`/users/${id}`)
        .then(res => {
            let data = res.data;
            this.setState({
                id: data._id,
                name: data.name,
                email: data.email
            });
        }).catch((error) => {
            if(error.response.status === 401){
                this.props.history.push(`/`);
                alert(error.response.data.error)
            }
        });
    }

    goToList = () => {
        this.props.history.push('/users');
    }

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

        axiosInstance.put(`/users/${this.state.id}`, user)
            .then(res => {
                this.goToList();
            }).catch((error) => {
                if(error.response.status === 401){
                    this.props.history.push(`/`);
                    alert(error.response.data.error)
                }
            });
    }

    render() {

        return (
            <div className="up-component container">
                <form onSubmit={this.handleSubmit}>
                    <div className="col-md-12 row">
                        <div className="form-group col-md-6">
                            <label>Name</label>
                            <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange('name')} aria-describedby="nameHelp" placeholder="Enter name" />
                        </div>
                        <div className="form-group col-md-6">
                            <label>Email address</label>
                            <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange('email')} aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                    </div>

                    <div className="col-md-12 row">
                        <div className="form-group col-md-12">
                            <label>Password</label>
                            <input type="password" className="form-control" id="password" name="password" onChange={this.handleChange('password')}placeholder="Password" />
                        </div>
                    </div>

                    <div className="col-md-12 row">
                        <div className='col-md-6'> 
                            <button onClick={this.goToList} type="button" className="btn btn-primary">Voltar</button>
                        </div>
                        <div className='col-md-6 text-right'>
                            <button type="submit" className="btn btn-primary">Atualizar</button>
                        </div>
                    </div>

                </form>
            </div>
        );
    }


}