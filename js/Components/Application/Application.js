import React from 'react';
import ReactDOM from "react-dom";
import Month from "../Month/Month";

const year = 2020;
let february;
year % 4 === 0 ? february = 29 : february = 28;
const months = [
    {
        "name": "January",
        "numberofdays": 31
    },
    {
        "name": "February",
        "numberofdays": february
    },
    {
        "name": "March",
        "numberofdays": 31
    },
    {
        "name": "April",
        "numberofdays": 30
    },
    {
        "name": "May",
        "numberofdays": 31
    },
    {
        "name": "June",
        "numberofdays": 30
    },
    {
        "name": "July",
        "numberofdays": 31
    },
    {
        "name": "August",
        "numberofdays": 31
    },
    {
        "name": "September",
        "numberofdays": 30
    },
    {
        "name": "October",
        "numberofdays": 31
    },
    {
        "name": "November",
        "numberofdays": 30
    },
    {
        "name": "December",
        "numberofdays": 31
    }]

function Application() {
    return (
        <div>
            {/* {months.map(el => <Month name = {el.name} days = {el.numberofdays}/>)} */}
            <Month name = {months[0].name} days = {months[0].numberofdays}/>
        </div>
    )
}

export default Application
