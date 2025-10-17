import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='left-nav'></section>
            <section className='main'>
                <Outlet></Outlet>
            </section>
            <section className='right-nav'></section>
        </div>
    );
};

export default MainLayout;