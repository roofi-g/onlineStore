import './App.css'
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ROUTES} from "./routes";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Favorite from "./pages/Favorite";
import Account from "./pages/Account";
import ProductDetail from "./pages/ProductDetail";
import CatalogPage from "./pages/CatalogPage";

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route exact path={ROUTES.home} element={<Home />}/>
                  <Route exact path={ROUTES.cart} element={<Cart />}/>
                  <Route exact path={ROUTES.favorite} element={<Favorite />}/>
                  <Route exact path={ROUTES.account} element={<Account />}/>
                  {/*<Route exact path={ROUTES.products} element={<CategoryPage />}/>*/}
                  <Route exact path="/products/:id" element={<ProductDetail />}/>
                  <Route exact path="/catalog/:id" element={<CatalogPage />}/>
              </Routes>
          </BrowserRouter>
      </Provider>
  )
}

export default App
