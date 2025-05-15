interface MorningRoutine {
  whatShouldIDoNow(): void;
}

export class MyMorningRouting implements MorningRoutine {
  public whatShouldIDoNow() {
    const now = new Date();
    const currentHour = now.getHours();
    if (currentHour == 6) {
      console.log("Do exercise");
    } else if (currentHour == 7) {
      console.log("Read and study");
    } else if (currentHour == 8) {
      console.log("Have breakfast");
    } else {
      console.log("No activity");
    }
  }
}

const myMorningRoutine = new MyMorningRouting();
myMorningRoutine.whatShouldIDoNow();
