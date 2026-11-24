// Blog article data, blog categories, and hotel-customizable blog page content.

export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
  author: string;
  content: {
    heading: string;
    paragraphs: string[];
  }[];
  quote?: string;
};

// Blog articles displayed on the blog listing and individual blog pages.
export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Slow Travel: Finding Beauty in Every Moment",
    excerpt:
      "Discover a different way to explore the world, where the journey matters just as much as the destination.",
    category: "Inspiration",
    date: "November 18, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=90",
    slug: "art-of-slow-travel",
    featured: true,
    author: "The Travel Journal",
    quote:
      "The best journeys are not measured by how far we go, but by how deeply we experience them.",
    content: [
      {
        heading: "A different way to see the world",
        paragraphs: [
          "Travel does not always have to mean rushing between landmarks, following a packed itinerary or trying to see everything in a limited amount of time. Sometimes, the most memorable journeys begin when we decide to slow down.",
          "Imagine waking up without an alarm, enjoying a quiet breakfast overlooking the landscape and spending the afternoon discovering a little café you had never planned to visit. These simple moments often become the memories we carry home.",
        ],
      },
      {
        heading: "Make room for the unexpected",
        paragraphs: [
          "Leaving space in your plans allows a destination to reveal itself naturally. Take a different street, speak with local people or spend an extra hour somewhere that makes you feel at ease.",
          "Instead of treating every stop as something to tick off a list, give yourself time to appreciate its atmosphere, its people and its small details.",
        ],
      },
      {
        heading: "Choose stays that let you unwind",
        paragraphs: [
          "Where you stay can shape the rhythm of your entire trip. A peaceful room, a thoughtful setting and a welcoming atmosphere can turn an ordinary break into something truly restorative.",
          "Slow travel is ultimately about being present. Choose experiences that make you feel connected to a place, and allow the journey to unfold at its own pace.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "A Weekend in Kyoto: Where Tradition Meets Tranquility",
    excerpt:
      "From quiet bamboo forests to beautiful traditional streets, discover the timeless charm of Kyoto.",
    category: "Destinations",
    date: "November 12, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=90",
    slug: "weekend-in-kyoto",
    author: "The Travel Journal",
    quote: "In Kyoto, even the quietest corners seem to have a story to tell.",
    content: [
      {
        heading: "Discover the quieter side of Kyoto",
        paragraphs: [
          "Kyoto is a city where old traditions and modern life exist side by side. Wooden houses, peaceful temples and narrow lanes create an atmosphere that feels wonderfully different from the pace of everyday life.",
          "A weekend here is an invitation to slow down, wander without hurry and notice the details that make the city so special.",
        ],
      },
      {
        heading: "Wander through timeless streets",
        paragraphs: [
          "Spend the morning exploring the historic streets of Higashiyama, where traditional architecture and small shops give the neighbourhood its distinctive character.",
          "Later, find your way towards the Arashiyama area. Its natural surroundings and famous bamboo grove offer a refreshing change of pace, especially when explored early in the day.",
        ],
      },
      {
        heading: "End the day with a little calm",
        paragraphs: [
          "After a day of exploring, take time to enjoy Kyoto's quieter side. A traditional meal, a peaceful evening walk or a comfortable place to rest can make the experience feel complete.",
          "The beauty of Kyoto is not just in its famous sights. It is in the feeling of being somewhere that encourages you to pause and appreciate the moment.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Beyond the Ordinary: The Beauty of Boutique Stays",
    excerpt:
      "Explore the little details that transform a beautiful accommodation into an unforgettable experience.",
    category: "Hospitality",
    date: "November 08, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=90",
    slug: "beauty-of-boutique-stays",
    author: "The Travel Journal",
    quote:
      "True comfort is found in the details you remember long after checking out.",
    content: [
      {
        heading: "More than just a place to stay",
        paragraphs: [
          "A memorable stay is rarely defined by size alone. It is often the thoughtful details, personal touches and atmosphere that make a place feel special.",
          "Boutique stays bring a sense of character to travel. Each space can have its own personality, offering something more intimate than a standard accommodation experience.",
        ],
      },
      {
        heading: "The details make the difference",
        paragraphs: [
          "Natural light, carefully chosen materials, comfortable furnishings and a welcoming atmosphere all contribute to how a space feels.",
          "Small gestures matter too. A warm welcome, helpful local recommendations or a thoughtfully prepared room can turn a simple overnight stay into a lasting memory.",
        ],
      },
      {
        heading: "Find a place that feels personal",
        paragraphs: [
          "The right accommodation should complement the reason you are travelling. It might be a quiet retreat for a weekend away or a character-filled base from which to explore a new destination.",
          "Look beyond photographs and consider the overall experience a place offers. Sometimes, the most meaningful stays are the ones that feel effortlessly personal.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Chasing Sunsets Along the Mediterranean Coast",
    excerpt:
      "A journey through breathtaking coastlines, charming seaside towns and unforgettable golden evenings.",
    category: "Travel Guides",
    date: "November 02, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=90",
    slug: "mediterranean-coast",
    author: "The Travel Journal",
    quote:
      "Some evenings are best spent with nowhere to be and a view worth remembering.",
    content: [
      {
        heading: "A coastline made for exploring",
        paragraphs: [
          "The Mediterranean has a way of making even an ordinary afternoon feel special. Blue water, sunlit architecture and little coastal streets create a setting that invites you to explore at your own pace.",
          "Every town has its own rhythm, from lively waterfront promenades to quieter corners where the day seems to move a little more slowly.",
        ],
      },
      {
        heading: "Follow the coast, not the clock",
        paragraphs: [
          "Give yourself time to discover the places between the well-known destinations. Stop for a long lunch, explore a local market or take a walk along the water without worrying about the next item on your itinerary.",
          "The most rewarding coastal journeys often come from allowing a little flexibility in your plans.",
        ],
      },
      {
        heading: "Make sunset part of the journey",
        paragraphs: [
          "As the afternoon fades, find a comfortable spot overlooking the sea. The changing colours of the sky and the slower pace of the evening offer a beautiful way to end a day of exploring.",
          "Whether you are travelling for a weekend or a longer escape, the Mediterranean is full of moments that deserve to be enjoyed without rushing.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Little Luxuries That Make a Stay Extraordinary",
    excerpt:
      "Sometimes it is the smallest thoughtful touches that make the biggest difference to your travels.",
    category: "Experiences",
    date: "October 26, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=90",
    slug: "little-luxuries",
    author: "The Travel Journal",
    quote:
      "Luxury is not always about having more. Sometimes it is about noticing more.",
    content: [
      {
        heading: "The feeling of being looked after",
        paragraphs: [
          "A wonderful stay is made up of more than beautiful interiors. It is the feeling of arriving somewhere and knowing that the little things have already been considered.",
          "A comfortable bed, a peaceful atmosphere and a genuinely warm welcome can make a bigger impression than grand gestures.",
        ],
      },
      {
        heading: "Small details, lasting memories",
        paragraphs: [
          "It might be morning coffee enjoyed in a sunlit corner, fresh linen after a long day out or a thoughtful recommendation that leads you to a memorable local experience.",
          "These details may seem simple, but they help create a sense of ease that stays with you long after the trip ends.",
        ],
      },
      {
        heading: "Enjoy the experience, not just the destination",
        paragraphs: [
          "Give yourself permission to enjoy the place you are staying in. Take a slower morning, spend time in the surroundings and appreciate the comfort of having nowhere else to be.",
          "Sometimes, the best part of a journey is not what you do outside your accommodation, but how you feel when you return to it.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "The Beauty of Getting Lost in New Places",
    excerpt:
      "Leave the itinerary behind and discover the unexpected experiences waiting around every corner.",
    category: "Inspiration",
    date: "October 19, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=90",
    slug: "getting-lost-in-new-places",
    author: "The Travel Journal",
    quote:
      "Sometimes the best discoveries are the ones you never set out to find.",
    content: [
      {
        heading: "Let curiosity lead the way",
        paragraphs: [
          "There is something refreshing about exploring a new place without planning every minute. A quiet lane, an unfamiliar shop or a small restaurant can become the highlight of a journey simply because you found it by chance.",
          "While having a plan can be useful, leaving room for curiosity gives travel a sense of discovery.",
        ],
      },
      {
        heading: "Look beyond the familiar",
        paragraphs: [
          "Step away from the busiest streets when you can. Explore neighbourhoods, notice everyday routines and take time to understand what makes a place feel different from home.",
          "You do not need to travel far to find something memorable. Sometimes a short walk in the right direction is enough.",
        ],
      },
      {
        heading: "Bring home more than photographs",
        paragraphs: [
          "The unexpected moments are often the ones we remember most: a conversation, a beautiful view or a place we stumbled upon just before sunset.",
          "Travel becomes richer when we allow ourselves to be surprised. So keep your plans flexible, follow your interests and enjoy the places you discover along the way.",
        ],
      },
    ],
  },
];

// Blog categories used to organize and filter articles.
export const categories = [
  "All Stories",
  "Destinations",
  "Travel Guides",
  "Experiences",
  "Hospitality",
  "Inspiration",
];

// Hotel-customizable editorial content displayed on the blog listing page.
export const blogPageData = {
  hero: {
    title: "Stories worth",
    highlight: "travelling for.",
  },

  latestStories: {
    title: "The latest",
    highlight: "stories.",
  },

  closingSection: {
    title: "Let the next story",
    highlight: "be yours.",
    description:
      "Find your next favourite destination, discover extraordinary stays and create moments that deserve to be remembered.",
  },
};
