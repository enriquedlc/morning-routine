interface MorningRoutine {
  whatShouldIDoNow(): string;
}

interface MorningRoutine {
  whatShouldIDoNow(): string;
}

interface Interval {
  start: number;
  end: number;
  activity: string;

  isInInterval(hour: number): boolean;
}

class RoutineInterval implements Interval {
  constructor(
    public start: number,
    public end: number,
    public activity: string
  ) {}

  isInInterval(hour: number): boolean {
    return hour >= this.start && hour <= this.end;
  }
}

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  private routine: Interval[] = [
    new RoutineInterval(6, 6.99, "Do exercise"),
    new RoutineInterval(7, 7.49, "Read"),
    new RoutineInterval(7.5, 7.99, "Read and study"),
    new RoutineInterval(8, 8.99, "Have breakfast"),
  ];

  public whatShouldIDoNow(): string {
    const now = new Date();
    const currentHour = now.getHours();
    const minutes = now.getMinutes();

    const found = this.routine.find((interval) =>
      interval.isInInterval(currentHour + minutes / 60)
    );

    return found?.activity ?? "No activity";
  }
}
