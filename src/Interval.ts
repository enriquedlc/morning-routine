export interface Interval {
  start: number;
  end: number;
  activity: string;

  contains(hour: number): boolean;
}
