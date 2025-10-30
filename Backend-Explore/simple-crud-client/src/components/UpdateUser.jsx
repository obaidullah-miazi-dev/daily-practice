import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const user = useLoaderData()
    // console.log(user._id);
    const handleUpdateUser = (e)=>{
        e.preventDefault()
        const name = e.target.name.value 
        const email = e.target.email.value 
        console.log(email,name);
        const updatedUser = {name,email}

        fetch(`http://localhost:3000/users/${user._id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log('after update info',data);
            console.log(data);
        })


        e.target.reset()
    }
    return (
        <div>
            <h2>Edit User</h2>
            <form onSubmit={handleUpdateUser} className='box'>
                <input type="text" name="name" id="" defaultValue={user.name}/>
                <br />
                <input type="email" name="email" id="" defaultValue={user.email}/>
                <br />
                <input type="submit" value="Update Info" />

            </form>
        </div>
    );
};

export default UpdateUser;