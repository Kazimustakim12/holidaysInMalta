export const cx = (...classNames) => classNames.filter(Boolean).join(" ");
export function calculateReadingTime(contentLength, wordsPerMinute = 200) {
  // Assuming an average of 5 characters per word
  const words = contentLength / 5;
  const readingTimeMinutes = words / wordsPerMinute;
  return Math.ceil(readingTimeMinutes); // Round up to the nearest minute
}
