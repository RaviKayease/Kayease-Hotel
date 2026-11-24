import HeroImage from "@/public/HeroImage.png";

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
      image:
        "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/b66f827e-2e41-49b4-91be-a94026829d46/c683e234-b298-4994-b1f9-84b0d704e054.jpg",
    },
    {
      id: 2,
      name: "Private Dining",
      category: "Dining",
      description: "Enjoy an intimate meal in an elegant setting",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
    },
    {
      id: 3,
      name: "Breakfast Experience",
      category: "Dining",
      description: "Begin your day with a delightful breakfast",
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=85",
    },

    // Relaxation
    {
      id: 4,
      name: "Poolside Escape",
      category: "Relaxation",
      description: "Unwind beside our beautiful pool",
      image:
        "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=85",
    },
    {
      id: 5,
      name: "Luxury Wellness",
      category: "Relaxation",
      description: "Rejuvenate your mind and body",
      image:
        "https://picasso.rosewoodhotelgroup.com/transform/c3a83944-43a6-477a-9a9c-c1fd8b37071e/RWFSL_3-0_Brand-com_Assets_Facilities_Spa_AsayaSpa_TreatmentRoom",
    },
    {
      id: 6,
      name: "Serenity Lounge",
      category: "Relaxation",
      description: "Find your peaceful corner to unwind",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
    },

    // Celebrations
    {
      id: 7,
      name: "Private Celebrations",
      category: "Celebrations",
      description: "Make your special moments memorable",
      image:
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85",
    },
    {
      id: 8,
      name: "Romantic Getaway",
      category: "Celebrations",
      description: "Celebrate love with an unforgettable escape",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
    },
    {
      id: 9,
      name: "Wedding Celebrations",
      category: "Celebrations",
      description: "A beautiful setting for your special day",
      image:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85",
    },

    // Leisure
    {
      id: 10,
      name: "Garden Retreat",
      category: "Leisure",
      description: "Discover peaceful moments in lush surroundings",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85",
    },
    {
      id: 11,
      name: "Outdoor Adventure",
      category: "Leisure",
      description: "Explore beautiful landscapes and outdoor escapes",
      image:
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
    },
    {
      id: 12,
      name: "Evening Lounge",
      category: "Leisure",
      description: "Unwind in an inviting atmosphere after sunset",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=85",
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
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
  },
  {
    id: 2,
    name: "The White Courtyard",
    location: "Kyoto, Japan",
    price: 9200,
    rating: 4,
    description: "A peaceful retreat inspired by Japanese tradition.",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=900",
  },
  {
    id: 3,
    name: "Palm Beach Retreat",
    location: "Venice, Italy",
    price: 6500,
    rating: 4,
    description: "A relaxing getaway with Italian coastal charm.",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
  },
  {
    id: 4,
    name: "Mountain View Lodge",
    location: "Canberra, Australia",
    price: 7200,
    rating: 5,
    description: "A scenic mountain escape surrounded by nature.",
    image: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=900",
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
      image:
        "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=1200",
      alt: "Beautiful A-frame cabin surrounded by a forest",
      caption: "Where moments become memories",
    },
    {
      title: "Wake up where",
      highlight: "the ocean meets the sky.",
      description:
        "Experience the beauty of coastal living, where endless ocean views, calming sea breezes, and thoughtfully designed spaces create the perfect escape from everyday life.",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200",
      alt: "Luxury tropical resort with a beautiful swimming pool",
      caption: "A world beyond the ordinary",
    },
    {
      title: "Find peace",
      highlight: "above the ordinary.",
      description:
        "Surrounded by breathtaking mountain landscapes, discover a quieter kind of luxury. Slow mornings, beautiful views, and meaningful moments make every stay unforgettable.",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200",
      alt: "Peaceful wooden mountain cabin surrounded by nature",
      caption: "A little closer to nature",
    },
    {
      title: "Experience",
      highlight: "the art of refined living.",
      description:
        "Step into a world of understated elegance, beautiful architecture, and exceptional hospitality. Every detail is thoughtfully considered to make your stay truly special.",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200",
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
