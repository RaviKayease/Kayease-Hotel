const fs = require("fs");
const path = require("path");

const images = [
  // ============================================
  // 1. BOOKING GUIDE HERO
  // ============================================
  {
    name: "BookingGuideHero.jpg",
    url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=2400&q=90",
  },

  // ============================================
  // 2. STEP 1 - THE DISCOVERY
  // ============================================
  {
    name: "Discovery.jpg",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=85",
  },

  // ============================================
  // 3. STEP 2 - THE PLANNING
  // ============================================
  {
    name: "Planning.jpg",
    url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1600&q=85",
  },

  // ============================================
  // 4. STEP 3 - THE DETAILS
  // ============================================
  {
    name: "Details.jpg",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
  },

  // ============================================
  // 5. STEP 4 - THE BEGINNING
  // ============================================
  {
    name: "Beginning.jpg",
    url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85",
  },

  // ============================================
  // 6. BOOKING ESSENTIALS
  // ============================================
  {
    name: "BookingEssentials.jpg",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "BookingGuidePageImages");

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

  console.log("Booking Guide page image download completed!");
}

downloadImages();
