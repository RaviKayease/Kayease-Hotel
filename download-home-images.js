const fs = require("fs");
const path = require("path");

const images = [
  // ============================================
  // 1. HERO SECTION
  // ============================================
  {
    name: "ThoughtfulLiving.jpg",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=85",
  },
  {
    name: "RemarkableDestinations.jpg",
    url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1000&q=85",
  },
  {
    name: "MeaningfulExperiences.jpg",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1000&q=85",
  },

  // ============================================
  // 2. OUR STORY SECTION
  // ============================================
  {
    name: "OurStory.jpg",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1400&q=90",
  },
  {
    name: "OurApproach.jpg",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=85",
  },

  // ============================================
  // 3. OUR EXPERIENCE SECTION
  // ============================================
  {
    name: "BeautifulSpaces.jpg",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1000&q=85",
  },
  {
    name: "MemorableMoments.jpg",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1000&q=85",
  },
  {
    name: "DestinationsToDiscover.jpg",
    url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1000&q=85",
  },

  // ============================================
  // 4. BRAND STATEMENT SECTION
  // ============================================
  {
    name: "BrandStatement.jpg",
    url: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=2000&q=85",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "AboutUsPageImages");

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

  console.log("About Us page image download completed!");
}

downloadImages();
