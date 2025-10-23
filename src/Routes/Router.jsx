import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import PetCards from "../Pages/PetCards";
import Home from "../Components/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";


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
            path:'/card',
            element:<PetCards></PetCards>,
            
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
  }
]);