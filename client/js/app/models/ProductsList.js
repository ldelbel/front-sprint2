class ProductsList {
  
  constructor() {
    this._produtos = [];
  }

  adiciona(produtos) {
    this._produtos = [].concat(this._produtos, produtos);
  }

  get produtos() {
    return [].concat(this._produtos);
  }

  esvazia() {
    this._produtos = [];
  }
}
