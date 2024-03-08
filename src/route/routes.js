import Home from "../component/Home";
import AboutUs from "../component/Home/AboutUs";
import ContactUs from "../component/Home/ContactUs";
import FAQs from "../component/Home/FAQs";
import Features from "../component/Home/Features";
import Hero from "../component/Home/Hero";
import Services from "../component/Home/Services";
import LoginPage from "../component/Pages/LoginPage/LoginPage";
import HospitalLogin from "../component/Pages/LoginPage/HospitalLogin";
import MorgueLogin from "../component/Pages/LoginPage/MorgueLogin";
import Question from "../component/Pages/Question/question";
import SignUp from "../component/Pages/SignUp/index";
import Layout from "../layout/Layout";
import ChildRegistrationForm from "../component/Pages/RegisterChildbirth/index";

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
                path:'aboutus',
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
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/signup",
                element: <SignUp />,
            },
            {
                path: "/question",
                element: <Question/>,
            },
            {
                path: "/morguelogin",
                element: <MorgueLogin />,
            },

            {
                path: "/hospitalLogin",
                element: <HospitalLogin />,
            },

            {
                path: "/childregform",
                element: <ChildRegistrationForm />,
            },
        ]
    }
]
