import React, { useState } from 'react';
import './CreateAmount.css';

function CreateAmount() {
    const [amountName, setAmountName] = useState('');
    const [amountml, setAmountML] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAmount = { amountName, amountml };

        fetch('http://localhost:3001/amounts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAmount),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setAmountName('');
                setAmountML('');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="create-amount">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Container Name (e.g., Cup)"
                    value={amountName}
                    onChange={e => setAmountName(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Amount (e.g., 100)"
                    value={amountml}
                    onChange={e => setAmountML(e.target.value)}
                    required
                />
                <button type="submit">Save Amount</button>
            </form>
        </div>
    );
}

export default CreateAmount;
