interface MorningRoutine {
  whatShouldIDoNow(): string;
}

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  public whatShouldIDoNow() {
    const now = new Date();
    const currentHour = now.getHours();

    if (currentHour === 6) {
      return "Do exercise";
    }

    return "No activity";
  }
}
