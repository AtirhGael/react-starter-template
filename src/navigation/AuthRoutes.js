import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/dashboard';
import Home from '../pages/home';
import frontendUrl from '../urls/frontendUrl';

export default function AuthRoutes() {
    return (
        <Routes>
            <Route path={frontendUrl.HOME.SELF} element={<Home />} />
            <Route path={frontendUrl.HOME.DASHBOARD} element={<Dashboard />} />
        </Routes>
    )
}