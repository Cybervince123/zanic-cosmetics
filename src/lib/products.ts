export type Category = "Cleansers" | "Serums" | "Moisturisers" | "Sunscreen" | "Body Care" | "Wellness";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { slug: "skin-auras-ceramide-body-lotion", name: "Skin Auras Ceramide Complex Body Lotion", category: "Body Care", image: "/products/studio/skin-auras-ceramide-body-lotion.png", description: "A selected body-care option for everyday routines and dependable retail shelves." },
  { slug: "salicylic-anti-acne-serum", name: "Salicylic Acid Anti-Acne Serum", category: "Serums", image: "/products/studio/salicylic-anti-acne-serum.png", description: "A targeted serum option for customers seeking focused blemish-care routines." },
  { slug: "collagen-probiotic", name: "Collagen with Probiotic", category: "Wellness", image: "/products/studio/collagen-probiotic.png", description: "A selected wellness product for a broader personal-care assortment." },
  { slug: "glow-getter-body-butter", name: "The Glow Getter Multi-Oil Body Butter", category: "Body Care", image: "/products/studio/glow-getter-body-butter.png", description: "A body-care essential chosen for everyday moisture routines and customer demand." },
  { slug: "high-protein-gainer", name: "High Protein Gainer", category: "Wellness", image: "/products/catalogue/high-protein-gainer.jpg", description: "A wellness range product available for retail, bulk and reseller enquiries." },
  { slug: "shower-gel", name: "Firming and Rejuvenating Shower Gel", category: "Body Care", image: "/products/studio/shower-gel.png", description: "A practical shower and personal-care staple for stores, salons and individual buyers." },
  { slug: "olay-super-serum-body-wash", name: "Olay Super Serum Body Wash", category: "Body Care", image: "/products/studio/olay-super-serum-body-wash.png", description: "A body-wash option for retailers, salons and everyday personal-care routines." },
  { slug: "collagen-peptides", name: "Grass-Fed Collagen Peptides", category: "Wellness", image: "/products/studio/collagen-peptides.png", description: "A selected wellness product for customers and businesses expanding their range." },
  { slug: "advanced-repair-hand-cream", name: "Advanced Repair Hand Cream", category: "Body Care", image: "/products/studio/advanced-repair-hand-cream.png", description: "An everyday hand-care option for personal-care shelves and routines." },
  { slug: "evening-primrose-oil", name: "Evening Primrose Oil", category: "Wellness", image: "/products/catalogue/evening-primrose-oil.jpg", description: "A wellness product available for current-stock and bulk-order enquiries." },
  { slug: "28-day-detox-tea", name: "28 Day Detox Tea", category: "Wellness", image: "/products/catalogue/28-day-detox-tea.jpg", description: "A selected wellness product for customers seeking a broader assortment." },
  { slug: "effaclar-purifying-cleanser", name: "Effaclar Purifying Cleanser", category: "Cleansers", image: "/products/studio/la-roche-posay-cleanser.png", description: "A recognised cleansing option for daily routines and skincare retail shelves." },
  { slug: "anthelios-invisible-fluid", name: "Anthelios UVMune 400 Invisible Fluid", category: "Sunscreen", image: "/products/studio/la-roche-posay-sunscreen.png", description: "An everyday sun-care option for personal routines and dependable resale." },
  { slug: "uncover-aloe-invisible-sunscreen", name: "Uncover Aloe Invisible Sunscreen SPF 50", category: "Sunscreen", image: "/products/studio/uncover-aloe-invisible-sunscreen.png", description: "An invisible-finish sun-care option for everyday routines and skincare shelves." },
  { slug: "restoring-body-lotion", name: "Restoring Body Lotion", category: "Body Care", image: "/products/catalogue/restoring-body-lotion.jpg", description: "A body-care option for customers seeking practical everyday moisture." },
  { slug: "vaseline-golden-hour-glow-gel-oil", name: "Vaseline Golden Hour Glow Gel Oil", category: "Body Care", image: "/products/studio/vaseline-golden-hour-glow-gel-oil.png", description: "A glow-finish body-care option for everyday moisture routines and retail shelves." },
  { slug: "la-roche-posay-lipikar-apm-balm", name: "La Roche-Posay Lipikar AP+M Balm", category: "Body Care", image: "/products/studio/la-roche-posay-lipikar-apm-balm.png", description: "A rich body-care balm option for customers seeking dependable daily moisture." },
  { slug: "tree-hut-watermelon-sugar-scrub", name: "Tree Hut Watermelon Shea Sugar Scrub", category: "Body Care", image: "/products/studio/tree-hut-watermelon-sugar-scrub.png", description: "A body exfoliation option for retailers, salons and everyday care routines." },
  { slug: "amlactin-body-lotion", name: "AmLactin Body Lotion", category: "Body Care", image: "/products/studio/amlactin-body-lotion.png", description: "A selected body-care product for retail, salon and personal-care customers." },
  { slug: "anua-rice-moisturizing-milk", name: "Anua Rice 70 Intensive Moisturizing Milk", category: "Moisturisers", image: "/products/studio/anua-moisturizing-milk.png", description: "A moisturising option selected for different routines and customer needs." },
  { slug: "vitamin-e-facial-oil", name: "Vitamin E Facial Oil Capsules", category: "Serums", image: "/products/studio/vitamin-e-facial-oil.png", description: "A facial oil option for customers and retailers building a broader skincare assortment." },
  { slug: "celimax-retinal-shot-serum", name: "Celimax Retinal Shot Tightening Booster", category: "Serums", image: "/products/studio/celimax-retinal-shot-serum.png", description: "A targeted serum option for customers building focused skincare routines." },
  { slug: "skin-success-vitamin-e-body-lotion", name: "Skin Success Vitamin E Tone Correcting Body Lotion", category: "Body Care", image: "/products/studio/skin-success-body-lotion.png", description: "A body-care product selected for everyday routines and retail demand." },
  { slug: "glutathione-vitamin-c-face-body-lotion", name: "Glutathione Vitamin C Face & Body Lotion", category: "Body Care", image: "/products/studio/glutathione-vitamin-c-lotion.png", description: "A body-care lotion option for retailers and customers seeking a broader everyday assortment." },
  { slug: "kojivit-ultra-gel", name: "Kojivit Ultra Gel", category: "Serums", image: "/products/studio/kojivit-ultra-gel.png", description: "A targeted skincare gel option for focused routine and retail enquiries." },
  { slug: "hyper-beauty-serum-collection", name: "Hyper Beauty Serum Collection", category: "Serums", image: "/products/studio/hyper-beauty-serum-collection.png", description: "A multi-option serum collection for customers and retailers building targeted skincare routines." },
  { slug: "duezi-collagen-plus-c", name: "Duezi Collagen+C", category: "Wellness", image: "/products/studio/duezi-collagen-plus-c.png", description: "A collagen and vitamin C wellness option for broader personal-care assortments." },
  { slug: "duezi-collagen-glutathione-vitamin-c", name: "Duezi Collagen + Glutathione + Vitamin C", category: "Wellness", image: "/products/studio/duezi-collagen-glutathione-vitamin-c.png", description: "A collagen and vitamin wellness option for retailers and customers seeking a broader range." },
  { slug: "duezi-vitamin-d3-k2", name: "Duezi Vitamin D3 + K2", category: "Wellness", image: "/products/studio/duezi-vitamin-d3-k2.png", description: "A vitamin wellness product available for retail, reseller and bulk enquiries." },
  { slug: "palmers-skin-success-fade-milk", name: "Palmer's Skin Success Fade Milk", category: "Body Care", image: "/products/studio/palmers-skin-success-fade-milk.png", description: "A recognised body-care option for retailers, salons and everyday routines." },
  { slug: "kormesic-coconut-oil-set", name: "Kormesic Coconut Oil Care Set", category: "Wellness", image: "/products/studio/kormesic-coconut-oil-set.png", description: "A three-piece coconut oil care set for customers and retailers expanding their wellness assortment." },
  { slug: "kormesic-coconut-oil-mouthwash", name: "Kormesic Coconut Oil Mouthwash", category: "Wellness", image: "/products/studio/kormesic-coconut-oil-mouthwash.png", description: "A coconut oil oral-care option for retailers and customers seeking a broader wellness assortment." },
  { slug: "acm-depiwhite-body-milk", name: "ACM Depiwhite Body Milk", category: "Body Care", image: "/products/studio/acm-depiwhite-body-milk.png", description: "A body-care lotion option for retailers, salons and everyday personal-care routines." },
  { slug: "nubiance-anti-dark-spot-body-lotion", name: "Nubiance Anti-Dark Spot Body Lotion", category: "Body Care", image: "/products/studio/nubiance-anti-dark-spot-body-lotion.png", description: "A body-care lotion option selected for everyday routines and dependable retail shelves." },
  { slug: "duezi-berberine", name: "Duezi Berberine", category: "Wellness", image: "/products/studio/duezi-berberine.png", description: "A wellness supplement option available for current-stock and bulk-order enquiries." },
  { slug: "dynewell-weight-gain-powder", name: "Dynewell Weight Gain Powder", category: "Wellness", image: "/products/studio/dynewell-weight-gain-powder.png", description: "A nutrition and wellness product for retailers and customers seeking a broader assortment." },
  { slug: "vitamin-c-fruit-candy", name: "Vitamin C Fruit Candy", category: "Wellness", image: "/products/studio/vitamin-c-fruit-candy.png", description: "A fruit-flavoured wellness product suited to broader personal-care and supplement shelves." },
  { slug: "natures-cure-vitamin-c", name: "Nature's Cure Vitamin C", category: "Wellness", image: "/products/studio/natures-cure-vitamin-c.png", description: "A vitamin C wellness product available for retail, reseller and bulk enquiries." },
  { slug: "duezi-maca", name: "Duezi Maca", category: "Wellness", image: "/products/studio/duezi-maca.png", description: "A wellness supplement option for retailers and customers seeking a broader range." },
  { slug: "duezi-coq10", name: "Duezi CoQ10 200MG", category: "Wellness", image: "/products/studio/duezi-coq10.png", description: "A wellness supplement option available for current-stock and bulk-order enquiries." },
  { slug: "duezi-calcium-magnesium-zinc", name: "Duezi Calcium Magnesium Zinc + Vitamin D3", category: "Wellness", image: "/products/studio/duezi-calcium-magnesium-zinc.png", description: "A mineral and vitamin wellness product for retailers and customers seeking a broader range." },
  { slug: "ultimate-maca-collagen-peptides", name: "Ultimate Maca Collagen Peptides", category: "Wellness", image: "/products/studio/ultimate-maca-collagen-peptides.png", description: "A collagen and wellness supplement option for retail and bulk enquiries." },
  { slug: "winstown-myo-inositol", name: "WinsTown Myo-Inositol & D-Chiro Inositol", category: "Wellness", image: "/products/studio/winstown-myo-inositol.png", description: "A wellness supplement option for retailers and customers seeking a broader assortment." },
  { slug: "duezi-marine-collagen", name: "Duezi Marine Collagen+", category: "Wellness", image: "/products/studio/duezi-marine-collagen.png", description: "A collagen wellness product available for retail, reseller and bulk enquiries." },
  { slug: "duezi-magnesium-glycinate", name: "Duezi Magnesium Glycinate 500MG", category: "Wellness", image: "/products/studio/duezi-magnesium-glycinate.png", description: "A magnesium wellness supplement option for retail and bulk enquiries." },
  { slug: "duezi-omega-3-6-7-9", name: "Duezi Omega 3-6-7-9", category: "Wellness", image: "/products/studio/duezi-omega-3-6-7-9.png", description: "An omega supplement option for retailers and customers seeking a broader wellness range." },
  { slug: "winstown-weight-loss", name: "WinsTown Weight Loss", category: "Wellness", image: "/products/studio/winstown-weight-loss.png", description: "A wellness product available for current-stock and bulk-order enquiries." },
  { slug: "peach-perfect-pcos-multivitamin", name: "Peach Perfect Happy Hormones Multivitamin", category: "Wellness", image: "/products/studio/peach-perfect-pcos-multivitamin.png", description: "A women's wellness supplement option for retailers and customers seeking a broader assortment." },
  { slug: "duezi-fish-oil-omega-3", name: "Duezi Fish Oil Omega 3", category: "Wellness", image: "/products/studio/duezi-fish-oil-omega-3.png", description: "A fish oil wellness supplement option for retail, reseller and bulk enquiries." },
  { slug: "cloud-nine-lemon-lotion", name: "Cloud Nine Lemon Plus Mango Lotion", category: "Body Care", image: "/products/studio/cloud-nine-lemon-lotion.png", description: "A multi-vitamin body lotion option for retailers, salons and everyday routines." },
  { slug: "creatings-hair-nac", name: "Creating's Hair NAC", category: "Wellness", image: "/products/studio/creatings-hair-nac.png", description: "A wellness supplement option available for current-stock and bulk-order enquiries." },
  { slug: "byoma-brightening-body-lotion", name: "BYOMA Brightening Body Lotion", category: "Body Care", image: "/products/studio/byoma-brightening-body-lotion.png", description: "A body-care lotion option for retailers, salons and everyday routines." },
  { slug: "byoma-brightening-body-wash", name: "BYOMA Brightening Body Wash", category: "Body Care", image: "/products/studio/byoma-brightening-body-wash.png", description: "A body-wash option for retailers, salons and everyday personal-care routines." },
  { slug: "duezi-lutein-clear-vision", name: "Duezi Lutein Clear Vision", category: "Wellness", image: "/products/studio/duezi-lutein-clear-vision.png", description: "A wellness supplement option for retailers and customers seeking a broader assortment." },
];

export const CATEGORIES: Category[] = ["Body Care", "Wellness", "Cleansers", "Serums", "Moisturisers", "Sunscreen"];

export const CATEGORY_DETAILS: Record<Category, { eyebrow: string; title: string; description: string; image: string }> = {
  Cleansers: { eyebrow: "Start well", title: "Cleansers for a fresh daily reset", description: "Carefully selected cleansing products for retailers, professionals and personal routines.", image: "/images/category-cleanser-pexels-v3.jpg" },
  Serums: { eyebrow: "Targeted care", title: "Serums for specific skin goals", description: "A considered range of serum options chosen around customer demand, suitability and quality.", image: "/images/category-serum-pexels-v2.jpg" },
  Moisturisers: { eyebrow: "Daily comfort", title: "Moisture that completes the routine", description: "Moisturising products for different skin needs, available for retail and bulk enquiries.", image: "/images/category-moisturiser-pexels-v2.jpg" },
  Sunscreen: { eyebrow: "Everyday protection", title: "Sun care made easy to stock", description: "In-demand sun-care products sourced for daily use and reliable resale.", image: "/images/category-sunscreen-pexels-v2.jpg" },
  "Body Care": { eyebrow: "Beyond the face", title: "Body care for every shelf", description: "Lotions, creams, oils and personal-care staples for stores, salons and individual buyers.", image: "/images/category-body-care-pexels-v2.jpg" },
  Wellness: { eyebrow: "More ways to care", title: "Wellness products for growing shelves", description: "Selected wellness products for customers and businesses looking for a broader personal-care assortment.", image: "/images/category-wellness-pexels-v2.jpg" },
};

export interface TrustPoint { quote: string; name: string; role: string; rating: number; image: string; }

export const TRUST_POINTS: TrustPoint[] = [
  { quote: "Product authenticity and responsible sourcing remain important pillars of our business.", name: "Authenticity", role: "A promise to customers and business partners", rating: 5, image: "/products/studio/la-roche-posay-cleanser.png" },
  { quote: "Our wholesale customers are not merely buyers; they are business partners.", name: "Business partnership", role: "Supporting retailers, resellers and beauty professionals", rating: 5, image: "/products/studio/skin-success-body-lotion.png" },
  { quote: "Fast response, clear information, genuine products, competitive pricing and reliable delivery.", name: "Customer experience", role: "The standard we aim to deliver", rating: 5, image: "/products/studio/la-roche-posay-sunscreen.png" },
];

export const FAQS = [
  { question: "Who can order from Zanic?", answer: "We supply skincare retailers, beauty stores, supermarkets, online vendors, skincare entrepreneurs, salons, spas, resellers, bulk purchasers, distributors and individual customers." },
  { question: "Where do you deliver?", answer: "We provide reliable nationwide delivery across Nigeria, with coverage extending to selected African and international markets. Contact us to confirm the best option for your location." },
  { question: "How do you choose products?", answer: "We consider authenticity, quality, customer suitability, market demand and commercial viability before adding products to our range." },
  { question: "How do I get wholesale pricing?", answer: "Send us the products and quantities you need. We will confirm current availability, competitive bulk pricing and delivery options." },
  { question: "What support is available for wholesale partners?", answer: "Our partner programme can include product information, new-product updates, promotional support, business materials, priority availability and distribution opportunities." },
];
