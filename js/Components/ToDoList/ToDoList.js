import React, {useState, useEffect} from 'react';
import {getTasks} from "../../api/task/fetchTask";
import NewTask from '../NewTask/NewTask';
import Operation from '../Operation/Operation';
import Task from "../Task/Task";
import { API_KEY, API_URL } from "../../api/consts";

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    const addTask = (addnewtask) => {
        fetch(`${API_URL}/tasks`, {
            method: "POST",
            body: JSON.stringify(addnewtask),
            headers: {
                "Authorization": API_KEY,
                "Content-Type" : "application/json"
            }
        }).then( getTasks )
    }

    const deleteTask = ( id ) => {
        fetch(`${API_URL}/tasks/${id}`, {
            method: "DELETE"
        }).then( getTasks )
    }

    useEffect (() => {
        getTasks ( setTasks );
    }, [tasks]);

    return (
        <>
        <NewTask addTask={addTask}/>
        <ul>
            {tasks.map (task => <Task key={task.id} {...task}/>)}
        </ul>
        </>
    )
}

export default ToDoList