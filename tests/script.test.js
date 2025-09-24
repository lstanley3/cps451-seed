import { jest } from "@jest/globals";

describe("script.js", () => {
  test("logs Boot message on import", async () => {
    const logSpy = jest.spyOn(console, "log").mockImplementation(() => {});
    // Import AFTER spying so we capture the log done at module load
    await import("../src/script.js");
    expect(logSpy).toHaveBeenCalled();
    logSpy.mockRestore();
  });
});
