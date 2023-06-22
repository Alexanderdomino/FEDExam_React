import React, { useState } from 'react';
import './Profile.css';

function Profile() {
    const [name, setName] = useState('');
    const [dailyFluidAmount, setDailyFluidAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const profileData = {
            name: name,
            dailyFluidAmount: dailyFluidAmount,
        };

        fetch('http://localhost:3001/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(profileData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="user-profile">
            <h1>Profile</h1>
            <h4>Set name and Daily Goal for liquid Intake</h4>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Daily Goal in ml (e.g. 2000)"
                    value={dailyFluidAmount}
                    onChange={e => setDailyFluidAmount(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default Profile;