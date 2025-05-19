interface MorningRoutine {
  whatShouldIDoNow(): string;
}

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  public whatShouldIDoNow() {
    const now = new Date();
    const currentHour = now.getHours();

    return "No activity";
  }
}
