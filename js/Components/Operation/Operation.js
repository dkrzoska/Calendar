import React, { useState, useEffect } from 'react';

function Operation({ description, timeSpent, id }) {
    const [timeform, setTimeForm] = useState(false);
    const [time, setTime] = useState();

    const handletimeform = () => setTimeForm(true);

    const handletime = () => setTime(time);

    const submittime = ev => {
        ev.preventDefault();
        setTimeForm(false);
    }

    useEffect(() => {

    }, [])

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <div>
                {description}

                {/* Czas wyświetlany tylko jeżeli większy od 0 */}
                <span className="badge badge-success badge-pill ml-2">
                    {timeSpent !== 0 && `${Math.floor(timeSpent / 60)}h ${timeSpent % 60}m`}
                </span>
            </div>


            {/* Formularz wyświetlany po naciśnięciu "Add time", po zapisie czasu znika */}
            {timeform && (<form onSubmit={submittime}>
                <div className="input-group input-group-sm">
                    <input type="number"
                        value={time} onChange={handletime}
                        className="form-control"
                        placeholder="Spent time in minutes"
                        style={{ width: "12rem" }} />
                    <div className="input-group-append">
                        <button className="btn btn-outline-success"><i className="fas fa-save"></i></button>
                        <button className="btn btn-outline-dark"><i className="fas fa-times false"></i></button>
                    </div>
                </div>
            </form>)}

            {/* div wyświetlany domyślnie, znika po wciśnięciu "Add time" */}
            <div>
                {/* Przycisk widoczny tylko jeżeli status zadania jest "open" */}
                <button onClick = {handletimeform} className="btn btn-outline-success btn-sm mr-2">
                    Add time
                    <i className="fas fa-clock ml-1"></i>
                </button>

                <button className="btn btn-outline-danger btn-sm"><i className="fas fa-trash"></i></button>
            </div>
        </li>
    )
}

export default Operation