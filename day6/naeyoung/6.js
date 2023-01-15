class Pen {
  #penDelegate;
  constructor(penDelegate) {
    this.#penDelegate = penDelegate;
  }

  paint() {
    this.#penDelegate
      ? this.#penDelegate.paint()
      : console.log('paint with pen');
  }
}

class Marker {
  #color;
  constructor(color) {
    this.#color = color;
  }

  paint() {
    console.log(`paint ${this.#color} with marker`);
  }
}

class Brush {
  #color;
  constructor(color) {
    this.#color = color;
  }
  paint() {
    console.log(`paint ${this.#color} with Brush`);
  }

  blur() {
    console.log(`blurring...`);
  }
}

const marker = new Pen(new Marker('blue'));
const brush = new Pen(new Brush('green'));
marker.paint();
brush.paint();
