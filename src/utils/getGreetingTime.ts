import { DateTime } from "luxon";

const getGreetingTime = (d = DateTime.now()) => {
  const split_afternoon = 12; // 24hr time to split the afternoon
  const split_evening = 17; // 24hr time to split the evening
  const currentHour = d.hour;

  if (currentHour >= split_afternoon && currentHour <= split_evening) {
    return "afternoon";
  } else if (currentHour >= split_evening) {
    return "evening";
  }
  return "morning";
};

export default getGreetingTime;
