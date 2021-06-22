class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  async allProducts() {
    const produtos = await this._http.get('http://localhost:3000/produtos');
    return produtos;
  }
}
