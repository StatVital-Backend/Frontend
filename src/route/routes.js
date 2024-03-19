import Home from "../component/Home";
import AboutUs from "../component/Home/AboutUs";
import ContactUs from "../component/Home/ContactUs";
import FAQs from "../component/Home/FAQs";
import Features from "../component/Home/Features";
import Hero from "../component/Home/Hero"
import Services from "../component/Home/Services";
import Layout from "../layout/Layout";
import HospitalLoginPage from "../component/Pages/LoginPage/HospitalLoginPage";
import MortuaryLoginPage from "../component/Pages/LoginPage/MortuaryLoginPage";
import BirthLayout from "../layout/BirthLayout";
import DeathLayout from "../layout/DeathLayout";
import HospitalSignUpForm from "../component/Pages/SignUp/HospitalSignUpForm";
import ServicePage from "../component/Pages/Service";
import ServiceLayout from "../layout/ServiceLayout";
import RecordSearch from "../component/Pages/Admin/RecordSearch";
import MortuarySignUpForm from "../component/Pages/SignUp/MorgueSignUpForm";
import RegisterBirthAndAdd from "../component/Home/RegisterBirth";
import HosRegisterDeath from "../component/Home/HosRegisterDeath";
import MorgueReg from "../component/Home/MorgueReg";
import MorgueLayout from "../layout/MorgueLayout";
import Update from "../component/Pages/MorgueNavBarMethods/Update";
import BirthPostNatalUpdate from "../component/Pages/BirthNavBarNavBarMethods/PostNatalUpdate";
import BirthViewAll from "../component/Pages/BirthNavBarNavBarMethods/ViewAll";
import MorgueUpdate from "../component/Pages/MorgueNavBarMethods/Update";
import MorgueViewAll from "../component/Pages/MorgueNavBarMethods/ViewAll";
import HosRegPostNatalUpdate from "../component/Pages/HosRegDNavBarMethods/PostNatalUpdate";
import HosViewAll from "../component/Pages/HosRegDNavBarMethods/ViewAll";

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
        path: "/mortuarysignup",
        element: <MortuarySignUpForm/>
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
        path: "/HospitalRegDeath",
        element: <HosRegisterDeath/>
    },
    {
        path: "/birthlayout",
        element: <BirthLayout/>,
        children: [
            {
                path: "/birthlayout/registerBirthAndAdd", 
                element: <RegisterBirthAndAdd/>,
            },   
            {
                path: "/birthlayout/update",
                element: <BirthPostNatalUpdate/>
            },
            {
                path: "/birthlayout/viewAll",
                element: <BirthViewAll/>,
            },
            
        ]
    },
    {
        path:"/birthlayout/search-records",
        element: <RecordSearch/>,
    },
    {
        path: "/morguelayout",
        element: <MorgueLayout/>,
        children: [
            {
                path:"/morguelayout/morguereg/Adddeceased",
                element: <MorgueReg/>,
            },
            {
                path: "/morguelayout/viewAll",
                element: <MorgueViewAll/>,
            },
            {
                path: "/morguelayout/update",
                element: <MorgueUpdate/>,
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
    },
    {
        path: "/hospitalregisterDeath",
        element: <DeathLayout/>,
        children: [
            {
                path: "/hospitalregisterDeath/registerdeath",
                element: <HosRegisterDeath/>
            },
            {
                path: "/hospitalregisterDeath/update",
                element: <HosRegPostNatalUpdate/>
            },
            {
                path: "/hospitalregisterDeath/Viewall",
                element: <HosViewAll/>,
            }
        ]
    }
]
