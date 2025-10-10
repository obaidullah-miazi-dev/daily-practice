import React, { useRef } from 'react';

const UnControlledForm = () => {
    const emailRef = useRef('')
    const passRef = useRef('')
    const handleSubmit = e =>{
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value
        console.log('Email : ',email,"Password : ", pass)
    }
    return (
        <div className='ml-5'>
            <form className='space-y-2 mt-5' onSubmit={handleSubmit}>
                <input ref={emailRef} className='outline' type="email" name="email"/>
                <br />
                <input ref={passRef} className='outline' type="password" name="password"/>
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledForm;