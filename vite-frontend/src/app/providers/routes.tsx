import MainLayout from "../layouts/MainLayout";
import HomePage from "../../pages/home/HomePage";
import CartPage from "../../pages/cart/CartPage";
import WishListsPage from "../../pages/favorites/WishListsPage";
import AccountPage from "../../pages/profile/ProfilePage";
import CatalogLayout from "../../features/catalog/CatalogLayout";
import CatalogPage from "../../pages/catalog/CatalogPage";
import ProductPage from "../../pages/product/ProductPage";
import NotFoundPage from "../../pages/not-found/NotFoundPage";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'cart', element: <CartPage /> },
            { path: 'wishlists', element: <WishListsPage /> },
            { path: 'account', element: <AccountPage /> },
            {
                path: 'catalog',
                element: <CatalogLayout />,
                children: [
                    { index: true, element: <CatalogPage /> },
                    { path: ':categorySlug', element: <CatalogPage /> },
                    { path: ':categorySlug/:subCategorySlug', element: <CatalogPage /> },
                    { path: ':categorySlug/:subCategorySlug/:productId', element: <ProductPage /> },
                ]
            }
        ],
    },
    { path: '*', element: <NotFoundPage /> },
];