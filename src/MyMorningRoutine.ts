import { Interval } from "./Interval";
import { MorningRoutine } from "./MorningRoutine";
import { RoutineInterval } from "./RoutineInterval";

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  private routine: Interval[] = [
    RoutineInterval.from("6:00", "6:59", "Do exercise"),
    RoutineInterval.from("7:00", "7:29", "Read"),
    RoutineInterval.from("7:30", "7:59", "Study"),
    RoutineInterval.from("8:00", "8:59", "Have breakfast"),
    RoutineInterval.from("6:45", "6:59", "Take a shower"),
    RoutineInterval.from("7:00", "7:29", "Read"),
    RoutineInterval.from("7:30", "7:59", "Study"),
    RoutineInterval.from("8:00", "9:00", "Have breakfast"),
  ];

  public whatShouldIDoNow(): string {
    const now = new Date();
    const decimalTime = now.getHours() + now.getMinutes() / 60;

    const interval = this.routine
      .filter((interval) => interval.contains(decimalTime))
      .sort((a, b) => a.duration() - b.duration())
      .at(0);

    return interval?.activity ?? "No activity";
  }
}
