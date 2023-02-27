class ProductManager {
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((p) => p.id === id);
    if (!product) {
      throw new Error(`Producto no encontrado con ID ${id}`);
    }
    return product;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (this.products.some((p) => p.code === code)) {
      throw new Error(`El producto con el codigo ${code} ya existe`);
    }
    const product = {
      id: ++this.lastId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
    return product;
  }
}

const productManager = new ProductManager();

console.log(productManager.getProducts()); 

const newProduct = productManager.addProduct(
  "producto prueba",
  "Este es un producto prueba",
  200,
  "Sin imagen",
  "abc123",
  25
);
console.log(newProduct); 

console.log(productManager.getProducts()); 

try {
  productManager.addProduct(
    "otro producto",
    "Este es otro producto",
    150,
    "Sin imagen",
    "abc123",
    20
  );
} catch (error) {
  console.log(error.message);
}

const productById = productManager.getProductById(1);
console.log(productById); 