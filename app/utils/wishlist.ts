export const WISHLIST_KEY = "hotel-wishlist";

export const getWishlist = (): number[] => {
  if (typeof window === "undefined") return [];

  try {
    return JSON.parse(localStorage.getItem(WISHLIST_KEY) || "[]");
  } catch {
    return [];
  }
};

export const saveWishlist = (ids: number[]) => {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(ids));

  window.dispatchEvent(new Event("wishlistUpdated"));
};
