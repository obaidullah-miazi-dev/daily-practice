import React from 'react';
import useInputField from './useInputField';

const HookForm = () => {

    const [name,nameOnChange] = useInputField('');
    const [email,emailOnChange] = useInputField('');
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('submitted',name,email);
    }

    return (
        <div className='m-5'>
            <form onSubmit={handleSubmit} className='space-y-2'>
                <input className='outline' defaultValue={name} type="text" onChange={nameOnChange}/>
                <br />
                <input className='outline' type="email" onChange={emailOnChange}/>
                <br />
                <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;