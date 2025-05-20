export interface Interval {
  activity: string;

  contains(hour: number): boolean;
  duration(): number;
  overlapsWith(other: Interval): boolean;
}
