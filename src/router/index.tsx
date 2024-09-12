import { Login } from '@/pages/form-validation/login/Login';
import { Register } from '@/pages/form-validation/register/Register';
import { Home } from '@/pages/homes/Home';
import React from 'react';
import { Routes, Route } from 'react-router-dom';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Routes>
    );
};

export default AppRoutes;
