import React, { useState, useEffect } from 'react';
import './IntakeList.css'

function IntakeList() {
    const [intakes, setIntakes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/intakes')
            .then(response => response.json())
            .then(data => setIntakes(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="intake-list">
            <h2>All Intakes</h2>
            {intakes.length === 0 ? (
                <p>No intakes found.</p>
            ) : (
                <ul>
                    {intakes.map(intake => (
                        <li key={intake.id}>
                            <p>Date: {intake.date}</p>
                            <p>Time: {intake.time}</p>
                            <p>Amount: {intake.amountName} ({intake.amountml} ml)</p>
                            <p>Type: {intake.type}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default IntakeList;
