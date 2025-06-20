import Campaign from "../components/Campaign";
import Layout from "../components/layout/Layout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import CampaignList from "../components/CampaignList";
import Dashboard from "../components/Dashboard";
import ContactUs from "../components/ContactUs";
import UserProfile from "../components/UserProfile";
import AboutUs from "../pages/AboutUs";

export const ROUTES =[
    {
        path: "/",
        element:<Layout/>,
    },

    {
        path: "/Login",
        element: <Login/>
    },

    {
        path: "/Signup",
        element: <Signup/>
    },

    {
        path: "/CampaignList",
        element: <CampaignList/>
    },

    {
        path: "/Dashboard",
        element: <Dashboard/>
    },

    {
        path: "/Campaign",
        element: <Campaign/>
    },

    {
        path: "/ContactUs",
        element: <ContactUs/>
    },

    {
        path: "/UserProfile",
        element: <UserProfile/>
    },

    {
        path: "/AboutUs",
        element: <AboutUs/>
    }
]