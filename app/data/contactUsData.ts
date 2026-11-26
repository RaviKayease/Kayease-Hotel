/* ==============================
   HERO SECTION
================================ */
export const contactUsPageData = {
  hero: {
    title: "Let's talk",
  },

  /* ==============================
     MAIN CONTACT EXPERIENCE
     LEFT IMAGE AND CONTACT INFORMATION
  ================================ */
  contactInfo: {
    // Contact image and overlay content
    image: {
      src: "/ContactUsPageImages/ContactExperience.jpg",
      alt: "Welcoming luxury hotel entrance and hospitality space",
      eyebrow: "The Experience",
      heading: "A little help goes a long way.",
    },

    // Hotel email information
    email: {
      address: "hello@example.com",
      description: "For general enquiries",
    },

    // Hotel phone information
    phone: {
      number: "+91 98765 43210",
      description: "Speak with our team",
    },

    // Hotel working days and hours
    workingHours: {
      days: "Monday – Saturday",
      hours: "10:00 AM – 6:00 PM",
    },

    // Hotel social media information
    social: {
      platform: "Instagram",
      url: "https://instagram.com/",
      description: "A little inspiration every day",
    },
  },

  /* ==============================
     ENQUIRY FORM INTRODUCTION
     RIGHT FORM PANEL HEADING
  ================================ */
  enquirySection: {
    heading: "Tell us a little",
    highlight: "about it.",
    description:
      "We'd love to know what you're looking for. Share a few details and let's make your next stay special.",
  },

  /* ==============================
     CLOSING SECTION
     BACKGROUND IMAGE AND CONTENT
  ================================ */
  closingSection: {
    image: {
      src: "/ContactUsPageImages/ClosingSection.jpg",
      alt: "Beautiful scenic mountain landscape surrounding a peaceful destination",
    },

    heading: "Your next beautiful",
    highlight: "escape awaits.",
  },

  /* ==============================
     QUICK QUESTIONS / FAQ SECTION
  ================================ */
  faqSection: {
    heading: "A few things you",
    highlight: "might wonder.",

    description:
      "From planning your stay to finding the right property, here are a few answers to help you get started.",

    // Hotel frequently asked questions and answers
    items: [
      {
        question: "How can I make a reservation?",
        answer:
          "You can explore our available stays and make a reservation through our website. If you need assistance, simply send us an enquiry and our team will guide you.",
      },
      {
        question: "Can I ask about a specific property?",
        answer:
          "Absolutely. Share the property name or destination you're interested in through our contact form, and we'll help you with the details.",
      },
      {
        question: "Can I modify or cancel my booking?",
        answer:
          "For changes or cancellation requests, please contact our team with your booking details. The applicable booking terms and conditions will guide the process.",
      },
      {
        question: "How soon can I expect a response?",
        answer:
          "Our team aims to respond to enquiries during working hours, Monday to Saturday, between 10:00 AM and 6:00 PM.",
      },
    ],
  },
};

/* ==============================
   CONTACT FORM
   SUBJECT DROPDOWN OPTIONS
================================ */
export const subjectOptions = [
  "General enquiry",
  "Reservation assistance",
  "Property information",
  "Partnership enquiry",
  "Something else",
];
