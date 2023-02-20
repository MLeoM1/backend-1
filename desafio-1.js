class Product {
    constructor(id, title, description, price, thumbnail, code, stock) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = [];
        this.lastProductId = 0;
    }

    // Método para agregar un producto
    addProduct(title, description, price, thumbnail, code, stock) {
      // Validar que los campos obligatorios no estén vacíos
    if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("Todos los campos son obligatorios");
    }

      // Validar que el campo "code" no se repita
    const productWithSameCode = this.products.find((p) => p.code === code);
    if (productWithSameCode) {
        throw new Error("Ya existe un producto con el mismo código");
    }

      // Asignar un id autoincrementable al producto
    const id = ++this.lastProductId;

      // Retornar el producto agregado
    return product;
    }

    // Método para obtener todos los productos
    getProducts() {
        return this.products;
    }

    // Método para obtener un producto por ID
    getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
        console.error("Not found");
    }
    return product;
    }
}