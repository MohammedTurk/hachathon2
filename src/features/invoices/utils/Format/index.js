function daysFormat(date) {
  const mileSecond = new Date().getTime() - new Date(date).getTime();
  const day = Math.floor(mileSecond / (1000 * 3600 * 24));

  switch (day) {
    case 0:
      return "Today";
    case 1:
      return "Yesterday";
    default:
      return `${day} days ago`;
  }
}
function date(date) {
  return new Date(date).toLocaleDateString("us-en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
function time(time) {
  return new Date(time).toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "2-digit",
  });
}
export const Format = {
  daysFormat,
  date,
  time,
};

export default Format;
