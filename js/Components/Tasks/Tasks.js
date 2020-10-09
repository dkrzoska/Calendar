import React, { useState, useEffect } from 'react';
import './tasks.scss';
import moment from 'moment';
import SingleTask from '../SingleTask/SingleTask';

function Tasks({ newTask, fetchdeleteTask, editTask, thisdate, tasks, showtasks }) {

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
                {showtasks === false && tasks.sort((el1, el2) => {
                    // console.log(moment().set('month',moment(`${el1.date}T${el1.time}`).format('M')).format('MMMM'));
                    return moment(`${el1.date}T${el1.time}`).format('YYYYMMDDHHmm') - moment(`${el2.date}T${el2.time}`).format('YYYYMMDDHHmm')
                }).map((el, i) => <SingleTask fetchdeleteTask={fetchdeleteTask} editTask={editTask} key={i} {...el} />)}
                {showtasks === true && tasks.filter(el => el.date === thisdate).map((el, i) => <SingleTask fetchdeleteTask={fetchdeleteTask} editTask={editTask} key={i} {...el} />)}
            </div>
        </div>
    )
}

export default Tasks
