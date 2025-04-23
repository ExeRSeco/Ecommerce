import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { Home, FormLogin, RoutesWithNotFound, Products, AboutLink, Checkout } from './Components/index'
import { PrivateGuard } from '../Private/Guard/privateGuard'
import { PrivateRouter } from "./PrivateRouter";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
        

                <Route path="/" element={<Navigate to={"/home"}/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/login" element={<FormLogin />} />
                <Route path="/products" element={<Products  />} />
                <Route path="/about" element={<AboutLink />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route element={<PrivateGuard />}>
                    <Route path="/private/*" element={<PrivateRouter />} /> 
                </Route>

            </RoutesWithNotFound> 
        </BrowserRouter>
    )
}