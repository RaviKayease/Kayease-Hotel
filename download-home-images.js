const fs = require("fs");
const path = require("path");

const images = [
  // ============================================
  // 1. MAIN CONTACT EXPERIENCE
  // ============================================
  {
    name: "ContactExperience.jpg",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
  },

  // ============================================
  // 2. CLOSING SECTION
  // ============================================
  {
    name: "ClosingSection.jpg",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=2000&q=85",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "ContactUsPageImages");

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

  console.log("Contact Us page image download completed!");
}

downloadImages();
