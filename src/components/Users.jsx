import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const laodedUser = useLoaderData()
    const [users, setUsers] = useState(laodedUser)
    const handleDelete = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                alert('deleted successfully!')
                const remaining = users.filter(user => user._id !== id)
                setUsers(remaining)
            }
        })
    }

    return (
        <div>
            <h3>Total User :- {users.length}</h3>
            {
                users.map(user => <p key={user._id}>{user.name} <br /> {user.email} <br /> 
                <Link to={`/update/${user._id}`}><button>Update</button></Link> <br />
                <button onClick={ ()=> handleDelete(user._id)}>X</button></p>)
            }
        </div>
    );
};

export default Users;