import MainLayout from "../components/MainLayout";
import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import WishListsPage from "../pages/WishListsPage";
import AccountPage from "../pages/AccountPage";
import CatalogLayout from "../components/catalog/CatalogLayout";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import NotFoundPage from "../pages/NotFoundPage";

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
