import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '@/pages/form-validation/login/Login';
import Register from '@/pages/form-validation/register/Register';
import Home from '@/pages/homes/Home';
import SearchAutoCompleted from '@/pages/searching-data/auto-completed/SearchAutoCompleted';
import SearchManual from '@/pages/searching-data/manual-search/SearchManual';
import NotFound from '@/components/demo/NotFound';
import PaginationClient from '@/pages/pagination/client-side/PaginationClient';
import PaginationInfiniteScroll from '@/pages/pagination/infinite-scroll/PaginationInfiniteScroll';
import FramerAnimation from '@/pages/animation-framer-gsap/framer/FramerAnimation';
import GsapAnimation from '@/pages/animation-framer-gsap/gsap/GsapAnimation';
import Dashboard from '@/pages/dashboards/Dashboard';


const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/search-auto-completed" element={<SearchAutoCompleted />} />
            <Route path="/search-manual" element={<SearchManual />} />
            <Route path="/pagination-client" element={<PaginationClient />} />
            <Route path="/pagination-infinite" element={<PaginationInfiniteScroll />} />
            <Route path="/animation-framer-motion" element={<FramerAnimation />} />
            <Route path="/animation-gsap" element={<GsapAnimation />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
