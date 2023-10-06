
/**
 * Calcula el precio total de una lista de productos.
 *
 * @param {Array} products cartProduct - La lista de productos.
 * @returns {number} El precio total de todos los productos.
 */

export const totalPrice = (products) =>{

    let sum= 0
    products.forEach(product => sum  += product.price)
    return sum 
}