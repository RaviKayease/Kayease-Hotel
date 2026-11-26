const fs = require("fs");
const path = require("path");

const images = [
  // ============================================
  // 1. THE ART OF SLOW TRAVEL
  // ============================================
  {
    name: "SlowTravel.jpg",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1600&q=90",
  },

  // ============================================
  // 2. A WEEKEND IN KYOTO
  // ============================================
  {
    name: "Kyoto.jpg",
    url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=90",
  },

  // ============================================
  // 3. THE BEAUTY OF BOUTIQUE STAYS
  // ============================================
  {
    name: "BoutiqueStays.jpg",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1600&q=90",
  },

  // ============================================
  // 4. MEDITERRANEAN COAST
  // ============================================
  {
    name: "MediterraneanCoast.jpg",
    url: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1600&q=90",
  },

  // ============================================
  // 5. LITTLE LUXURIES
  // ============================================
  {
    name: "LittleLuxuries.jpg",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1600&q=90",
  },

  // ============================================
  // 6. GETTING LOST IN NEW PLACES
  // ============================================
  {
    name: "NewPlaces.jpg",
    url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1600&q=90",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "BlogsPageImages");

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

  console.log("Blogs page image download completed!");
}

downloadImages();
