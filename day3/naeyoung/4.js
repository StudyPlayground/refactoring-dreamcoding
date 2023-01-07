const items = [
  {
    name: 'sweatshirt',
    type: 'top',
  },
  {
    name: 'knit',
    type: 'top',
  },
  {
    name: 'widePants',
    type: 'pants',
  },
  {
    name: 'slacks',
    type: 'pants',
  },
  {
    name: 'Converse',
    type: 'shoes',
  },
];

class SearchFilter {
  #data;
  constructor(data) {
    this.#data = data;
  }
  get topList() {
    return this.#data.filter((item) => item.type === 'top');
  }

  get pantsList() {
    return this.#data.filter((item) => item.type === 'pants');
  }
  get shoesList() {
    return this.#data.filter((item) => item.type === 'shoes');
  }
}

const searchResult = new SearchFilter(items);

console.log('topsList :>> ', searchResult.topList);
console.log('pantsList :>> ', searchResult.pantsList);
console.log('shoesList :>> ', searchResult.shoesList);
