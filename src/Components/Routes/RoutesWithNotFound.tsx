import { Route, Routes, Navigate } from "react-router-dom"
import { AppRouterProps } from '../../Types/types'



export const RoutesWithNotFound = ({children}: AppRouterProps) => {
    return (
        <Routes>
            {children}
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<h1>404 PAGE NOT FOUND =( </h1>} />
        </Routes>
    )
}