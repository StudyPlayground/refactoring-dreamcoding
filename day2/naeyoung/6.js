// 문제점 : 얕은 복사된 객체로, 중첩된 객체가 있을 때에는 불변성을 지키지 못한다.

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

const book = new Product("book", "refactoring2", { name: "Lily" });
book.owner.name = "James";
