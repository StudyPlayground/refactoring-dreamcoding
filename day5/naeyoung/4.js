function takeOff(price, percent) {
  return price * percent;
}

function takeAquarterOff(price) {
  return takeOff(price, 0.5);
}

function takeAhalfOff(price) {
  return takeOff(0.75);
}

const basePrice = 1000;
const halfDiscounted = takeAhalfOff(basePrice);
const quarterDiscounted = takeAquarterOff(basePrice);
