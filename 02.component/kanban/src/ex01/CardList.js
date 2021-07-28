import React from 'react';
// import TaskList from './TaskList';

export default function CardList({title, cards}){
    console.log(title, cards);
    return (
        <div className={'CardList'}>
            <h1>{title}</h1>
        </div>
    );
}