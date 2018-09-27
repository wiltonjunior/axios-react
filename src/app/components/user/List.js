// List.js

import React, { Component } from 'react';

import { axiosInstance } from '+/app/config'

export default class List extends Component {

    state = {
        users: []
    }

    deleteUserById = (id) => {
        if (id) {
            axiosInstance.delete(`/users/${id}`)
                .then(res => {
                    this.componentDidMount();
                }).catch((error) => {
                    if(error.response.status === 401){
                        this.props.history.push(`/`);
                        alert(error.response.data.error)
                    }
                });
        }
    }

    goToEdit = (id) => {
        this.props.history.push(`/users/${id}`);
    }

    componentDidMount() {
        axiosInstance.get(`/users`)
            .then(res => {
                console.log(res.status)
                const users = res.data;
                this.setState({ users });
            }).catch((error) => {
                if(error.response.status === 401){
                    this.props.history.push(`/`);
                    alert(error.response.data.error)
                }
            });
    }

    render() {

        var listUser = this.state.users.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <button onClick={()=> this.goToEdit(item._id)} type="button" className="btn btn-primary small">
                            {/* <span  className="glyphicon glyphicon-pencil"></span> */}
                            Editar
                        </button>
                        <button onClick={()=> this.deleteUserById(item._id) } type="button" className="btn btn-danger small">
                            {/* <span class="glyphicon">&#xe020;</span> */}
                            Deletar
                        </button>
                    </td>
                </tr>
            );
        });


        return (
            <div className="up-component listComponet">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col-md-1">#</th>
                            <th scope="col-md-3">Nome</th>
                            <th scope="col-md-4">Email</th>
                            <th scope="col-md-4">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUser}
                    </tbody>
                </table>
            </div>
        );
    }
}