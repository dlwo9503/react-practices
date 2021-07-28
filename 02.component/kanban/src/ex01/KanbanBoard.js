import React, { Fragment } from 'react';
import CardList from './CardList';
import cards from './data.json'; // json은 그냥 import 가능

export default function KanbanBoard(){
    
    const cardList = {
        ToDo: [],
        Doing: [],
        Done: []
    };

    cards.forEach(function(card){
        cardList[card.status].push(card);
    })
    return (
        <div className={'KanbanBoard'}>
            <CardList key='ToDo' title={'ToDo'} cards={cards.filter(card => card.status=='ToDo')}/>
            <CardList key='Doing' title={'Doing'} ccards={cards.filter(card => card.status=='Doing')}/>
            <CardList key='Done' title={'Done'} cards={cards.filter(card => card.status=='Done')}/>
        </div>
    );
}