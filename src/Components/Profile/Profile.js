import React, { useState } from 'react';

function Profile() {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    // TODO: implement how to submit this

    return (
        <div className="user-profile">
            <form>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
                <input type="number" placeholder="Daily Goal" value={goal} onChange={e => setGoal(e.target.value)}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}
export default Profile;
