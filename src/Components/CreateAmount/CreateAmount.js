import React, { useState } from 'react';
import './CreateAmount.css'

function CreateAmount() {
    const [container, setContainer] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAmount = { container, amount };

        // TODO: Make a POST request to your API to save the newAmount

        // Reset form
        setContainer('');
        setAmount('');
    };

    return (
        <div className="create-amount">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Container Name (e.g., Cup)" value={container} onChange={e => setContainer(e.target.value)} required />
                <input type="number" placeholder="Amount (e.g., 100)" value={amount} onChange={e => setAmount(e.target.value)} required />
                <button type="submit">Save Amount</button>
            </form>
        </div>
    );
}

export default CreateAmount;
