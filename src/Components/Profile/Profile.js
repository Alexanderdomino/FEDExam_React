import React, { useState } from 'react';
import './Profile.css'

function Profile() {
    const [name, setName] = useState('');
    const [dailyFluidAmount, setDailyFluidAmount] = useState('');

    // TODO: implement how to submit this

    return (
        <div className="user-profile">
            <form>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="number" placeholder="Daily Goal" value={dailyFluidAmount} onChange={e => setDailyFluidAmount(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
export default Profile;
