import { Route, Navigate } from "react-router-dom";
import { Dashboard, RoutesWithNotFound } from './Components/index'


export const PrivateRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/dashboard" />} /> 
            <Route path="/dashboard" element={<Dashboard />} />
        </RoutesWithNotFound>
    )
}
