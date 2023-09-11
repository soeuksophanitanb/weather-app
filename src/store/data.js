export const getDateDetails = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Month is zero-based, so add 1
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  console.log(`Year: ${year}`);
  console.log(`Month: ${month}`);
  console.log(`Day: ${day}`);
  console.log(`Time: ${hours}:${minutes}:${seconds}`);
  return {
    year,
    month,
    day,
    hours,
  };
};
