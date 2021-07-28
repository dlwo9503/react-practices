import React from 'react';
import styles from'../public/styles.css';

export default function GuestbookList({name, message, regDate}){
    return (
        <li class={styles.Guestbook__List__Item}>
            <strong>{name}</strong>
            <p>
                {message}
            </p>
            <strong>{regDate}</strong>
            <a href=''>삭제</a>
        </li>
    );
}