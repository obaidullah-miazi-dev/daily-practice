import React from 'react';

const Form = () => {

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.password.value);
    }
    return (
        <form onSubmit={handleSubmit} className='space-y-2 mt-5'>
            <input className='outline' type="text" name='name' placeholder='Your Username' />
            <br />
            <input className='outline' type="password" name="password" placeholder='Your Password'/>
            <br />
            <input className='btn btn-primary' type="submit" value="Submit" />
        </form>
    );
};

export default Form;