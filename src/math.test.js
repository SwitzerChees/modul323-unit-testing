const { sum, subtract, multiply, divide } = require("./math.js");

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

test("multiply multiplies numbers", () => {
  const result = multiply(3, 7);
  const expected = 21;
  expect(result).toBe(expected);
});

test("divide divides numbers", () => {
  const result = divide(21, 7);
  const expected = 3;
  expect(result).toBe(expected);
});
