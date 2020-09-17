import React, { useState, useEffect } from 'react';

function Operations() {

    return (
        <>
            <div className="card-body">
                <form >
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Operation description" />
                        <div className="input-group-append">
                            <button className="btn btn-info">
                                Add
                            <i className="fas fa-plus-circle ml-1"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            <ul className="list-group list-group-flush">
                {/* Komponenty Operation */}
            </ul>
        </>
    )
}

export default Operations