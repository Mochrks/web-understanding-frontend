import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/homes/Home';
import TheoryHub from '@/pages/TheoryHub';
import { BeTheoryHub } from '@/pages/BeTheoryHub';
import NotFound from '@/components/demo/NotFound';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* Main Application Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/theory" element={<TheoryHub />} />
            <Route path="/theory-be" element={<BeTheoryHub />} />
            
            {/* Catch-all for Not Found */}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
