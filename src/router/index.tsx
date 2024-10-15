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
import LoadingAnimations from '@/pages/layouting/loading-animation/LoadingAnimations';
import AlertLayout from '@/pages/layouting/alert/AlertLayout';
import EnhancedModalDialogLayout from '@/pages/layouting/dialog-popup/EnhancedModalDialogLayout';
import FooterLayout from '@/pages/layouting/footer/FooterLayout';
import NavbarLayout from '@/pages/layouting/navbar/NavbarLayout';
import ModernFAQComponents from '@/pages/layouting/FAQ/ModernFAQLayout';
import ModernPricingComponents from '@/pages/layouting/pricing/ModernPricingComponents';
import ModernErrorComponents from '@/pages/layouting/404error/ModernErrorComponents';
import ModernTestimonialComponents from '@/pages/layouting/testimonial/ModernTestimonialComponents';
import ModernBlogComponents from '@/pages/layouting/blog-layout/ModernBlogComponents';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            {/* dev understanding fe */}
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
            <Route path="*" element={<NotFound />} />

            {/* layouting FE */}
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
            <Route path="/loading-animation-layout" element={<LoadingAnimations />} />
            <Route path="/alert-layout" element={<AlertLayout />} />
            <Route path="/modal-dialog-layout" element={<EnhancedModalDialogLayout />} />
            <Route path="/footer-layout" element={<FooterLayout />} />
            <Route path="/navbar-layout" element={<NavbarLayout />} />
            <Route path="/faq-pages-layout" element={<ModernFAQComponents />} />
            <Route path="/pricing-pages-layout" element={<ModernPricingComponents />} />
            <Route path="/404-error-layout" element={<ModernErrorComponents />} />
            <Route path="/testimonial-pages-layout" element={<ModernTestimonialComponents />} />
            <Route path="/blog-pages-layout" element={<ModernBlogComponents />} />
        </Routes>
    );
};

export default AppRoutes;
