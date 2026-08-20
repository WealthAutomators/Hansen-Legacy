/**
 * Downloads Hansen Legacy imagery from Unsplash (direct image URLs — no API key).
 * Hero, banners, categories, and new product photos.
 */
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const PUBLIC = path.join(ROOT, "public");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, { headers: { "User-Agent": "HansenLegacyImageBot/1.0" } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          file.close();
          fs.unlinkSync(dest);
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlinkSync(dest);
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => file.close(() => resolve(dest)));
      })
      .on("error", (err) => {
        try {
          fs.unlinkSync(dest);
        } catch {}
        reject(err);
      });
  });
}

function unsplash(id, w = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;
}

/** Map of relative public path → Unsplash photo id */
const ASSETS = {
  // Hero — warm lifestyle interiors
  "hero/hero-1.jpg": "photo-1618221195710-dd28732bf79e",
  "hero/hero-2.jpg": "photo-1600210492486-724fe5c67fb0",
  "hero/hero-3.jpg": "photo-1616486338812-3dadae4b4ace",

  // Banners
  "banners/featured.jpg": "photo-1556912172-45b7abe85d40",
  "banners/about.jpg": "photo-1600585154340-be6161a56a0c",

  // Categories
  "categories/electronics.jpg": "photo-1498049794561-7780e7231661",
  "categories/home-kitchen.jpg": "photo-1556911220-bff31c9872ec",
  "categories/bathroom.jpg": "photo-1620626011761-996317b8d101",
  "categories/educational-toys.jpg": "photo-1587654780291-39c9404d746b",
  "categories/pet-supplies.jpg": "photo-1583511655857-d19b40a7a54e",
  "categories/beauty.jpg": "photo-1596462502278-27bfdc403348",
  "categories/sports-outdoors.jpg": "photo-1551632811-561732d1e306",
  "categories/office-supplies.jpg": "photo-1497366216548-37526070297c",
  "categories/fashion-accessories.jpg": "photo-1553062407-98eeb64c6a62",
  "categories/baby-products.jpg": "photo-1515488042361-ee00e5178171",
  "categories/toys-games.jpg": "photo-1566576912321-d58ddd7a6088",
  "categories/health-wellness.jpg": "photo-1544367567-0f2fcb009e0b",

  // Reused product images kept as-is if present; refresh a few
  "products/bath-towel-set-1.jpg": "photo-1631889992164-882aae16d807",
  "products/bath-towel-set-2.jpg": "photo-1584622650111-993a426fbf0a",
  "products/dog-bed-1.jpg": "photo-1583511655852-d21ac8a622af",
  "products/dog-bed-2.jpg": "photo-1548199973-03cce0bee78b",
  "products/coffee-grinder-1.jpg": "photo-1495474472287-4d71bcdd2085",
  "products/coffee-grinder-2.jpg": "photo-1517668808822-9ebb02f2a0e6",
  "products/yoga-mat-1.jpg": "photo-1544367567-0f2fcb009e0b",
  "products/yoga-mat-2.jpg": "photo-1592432678011-b9c4e8b5e2b1",
  "products/essential-oil-diffuser-1.jpg": "photo-1608571423902-eed4a5ad8108",
  "products/essential-oil-diffuser-2.jpg": "photo-1602928298849-325cec8771c0",

  // New products
  "products/digital-photo-frame-1.jpg": "photo-1516035069371-29a1b244cc32",
  "products/digital-photo-frame-2.jpg": "photo-1493976040374-85c8e12f0c0e",
  "products/usb-c-charging-hub-1.jpg": "photo-1583394838336-acd9777362a6",
  "products/usb-c-charging-hub-2.jpg": "photo-1625728744080-077785a06511",
  "products/ceramic-dutch-oven-1.jpg": "photo-1585515320310-259814833e95",
  "products/ceramic-dutch-oven-2.jpg": "photo-1556910103-1c02745aae4d",
  "products/bamboo-cutting-board-1.jpg": "photo-1590794056226-79ef3a8147e1",
  "products/bamboo-cutting-board-2.jpg": "photo-1600585152220-90363fe7e115",
  "products/linen-spa-robe-1.jpg": "photo-1616046229478-9901c5536a45",
  "products/linen-spa-robe-2.jpg": "photo-1631889992164-882aae16d807",
  "products/wooden-alphabet-puzzle-1.jpg": "photo-1587654780291-39c9404d746b",
  "products/wooden-alphabet-puzzle-2.jpg": "photo-1566576912321-d58ddd7a6088",
  "products/science-lab-kit-1.jpg": "photo-1532094349884-543bc11b234d",
  "products/science-lab-kit-2.jpg": "photo-1503454537195-1dcabb73ffb9",
  "products/elevated-pet-feeder-1.jpg": "photo-1450778869180-41d0601e046e",
  "products/elevated-pet-feeder-2.jpg": "photo-1587300003388-59208cc962cb",
  "products/clay-face-mask-set-1.jpg": "photo-1570172619644-dfd4ed8aa5e0",
  "products/clay-face-mask-set-2.jpg": "photo-1556228720-195a672e8a03",
  "products/natural-body-oil-1.jpg": "photo-1608248543806-ba4f8c2e0c3f",
  "products/natural-body-oil-2.jpg": "photo-1608571423902-eed4a5ad8108",
  "products/insulated-water-bottle-1.jpg": "photo-1602143407151-7111542de6e8",
  "products/insulated-water-bottle-2.jpg": "photo-1523362628745-0c100150b504",
  "products/leather-desk-tray-1.jpg": "photo-1615529328331-f8917597711f",
  "products/leather-desk-tray-2.jpg": "photo-1593062096039-9a26b09da705",
  "products/brass-desk-clock-1.jpg": "photo-1563861826100-9cb868fdbe1c",
  "products/brass-desk-clock-2.jpg": "photo-1509042239860-f550ce710b93",
  "products/canvas-weekender-tote-1.jpg": "photo-1553062407-98eeb64c6a62",
  "products/canvas-weekender-tote-2.jpg": "photo-1590874103328-eac38a67478e",
  "products/merino-wool-beanie-1.jpg": "photo-1576871337622-98d48d1cf531",
  "products/merino-wool-beanie-2.jpg": "photo-1520903920243-00d872a2d1c9",
  "products/organic-swaddle-set-1.jpg": "photo-1515488042361-ee00e5178171",
  "products/organic-swaddle-set-2.jpg": "photo-1522771739844-6a9f6d5f14af",
  "products/silicone-feeding-bibs-1.jpg": "photo-1519689680058-324335c77eba",
  "products/silicone-feeding-bibs-2.jpg": "photo-1503454537195-1dcabb73ffb9",
  "products/wooden-train-set-1.jpg": "photo-1596462502278-27bfdc403348",
  "products/wooden-train-set-2.jpg": "photo-1566576912321-d58ddd7a6088",
  "products/strategy-card-games-1.jpg": "photo-1606503153255-59d8b8d2e3a0",
  "products/strategy-card-games-2.jpg": "photo-1611892440504-42a792e24d32",
  "products/weighted-sleep-mask-1.jpg": "photo-1540555700478-4be289fbecef",
  "products/weighted-sleep-mask-2.jpg": "photo-1515377905703-c4788e51af15",
  "products/compact-picnic-blanket-1.jpg": "photo-1504280390367-361c6d9f38f4",
  "products/compact-picnic-blanket-2.jpg": "photo-1478131143081-80f7f84ac48a",
};

async function main() {
  console.log("Downloading Hansen Legacy imagery…");
  let ok = 0;
  let fail = 0;

  for (const [rel, photoId] of Object.entries(ASSETS)) {
    const dest = path.join(PUBLIC, rel);
    ensureDir(path.dirname(dest));
    const w = rel.startsWith("hero/") ? 1920 : rel.startsWith("products/") ? 900 : 1400;
    try {
      await download(unsplash(photoId, w), dest);
      ok++;
      console.log("✓", rel);
    } catch (err) {
      fail++;
      console.error("✗", rel, err.message);
    }
  }

  console.log(`\nDone. ${ok} downloaded, ${fail} failed.`);
}

main();
