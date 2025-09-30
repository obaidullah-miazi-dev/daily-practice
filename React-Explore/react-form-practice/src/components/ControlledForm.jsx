import React, { useState } from 'react';

const ControlledForm = () => {
    const handleSubmission = e =>{
        e.preventDefault();
        console.log(e.target.password.value);
    }
    const [pass, setPass] = useState('');
    const [err, setErr] = useState('')
    const handlePassOnChange = e =>{
        console.log(e.target.value);
        setPass(e.target.value)
        if(pass.length < 6){
            setErr('❗ password must be characters or longer')
        }
        else{
            setErr('')
        }
    }
    return (
        <div className='ml-5'>
            <form onSubmit={handleSubmission} className='space-y-2 mt-5'>
                <input className='outline' type="text" name='name' placeholder='Your Username' required/>
                <br />
                <input className='outline' onChange={handlePassOnChange} defaultValue={pass} type="password" name="password" placeholder='Your Password' required/>
                <br />
                <input  className='btn btn-primary' type="submit" value="Submit" />
            </form>
            <p className='text-red-600'>{err}</p>
        </div>
    );
};

export default ControlledForm;