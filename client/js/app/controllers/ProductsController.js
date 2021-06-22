class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._products = new Bind(
      new ProductsList(),
      new ProductsView($('#products')),
      'adiciona',
      'esvazia'
    )

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this.allProducts();
  }

  async allProducts() {
    const service = new ProductService();
    const products = await service.allProducts();

    const data = products.map(product => new Product(product.imagem, product.descricao, product.valor));
    this._products.adiciona(data);
  }
}
