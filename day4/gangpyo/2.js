class App {
  #name;
  #downloads;
  #platform;
  constructor(name, downloads, platform) {
    this.#name = name ?? "미분류";
    this.#downloads = downloads;
    this.#platform = platform ?? "미분류";
  }

  get name() {
    return this.#name;
  }

  get type() {
    return "미분류";
  }

  get downloads() {
    return this.#downloads;
  }

  get platform() {
    return this.#platform;
  }

  get degreeOfPopular() {
    if (this.#downloads === null) return "측정불가";

    if (10000 < this.#downloads) return "OMG";

    if (1000 < this.#downloads) return "Hot";

    if (100 < this.#downloads) return "Rising";

    return "New";
  }
}

class Puzzle extends App {
  constructor(name, downloads, platform) {
    super(name, downloads, platform);
  }

  get type() {
    if (this.platform === "Play-Store") return "Puzzle";
    if (this.platform === "App-Store") return "전략";
    return "미분류";
  }
}

class FPS extends App {
  constructor(name, downloads, platform) {
    super(name, downloads, platform);
  }

  get type() {
    if (this.platform === "Play-Store") return "FPS";
    if (this.platform === "App-Store") return "슈팅";
    return "미분류";
  }
}

class RPG extends App {
  constructor(name, downloads, platform) {
    super(name, downloads, platform);
  }

  get type() {
    if (this.platform === "Play-Store") return "RPG";
    if (this.platform === "App-Store") return "롤플레잉";
    return "미분류";
  }
}

class ETC extends App {
  constructor(name, downloads, platform) {
    super(name, downloads, platform);
  }

  get type() {
    return "etc";
  }
}

const apps = [
  new Puzzle("테트리스", 486, "Play-Store"),
  new FPS("배틀그라운드", 9999999, "App-Store"),
  new RPG("던전앤파이터", 9505, "Play-Store"),
  new ETC("디데이 계산기", 12, "App-Store"),
  new App(null, null, null),
];

apps.forEach((app) =>
  console.log([app.name, app.type, app.degreeOfPopular, app.platform])
);
