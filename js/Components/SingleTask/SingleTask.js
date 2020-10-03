import React from 'react'

function SingleTask({ fetchdeleteTask, editTask, date, time, title, description, id }) {
    return (
        <div>
            <p>{date}</p>
            <p>{time}</p>
            <p>{title}</p>
            <p>{description}</p>
            <button onClick = {() => fetchdeleteTask(id)}>Delete</button>
            <button onClick = {() => editTask(id)}>Edit</button>
        </div>
    )
}

export default SingleTask
