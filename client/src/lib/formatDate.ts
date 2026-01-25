export function formatDate(date: string) {
  const now = new Date();
  const past = new Date(date);

  const diffInSeconds = Math.floor((now.getTime() - past.getTime()) / 1000);

  // 🔹 Within 24 hours → relative time
  if (diffInSeconds < 86400) {
    if (diffInSeconds < 60) {
      return "just now";
    }

    const minutes = Math.floor(diffInSeconds / 60);
    if (minutes < 60) {
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    }

    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }

  // 🔹 After 24 hours → normal date
  return past.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}
