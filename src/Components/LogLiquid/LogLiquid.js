import React, { useState } from 'react';

function LogLiquid({containers, liquidTypes}) {
    const [selectedContainer, setSelectedContainer] = useState('');
    const [selectedLiquidType, setSelectedLiquidType] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const liquidLog = { selectedContainer, selectedLiquidType };

        // TODO: Make a POST request to your API to save the liquidLog

        // Reset form
        setSelectedContainer('');
        setSelectedLiquidType('');
    };

    return (
        <div className="log-liquid">
            <form onSubmit={handleSubmit}>
                <select value={selectedContainer} onChange={e => setSelectedContainer(e.target.value)} required>
                    <option value="">-- Select a Container --</option>
                    {containers.map(container => (
                        <option value={container.name}>{container.name} {container.amount} ml</option>
                    ))}
                </select>
                <select value={selectedLiquidType} onChange={e => setSelectedLiquidType(e.target.value)} required>
                    <option value="">-- Select a Liquid Type --</option>
                    {liquidTypes.map(liquidType => (
                        <option value={liquidType}>{liquidType}</option>
                    ))}
                </select>
                <button type="submit">Log Liquid</button>
            </form>
        </div>
    );
}

export default LogLiquid;
