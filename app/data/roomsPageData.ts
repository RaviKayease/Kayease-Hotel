// ============================================================
// ROOMS PAGE — HERO SECTION
// Customizable hero title, image, and introductory content
// ============================================================

export const roomsHero = {
  title: "Rooms & Suites",

  image:
    "https://cdn.prod.website-files.com/62e545b3db35992e653f9087/6967cdf0c4492e27096c53a1_oneandonly-aesthesis-athens-greece-boutique-hotel-31.webp",

  imageAlt: "Luxury boutique hotel suite",

  eyebrow: "A PLACE TO CALL YOUR OWN",

  heading: "Your own kind of",

  highlightedHeading: "beautiful.",
};

// ============================================================
// ROOMS PAGE — ROOM COLLECTION SECTION
// Main heading displayed above the room collection
// ============================================================

export const roomsCollectionContent = {
  heading: "Find Your Perfect Stay",
};

// ============================================================
// ROOMS PAGE — ROOM COLLECTION SECTION
// Room categories used to organize hotel accommodations
// ============================================================

export const roomCategories = [
  "Deluxe Rooms",
  "Premium Rooms",
  "Suites",
  "Luxury Rooms",
];

// ============================================================
// ROOMS PAGE — ROOM COLLECTION SECTION
// Hotel room details displayed in the room cards
// Includes room information, images, pricing, and features
// ============================================================

export const rooms = [
  // ================ DELUXE ROOMS ================
  {
    id: 1,
    name: "The Garden Deluxe",
    category: "Deluxe Rooms",
    location: "Italy",
    description: "Plush king bed with soft, peaceful tones.",
    image:
      "https://www.velora-hotel.com/elegant-hotel-room-with-luxury-bedding.jpg",
    images: [
      "https://www.velora-hotel.com/elegant-hotel-room-with-luxury-bedding.jpg",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
    ],
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
    location: "Japan",
    description: "Elegant furnishings with warm textures.",
    image:
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/09/05/1507/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.jpg/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.16x9.jpg?imwidth=2560",
    images: [
      "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/09/05/1507/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.jpg/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.16x9.jpg?imwidth=2560",
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600",
    ],
    price: 7900,
    size: "430 sq.ft.",
    guests: 4,
    beds: "King Bed",
    tag: "Heritage Charm",
    rating: 4.9,
  },

  // ================ PREMIUM ROOMS ================
  {
    id: 3,
    name: "The Premium Retreat",
    category: "Premium Rooms",
    location: "India",
    description: "Spacious bedroom with a luxurious king bed.",
    image:
      "https://www.gizapalace.com/images/site-specific/accommodation/rooms/deluxe-adapted/gallery/adapted-deluxe-king-S360-desktop.webp",
    images: [
      "https://www.gizapalace.com/images/site-specific/accommodation/rooms/deluxe-adapted/gallery/adapted-deluxe-king-S360-desktop.webp",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    ],
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
    location: "Australia",
    description: "Elegant king bed with relaxing seating.",
    image:
      "https://media.alotea.com/the-st-regis-washington-dc-washington-cover.webp",
    images: [
      "https://media.alotea.com/the-st-regis-washington-dc-washington-cover.webp",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
    ],
    price: 11000,
    size: "540 sq.ft.",
    guests: 4,
    beds: "King Bed",
    tag: "Elegant Comfort",
    rating: 4.8,
  },

  // ================ SUITES ================
  {
    id: 5,
    name: "The Heritage Suite",
    category: "Suites",
    location: "Japan",
    description: "Spacious suite with a luxurious king bed.",
    image:
      "https://static-new.lhw.com/HotelImages/Final/LW1325/lw1325_l2885084_720x450.jpg",
    images: [
      "https://static-new.lhw.com/HotelImages/Final/LW1325/lw1325_l2885084_720x450.jpg",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
    ],
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
    location: "Italy",
    description: "Premium bedding with sophisticated styling.",
    image:
      "https://www.americanexpress.com/content/dam/amex/en-au/credit-cards/membership-benefits/the-platinum-card/accor/You_might_also_like_Section_FHR_Mobile.png",
    images: [
      "https://www.americanexpress.com/content/dam/amex/en-au/credit-cards/membership-benefits/the-platinum-card/accor/You_might_also_like_Section_FHR_Mobile.png",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
    ],
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
    location: "Australia",
    description: "Grand bedroom with elegant furnishings.",
    image:
      "https://toc.h-cdn.co/assets/16/27/4000x2657/1-credit-the-peninsula-new-york.jpg",
    images: [
      "https://toc.h-cdn.co/assets/16/27/4000x2657/1-credit-the-peninsula-new-york.jpg",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    ],
    price: 15800,
    size: "820 sq.ft.",
    guests: 5,
    beds: "King Bed",
    tag: "Exclusive",
    rating: 5.0,
  },
  {
    id: 8,
    name: "The Maharaja Retreat",
    category: "Luxury Rooms",
    location: "India",
    description: "Luxurious bedding with timeless elegance.",
    image:
      "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/07/GDX-CGI-ROOM.jpg?width=2048",
    images: [
      "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/07/GDX-CGI-ROOM.jpg?width=2048",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
    ],
    price: 19500,
    size: "950 sq.ft.",
    guests: 3,
    beds: "King Bed",
    tag: "Royal Living",
    rating: 5.0,
  },
];

// ============================================================
// ROOMS PAGE — LOCATION FILTER SECTION
// Hotel locations associated with the available rooms
// ============================================================

export const roomLocations = [
  "All Locations",
  "Italy",
  "Japan",
  "Australia",
  "India",
];

// ============================================================
// ROOMS PAGE — GUEST EXPERIENCES & REVIEWS SECTION
// Customizable guest experience section heading and message
// ============================================================

export const guestExperienceContent = {
  eyebrow: "MOMENTS THAT MATTER",

  heading: "Memories made",

  highlightedHeading: "with us.",

  bottomMessage:
    "The finest memories are the ones we create together. We look forward to welcoming you.",
};

// ============================================================
// ROOMS PAGE — GUEST EXPERIENCES & REVIEWS SECTION
// Guest testimonials, images, featured status, and ratings
// ============================================================

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
