class Product {
  #category;
  #name;
  #owner;
  constructor(data) {
    this.#category = data.category;
    this.#name = data.name;
    this.#owner = data.owner;
  }

  get category() {
    return this.#category;
  }
  get name() {
    return this.#name;
  }
  get owner() {
    return this.#owner;
  }
}

const book = new Product('book', 'refactoring2', { name: 'Lily' });
book.owner.name = 'James';
