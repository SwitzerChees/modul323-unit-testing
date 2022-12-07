const { prefix } = require("./text-manipulator.js");

test("My First Test", () => {
    expect(3 * 3).toBe(9);
})

test("Test my Prefix", () => {
    const myPrefix = prefix("MyPrefix");
    expect(myPrefix("Test String")).toBe("MyPrefix: Test String");
})