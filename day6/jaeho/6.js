class Tool {
  constructor(color, tool) {
    this.color = color ?? "black";
    this.tool = tool ?? new Pen();
  }

  paint() {
    return this.tool.paint(this.color);
  }

  blur() {
    return this.tool.blur ? this.tool.blur() : console.log("Can't blur");
  }
}

class Pen {
  paint(color) {
    console.log(`paint ${color} with pen`);
  }
}

class Marker {
  paint(color) {
    console.log(`paint ${color} with marker`);
  }
}

class Brush {
  paint(color) {
    console.log(`paint ${color} with Brush`);
  }

  blur() {
    console.log(`blurring...`);
  }
}

const pen = new Tool("red");
const marker = new Tool("blue", new Marker());
const brush = new Tool("green", new Brush());
pen.paint();
marker.paint();
brush.paint();
pen.blur();
marker.blur();
brush.blur();
