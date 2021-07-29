import React from 'react';
import Message from './Message';
import styles from './assets/css/Guestbook__List.css';

export default function MessageList({ messages }) {
    return (
        <ul className={ styles.Guestbook__List }>
            {  messages.map(message => <Message key={ message.no }
                                                name={ message.name }
                                                message={message.message}/>) }
        </ul>

        
    );
}