import React, { useState, useEffect } from 'react';
import './LogLiquid.css'

function LogLiquid() {
    const [selectedAmount, setSelectedAmount] = useState('');
    const [selectedLiquidType, setSelectedLiquidType] = useState('');
    const [amounts, setAmounts] = useState([]);
    const [liquidTypes] = useState(["Water", "Juice", "Milk", "Coffee", "Other"]);

    useEffect(() => {
        fetch('http://localhost:3001/amounts')
            .then(response => response.json())
            .then(data => setAmounts(data))
            .catch(error => console.error('Error:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const date = new Date();
        const selectedAmountObject = amounts.find(amount => `${amount.amountName} ${amount.amountml}` === selectedAmount);
        const liquidLog = {
            date: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
            time: `${date.getHours()}:${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`,
            amountName: selectedAmountObject.amountName,
            amountml: Number(selectedAmountObject.amountml),
            type: selectedLiquidType,
        };

        fetch('http://localhost:3001/intakes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(liquidLog),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                setSelectedAmount('');
                setSelectedLiquidType('');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div className="log-liquid">
            <form onSubmit={handleSubmit}>
                <select value={selectedAmount} onChange={e => setSelectedAmount(e.target.value)} required>
                    <option value="">-- Select an Amount --</option>
                    {amounts.map(amount => (
                        <option key={amount.id} value={`${amount.amountName} ${amount.amountml}`}>
                            {amount.amountName} {amount.amountml} ml
                        </option>
                    ))}
                </select>
                <select value={selectedLiquidType} onChange={e => setSelectedLiquidType(e.target.value)} required>
                    <option value="">-- Select a Liquid Type --</option>
                    {liquidTypes.map(liquidType => (
                        <option key={liquidType} value={liquidType}>{liquidType}</option>
                    ))}
                </select>
                <button type="submit">Log Liquid</button>
            </form>
        </div>
    );
}

export default LogLiquid;
