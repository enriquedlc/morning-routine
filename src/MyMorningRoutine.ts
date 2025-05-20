import { Interval } from "./Interval";
import { MorningRoutine } from "./MorningRoutine";
import { RoutineInterval } from "./RoutineInterval";

import { parseTime } from "./utils";

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  private routine: Interval[] = [
    new RoutineInterval(parseTime("6:00"), parseTime("6:59"), "Do exercise"),
    new RoutineInterval(parseTime("7:00"), parseTime("7:29"), "Read"),
    new RoutineInterval(parseTime("7:30"), parseTime("7:59"), "Read and study"),
    new RoutineInterval(parseTime("6:45"), parseTime("6:59"), "Take a shower"),
    new RoutineInterval(parseTime("8:00"), parseTime("8:59"), "Have breakfast"),
  ];

  public whatShouldIDoNow(): string {
    const now = new Date();
    const decimalTime = now.getHours() + now.getMinutes() / 60;

    const routine = this.routine
      .filter((interval) => interval.contains(decimalTime))
      .sort((a, b) => a.duration() - b.duration())
      .at(0);

    return routine?.activity ?? "No activity";
  }
}
