import { describe, it, vi, expect } from "vitest";

import { MyMorningRoutine } from "./index.ts";

function activityAtTime(time: string, expected: string) {
  vi.useFakeTimers();
  vi.setSystemTime(new Date(`2023-10-01T${time}`));

  const routine = new MyMorningRoutine();
  const activity = routine.whatShouldIDoNow();

  expect(activity).toBe(expected);

  vi.useRealTimers();
}

describe("Morning routine", () => {
  it("should print 'Do exercise' between 06:00 and 06:59", () => {
    activityAtTime("06:00:00", "Do exercise");
  });

  it("should print 'Read and study' between 07:00 and 07:59", () => {
    activityAtTime("07:10:00", "Read and study");
  });

  it("should print 'Have breakfast' between 08:00 and 08:59", () => {
    activityAtTime("08:45:00", "Have breakfast");
  });
});
