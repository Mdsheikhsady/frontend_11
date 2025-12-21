import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import ForgotPass from "../pages/ForgotPass";
import Error from "../pages/Error";
import DashboardLayout from "../DashboardLayout/DashboardLayout";
import MainDashboard from "../pages/Dashboard/MainDashboard/MainDashboard";
import AddRequest from "../pages/Dashboard/AddRequest/AddRequest";
import AllUsers from "../pages/AllUsers/AllUsers";
import MyRequest from "../pages/Dashboard/MyRequest/MyRequest";
import Donate from "../pages/Donate/Donate";
import PaymentSuccess from "../pages/PaymentSuccess/PaymentSuccess";
import SearchRequest from "../pages/SearchRequest/SearchRequest";
import MyProfile from "../pages/Dashboard/MyProfile/MyProfile";
import DonorDashboard from "../pages/Dashboard/DonorDashboard/DonorDashboard";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import AllRequest from "../pages/AllRequest/AllRequest";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement:<Error></Error>,
    children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/all-request',
            element: <AllRequest></AllRequest>
        },

        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<Register></Register>
        },
        {
            path: '/donate',
            element: <PrivateRouter><Donate></Donate></PrivateRouter>

        },
        {
            path: '/payment-success',
            element: <PaymentSuccess></PaymentSuccess>

        },
        {
            path: '/search',
            element: <SearchRequest></SearchRequest>

        },
      
        {
            path:'/profile',
            element:<PrivateRouter><Profile></Profile></PrivateRouter>
        },
        
        {
            path: '/forgot/:email',
            element: <ForgotPass></ForgotPass>
        },
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRouter><DashboardLayout></DashboardLayout></PrivateRouter>,
    children:[
        {
            path:'/dashboard',
            element: <MainDashboard></MainDashboard>
        },
        {
            path:'donor-dashboard',
            element: <DonorDashboard></DonorDashboard>
        },
        
        {
            path:'admin-dashboard',
            element: <AdminDashboard></AdminDashboard>
        },
        {
            path:'add-request',
            element: <AddRequest></AddRequest>
        },
        {
            path:'all-users',
            element: <AllUsers></AllUsers>
        },
        {
            path:'my-request',
            element: <MyRequest></MyRequest>
        },
        {
            path:'my-profile',
            element: <MyProfile></MyProfile>
        }
    ]
  }
]);

export default router;

'blood-donation-e615e.web.app/donation-request'