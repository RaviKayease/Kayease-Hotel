// ============================================================
// ROOMS PAGE — HERO SECTION
// ============================================================

export const roomsHero = {
  title: "Rooms & Suites",
  image: "/RoomsPageImages/RoomsHero.webp",
  imageAlt: "Luxury boutique hotel suite",
  eyebrow: "A PLACE TO CALL YOUR OWN",
  heading: "Your own kind of",
  highlightedHeading: "beautiful.",
};

// ============================================================
// ROOMS PAGE — ROOM COLLECTION CONTENT
// ============================================================

export const roomsCollectionContent = {
  heading: "Find Your Perfect Stay",
};

// ============================================================
// ROOMS PAGE — ROOM CATEGORIES
// ============================================================

export const roomCategories = [
  "Deluxe Rooms",
  "Premium Rooms",
  "Suites",
  "Luxury Rooms",
];

// ============================================================
// ROOMS PAGE — ROOM DETAILS
// ============================================================

export const rooms = [
  // ================ DELUXE ROOMS ================
  {
    id: 1,
    name: "The Garden Deluxe",
    category: "Deluxe Rooms",
    location: "Italy",
    description: "Plush king bed with soft, peaceful tones.",
    image: "/RoomsPageImages/GardenDeluxe.jpg",
    images: [
      "/RoomsPageImages/GardenDeluxe.jpg",
      "/RoomsPageImages/GalleryHeritage.jpg",
      "/RoomsPageImages/GalleryInterior.jpg",
      "/RoomsPageImages/GalleryBedroom.jpg",
      "/RoomsPageImages/GalleryLuxury.jpg",
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
    image: "/RoomsPageImages/HeritageDeluxe.jpg",
    images: [
      "/RoomsPageImages/HeritageDeluxe.jpg",
      "/RoomsPageImages/GalleryHeritage.jpg",
      "/RoomsPageImages/GalleryLuxury.jpg",
      "/RoomsPageImages/GalleryBedroom.jpg",
      "/RoomsPageImages/GalleryInterior.jpg",
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
    image: "/RoomsPageImages/PremiumRetreat.webp",
    images: [
      "/RoomsPageImages/PremiumRetreat.webp",
      "/RoomsPageImages/GalleryRetreat.jpg",
      "/RoomsPageImages/GalleryLounge.jpg",
      "/RoomsPageImages/GalleryBedroom.jpg",
      "/RoomsPageImages/GallerySuite.jpg",
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
    image: "/RoomsPageImages/ExecutivePremium.webp",
    images: [
      "/RoomsPageImages/ExecutivePremium.webp",
      "/RoomsPageImages/GalleryLounge.jpg",
      "/RoomsPageImages/GallerySuite.jpg",
      "/RoomsPageImages/GalleryLuxury.jpg",
      "/RoomsPageImages/GalleryResidence.jpg",
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
    image: "/RoomsPageImages/HeritageSuite.jpg",
    images: [
      "/RoomsPageImages/HeritageSuite.jpg",
      "/RoomsPageImages/GalleryLounge.jpg",
      "/RoomsPageImages/GallerySuite.jpg",
      "/RoomsPageImages/GalleryResidence.jpg",
      "/RoomsPageImages/GalleryLuxury.jpg",
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
    image: "/RoomsPageImages/SignatureSuite.png",
    images: [
      "/RoomsPageImages/SignatureSuite.png",
      "/RoomsPageImages/GalleryRetreat.jpg",
      "/RoomsPageImages/GalleryLounge.jpg",
      "/RoomsPageImages/GallerySuite.jpg",
      "/RoomsPageImages/GalleryResidence.jpg",
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
    image: "/RoomsPageImages/RoyalResidence.jpg",
    images: [
      "/RoomsPageImages/RoyalResidence.jpg",
      "/RoomsPageImages/GalleryLuxury.jpg",
      "/RoomsPageImages/GallerySuite.jpg",
      "/RoomsPageImages/GalleryResidence.jpg",
      "/RoomsPageImages/GalleryLounge.jpg",
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
    image: "/RoomsPageImages/MaharajaRetreat.jpg",
    images: [
      "/RoomsPageImages/MaharajaRetreat.jpg",
      "/RoomsPageImages/GalleryLounge.jpg",
      "/RoomsPageImages/GalleryLuxury.jpg",
      "/RoomsPageImages/GallerySuite.jpg",
      "/RoomsPageImages/GalleryResidence.jpg",
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
// ROOMS PAGE — LOCATIONS
// ============================================================

export const roomLocations = [
  "All Locations",
  "Italy",
  "Japan",
  "Australia",
  "India",
];

// ============================================================
// ROOMS PAGE — GUEST EXPERIENCE CONTENT
// ============================================================

export const guestExperienceContent = {
  eyebrow: "MOMENTS THAT MATTER",
  heading: "Memories made",
  highlightedHeading: "with us.",
  bottomMessage:
    "The finest memories are the ones we create together. We look forward to welcoming you.",
};

// ============================================================
// ROOMS PAGE — GUEST REVIEWS
// ============================================================

export const guestReviews = [
  {
    id: 1,
    featured: true,
    image: "/RoomsPageImages/GuestExperience.jpg",
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
    image: "/RoomsPageImages/GuestDining.webp",
    alt: "Guests sharing a memorable restaurant experience",
    review: "A beautiful escape from the everyday.",
    guest: "A Happy Guest",
    rating: 5,
  },
  {
    id: 3,
    featured: false,
    image: "/RoomsPageImages/GuestMoments.jpg",
    alt: "Guests enjoying time together",
    review: "Thoughtful service and moments we will cherish.",
    guest: "A Happy Guest",
    rating: 5,
  },
];
