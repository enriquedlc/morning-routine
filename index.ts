interface MorningRoutine {
  whatShouldIDoNow(): string;
}

export class MyMorningRoutine implements MorningRoutine {
  constructor() {}

  public whatShouldIDoNow() {
    const now = new Date();
    const currentHour = now.getHours();

    console.log("Current hour:", currentHour);

    if (currentHour === 6) {
      return "Do exercise";
    }

    return "No activity";
  }
}
