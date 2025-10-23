import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';
import Loading from '../Components/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext)


     if(loading){
        return <Loading></Loading>
     }
    if(user && user?.email){
     return children
    }
        return <Navigate to='/login'></Navigate>
    
    
};

export default PrivateRoute;