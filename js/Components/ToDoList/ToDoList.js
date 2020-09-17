import React, {useState, useEffect} from 'react';
import {getTasks} from "../../api/task/fetchTask";
import NewTask from '../NewTask/NewTask';
import Operation from '../Operation/Operation';
import Task from "../Task/Task"

function ToDoList() {
    const [tasks, setTasks] = useState([]);

    useEffect (() => {
        getTasks ( setTasks );
    }, []);

    return (
        <>
        <NewTask />
        <ul>
            {tasks.map (task => <Task key={task.id} {...task}/>)}
        </ul>
        </>
    )
}

export default ToDoList