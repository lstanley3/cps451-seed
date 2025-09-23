// Import the script to make sure it runs
import("../src/script.js");

describe("script.js", () => {
  test("should import without throwing errors", async () => {
    await expect(import("../src/script.js")).resolves.not.toThrow();
  });

  test("should have side effects like logging Boot message", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    await import("../src/script.js");
    expect(logSpy).toHaveBeenCalled();
    logSpy.mockRestore();
  });
});
