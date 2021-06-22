class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(data) {
    const array = data.produtos;
    let chunks = Array.from({ length: array.length / 4 }, () =>
     array.splice(0, 4)
    );

    return `
      ${chunks.map((row) => {
        return `
            <div class="products__row">
              <ol class="products__list">
              ${row.map(
                (produto) =>
                  `
                <li class="products__card">
                  <div class="card">
                    <img
                      class="card__img"
                      src=${produto.imagem}
                      alt=${produto.descricao}
                    />
                    <p class="card__description">
                      ${produto.descricao}
                    </p>
                    <p class="card__price">R$ ${produto.valor}</p>
                  </div>
                </li> `
              ).join('')}
              </ol>
            </div>
            
            `;
      }).join('')}
      
    `;
  }
}
