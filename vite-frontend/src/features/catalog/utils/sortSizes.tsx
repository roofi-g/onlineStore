export function sortSizes(sizes) {
    const sizeOrder = ['XS', 'S', 'M', 'L', 'XL'];
    const areNumbers = sizes.every(size => !isNaN(Number(size)));

    if (areNumbers) return sizes.sort((a, b) => Number(a) - Number(b));

    return sizes.sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));
}
