import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-4 items-center bg-base-200 p-3'>
            <p className='bg-secondary text-white font-semibold px-4 py-2'>Latest</p>
            <Marquee>
                <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem vero aspernatur tenetur nam ut molestiae.dolor sit amet consectetur, adipisicing elit. Dolorem vero aspernatur tenetur nam ut molestiae</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;