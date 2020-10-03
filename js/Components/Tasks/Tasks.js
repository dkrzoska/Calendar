import React, { useState, useEffect } from 'react';
import './tasks.css';
import moment from 'moment';
import SingleTask from '../SingleTask/SingleTask';

function Tasks({ newTask, fetchdeleteTask, editTask, thisdate, tasks }) {

    if (!tasks) {
        return 'Loading...';
    }

    return (
        <div>
            <p>{thisdate}</p>
            <button onClick={ev => newTask(ev)}>Dodaj zadanie</button>
            <div  className = "maintasks">
                {tasks.filter(el => el.date === thisdate).map((el, i) => <SingleTask fetchdeleteTask = {fetchdeleteTask} editTask={editTask} key = {i} {...el}/>)}
            </div>
        </div>
    )
}

export default Tasks
