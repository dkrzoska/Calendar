import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import './application.css';
import moment from "moment";
import {getTasks} from '../../api/task/fetchTask';
import Month from "../Month/Month";
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import Task from '../Task/Task';
import Login from '../Login/Login';

function Application() {
    const [year, setYear] = useState("2020");
    const [newtask, showNewTask] = useState(false);
    const [showtasks, setShowTasks] = useState(false);
    const [login, showLogin] = useState(false);
    const [currentday, setCurrentDay] = useState(1);
    const [currentmonth, setCurrentMonth] = useState(0);
    const [currenttitle, setCurrentTitle] = useState();
    const [currentdescription, setCurrentDescription] = useState();
    const [currentId, setCurrentId] = useState('');
    const [tasks, setTasks] = useState([]);
    const [modify, showModify] = useState(false);

    let thisyear = year;
    let thismonth = moment(moment().set('month', currentmonth)).format("MM");
    let thisday = moment(moment().set('date', currentday)).format("DD");
    let thisdate = `${thisyear}-${thismonth}-${thisday}`;

    useEffect(() => {
        fetchAllTasks(setTasks);
    }, []);

    const fetchAllTasks = () => {
        fetch('http://localhost:3000/tasks')
            .then(resp => resp.json())
            .then(alltasks => setTasks(alltasks));
    }

    const fetchaddTask = (newtask) => {
        fetch(`http://localhost:3000/tasks/`, {
            method: "POST",
            body: JSON.stringify(newtask),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(fetchAllTasks)
    }

    const fetcheditTask = (newtask, id) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PUT",
            body: JSON.stringify(newtask),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(fetchAllTasks)
    }

    const fetchdeleteTask = (id) => {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "DELETE"
        }).then(fetchAllTasks)
    }

    const editTask = (id) => {
        let currentTask = tasks.filter(el => {
            return el.id === id
        })[0];
        setCurrentId(currentTask.id);
        setCurrentTitle(currentTask.title);
        setCurrentDescription(currentTask.description);
        showModify(true);
        showNewTask(true);
    }

    const handleChangeYear = (ev) => {
        setYear(ev.target.value);
    }

    const handleNewTask = () => {
        showNewTask(true);
    }

    const handleShowTasks = ev => {
        ev.preventDefault;
        setCurrentDay(ev.target.dataset.day);
        setCurrentMonth(ev.target.dataset.month);
        setCurrentTitle('');
        setCurrentDescription('');
        setShowTasks(true);
    }

    const handleCloseTask = ev => {
        ev.preventDefault();
        showNewTask(false);
        showModify(false);
    }

    const handleShowLogin = () => {
        showLogin(true);
    }

    let firstDay = moment().set("year", year);

    firstDay = firstDay.startOf('year'); //ustawienie początku daty

    let calendar = [];

    for (let i = 0; i <= 11; i++) {

        calendar.push({ "name": firstDay.format("MMMM"), "numberOfDays": firstDay.daysInMonth(), "days": [] });

        let blanks = [];
        for (let j = 0; j < firstDay.get('d'); j++) {
            blanks.push(
                <td key={j + 100}><div>{""}</div></td>
            );
        }

        let daysInMonth = [];
        for (let day = 1; day < firstDay.daysInMonth() + 1; day++) {
            let date = `${year}-${moment(moment().set('month', i)).format("MM")}-${moment(moment().set('date', day)).format("DD")}`;
            let colorday = '';
            if (tasks.filter(el => el.date === date).length !== 0) {
                colorday = 'thereistasks';
            }
            daysInMonth.push(
                // <td key={day}><div data-month={i} data-day={day} onClick={handleNewTask}>{day}</div></td>
                <td key={day}><div className={colorday} data-date={date} data-month={i} data-day={moment(moment().set('date', day)).format("DD")} onClick={handleShowTasks}>{day}</div></td>
            );
        }

        let fullArr = [...blanks, ...daysInMonth];
        let row = [];
        let rows = [];

        fullArr.forEach((el, i) => {
            if (i % 7 !== 0 || i === 0) {
                row.push(el)
            }
            else {
                rows.push(row);
                row = [];
                row.push(el);
            }
            if (i === fullArr.length - 1) {
                rows.push(row)
            }
        });

        calendar[i].days = rows.map((el, i) => <tr key={i}>{el}</tr>)
        firstDay.add(1, "M");
    }

    // if (!tasks) {
    //     return 'Loading...';
    // }

    return (
        <div className="container">
            {/* {login === true && <Login displaylogin={handleShowLogin} />} */}
            {/* {newtask && <Task closeTask={handleCloseTask} currentmonth = {currentmonth} currentday = {currentday} currentyear = {year}/>} */}
            {newtask && <Task
                fetchaddTask={fetchaddTask}
                fetcheditTask={fetcheditTask}
                closeTask={handleCloseTask}
                currentmonth={currentmonth}
                currentday={currentday}
                currentyear={year}
                currenttitle={currenttitle}
                currentdescription={currentdescription}
                modify={modify}
                id={currentId}
            />}
            <Header showLogin={handleShowLogin} />
            <select defaultValue={year} onChange={handleChangeYear} id="year" name="year">
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
            </select>
            <div className="main">
                {/* {tasks.map(el => <div>{el.date}</div>)} */}
                <div className="tasks">
                    {showtasks && <Tasks
                        newTask={handleNewTask}
                        thisdate={thisdate}
                        tasks={tasks}
                        fetchdeleteTask={fetchdeleteTask}
                        editTask={editTask}
                    />}
                </div>
                <div className="calendar">
                    {calendar.map((el, i) => <Month key={i} name={el.name} days={el.days} />)}
                </div>
            </div>
        </div>
    )
}

export default Application
