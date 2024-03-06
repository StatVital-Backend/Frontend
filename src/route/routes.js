import Home from "../component/Home";
import AboutUs from "../component/Home/AboutUs";
import ContactUs from "../component/Home/ContactUs";
import FAQs from "../component/Home/FAQs";
import Features from "../component/Home/Features";
import Hero from "../component/Home/Hero";
import Services from "../component/Home/Services";
import HospitalLogin from "../component/Pages/LoginPage/HospitalLogin";
import MainLogin from "../component/Pages/LoginPage/MainLogin";
import MorgueLogin from "../component/Pages/LoginPage/MorgueLogin";
import SignUp from "../component/Pages/SignUp/index";
import Layout from "../layout/Layout";

export const ROUTES = [
    {
        path:'',
        element: <Layout />,
        children:[
            {
                path:'',
                element: <Home/>,
            },
            {
                path:'home',
                element: <Home/>,
            },
            {
                path:'Aboutus',
                element: <AboutUs/>,
            },
            {
                path:'contactus',
                element: <ContactUs/>,
            },
            {
                path:'faqs',
                element: <FAQs/>,
            },
            {
                path:'features',
                element: <Features/>,
            },
            {
                path:'hero',
                element: <Hero/>,
            },
            {
                path:'service',
                element: <Services/>,
            },
        ]
            },
            {
                path: "/login",
                element: <MainLogin />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },

            {
                path: "/morguelogin",
                element: <MorgueLogin />,
            },

            {
                path: "/hospitalLogin",
                element: <HospitalLogin />,
            },
        ]