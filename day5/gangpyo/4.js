const HALF = 0.5;
const QUARTER = 0.25;

function takeDiscount(price, discountPercent) {
  return price * (1 - price * discountPercent);
}

const basePrice = 1000;
const halfDiscounted = takeDiscount(basePrice, HALF);
const quarterDiscounted = takeDiscount(basePrice, QUARTER);
