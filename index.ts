interface MorningRoutine {
  whatShouldIDoNow(): string;
}

interface MorningRoutine {
  whatShouldIDoNow(): string;
}

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  private routine: [number, string][] = [
    [6.5, "Do exercise"],
    [7, "Read and study"],
    [8, "Have breakfast"],
  ];

  public whatShouldIDoNow(): string {
    const now = new Date();
    const currentHour = now.getHours();
    const minutes = now.getMinutes();

    console.log({ currentHour });
    console.log({ minutes });

    const found = this.routine.find(([hour]) => hour === currentHour);

    console.log({ found });

    return found?.[1] ?? "No activity";
  }
}
