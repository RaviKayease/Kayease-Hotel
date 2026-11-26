const fs = require("fs");
const path = require("path");

const images = [
  // ROOMS PAGE HERO
  {
    name: "RoomsHero.webp",
    url: "https://cdn.prod.website-files.com/62e545b3db35992e653f9087/6967cdf0c4492e27096c53a1_oneandonly-aesthesis-athens-greece-boutique-hotel-31.webp",
  },

  // ROOM CARD IMAGES
  {
    name: "GardenDeluxe.jpg",
    url: "https://www.velora-hotel.com/elegant-hotel-room-with-luxury-bedding.jpg",
  },
  {
    name: "HeritageDeluxe.jpg",
    url: "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2019/09/05/1507/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.jpg/Parisi-Udvar-Budapest-P093-King-Bed-Guestroom.16x9.jpg?imwidth=2560",
  },
  {
    name: "PremiumRetreat.webp",
    url: "https://www.gizapalace.com/images/site-specific/accommodation/rooms/deluxe-adapted/gallery/adapted-deluxe-king-S360-desktop.webp",
  },
  {
    name: "ExecutivePremium.webp",
    url: "https://media.alotea.com/the-st-regis-washington-dc-washington-cover.webp",
  },
  {
    name: "HeritageSuite.jpg",
    url: "https://static-new.lhw.com/HotelImages/Final/LW1325/lw1325_l2885084_720x450.jpg",
  },
  {
    name: "SignatureSuite.png",
    url: "https://www.americanexpress.com/content/dam/amex/en-au/credit-cards/membership-benefits/the-platinum-card/accor/You_might_also_like_Section_FHR_Mobile.png",
  },
  {
    name: "RoyalResidence.jpg",
    url: "https://toc.h-cdn.co/assets/16/27/4000x2657/1-credit-the-peninsula-new-york.jpg",
  },
  {
    name: "MaharajaRetreat.jpg",
    url: "https://thepointsguy.global.ssl.fastly.net/us/originals/2024/07/GDX-CGI-ROOM.jpg?width=2048",
  },

  // SHARED ROOM GALLERY IMAGES
  {
    name: "GalleryHeritage.jpg",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600",
  },
  {
    name: "GalleryInterior.jpg",
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600",
  },
  {
    name: "GalleryBedroom.jpg",
    url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600",
  },
  {
    name: "GalleryLuxury.jpg",
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600",
  },
  {
    name: "GalleryRetreat.jpg",
    url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1600",
  },
  {
    name: "GalleryLounge.jpg",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
  },
  {
    name: "GallerySuite.jpg",
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
  },
  {
    name: "GalleryResidence.jpg",
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
  },

  // GUEST EXPERIENCE IMAGES
  {
    name: "GuestExperience.jpg",
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1400",
  },
  {
    name: "GuestDining.webp",
    url: "https://resizer.otstatic.com/v2/photos/xlarge/2/43573935.webp",
  },
  {
    name: "GuestMoments.jpg",
    url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=1000",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "RoomsPageImages");

  fs.mkdirSync(folder, { recursive: true });

  for (const image of images) {
    try {
      const response = await fetch(image.url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const contentType = response.headers.get("content-type");

      if (!contentType?.startsWith("image/")) {
        throw new Error("URL did not return an image");
      }

      const buffer = Buffer.from(await response.arrayBuffer());

      fs.writeFileSync(path.join(folder, image.name), buffer);

      console.log(`Downloaded: ${image.name}`);
    } catch (error) {
      console.error(`Failed: ${image.name} - ${error.message}`);
    }
  }

  console.log("Rooms page image download completed!");
}

downloadImages();
