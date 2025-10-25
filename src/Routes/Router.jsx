import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";

import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../Pages/MyProfile";
import ForgetPassword from "../Pages/ForgetPassword";
import UpdateProfile from "../Pages/UpdateProfile";
import Loading from "../Components/Loading";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children: [
        {
           index:true,
            element:<Home></Home>,
             loader:() => fetch('/pet.json'),
              hydrateFallbackElement:<Loading></Loading>,
           
        },
    
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/forgot-password',
          element:<ForgetPassword></ForgetPassword>
        },
        {
          path: '/update-profile',
          element:<UpdateProfile></UpdateProfile>
        },
         {
          path:'/service/:id',
          element:<PrivateRoute>
            <ServiceDetails></ServiceDetails>,
            
          </PrivateRoute>,
          loader:() => fetch('/pet.json'),
          hydrateFallbackElement:<Loading></Loading>,
        },
        {
          path:'/profile',
          element: <PrivateRoute>
            <MyProfile></MyProfile>,
          </PrivateRoute>
        }
      

    ]
   
  },
  {
    path: "/*",
    element: <div>404 Error</div>
  },
   
]);