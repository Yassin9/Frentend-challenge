export const numberFormat = number => {
  if (Math.abs(number) > 999999999) {
    return Math.sign(number) * (Math.abs(number) / 1000000000).toFixed(1) + "b";
  } else if (Math.abs(number) > 999999) {
    return Math.sign(number) * (Math.abs(number) / 1000000).toFixed(1) + "m";
  } else if (Math.abs(number) > 999) {
    return Math.sign(number) * (Math.abs(number) / 1000).toFixed(1) + "k";
  } else {
    return Math.sign(number) * Math.abs(number) + "";
  }
};
