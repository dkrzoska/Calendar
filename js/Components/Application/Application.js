import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Month from "../Month/Month";
import moment from "moment";
import './application.css';
import Header from '../Header/Header';
import Tasks from '../Tasks/Tasks';
import Task from '../Task/Task';
import Login from '../Login/Login';

function Application() {
    const [year, setYear] = useState("2020");
    const [newtask, showNewTask] = useState(false);
    const [login, showLogin] = useState(false);

    const handleChangeYear = (ev) => {
        setYear(ev.target.value);
    }

    const handleNewTask = () => {
        showNewTask(true);
    }

    const handleCloseTask = (ev) => {
        ev.preventDefault();
        // console.log(ev);
        // console.log("udało się");
        showNewTask(false);
    }

    const handleShowLogin = () => {
        showLogin(true);
    }

    let firstDay = moment().set("year", year);

    firstDay = firstDay.startOf('year'); //ustawienie początku daty
    // firstDay = firstDay.add(1, 'M'); //dodanie dwóch miesięcy, miesiąc != konkretniej liczbie dni, tylko zmiana miesiąca
    // console.log(firstDay.get('d')); //pozycja pierwszego dnia wg dnia tygodnia niedziela = 0
    // console.log(firstDay.daysInMonth());

    let calendar = [];

    for (let i = 0; i <= 11; i++) {

        calendar.push({ "name": firstDay.format("MMMM"), "numberOfDays": firstDay.daysInMonth(), "days": [] });

        let blanks = [];
        for (let i = 0; i < firstDay.get('d'); i++) {
            blanks.push(
                <td><div>{""}</div></td>
            );
        }

        let daysInMonth = [];
        for (let day = 1; day < firstDay.daysInMonth() + 1; day++) {
            daysInMonth.push(
                <td><div onClick={handleNewTask}>{day}</div></td>
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

        calendar[i].days = rows.map(el => <tr>{el}</tr>)
        firstDay.add(1, "M");
    }

    return (
        <>
            {/* {login === true && <Login displaylogin={handleShowLogin} />} */}
            {newtask === true && <Task closeTask={handleCloseTask} />}
            <Header showLogin={handleShowLogin} />
            <select onChange={handleChangeYear} id="year" name="year">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
            <div className="main">
                <Tasks />
                <div className="calendar">
                    {calendar.map((el, i) => <Month id={i} name={el.name} days={el.days} />)}
                </div>
            </div>
        </>
    )
}

export default Application
