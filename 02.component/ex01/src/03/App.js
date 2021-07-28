import React, { Component } from 'react';
import FoodList from './FoodList';
export default function App() {
    const foods = [
        { no: 1, name: 'Bread', quantity: '10' },
        { no: 2, name: 'Egg', quantity: '50' },
        { no: 3, name: 'Milk', quantity: '30' },
        { no: 4, name: 'Carrot', quantity: '20' }
    ]
    return (
        <div id='App'>
            <FoodList foods={ foods } />
        </div>
    );
}