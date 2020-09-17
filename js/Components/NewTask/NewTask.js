import React, {useState, useEffect} from 'react'

function NewTask() {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleTtile = () => setTitle(title);
    const handleDescription = () => setDescription(description);

    const submitTask = ev => {
        ev.preventDefault();
    }

    return (
        <div className="card shadow">
            <div className="card-body">
                <h1 className="card-title">New task</h1>
                <form onSubmit={submitTask}>
                    <div className="form-group">
                        <input type="text"
                            value={title} onChange={handleTtile}
                            className="form-control"
                            name="title"
                            placeholder="Title" />
                    </div>
                    <div className="form-group">
                        <input type="text"
                            value={description} onChange={handleDescription}
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
