// 조건부 로직을 다형성으로 바꾸기
// 특이 케이스 추가하기

class App {
  #name;
  #type;
  #downloads;
  #platform;
  constructor(name, type, downloads) {
    this.#name = name;
    this.#type = type;
    this.#downloads = downloads;
    this.#platform = "미등록";
  }

  get name() {
    return this.#name;
  }

  get type() {
    return this.#type;
  }

  get platform() {
    return this.#platform;
  }

  set platform(arg) {
    this.#platform = arg;
  }

  degreeOfPopular() {
    if (10000 < this.#downloads) return "OMG";
    else if (1000 < this.#downloads) return "Hot";
    else if (100 < this.#downloads) return "Rising";
    else return "New";
  }
}

class PlayStoreApp extends App {
  constructor(...args) {
    super(...args);
    this.platform = "Play-Store";
  }

  get type() {
    return ["RPG", "FPS", "Puzzle"].includes(super.type) ? super.type : "etc";
  }
}

class AppStoreApp extends App {
  constructor(...args) {
    super(...args);
    this.platform = "App-Store";
  }

  get type() {
    switch (super.type) {
      case "RPG":
        return "롤플레잉";
      case "FPS":
        return "슈팅";
      case "Puzzle":
        return "전략";
      default:
        return "기타";
    }
  }
}

class NullApp extends App {
  get name() {
    return "미작성";
  }

  get type() {
    return "미분류";
  }

  degreeOfPopular() {
    return "측정 불가";
  }
}

class Apps {
  #apps;
  constructor(apps) {
    this.#apps = apps;
  }

  print() {
    this.#apps.forEach((app) =>
      console.log([app.name, app.type, app.degreeOfPopular(), app.platform])
    );
  }
}

const apps = new Apps([
  new PlayStoreApp("테트리스", "Puzzle", 486),
  new AppStoreApp("배틀그라운드", "FPS", 9999999),
  new PlayStoreApp("던전앤파이터", "RPG", 9505),
  new AppStoreApp("디데이 계산기", "생산성", 12),
  new NullApp(null, null, null),
]);

apps.print();
