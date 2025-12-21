import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router';

const PrivateRouter = ({children}) => {
   
        const {user, loading, roleLoading, userStatus}= useContext(AuthContext)

        // console.log(location);

        if(loading || roleLoading){
            return <p>Loading...</p>
        }
        
        if (!user || !userStatus=='active'){
            return <Navigate to={'/login'}></Navigate>
        }
        
        return children;

         // return <Navigate state ={location.pathname} to='/login'></Navigate>

   
};

export default PrivateRouter;