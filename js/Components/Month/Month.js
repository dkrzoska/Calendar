import React from 'react';
import './month.css';

function Month({ name, days }) {
    return (
        <table className = 'month'>
            <thead>
                <tr>
                    <th colSpan={7}>{name}</th>
                </tr>
            </thead>
            <tbody>
                {days}
            </tbody>
        </table>
    )
}

export default Month
