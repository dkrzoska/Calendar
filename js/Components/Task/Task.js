import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './task.scss'

function Task({ closeTask, fetchaddTask, fetcheditTask, currentmonth, currentday, currentyear, currenttitle, currentdescription, currenthour, currentminute, modify, id }) {
    const [year, setYear] = useState(currentyear);
    const [month, setMonth] = useState(currentmonth);
    const [day, setDay] = useState(currentday);
    const [hour, setHour] = useState(currenthour);
    const [minute, setMinute] = useState(currentminute);
    const [title, setTitle] = useState(currenttitle);
    const [description, setDescription] = useState(currentdescription);

    let begin = moment().set("year", year).startOf('year');
    let months = [];

    for (let i = 0; i < 11; i++) {
        i === 0 && months.push(begin.format("MMMM"));
        months.push(begin.add(1, 'M').format("MMMM"));
    }

    let days = [];
    for (let day = 1; day < begin.set('month', month).daysInMonth() + 1; day++) {
        // days.push(day);
        days.push(moment(moment().set('date', day)).format("DD"));
    }

    let hours = [];
    for (let hour = 0; hour < 24; hour++) {
        hours.push(moment(moment().set('hour', hour)).format('HH'));
    }

    let minutes = [];
    for (let minute = 0; minute <= 60; minute++) {
        minutes.push(moment(moment().set('minute', minute)).format('mm'));
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

    const handleSetHour = ev => {
        setHour(ev.target.value);
    }

    const handleSetMinute = ev => {
        setMinute(ev.target.value);
    }

    const handleSetTitle = ev => {
        setTitle(ev.target.value);
    }

    const handleSetDescription = ev => {
        setDescription(ev.target.value);
    }

    const addTask = (ev) => {
        ev.preventDefault();
        const newtask = {
            "date": year + '-' + moment(moment().set('month', month)).format("MM") + '-' + moment(moment().set('date', day)).format("DD"),
            "time": moment(moment().set('hour', hour)).format('HH') + ':' + moment(moment().set('minute', minute)).format('mm'),
            "title": title,
            "description": description
        }
        fetchaddTask(newtask);
        closeTask(ev);
    }

    const submitEditTask = (ev, id) => {
        ev.preventDefault();
        const newtask = {
            "date": year + '-' + moment(moment().set('month', month)).format("MM") + '-' + moment(moment().set('date', day)).format("DD"),
            "time": moment(moment().set('hour', hour)).format('HH') + ':' + moment(moment().set('minute', minute)).format('mm'),
            "title": title,
            "description": description
        }
        console.log(id);
        fetcheditTask(newtask, id);
        closeTask(ev);
    }

    return (
        <div className="task">
            <div className='task__form'>
                {/* <form onSubmit={ev => addTask(ev)}> */}
                <form>
                    <p className="task__title"><strong>New Task</strong></p>
                    <label><strong>Title</strong></label>
                    <input defaultValue={currenttitle} onChange={handleSetTitle} type='text' placeholder='Title' name="title" />
                    <label><strong>Description</strong></label>
                    <textarea rows={5}  defaultValue={currentdescription} onChange={handleSetDescription} placeholder='Description' name='description' />
                    <label><strong>Date</strong></label>
                    <div>
                        <select onChange={handleSetYear} value={year}>
                            {/* <option selected='selected' value='year'>Year</option> */}
                            <option value='2022'>2022</option>
                            <option value='2021'>2021</option>
                            <option value='2020'>2020</option>
                            <option value='2019'>2019</option>
                            <option value='2018'>2018</option>
                        </select>
                        <select onChange={handleSetMonth} value={month}>
                            {/* <option selected='selected' value='month'>Month</option> */}
                            {months.map((el, i) => <option key={i} value={i}>{el}</option>)}
                        </select>
                        <select onChange={handleSetDay} value={day}>
                            {/* <option selected='selected' value='day'>Day</option> */}
                            {days.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                        <strong>Time:</strong>
                        <select onChange={handleSetHour} value={hour}>
                            {/* <option selected='selected' value='day'>Day</option> */}
                            {hours.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                        <select onChange={handleSetMinute} value={minute}>
                            {/* <option selected='selected' value='day'>Day</option> */}
                            {minutes.map((el, i) => <option key={i} value={el}>{el}</option>)}
                        </select>
                    </div>
                    <div className="buttons">
                        {/* <button type='submit'>Add</button> */}
                        <button type='button' onClick={ev => addTask(ev)}>Add</button>
                        {modify && <button type='button' onClick={(ev) => submitEditTask(ev, id)}>Modify</button>}
                        <button type='button' onClick={ev => closeTask(ev)}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Task
