// List.js

import React, { Component } from 'react';
import axios from 'axios';

export default class List extends Component {

    state = {
        users: []
    }

    deleteUserById = (id) => {
        if (id) {
            axios.delete(`http://localhost:3001/users/${id}`)
                .then(res => {
                    this.componentDidMount();
                })
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/users`)
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })    
    }

    render() {

        var listUser = this.state.users.map((item, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <button type="button" className="btn btn-primary small">
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