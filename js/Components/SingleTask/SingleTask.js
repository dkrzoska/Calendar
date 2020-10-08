import React from 'react'
import './singletask.scss'

function SingleTask({ fetchdeleteTask, editTask, date, time, title, description, id }) {
    return (
        <div className="singletask">
            <p><strong>Date: </strong>{date}</p>
            <p><strong>Time: </strong>{time}</p>
            <p><strong>Title: </strong>{title}</p>
            <p><strong>Description: </strong></p>
            <p>"{description}"</p>
            <button onClick = {() => fetchdeleteTask(id)}>Delete</button>
            <button onClick = {() => editTask(id)}>Edit</button>
        </div>
    )
}

export default SingleTask
