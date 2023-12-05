function monthDateYear(isoDate) {
  const date = new Date(isoDate);

  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
}

// Example usage
const isoDate = "2024-12-31T00:00:00.000Z";
const formattedDate = monthDateYear(isoDate);

console.log(formattedDate); // December 31, 2024
