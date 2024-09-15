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
import Dashboard from '@/pages/layouting/dashboards/Dashboard';
import ConditionalRendering from '@/pages/conditional-rendering/ConditionalRendering';
import UploadDownload from '@/pages/file-upload-download/UploadDownload';
import AuthentificationPages from '@/pages/layouting/authentification/AuthenntificationPages';
import UserProfilePages from '@/pages/layouting/user-profiles/UserProfilesPages';
import EcommercePages from '@/pages/layouting/e-commerce/EcommercePages';
import MultiStep from '@/pages/layouting/multi-step-forms/MultiStep';
import NotificationAndMessaging from '@/pages/layouting/notification-messaging/NotificationAndMessaging';
import CodingPracticePage from '@/pages/layouting/coding-practive-text-editor/CodingPracticePage';
import UserFeedbackAndRating from '@/pages/layouting/user-feedback-rating/UserFeedbackAndRating';
import AuthPagesLoginRegister from '@/pages/layouting/authentification/AuthPagesLoginRegister';
import CarouselPage from '@/pages/layouting/corousel-images/CarouselPage';
import HeroBGAnimation from '@/pages/layouting/hero-bg-animation/HeroBGAnimation';


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
            <Route path="/conditional-rendering" element={<ConditionalRendering />} />
            <Route path="/file-upload-download" element={<UploadDownload />} />
            <Route path="/dashboard-layout" element={<Dashboard />} />
            <Route path="/authentification-layout" element={<AuthentificationPages />} />
            <Route path="/authentification-layout-modern" element={<AuthPagesLoginRegister />} />
            <Route path="/user-profiles-layout" element={<UserProfilePages />} />
            <Route path="/e-commerce-layout" element={<EcommercePages />} />
            <Route path="/multi-step-layout" element={<MultiStep />} />
            <Route path="/notif-message-layout" element={<NotificationAndMessaging />} />
            <Route path="/feedback-rating-layout" element={<UserFeedbackAndRating />} />
            <Route path="/coding-practice-layout" element={<CodingPracticePage />} />
            <Route path="/carousel-layout" element={<CarouselPage />} />
            <Route path="/hero-bg-layout" element={<HeroBGAnimation />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
