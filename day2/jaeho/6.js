// 문제점 : 얕은 복사로 인해 데이터 불변성이 지켜지지 않아 의도치 않은 데이터 변경이 일어날 위험이 있습니다.
// (book의 출력물과 product의 출력물이 동일합니다)
class Owner {
  #name;
  constructor({ name }) {
    this.#name = name;
  }

  set name(name) {
    this.#name = name;
  }

  get detail() {
    return { name: this.#name };
  }
}

class Product {
  #category;
  #name;
  #owner;
  constructor({ category, name, owner }) {
    this.#category = category;
    this.#name = name;
    this.#owner = new Owner(owner);
  }

  get detail() {
    return {
      category: this.#category,
      name: this.#name,
      owner: this.#owner.detail,
    };
  }

  set ownerName(name) {
    this.#owner.name = name;
  }
}

let product = {
  category: "book",
  name: "refactoring2",
  owner: { name: "Lily" },
};

let book = new Product(product);
book.ownerName = "James";
console.log(book.detail);
console.log(product);
