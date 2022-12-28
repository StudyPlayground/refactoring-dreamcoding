import _ from "lodash";

const product = {
  category: "book",
  name: "refactoring2",
  owner: { name: "Lily" },
};

class Product {
  constructor(data) {
    this.category = data.category;
    this.name = data.name;
    this.owner = _.cloneDeep(data.owner);
  }

  set ownerName(value) {
    this.owner.name = value;
  }
}

const book = new Product(product);
book.ownerName = "James";
console.log("book :>> ", book);
console.log(product);
