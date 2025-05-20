import { Interval } from "./Interval";
import { MorningRoutine } from "./MorningRoutine";
import { RoutineInterval } from "./RoutineInterval";

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  private routine: Interval[] = [
    new RoutineInterval(6, 6.99, "Do exercise"),
    new RoutineInterval(7, 7.49, "Read"),
    new RoutineInterval(7.5, 7.99, "Read and study"),
    new RoutineInterval(6.75, 6.99, "Take a shower"),
    new RoutineInterval(8, 8.99, "Have breakfast"),
  ];

  public whatShouldIDoNow(): string {
    const now = new Date();
    const decimalTime = now.getHours() + now.getMinutes() / 60;

    const found = this.routine
      .filter((interval) => interval.contains(decimalTime))
      .sort((a, b) => a.end - a.start - (b.end - b.start))
      .at(0);

    return found?.activity ?? "No activity";
  }
}
