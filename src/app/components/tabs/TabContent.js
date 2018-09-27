// TabContent.js

import React, { Component } from 'react';
import TabList from './TabList';
import List from './../user/List';
import Add from './../user/Add';

export default class TabContent extends Component {
    render() {
        return (
            <div className="container up">
                <TabList>
                    <div label="Lista de Usuários" className="tab-content">
                        <List {...this.props}/>
                    </div>
                    <div label="Adicionar Usuário" className="tab-content">
                        <Add {...this.props}/>
                    </div>
                </TabList>
            </div>
        );
    }
}