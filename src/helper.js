import Moment from "moment";

// Format numbers with prefix (1.6k)
export const formatNumber = number => {
  if (Math.abs(number) > 999999) {
    return Math.sign(number) * (Math.abs(number) / 1000000).toFixed(1) + "m";
  } else if (Math.abs(number) > 999) {
    return Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k";
  } else {
    return Math.sign(number) * Math.abs(number) + "";
  }
};

// Formating date
export const formateDate = date => Moment(date).fromNow();

// subtract 30 days from today's date
export const last30Days = Moment()
  .subtract(30, "days")
  .format("YYYY-MM-DD");
