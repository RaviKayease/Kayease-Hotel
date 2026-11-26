const fs = require("fs");
const path = require("path");

const images = [
  // ============================================
  // 1. PRIVACY POLICY HERO
  // ============================================
  {
    name: "PrivacyPolicyHero.jpg",
    url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=2200&q=85",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "PrivacyPolicyPageImages");

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

  console.log("Privacy Policy page image download completed!");
}

downloadImages();
