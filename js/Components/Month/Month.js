import React from 'react';

function Month({ name, days }) {
    return (
        <table style={{ "border": "solid 1px", "display": "inline-block" }}>
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
