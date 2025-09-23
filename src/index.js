import { add, greet, safeDivide } from "./lib/utils.js";

export function runExample() {
  const result = {
    sum: add(1, 2),
    greeting: greet("World"),
    quotient: safeDivide(10, 2),
  };

  // ✅ Ensure logging happens (test is looking for this)
  console.log("Example output:", result);

  return result;
}
