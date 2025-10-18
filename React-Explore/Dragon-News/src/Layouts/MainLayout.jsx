import React from 'react';
import { NavLink, Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/HomeLayouts/LeftAside';
import RightAside from '../components/HomeLayouts/RightAside';

const MainLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <section className='w-11/12 mx-auto my-5'>
                <LatestNews></LatestNews>
            </section>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12 w-11/12 mx-auto *:border my-3'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default MainLayout;