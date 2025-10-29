import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const Users = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setUsers(data),
                    setLoading(false)
            })
            .catch(error => {
                console.log(error)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <p>loading users...</p>
    }

    const handleAddUser = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value
        // console.log(name, email);
        const newUser = { name, email }

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.insertedId);
                console.log('after saving user :', data);
                if (data.insertedId) {
                    alert('added user succesfully')
                    newUser._id = data.insertedId
                    const newUsers = [...users,newUser]
                    setUsers(newUsers)
                }
            })

        e.target.reset()
    }

    const handleDeleteUser = (id)=>{
        console.log(id);
        fetch(`http://localhost:3000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log('after delete',data);
            if(data.deletedCount){
                alert('deleted user succesfully')
                const remainingUsers = users.filter(user => user._id !== id)
                setUsers(remainingUsers)
            }
        })
    }
    return (
        <div>
            <h2>Users</h2>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" id="" required/>
                <br />
                <input type="email" name="email" id="" required/>
                <br />
                <input type="submit" value="Add User" />
            </form>

            <div className='grid'>
                {
                    users.map((user, index) => <div key={index} className='box'>
                        <p>{index + 1}</p>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <Link to={`/users/${user._id}`}>Details</Link> <br />
                        <button onClick={()=>handleDeleteUser(user._id)}>Delete User</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Users;