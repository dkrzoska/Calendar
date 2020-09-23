import React from 'react';
import moment from "moment";

let firstDay = moment().startOf('year'); //ustawienie początku daty
firstDay = firstDay.add(1, 'M'); //dodanie dwóch miesięcy, miesiąc != konkretniej liczbie dni, tylko zmiana miesiąca
console.log(firstDay.get('d')); //pozycja pierwszego dnia wg dnia tygodnia niedziela = 0
// console.log(firstDay.daysInMonth());

let calendar = [];
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
console.log(fullArr);

//teraz podzielić to na wiersze i zpushować do calendar[0].days, itd.

function Month({ name, days }) {
    return (
        <table style={{ "border": "solid 1px", "display": "inline-block" }}>
            {/* <thead>
                <tr>
                    <th>{name}</th>
                </tr>
            </thead> */}
            {/* <tbody>
                <tr className="week-day">
                    {moment.weekdaysShort().map(day => <td>{day}</td>)}
                </tr>
            </tbody> */}
            {fullArr}
        </table>
    )
}

export default Month
