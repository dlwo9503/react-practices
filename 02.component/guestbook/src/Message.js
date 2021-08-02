import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import styles from './assets/scss/Guestbook__List__Item.scss';

export default function Message({ name, message }) {
    return (
        <li className={ styles.Guestbook__List__Item }>
            <strong>{ name }</strong>
            <p>
                { message && message.split('\n').map((line, index) => index > 0 ?
                    <Fragment key={index}>
                        <br/>
                        { line }
                    </Fragment> : line) }
            </p>
            <strong></strong>
            <a href=''>삭제</a>
        </li>
    );
}

Message.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}