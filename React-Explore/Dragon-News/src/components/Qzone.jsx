import React from 'react';
import swimmingImg from '../assets/swimming.png'
import classImg from '../assets/class.png'
import playgroundImg from '../assets/playground.png'

const Qzone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className='font-bold text-lg'>Qzone</h2>
            <div className='flex flex-col justify-center items-center my-8'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playgroundImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;