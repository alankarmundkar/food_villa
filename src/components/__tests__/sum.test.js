import { sum } from "../sum"

test("Check sum of two positive numbers",() => {
    const result = sum(4,3)
    // Assertion 
    expect(result).toBe(7)
})