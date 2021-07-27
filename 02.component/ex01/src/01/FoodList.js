import React, { Component } from 'react';
import ListItem from './ListItem';

export default class extends Component {
    render(){
        return (
            <ul>
                <ListItem />
                <ListItem />
                <ListItem />
            </ul> 
        );
    }
}