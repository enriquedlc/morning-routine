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
  it("should print 'Read and study' between 07:00 and 07:59", () => {
    const date = new Date("2023-10-01T07:10:00");

    vi.useFakeTimers();
    vi.setSystemTime(date);

    const routine = new MyMorningRoutine();
    const activity = routine.whatShouldIDoNow();

    expect(activity).toBe("Read and study");
    vi.useRealTimers();
  });
  it("should print 'Have breakfast' between 8:00 and 8:59", () => {
    const date = new Date("2023-10-01T08:20:00");

    vi.useFakeTimers();
    vi.setSystemTime(date);

    const routine = new MyMorningRoutine();
    const activity = routine.whatShouldIDoNow();

    expect(activity).toBe("Have breakfast");
  });
});
