const datas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const odds = datas.filter((data) => data % 2 !== 0);

class Numbers {
  #data;

  constructor(data) {
    this.#data = data;
  }

  get onlyOdds() {
    return this.#data.filter((data) => data % 2 !== 0);
  }
}
