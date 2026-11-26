import HeroImage from "@/public/HomePageImages/HeroImage.png";

// ============================================
// 1. HERO SECTION
// ============================================

export const homeHeroData = {
  tagline: "Unforgettable Stay Experiences",
  title: "Dream Stay",
  image: HeroImage,
  imageAlt: "Luxury hotel and hospitality experience",
};

// ============================================
// 2. FEATURED EXPERIENCES SECTION
// ============================================

export const featuredExperiencesData = {
  heading: "Discover Our Experiences",

  categories: ["Dining", "Relaxation", "Celebrations", "Leisure"],

  experiences: [
    // Dining
    {
      id: 1,
      name: "Fine Dining",
      category: "Dining",
      description: "An unforgettable culinary experience",
      image: "/HomePageImages/FineDining.jpg",
    },
    {
      id: 2,
      name: "Private Dining",
      category: "Dining",
      description: "Enjoy an intimate meal in an elegant setting",
      image: "/HomePageImages/PrivateDining.jpg",
    },
    {
      id: 3,
      name: "Breakfast Experience",
      category: "Dining",
      description: "Begin your day with a delightful breakfast",
      image: "/HomePageImages/Breakfast.jpg",
    },

    // Relaxation
    {
      id: 4,
      name: "Poolside Escape",
      category: "Relaxation",
      description: "Unwind beside our beautiful pool",
      image: "/HomePageImages/Poolside.jpg",
    },
    {
      id: 5,
      name: "Luxury Wellness",
      category: "Relaxation",
      description: "Rejuvenate your mind and body",
      image: "/HomePageImages/Wellness.jpg",
    },
    {
      id: 6,
      name: "Serenity Lounge",
      category: "Relaxation",
      description: "Find your peaceful corner to unwind",
      image: "/HomePageImages/SerenityLounge.jpg",
    },

    // Celebrations
    {
      id: 7,
      name: "Private Celebrations",
      category: "Celebrations",
      description: "Make your special moments memorable",
      image: "/HomePageImages/Celebrations.jpg",
    },
    {
      id: 8,
      name: "Romantic Getaway",
      category: "Celebrations",
      description: "Celebrate love with an unforgettable escape",
      image: "/HomePageImages/RomanticGetaway.jpg",
    },
    {
      id: 9,
      name: "Wedding Celebrations",
      category: "Celebrations",
      description: "A beautiful setting for your special day",
      image: "/HomePageImages/Wedding.jpg",
    },

    // Leisure
    {
      id: 10,
      name: "Garden Retreat",
      category: "Leisure",
      description: "Discover peaceful moments in lush surroundings",
      image: "/HomePageImages/Garden.jpg",
    },
    {
      id: 11,
      name: "Outdoor Adventure",
      category: "Leisure",
      description: "Explore beautiful landscapes and outdoor escapes",
      image: "/HomePageImages/Adventure.jpg",
    },
    {
      id: 12,
      name: "Evening Lounge",
      category: "Leisure",
      description: "Unwind in an inviting atmosphere after sunset",
      image: "/HomePageImages/EveningLounge.jpg",
    },
  ],

  promotion: {
    title: "Make Every Stay Special",
    description: "Discover experiences that make every stay special.",
  },
};

// ============================================
// 3. HOTEL COLLECTION SECTION
// ============================================

export const hotelCollectionData = {
  heading: "Stays that make",
  highlightedHeading: "every moment special.",

  collectionDescription:
    "Beautiful spaces, thoughtful details and destinations worth travelling for. Find a place that feels like it was made just for you.",

  trendingHeading: "Top trending stays worldwide",
};

// ============================================
// 4. FEATURED HOTELS
// ============================================

export const editorialHotelsData = [
  {
    id: 1,
    name: "The Heritage Palace",
    location: "Jaipur, India",
    price: 8500,
    rating: 5,
    description: "A royal escape filled with timeless elegance.",
    image: "/HomePageImages/HeritagePalace.jpg",
  },
  {
    id: 2,
    name: "The White Courtyard",
    location: "Kyoto, Japan",
    price: 9200,
    rating: 4,
    description: "A peaceful retreat inspired by Japanese tradition.",
    image: "/HomePageImages/WhiteCourtyard.jpg",
  },
  {
    id: 3,
    name: "Palm Beach Retreat",
    location: "Venice, Italy",
    price: 6500,
    rating: 4,
    description: "A relaxing getaway with Italian coastal charm.",
    image: "/HomePageImages/PalmBeach.jpg",
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    location: "Canberra, Australia",
    price: 7200,
    rating: 5,
    description: "A scenic mountain escape surrounded by nature.",
    image: "/HomePageImages/MountainLodge.jpg",
  },
];

// ============================================
// 5. EDITORIAL SHOWCASE
// ============================================

export const editorialShowcaseData = {
  eyebrow: "A NEW WAY TO EXPERIENCE HOSPITALITY",
  captionLabel: "DISCOVER EXTRAORDINARY PLACES",

  slides: [
    {
      title: "A stay that feels",
      highlight: "like a beautiful escape.",
      description:
        "Discover thoughtfully designed spaces, breathtaking surroundings, and moments of comfort that stay with you long after your journey ends. Every stay is an invitation to slow down and experience something extraordinary.",
      image: "/HomePageImages/WhiteCourtyard.jpg",
      alt: "Beautiful A-frame cabin surrounded by a forest",
      caption: "Where moments become memories",
    },
    {
      title: "Wake up where",
      highlight: "the ocean meets the sky.",
      description:
        "Experience the beauty of coastal living, where endless ocean views, calming sea breezes, and thoughtfully designed spaces create the perfect escape from everyday life.",
      image: "/HomePageImages/PalmBeach.jpg",
      alt: "Luxury tropical resort with a beautiful swimming pool",
      caption: "A world beyond the ordinary",
    },
    {
      title: "Find peace",
      highlight: "above the ordinary.",
      description:
        "Surrounded by breathtaking mountain landscapes, discover a quieter kind of luxury. Slow mornings, beautiful views, and meaningful moments make every stay unforgettable.",
      image: "/HomePageImages/EditorialCabin.jpg",
      alt: "Peaceful wooden mountain cabin surrounded by nature",
      caption: "A little closer to nature",
    },
    {
      title: "Experience",
      highlight: "the art of refined living.",
      description:
        "Step into a world of understated elegance, beautiful architecture, and exceptional hospitality. Every detail is thoughtfully considered to make your stay truly special.",
      image: "/HomePageImages/HeritagePalace.jpg",
      alt: "Elegant luxury boutique hotel interior",
      caption: "Elegance in every detail",
    },
  ],
};

// ============================================
// 6. NEWSLETTER SECTION
// ============================================

export const homeNewsletterData = {
  title: "Beautiful stays, delivered",
  highlightedTitle: "straight to your inbox.",
  description:
    "Travel inspiration and exclusive offers, straight to your inbox.",
};
