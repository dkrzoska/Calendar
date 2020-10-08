import React, { useState, useEffect } from 'react';
import './tasks.scss';
import moment from 'moment';
import SingleTask from '../SingleTask/SingleTask';

function Tasks({ newTask, fetchdeleteTask, editTask, thisdate, tasks }) {

    if (!tasks) {
        return 'Loading...';
    }

    return (
        <div className="tasks">
            <div className="tasks__addtask">
                <strong>{thisdate}</strong>
                <button onClick={ev => newTask(ev)}>Dodaj zadanie</button>
            </div>
            <div className="tasks__main">
                {tasks.filter(el => el.date === thisdate).map((el, i) => <SingleTask fetchdeleteTask={fetchdeleteTask} editTask={editTask} key={i} {...el} />)}
            </div>
        </div>
    )
}

export default Tasks
