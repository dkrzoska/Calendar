import React, { useState } from 'react';
import moment from 'moment';
import './task.css'

function Task({ closeTask }) {
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    let begin = moment().set("year", year).startOf('year');
    let months = [];

    // props.closeTask();
    // console.log(closeTask);

    for (let i = 0; i < 11; i++) {
        i === 0 && months.push(begin.format("MMMM"));
        months.push(begin.add(1, 'M').format("MMMM"));
    }

    let days = [];
    for (let day = 1; day < begin.set('month', month).daysInMonth() + 1; day++) {
        days.push(day);
    }

    const handleSetYear = ev => {
        setYear(ev.target.value);
    }

    const handleSetMonth = ev => {
        setMonth(ev.target.value);
    }

    const handleSetDay = ev => {
        setDay(ev.target.value);
    }

    const handleSetTitle = ev => {
        setTitle(ev.target.value);
    }

    const handleSetDescription = ev => {
        setDescription(ev.target.value);
    }

    return (
        <div className="task">
            <div className='task__form'>
                <form onSubmit={(e) => closeTask(e)}>
                    <p className="task__title"><strong>New Task</strong></p>
                    <label><strong>Title</strong></label>
                    <input onChange={handleSetTitle} type='text' placeholder='Title' name="title" />
                    <label><strong>Description</strong></label>
                    <textarea rows={5} onChange={handleSetDescription} placeholder='Description' name='description' />
                    <label><strong>Date</strong></label>
                    <div>
                        <select onChange={handleSetYear}>
                            {/* <option selected='selected' value='year'>Year</option> */}
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                            <option value='2018'>2018</option>
                        </select>
                        <select onChange={handleSetMonth}>
                            {/* <option selected='selected' value='month'>Month</option> */}
                            {months.map((el, i) => <option value={i}>{el}</option>)}
                        </select>
                        <select onChange={handleSetDay}>
                            {/* <option selected='selected' value='day'>Day</option> */}
                            {days.map(el => <option value={el}>{el}</option>)}
                        </select>
                    </div>
                    <button type='submit'>Dodaj</button>
                </form>
            </div>
        </div>
    )
}

export default Task
