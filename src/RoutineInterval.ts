import { Interval } from "./Interval";

export class RoutineInterval implements Interval {
  constructor(
    public start: number,
    public end: number,
    public activity: string
  ) {}

  isInInterval(hour: number): boolean {
    return hour >= this.start && hour <= this.end;
  }
}
