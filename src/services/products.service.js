export const productsQuery  = () => {
    return fetch('https://raw.githubusercontent.com/vitaliy5651/Product_items/main/products.json', {
        method: 'GET'
    })
}