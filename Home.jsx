import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import Inbox from './Inbox'

const Home = () => {
    return (
        <div className="flex">
            <Sidebar />
            <Outlet />
        </div>
    )
}

export default Home;
