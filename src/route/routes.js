import Home from "../component/Home";
import AboutUs from "../component/Home/AboutUs";
import ContactUs from "../component/Home/ContactUs";
import FAQs from "../component/Home/FAQs";
import Features from "../component/Home/Features";
import Hero from "../component/Home/Hero"
import Services from "../component/Home/Services";
import Layout from "../layout/Layout";
import RegisterDeath from "../component/Home/RegisterDeath";
import RegisterBirth from "../component/Home/RegisterBirth";
import HospitalLoginPage from "../component/Pages/LoginPage/HospitalLoginPage";
import MortuaryLoginPage from "../component/Pages/LoginPage/MortuaryLoginPage";
import BirthLayout from "../layout/BirthLayout";
import DeathLayout from "../layout/DeathLayout";
import HospitalSignUpForm from "../component/Pages/SignUp/HospitalSignUpForm";
import ServicePage from "../component/Pages/Service";
import ServiceLayout from "../layout/ServiceLayout";
import AddChild from "../component/Pages/BirthNavBarMethods/AddChild";
import ViewAll from "../component/Pages/BirthNavBarMethods/ViewAll";
import PostNatalUpdate from "../component/Pages/BirthNavBarMethods/PostNatalUpdate";

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
        element: <HospitalSignUpForm/>
    },
    {
        path: "/birthlayout",
        element: <BirthLayout/>,
        children: [
            {
                path: "/birthlayout/registerbirth", 
                element: <RegisterBirth/>,
            },
            {
                path: "/birthlayout/registerbirth/AddChild",
                element: <AddChild />
            },
            {
                path: "/birthlayout/registerbirth/ViewAll",
                element: <ViewAll/>
            },
            {
                path: "/birthlayout/registerbirth/PostNatalUpdate",
                element: <PostNatalUpdate/>,
            },
        ]
    },
    {
        path: "/deathlayout",
        element: <DeathLayout/>,
        children: [
            {
                path:"/deathlayout/registerDeath",
                element: <RegisterDeath/>,
            },
        ]
    },
    {
        path: "/serviceLayout",
        element: <ServiceLayout/>,
        children: [
            {
                path: "/serviceLayout/servicePage",
                element: <ServicePage />,
            },
        ]
    }
]
