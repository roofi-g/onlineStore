export const ROUTES = {
    home: "/",
    cart: "/cart",
    wishlists: "/wishlists",
    account: "/account",
    products: "/products",
    productDetail: (id) => `/products/${id}`,
    catalog: (category) => `/catalog/${category}`,
}
