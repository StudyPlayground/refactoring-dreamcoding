// 필드 내리기, 슈퍼클래스 추출하기

class Pen {
  paint() {
    console.log("paint with pen");
  }
}

class ColorPen {
  color;
  constructor(color) {
    this.color = color;
  }
  paint() {
    console.log(`paint ${this.color} with pen`);
  }
}

class Marker extends ColorPen {
  constructor(color) {
    super(color);
  }

  paint() {
    console.log(`paint ${this.color} with marker`);
  }
}

class Brush extends ColorPen {
  constructor(color) {
    super(color);
  }

  paint() {
    console.log(`paint ${this.color} with Brush`);
  }

  blur() {
    console.log(`blurring...`);
  }
}

const marker = new Marker("blue");
const brush = new Brush("green");
marker.paint();
brush.paint();
