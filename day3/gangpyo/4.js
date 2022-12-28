// 7.컬렉션 캡슐화하기

const itemList = [
  {
    name: "sweatshirt",
    type: "top",
  },
  {
    name: "knit",
    type: "top",
  },
  {
    name: "widePants",
    type: "pants",
  },
  {
    name: "slacks",
    type: "pants",
  },
  {
    name: "Converse",
    type: "shoes",
  },
];

class SearchResult {
  #data;
  constructor(data) {
    this.#data = data;
  }

  get onlyTop() {
    return this.#data.filter((item) => item.type === "top");
  }

  get onlyPants() {
    return this.#data.filter((item) => item.type === "pants");
  }

  get onlyShoes() {
    return this.#data.filter((item) => item.type === "shoes");
  }
}

const searchResult = new SearchResult(itemList);

const topList = searchResult.onlyTop;
const pantsList = searchResult.onlyPants;
const shoesList = searchResult.onlyShoes;

console.log("topsList :>> ", topList);
console.log("pantsList :>> ", pantsList);
console.log("shoesList :>> ", shoesList);
