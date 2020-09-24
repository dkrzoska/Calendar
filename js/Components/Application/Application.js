import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Month from "../Month/Month";
import moment from "moment";
import '../Application/style.css';

function Application() {
    const [year, setYear] = useState("2020");

    const handleChangeYear = (ev) => {
        setYear(ev.target.value);
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
                <td>{""}</td>
            );
        }

        let daysInMonth = [];
        for (let day = 1; day < firstDay.daysInMonth() + 1; day++) {
            blanks.push(
                <td>{day}</td>
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
            <select onChange={handleChangeYear} id="year" name="year">
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
            <div>
                {calendar.map((el, i) => <Month name={el.name} days={el.days} />)}
            </div>
        </>
    )
}

export default Application
