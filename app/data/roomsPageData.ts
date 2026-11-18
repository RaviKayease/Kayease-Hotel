export const roomCategories = [
  "All Rooms",
  "Deluxe Rooms",
  "Premium Rooms",
  "Suites",
  "Luxury Rooms",
];

export const rooms = [
  // ================ DELUXE ROOMS ================
  {
    id: 1,
    name: "The Garden Deluxe",
    category: "Deluxe Rooms",
    location: "Jaipur",
    description:
      "A beautifully appointed bedroom with a plush king bed, soft neutral tones and a peaceful atmosphere.",
    image:
      "https://www.velora-hotel.com/elegant-hotel-room-with-luxury-bedding.jpg",
    price: 7500,
    size: "420 sq.ft.",
    guests: 2,
    beds: "King Bed",
    tag: "Garden View",
    rating: 4.8,
  },
  {
    id: 2,
    name: "The Heritage Deluxe",
    category: "Deluxe Rooms",
    location: "Udaipur",
    description:
      "A refined guest room featuring elegant furnishings, warm textures and a comfortable king-size bed.",
    image:
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/09/05/1507/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.jpg/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.16x9.jpg?imwidth=2560",
    price: 7900,
    size: "430 sq.ft.",
    guests: 2,
    beds: "King Bed",
    tag: "Heritage Charm",
    rating: 4.9,
  },

  // ================ PREMIUM ROOMS ================
  {
    id: 3,
    name: "The Premium Retreat",
    category: "Premium Rooms",
    location: "Jaipur",
    description:
      "Relax in a spacious bedroom with sophisticated interiors, a luxurious king bed and elegant details.",
    image:
      "https://www.gizapalace.com/images/site-specific/accommodation/rooms/deluxe-adapted/gallery/adapted-deluxe-king-S360-desktop.webp",
    price: 9500,
    size: "480 sq.ft.",
    guests: 2,
    beds: "King Bed",
    tag: "Premium Choice",
    rating: 4.9,
  },
  {
    id: 4,
    name: "The Executive Premium",
    category: "Premium Rooms",
    location: "Udaipur",
    description:
      "An inviting bedroom with a beautifully dressed king bed, elegant lighting and a relaxing seating corner.",
    image:
      "https://media.alotea.com/the-st-regis-washington-dc-washington-cover.webp",
    price: 11000,
    size: "540 sq.ft.",
    guests: 2,
    beds: "King Bed",
    tag: "Elegant Comfort",
    rating: 4.8,
  },

  // ================ SUITES ================
  {
    id: 5,
    name: "The Heritage Suite",
    category: "Suites",
    location: "Jaipur",
    description:
      "A spacious suite with a luxurious king bed, refined furnishings and a beautifully designed bedroom.",
    image:
      "https://static-new.lhw.com/HotelImages/Final/LW1325/lw1325_l2885084_720x450.jpg",
    price: 12500,
    size: "650 sq.ft.",
    guests: 3,
    beds: "King Bed",
    tag: "Most Loved",
    rating: 4.9,
  },
  {
    id: 6,
    name: "The Signature Suite",
    category: "Suites",
    location: "Udaipur",
    description:
      "Enjoy an indulgent bedroom with premium bedding, generous space and sophisticated contemporary styling.",
    image:
      "https://www.americanexpress.com/content/dam/amex/en-au/credit-cards/membership-benefits/the-platinum-card/accor/You_might_also_like_Section_FHR_Mobile.png",
    price: 16500,
    size: "780 sq.ft.",
    guests: 3,
    beds: "King Bed",
    tag: "Signature Stay",
    rating: 5.0,
  },

  // ================ LUXURY ROOMS ================
  {
    id: 7,
    name: "The Royal Residence",
    category: "Luxury Rooms",
    location: "Jaipur",
    description:
      "Experience exceptional comfort in a grand bedroom with a king-size bed, elegant furnishings and luxurious finishes.",
    image:
      "https://toc.h-cdn.co/assets/16/27/4000x2657/1-credit-the-peninsula-new-york.jpg",
    price: 15800,
    size: "820 sq.ft.",
    guests: 4,
    beds: "King Bed",
    tag: "Exclusive",
    rating: 5.0,
  },
  {
    id: 8,
    name: "The Maharaja Retreat",
    category: "Luxury Rooms",
    location: "Udaipur",
    description:
      "A magnificent bedroom with luxurious bedding, elegant furnishings and an atmosphere of timeless sophistication.",
    image:
      "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/07/GDX-CGI-ROOM.jpg?width=2048",
    price: 19500,
    size: "950 sq.ft.",
    guests: 4,
    beds: "King Bed",
    tag: "Royal Living",
    rating: 5.0,
  },
];

export const roomLocations = ["All Locations", "Jaipur", "Udaipur", "Goa"];

export const guestReviews = [
  {
    id: 1,
    featured: true,
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1400",
    alt: "Guests enjoying an elegant dining experience",
    label: "A GUEST STORY",
    review:
      "An evening to remember, surrounded by beautiful details and wonderful hospitality.",
    guest: "A Happy Guest",
    rating: 5,
  },
  {
    id: 2,
    featured: false,
    image: "https://resizer.otstatic.com/v2/photos/xlarge/2/43573935.webp",
    alt: "Guests sharing a memorable restaurant experience",
    review: "A beautiful escape from the everyday.",
    guest: "A Happy Guest",
    rating: 5,
  },
  {
    id: 3,
    featured: false,
    image:
      "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000",
    alt: "Guests enjoying time together",
    review: "Thoughtful service and moments we will cherish.",
    guest: "A Happy Guest",
    rating: 5,
  },
];
