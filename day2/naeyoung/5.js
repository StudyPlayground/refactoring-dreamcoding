const items = [
  {
    id: 1,
    type: 'refund',
    name: '티셔츠',
  },

  {
    id: 2,
    type: 'exchange',
    name: '청바지',
  },
  {
    id: 3,
    type: 'refund',
    name: '티셔츠1',
  },
  {
    id: 4,
    type: 'credit',
    name: '신발',
  },
];

class ItemFilter {
  #items;
  constructor(items) {
    this.#items = items;
  }

  printItemsByType(type) {
    const filteredItems = this.#items.filter((item) => item.type === type);
    console.log(`${type}Items :>> `, filteredItems);
  }
}

const itemFilter = new ItemFilter(items);
itemFilter.printItemsByType('refund');
itemFilter.printItemsByType('credit');
itemFilter.printItemsByType('exchange');
