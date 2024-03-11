import Home from "../component/Home";
import AboutUs from "../component/Home/AboutUs";
import ContactUs from "../component/Home/ContactUs";
import FAQs from "../component/Home/FAQs";
import Features from "../component/Home/Features";
import Hero from "../component/Home/Hero";
import Services from "../component/Home/Services";
import Layout from "../layout/Layout";
import HospitalSignUp from "../component/Pages/SignUpHospital/HospitalSignUp";
import MorgueSignUp from "../component/Pages/MorgeSignUps/MorgueSignUp";
import RegisterDeath from "../component/Pages/RegisterDeathDashBoard/RegisterDeath";
import RegisterBirth from "../component/Home/RegisterBirth";
import HospitalLoginPage from "../component/Pages/LoginPage/HospitalLoginPage";
import MortuaryLoginPage from "../component/Pages/LoginPage/MortuaryLoginPage";
import BirthLayout from "../layout/BirthLayout";

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
                path:'faq',
                element: <FAQs/>,
            },
            {
                path:'feature',
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
        path: "/mortuarylogin",
        element: <MortuaryLoginPage />,
    },
    {
        path: "/hospitallogin",
        element: <HospitalLoginPage />,
    },
    {
        path: "/hospitalsignup",
        element: <HospitalSignUp/>
    },
    {
        path: "/morguesignup",
        element: <MorgueSignUp />,
    },
    {
        path: "/birthlayout",
        element: <BirthLayout/>,
        children: [
            {
                path: "", 
                element: <RegisterBirth/>,
            },
            {
                path: "", 
                element: <RegisterDeath />,
            },
        ]
    }
]
