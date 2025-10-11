import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ROUTES} from "./routes";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Account from "./pages/Account";
import ProductsList from "./pages/ProductsList";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path={ROUTES.home} element={<Home />}/>
            <Route exact path={ROUTES.cart} element={<Cart />}/>
            <Route exact path={ROUTES.favorite} element={<Favorite />}/>
            <Route exact path={ROUTES.account} element={<Account />}/>
            <Route exact path={ROUTES.products} element={<ProductsList />}/>
            <Route exact path="/products/:id" element={<ProductDetail />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
