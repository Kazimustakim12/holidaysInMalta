export const convertDateToDays = (date) => {
  const currentDate = new Date();
  const inputDate = new Date(date);

  const timeDifference = currentDate - inputDate;
  const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysAgo === 0) {
    const minutesAgo = Math.floor(timeDifference / (1000 * 60 * 24));
    return `${minutesAgo} minute${minutesAgo !== 1 ? "s" : ""} ago`;
  } else if (daysAgo === 1) {
    return "1 day ago";
  } else {
    return `${daysAgo} days ago`;
  }
};
