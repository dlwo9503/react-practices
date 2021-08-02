import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';
import styles from '../assets/css/TaskList.css';

export default function TaskList({tasks}) {
    return (
        <div className={ styles.TaskList }>
            <ul>
                {tasks.map(task => <Task key={task.no} name={task.name}/>)}
            </ul>
        </div>
    );
}

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.object).isRequired
}