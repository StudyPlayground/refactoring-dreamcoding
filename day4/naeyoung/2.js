class App {
  name;
  type;
  downloads;
  platform;
  constructor(name, type, downloads, platform) {
    this.name = name;
    this.type = type;
    this.downloads = downloads;
    this.platform = platform;
  }

  get name() {
    return this.name;
  }

  get type() {
    return this.type;
  }

  get downloads() {
    return this.downloads;
  }

  get platform() {
    return this.platform;
  }

  print() {
    return [
      this.name ?? '미분류',
      this.getType(),
      this.degreeOfPopular(),
      this.platform ?? '미등록',
    ];
  }

  getType() {
    if (this.platform === 'Play-Store') {
      switch (this.type) {
        case 'RPG':
        case 'FPS':
        case 'Puzzle':
          return this.type;
        default:
          return 'etc';
      }
    } else if (this.platform === 'App-Store') {
      switch (this.type) {
        case 'RPG':
          return '롤플레잉';
        case 'FPS':
          return '슈팅';
        case 'Puzzle':
          return '전략';
        default:
          return 'etc';
      }
    } else {
      return '미분류';
    }
  }

  degreeOfPopular() {
    const { downloads } = this;
    if (!downloads) {
      return '측정 불가';
    }
    if (10000 < downloads) {
      return 'OMG';
    }
    if (1000 < downloads) {
      return 'Hot';
    }
    if (100 < downloads) {
      return 'Rising';
    }
    return 'New';
  }
}

const apps = [
  new App('테트리스', 'Puzzle', 486, 'Play-Store'),
  new App('배틀그라운드', 'FPS', 9999999, 'App-Store'),
  new App('던전앤파이터', 'RPG', 9505, 'Play-Store'),
  new App('디데이 계산기', 'etc', 12, 'App-Store'),
  new App(null, null, null, null),
];

apps.forEach((app) => {
  console.log(app.print());
});
