import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import PetCards from "../Pages/PetCards";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ServiceDetails from "../Pages/ServiceDetails";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element:<RootLayout></RootLayout>,
    children: [
        {
           index:true,
            element:<Home></Home>,
             loader:() => fetch('/pet.json'),
           
        },
    
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
      

    ]
   
  },
  {
    path: "/*",
    element: <div>404 Error</div>
  },
    {
          path:'/service/:id',
          element:<PrivateRoute>
            <ServiceDetails></ServiceDetails>,
          </PrivateRoute>,
          loader:() => fetch('/pet.json'),
        },
]);