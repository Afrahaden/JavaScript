const getSleepHours = (day) => {
  switch (day) {
    case "Monday":
      return 8;
    case "Tuesday":
      return 6;
    case "Wednesday":
      return 7;
    case "Thursday":
      return 5;
    case "Friday":
      return 8;
    case "Saturday":
      return 9;
    case "Sunday":
      return 10;
  }
};

const getActualSleepHours = () => {
  return (
    getSleepHours("Monday") +
    getSleepHours("Tuesday") +
    getSleepHours("Wednesday") +
    getSleepHours("Thursday") +
    getSleepHours("Friday") +
    getSleepHours("Saturday") +
    getSleepHours("Sunday")
  );
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " more sleep hour(s) than needed this week.");
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
  }
};
calculateSleepDebt();
