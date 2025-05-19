import { describe, it, vi, expect } from "vitest";

import { MyMorningRoutine } from "./index.ts";

describe("Morning routine", () => {
  it("should print 'Do exercise' between 06:00 and 06:59", () => {
    const date = new Date("2023-10-01T06:00:00");

    vi.useFakeTimers();
    vi.setSystemTime(date);

    const routine = new MyMorningRoutine();
    const activity = routine.whatShouldIDoNow();

    expect(activity).toBe("Do exercise");
    vi.useRealTimers();
  });
});
