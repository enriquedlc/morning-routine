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
    } else if (currentHour === 7) {
      return "Read and study";
    } else if (currentHour === 8) {
      return "Have breakfast";
    }

    return "No activity";
  }
}
