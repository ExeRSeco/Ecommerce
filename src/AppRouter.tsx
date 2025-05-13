import { Navigate, Route } from "react-router-dom";
import { Home, FormLogin, RoutesWithNotFound, AboutLink, Checkout, PayMethods, FormRegister } from './Components/index'
import { PrivateGuard } from '../Private/Guard/privateGuard'
import { PrivateRouter } from "./PrivateRouter";
import { ProductsFiltered } from "./Components/SectionProducts/ProductsFiltered";

export const AppRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={"/home"}/>} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<FormLogin />} />
            <Route path="/register" element={<FormRegister />} />
            <Route path="/products" element={<ProductsFiltered onFilterChange={() => {}} />} />
            <Route path="/about" element={<AboutLink />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/paymethods" element={<PayMethods />} />
            <Route element={<PrivateGuard />}>
                <Route path="/private/*" element={<PrivateRouter />} /> 
                
            </Route>
        </RoutesWithNotFound> 
    )
}