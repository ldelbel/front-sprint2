class ProductController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._message = new Bind(
      new Message(),
      new MessageView($('#messageView')),
      'message'
    );

    this.allProducts();
  }

  allProducts() {
    // TODO: implementar

    // let service = new ProdutoService();
    // service
    //   .obterProdutos()
    //   .then()
    //   .catch();

    this._message.message = 'ProdutosController ainda não foi implementado.';
  }
}
