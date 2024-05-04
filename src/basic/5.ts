enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: any): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return true;
  }
  return false;
};
