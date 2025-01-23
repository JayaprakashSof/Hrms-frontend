import { lazy } from 'react';

const Dashboard = lazy(() => import('../pages/dashboard'));

const ListFaq = lazy(() => import('../pages/setup/faq/listfaq'));
const AddAndEditFaq = lazy(() => import('../pages/setup/faq/addandeditfaq'));
const ViewFaq = lazy(() => import('../pages/setup/faq/viewfaq'));

const ListTestimonial = lazy(() => import('../pages/setup/testimonial/listtestimonial'));
const AddTestimonial = lazy(() => import('../pages/setup/testimonial/addandedittestimonial'));
const ViewTestimonial = lazy(() => import('../pages/setup/testimonial/viewtestimonial'));



export const routesData = () => {
    const Routes = [
        {
            path: "/",
            pageTitle: "Dashboard",
            component: <Dashboard />
        },
        {
            path: "/list-faq",
            pageTitle: "List Faq",
            component: <ListFaq />
        },
        {
            path: "/add-faq",
            pageTitle: "Add Faq",
            component: <AddAndEditFaq />
        },
        {
            path: "/edit-faq/:id",
            pageTitle: "Edit Faq",
            component: <AddAndEditFaq />
        },
        {
            path: "/view-faq/:id",
            pageTitle: "View Faq",
            component: <ViewFaq />
        },

        // Testimonial
        {
            path: "/list-testimonial",
            pageTitle: "List Testimonial",
            component: <ListTestimonial />
        },
        {
            path: "/add-testimonial",
            pageTitle: "Add Testimonial",
            component: <AddTestimonial />
        },
        {
            path: "/edit-testimonial/:id",
            pageTitle: "Edit Testimonial",
            component: <AddTestimonial />
        },
        {
            path: "/view-testimonial/:id",
            pageTitle: "View Testimonial",
            component: <ViewTestimonial />
        },


    ];

    return Routes;
}
