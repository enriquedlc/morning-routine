import { Interval } from "./Interval";

export class RoutineInterval implements Interval {
  private readonly start: number;
  private readonly end: number;
  readonly activity: string;

  constructor(start: number, end: number, activity: string) {
    if (start >= end) {
      throw new Error(`Invalid interval ${start} should be less than ${end}`);
    }

    this.start = start;
    this.end = end;
    this.activity = activity;
  }

  contains(hour: number): boolean {
    return hour >= this.start && hour <= this.end;
  }

  duration(): number {
    return this.end - this.start;
  }

  overlapsWith(other: RoutineInterval): boolean {
    return this.start < other.end && other.start < this.end;
  }
}
