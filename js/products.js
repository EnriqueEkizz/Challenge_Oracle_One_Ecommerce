// ## Lista de productos
const products = [
    {id: 1, category: 'Star Wars', description: 'Producto xyz', price: 60.00, path: 'assets/pro_starwars_1.png'},
    {id: 2, category: 'Star Wars', description: 'Producto xyz', price: 60.00, path: 'assets/pro_starwars_2.png'},
    {id: 3, category: 'Star Wars', description: 'Producto xyz', price: 60.00, path: 'assets/pro_starwars_3.png'},
    {id: 4, category: 'Star Wars', description: 'Producto xyz', price: 60.00, path: 'assets/pro_starwars_4.png'},
    {id: 5, category: 'Star Wars', description: 'Producto xyz', price: 60.00, path: 'assets/pro_starwars_5.png'},
    {id: 6, category: 'Star Wars', description: 'Producto xyz', price: 60.00, path: 'assets/pro_starwars_6.png'},
    {id: 7, category: 'Consolas', description: 'Producto xyz', price: 60.00, path: 'assets/pro_consolas_1.png'},
    {id: 8, category: 'Consolas', description: 'Producto xyz', price: 60.00, path: 'assets/pro_consolas_2.png'},
    {id: 9, category: 'Consolas', description: 'Producto xyz', price: 60.00, path: 'assets/pro_consolas_3.png'},
    {id: 10, category: 'Consolas', description: 'Producto xyz', price: 60.00, path: 'assets/pro_consolas_4.png'},
    {id: 11, category: 'Consolas', description: 'Producto xyz', price: 60.00, path: 'assets/pro_consolas_5.png'},
    {id: 12, category: 'Consolas', description: 'Producto xyz', price: 60.00, path: 'assets/pro_consolas_6.png'},
    {id: 13, category: 'Diversos', description: 'Producto xyz', price: 60.00, path: 'assets/pro_div_1.png'},
    {id: 14, category: 'Diversos', description: 'Producto xyz', price: 60.00, path: 'assets/pro_div_2.png'},
    {id: 15, category: 'Diversos', description: 'Producto xyz', price: 60.00, path: 'assets/pro_div_3.png'},
    {id: 16, category: 'Diversos', description: 'Producto xyz', price: 60.00, path: 'assets/pro_div_4.png'},
    {id: 17, category: 'Diversos', description: 'Producto xyz', price: 60.00, path: 'assets/pro_div_5.png'},
    {id: 18, category: 'Diversos', description: 'Producto xyz', price: 60.00, path: 'assets/pro_div_6.png'}
]

/**
 * 
 * @param {json} pDataProduct json con datos de un productos
 * @returns html del producto
 */
const createHtmlProduct = (pDataProduct) => {
    let text = `
        <article class="gallery__item gallery__item_edit">
            <div class="gallery__toolbar">
                <button id="btnBuscar" class="button button_transparent button_square_sm material-symbols-outlined">delete</button>
                <button id="btnBuscar" class="button button_transparent button_square_sm material-symbols-outlined">edit</button>
            </div>
            <div class="gallery__imagen">
                <img src="${pDataProduct.path}" alt="">
            </div>
            <span class="gallery__description gallery__text">${pDataProduct.description}</span>
            <span class="gallery__price gallery__text">$ ${pDataProduct.price}</span>
            <span class="gallery__description gallery__text"># ${pDataProduct.id}</span>
        </article>
    `;

    return text;
}

/**
 * Listar todos los productos en "products.html"
 */
const listProducts = () => {
    let content = document.getElementById('gallery__content');
    let textElements = '';

    products.map(elem => {
        textElements += createHtmlProduct(elem);
    })

    content.innerHTML = textElements;
}

// ## Listar todos los productos al ingresar a "products.html"
listProducts();
