import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routesData } from './routes';
import SpinnerComponent from '../atoms/spinner';
import NotFound from '../templates/notfound';
import { FaqProvider } from '../../utils/context/faqcontext';
import { TestimonialProvider } from '../../utils/context/testimonialcontext';
const Navbar = React.lazy(() => import('../organism/layouts/navbar'));
const Sidebar = React.lazy(() => import('../organism/layouts/sidebar'));

const Menu = () => {
    const routes = routesData();
    return (
        <>
            <Navbar />
            <Sidebar />
            <Suspense fallback={<SpinnerComponent spinner={true} />}>
                <FaqProvider>
                    <TestimonialProvider>
                        <main id="main" className="main">
                            <Routes>
                                {routes.map((layout, i) => (
                                    <Route key={i} path={layout.path} element={layout.component} />
                                ))}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </main>
                        <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                            <i className="bi bi-arrow-up-short"></i>
                        </a>
                    </TestimonialProvider>
                </FaqProvider>
            </Suspense>
        </>
    );
}

export default Menu;
