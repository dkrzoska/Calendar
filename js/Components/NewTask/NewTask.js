import React, {useState, useEffect} from 'react'

function NewTask({addTask}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleTtile = ev => {
        setTitle(ev.target.value);
    }

    const handleDescription = ev => {
        setDescription(ev.target.value);
    }

    const submitTask = ev => {
        ev.preventDefault();
        const newtask = {
            "title": title,
            "description": description,
            "status": "open"
        }
        console.log(newtask);
        addTask(newtask);
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={submitTask}>
                    <div className="form-group">
                        <input type="text"
                            onChange={handleTtile} value={title}
                            className="form-control"
                            name="title"
                            placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            onChange={handleDescription} value={description}
                            className="form-control"
                            name="description"
                            placeholder="Description" />
                    </div>
                    <button className="btn btn-info">
                        Add task
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewTask
