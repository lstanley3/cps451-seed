import { jest } from "@jest/globals";
import { runExample } from "../src/index.js";

describe("index.js", () => {
  test("runExample returns expected object", () => {
    const res = runExample();
    expect(res).toEqual({
      sum: 3,
      greeting: "Hello, World!",
      quotient: 5,
    });
  });

  test("runExample logs Example output", () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    runExample();
    expect(logSpy).toHaveBeenCalledWith("Example output:", {
      sum: 3,
      greeting: "Hello, World!",
      quotient: 5,
    });
    logSpy.mockRestore();
  });
});
