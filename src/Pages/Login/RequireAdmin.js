import { signOut } from 'firebase/auth';
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useDoctor from '../../hooks/useDoctor';
import Loading from '../Shared/Loading';

const RequireAdmin = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    const [doctor, doctorLoading] = useDoctor(user)
    const location = useLocation();

    if(loading || adminLoading){
        return <Loading />
    }

    if(!user || !admin){
        signOut(auth)
        return <Navigate to='/login' state={{from: location}} />
    }

  return children;
}

export default RequireAdmin
