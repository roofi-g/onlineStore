export const sortProductsFunc = {
    hot: (a, b) => Number(b.isHot) - Number(a.isHot),
    new: (a, b) => new Date(b.create_at) - new Date(a.create_at),
    priseUp: (a, b) => a.price - b.price,
    priseDown: (a, b) => b.price - a.price,
}
