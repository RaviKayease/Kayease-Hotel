

const fs = require("fs");
const path = require("path");

const images = [
  {
    name: "FineDining.jpg",
    url: "https://storage.googleapis.com/48877118-7272-4a4d-b302-0465d8aa4548/b66f827e-2e41-49b4-91be-a94026829d46/c683e234-b298-4994-b1f9-84b0d704e054.jpg",
  },
  {
    name: "PrivateDining.jpg",
    url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=85",
  },
  {
    name: "Breakfast.jpg",
    url: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=1200&q=85",
  },
  {
    name: "Poolside.jpg",
    url: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=1200&q=85",
  },
  {
    name: "Wellness.jpg",
    url: "https://picasso.rosewoodhotelgroup.com/transform/c3a83944-43a6-477a-9a9c-c1fd8b37071e/RWFSL_3-0_Brand-com_Assets_Facilities_Spa_AsayaSpa_TreatmentRoom",
  },
  {
    name: "SerenityLounge.jpg",
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=85",
  },
  {
    name: "Celebrations.jpg",
    url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=85",
  },
  {
    name: "RomanticGetaway.jpg",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
  },
  {
    name: "Wedding.jpg",
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=85",
  },
  {
    name: "Garden.jpg",
    url: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=85",
  },
  {
    name: "Adventure.jpg",
    url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200&q=85",
  },
  {
    name: "EveningLounge.jpg",
    url: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200&q=85",
  },
  {
    name: "HeritagePalace.jpg",
    url: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=900",
  },
  {
    name: "WhiteCourtyard.jpg",
    url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?w=900",
  },
  {
    name: "PalmBeach.jpg",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
  },
  {
    name: "MountainLodge.jpg",
    url: "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?w=900",
  },
  {
    name: "EditorialCabin.jpg",
    url: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200",
  },
];

async function downloadImages() {
  const folder = path.join(process.cwd(), "public", "HomePageImages");

  fs.mkdirSync(folder, { recursive: true });

  for (const image of images) {
    try {
      const response = await fetch(image.url);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const buffer = Buffer.from(await response.arrayBuffer());

      if (!response.headers.get("content-type")?.startsWith("image/")) {
        throw new Error("URL did not return an image");
      }

      fs.writeFileSync(path.join(folder, image.name), buffer);

      console.log(`Downloaded: ${image.name}`);
    } catch (error) {
      console.error(`Failed: ${image.name} - ${error.message}`);
    }
  }

  console.log("Download process completed!");
}

downloadImages();
