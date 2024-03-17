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
import ViewAll from "../component/Pages/Admin/ViewAll";
import UpdateBirthInfo from "../component/Pages/Admin/UpdateBirthInfo";
import UpdateDeathInfo from "../component/Pages/Admin/UpdateDeathInfo";
import RecordSearch from "../component/Pages/Admin/RecordSearch";
import MortuarySignUpForm from "../component/Pages/SignUp/MorgueSignUpForm";
import RegisterBirthAndAdd from "../component/Home/RegisterBirth";
import HosRegisterDeath from "../component/Home/HosRegisterDeath";
import MorgueReg from "../component/Home/MorgueReg";
import MorgueLayout from "../layout/MorgueLayout";
import PostNatalUpdate from "../component/Pages/HosNavBarMethods/PostNatalUpdate";

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
                path: "/birthlayout/viewAll",
                element: <ViewAll />
            },
            {
                path: "/birthlayout/update-birth-info",
                element: <UpdateBirthInfo />,
            },
            
            {
                path:"/birthlayout/postNatalUpdate",
                element: <PostNatalUpdate/>,
            },

        ]
    },
    {
        path:"/birthlayout/search-records",
        element: <RecordSearch/>,
    },
    {
        path: "/deathlayout",
        element: <MorgueLayout/>,
        children: [
            {
                path:"/deathlayout/morguereg/Adddeceased",
                element: <MorgueReg/>,
            },
            {
                path:"/deathlayout/update-death-info",
                element: <UpdateDeathInfo/>,
            },
            {
                path:"/deathlayout/search-records",
                element: <RecordSearch/>,
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
                path: "/hospitalregisterDeath",
                element: <HosRegisterDeath/>
            }
        ]
    }
]
