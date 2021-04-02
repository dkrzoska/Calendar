import React from 'react'

function Test() {
    const API_KEY = '$2b$10$Tz8oN.ipZC7IGJj4fzeXEOtE/DXhehIUbxEo1/Alr7PgbuoA4uSlG';
    const fetchData = () => {
        fetch('https://api.jsonbin.io/b/6067049f9fc4de52061c2fbf', {
            headers: {
                'content-Type': 'application/json',
                'secret-key': API_KEY,
            },
            method: 'GET',
            // mode: 'cors'
        })
            .then(resp => resp.json())
            .then(resp => console.log(resp))
            .catch(err => console.log(err));
    }
    fetchData();

    return (
        <div>

        </div>
    )
}

export default Test
