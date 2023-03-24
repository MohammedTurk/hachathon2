export function daysFormat(date) {
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

export default daysFormat;
