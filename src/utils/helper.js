export function convertMinutesToHours(mins) {
  const hours = Math.floor(mins / 60);
  const minutes = mins % 60;
  return `${hours}h ${minutes}m`;
}

export function formatToDollars(amount, locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  }).format(amount);
}

export function calculateAge(birthDateString) {
  // Parse the birth date string
  const birthDate = new Date(birthDateString);

  // Check if the date is valid
  if (isNaN(birthDate.getTime())) {
    throw new Error("Invalid date format. Please use YYYY-MM-DD.");
  }

  const today = new Date();

  // Calculate the difference in years
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust if birthday hasn't occurred yet this year
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

export function loadState() {
  try {
    const itemfromLocalStorage = localStorage.getItem("wishlist");
    return itemfromLocalStorage ? JSON.parse(itemfromLocalStorage) : undefined;
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return undefined;
  }
}

export function saveState(state) {
  try {
    const itemToLocalStorage = JSON.stringify(state);
    localStorage.setItem("wishlist", itemToLocalStorage);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
}
