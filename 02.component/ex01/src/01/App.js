import React, { Component } from 'react';
import FoodList from './FoodList';

export default class App extends Component {
    constructor(){
        super(...arguments);
        this.foods = [
            {name: 'Bread', quantity: 10},
            {name: 'Egg', quantity: 20},
            {name: 'Milk', quantity: 50},
            {name: 'Carrot', quantity: 100}
        ]
    }
    render() {
        return (
            <div id="App">
                <FoodList />
            </div>    
        );
    }
}