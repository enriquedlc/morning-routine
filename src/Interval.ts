export interface Interval {
  start: number;
  end: number;
  activity: string;

  isInInterval(hour: number): boolean;
}
