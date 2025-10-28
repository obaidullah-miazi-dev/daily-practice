import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users,setUsers]= useState([])
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res => res.json())
        .then((data)=>{
            setUsers(data),
            setLoading(false)
        })
        .catch(error =>{
            console.log(error);
            setLoading(false)
        })
    },[])

    if(loading){
        return <p>loading users...</p>
    }

    const handleAddUser = (e)=>{
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value 
        const newUser = {email,name}
        fetch('http://localhost:3000/users',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            const newUsers = [...users,data]
            setUsers(newUsers)
        })

        e.target.reset()

    }

    console.log(users);
    return (
        <div>
            <h2>Users</h2>
            <div>
                <h2>Add Users</h2>
                <form onSubmit={handleAddUser}>
                    <input type="text" name='name'/>
                    <br />
                    <input type="email" name="email" id="" />
                    <br />
                    <button>Add User</button>
                </form>
            </div>
            {users.map(user=> <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            </div>)}
        </div>
    );
};

export default Users;