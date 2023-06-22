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
        <div className="view">
            <h2>All Intakes</h2>
            <h4>A list of all logged liquids</h4>
            <div className="intake-list">
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

        </div>
    );
}

export default IntakeList;
