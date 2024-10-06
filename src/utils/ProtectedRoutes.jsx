import { Outlet, Navigate } from 'react-router-dom'
import {database} from "../utils/firebase"

const PrivateRoutes = () => {
    const token = localStorage.getItem('token');
    const auth = token;

    return(
        auth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes