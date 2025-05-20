import { Interval } from "./Interval";

export class RoutineInterval implements Interval {
  constructor(
    public start: number,
    public end: number,
    public activity: string
  ) {}

  contains(hour: number): boolean {
    return hour >= this.start && hour <= this.end;
  }
}
