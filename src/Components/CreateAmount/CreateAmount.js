import React, { useState, useEffect } from 'react';
import './CreateAmount.css';

function CreateAmount() {
    const [amountName, setAmountName] = useState('');
    const [amountml, setAmountML] = useState('');
    const [amounts, setAmounts] = useState([]);

    useEffect(() => {
        fetchAmounts();
    }, []);

    const fetchAmounts = async () => {
        try {
            const response = await fetch('http://localhost:3001/amounts');
            const data = await response.json();
            setAmounts(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newAmount = { amountName, amountml };

        try {
            const response = await fetch('http://localhost:3001/amounts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newAmount),
            });
            const data = await response.json();
            console.log('Success:', data);
            setAmountName('');
            setAmountML('');
            fetchAmounts();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="amount">
            <h1>Amounts</h1>
            <h4>Add amounts by Container type and size (ml) and see a list of all added amounts</h4>
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
                        placeholder="Amount ml (e.g., 100)"
                        value={amountml}
                        onChange={e => setAmountML(e.target.value)}
                        required
                    />
                    <button type="submit">Save Amount</button>
                </form>

                <div className="amounts-list">
                    <h2>Existing Amounts</h2>
                    {amounts.length === 0 ? (
                        <p>No amounts found.</p>
                    ) : (
                        <ul>
                            {amounts.map(amount => (
                                <li key={amount.id}>
                                    <p>{amount.amountName} - {amount.amountml} ml</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>

    );
}

export default CreateAmount;
