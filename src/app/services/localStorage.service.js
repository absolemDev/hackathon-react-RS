export function setFavorite(nick) {
  const favorites = JSON.parse(getFavorites()) || [];
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites.includes(nick) ? favorites : [...favorites, nick])
  );
}

export function getFavorites() {
  return localStorage.getItem("favorites");
}

export function removeFavorite(nick) {
  const favorites = JSON.parse(getFavorites()) || [];
  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites.filter((i) => i !== nick))
  );
}

const localStorageService = {
  setFavorite,
  getFavorites,
  removeFavorite
};
export default localStorageService;
