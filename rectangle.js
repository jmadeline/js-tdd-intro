// Rectangle.js
class Rectangle {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  isSquare() {
    if (this.a === this.b) {
      return true;
    } else {
      return false;
    }
  }

  getArea() {
    return this.b * this.a;
  }

  getPerimeter() {
    return (this.a + this.b) * 2;
  }
}

module.exports = Rectangle;
