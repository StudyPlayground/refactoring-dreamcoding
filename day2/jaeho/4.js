class Cart {
  #items;
  constructor(items) {
    this.#items = items;
  }

  get isEmpty() {
    return this.#items.length === 0;
  }
}

const cart = new Cart([]);

if (cart.isEmpty) {
  console.log("장바구니가 비었습니다.");
}
