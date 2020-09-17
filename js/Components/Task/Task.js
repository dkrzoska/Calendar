import React, { useState, useEffect } from 'react'
import { getOperations } from '../../api/operation/fetchOperation';
import Operation from "../Operation/Operation";
import Operations from '../Operations/Operations';

function Task({ title, description ,id }) {
    const [operations, setOperations] = useState([]);
    const [trash, setTrash] = useState(false);
    const [addoperation, setAddOperation] = useState(false);

    const handleaddoperation = () => setAddOperation(true);

    const submitoperation = ev => {
        ev.preventDefault();
        setAddOperation (false)
    };

    useEffect(() => {
        getOperations(setOperations, id);
    }, []);

    return (
        <section className="card mt-5 shadow-sm">
            <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                    <h5>{title}</h5>
                    <h6 className="card-subtitle text-muted">{description}</h6>
                </div>


                <div>

                    {/* Przyciski "Add operation" i "Finish" mają być widoczne
                    tylko jeżeli status zadania jest "open" */}

                    <button onClick={handleaddoperation} className="btn btn-info btn-sm mr-2">
                        Add operation
                        <i className="fas fa-plus-circle ml-1"></i>
                    </button>

                    <button className="btn btn-dark btn-sm">
                        Finish
                        <i className="fas fa-archive ml-1"></i>
                    </button>

                    {/* Przycisk usuwania ma być widoczny tylko
                    jeżeli nie ma żadnych operacji w zadaniu */}

                    {trash && (<button className="btn btn-outline-danger btn-sm ml-2">
                        <i className="fas fa-trash false"></i>
                    </button>)}
                </div>
            </div>
            {addoperation && <Operations submitoperation={submitoperation}/>}
            {operations.map((operation, id) => <Operation key={operation.id} {...operation}/>)}

        </section>
    )
}

export default Task