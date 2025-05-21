import { describe, it, vi, expect } from "vitest";

import { MyMorningRoutine } from "../MyMorningRoutine";

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
    activityAtTime("06:10:00", "Do exercise");
  });
  it("should print 'Read' between 7:00 and 7:29", () => {
    activityAtTime("07:00:00", "Read");
  });
  it("should print 'Study' between 07:30 and 07:59", () => {
    activityAtTime("07:32:00", "Study");
  });
  it("should print 'Have breakfast' between 08:00 and 08:59", () => {
    activityAtTime("08:45:00", "Have breakfast");
  });
  it("should print 'Do exercise' between 06:00 and 06:44", () => {
    activityAtTime("06:40:00", "Do exercise");
  });
  it("should print 'Take a shower' between 06:45 and 06:59", () => {
    activityAtTime("06:50:00", "Take a shower");
  });
  it("should print 'Read' between 7:00 and 7:29", () => {
    activityAtTime("07:00:00", "Read");
  });
  it("should print 'Study' between 07:30 and 07:59", () => {
    activityAtTime("07:32:00", "Study");
  });
  it("should print 'Have breakfast' between 08:00 and 09:00", () => {
    activityAtTime("08:20:00", "Have breakfast");
  });
  it("should print 'No activity' outside time interval", () => {
    activityAtTime("12:00:00", "No activity");
  });
});

describe("Morning routine each", () => {
  it.each([
    ["06:10:00", "Do exercise"],
    ["07:00:00", "Read"],
    ["07:32:00", "Study"],
    ["08:45:00", "Have breakfast"],
    ["06:40:00", "Do exercise"],
    ["06:50:00", "Take a shower"],
    ["07:00:00", "Read"],
    ["07:32:00", "Study"],
    ["08:20:00", "Have breakfast"],
    ["12:00:00", "No activity"],
  ])("should print '%s' at %s", (time, expected) => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(`2023-10-01T${time}`));

    const routine = new MyMorningRoutine();
    const activity = routine.whatShouldIDoNow();

    expect(activity).toBe(expected);

    vi.useRealTimers();
  });
});
