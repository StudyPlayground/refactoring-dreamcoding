const percentMap = {
  half: 0.5,
  quater: 0.25,
};

function discountPercent(price, percent) {
  return price * (1 - percentMap[percent]);
}

const basePrice = 1000;
const halfDiscounted = discountPercent(basePrice, "half");
const quarterDiscounted = discountPercent(basePrice, "quater");
