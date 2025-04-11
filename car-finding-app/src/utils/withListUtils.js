// utils/wishlistUtils.js

// Get wishlist items from localStorage
export const getWishlist = () => {
  const wishlist = localStorage.getItem("carWishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

// Add a car to wishlist
export const addToWishlist = (car) => {
  const wishlist = getWishlist();
  // Check if car already exists in wishlist
  if (!wishlist.some((item) => item.id === car.id)) {
    const newWishlist = [...wishlist, car];
    localStorage.setItem("carWishlist", JSON.stringify(newWishlist));
    return newWishlist;
  }
  return wishlist;
};

// Remove a car from wishlist
export const removeFromWishlist = (carId) => {
  const wishlist = getWishlist();
  const newWishlist = wishlist.filter((car) => car.id !== carId);
  localStorage.setItem("carWishlist", JSON.stringify(newWishlist));
  return newWishlist;
};

// Check if a car is in wishlist
export const isInWishlist = (carId) => {
  const wishlist = getWishlist();
  return wishlist.some((car) => car.id === carId);
};
