export type Category = "Cleansers" | "Serums" | "Moisturisers" | "Sunscreen" | "Body Care" | "Wellness";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { slug: "skin-auras-ceramide-body-lotion", name: "Skin Auras Ceramide Complex Body Lotion", category: "Body Care", image: "/products/studio/skin-auras-ceramide-body-lotion.png", description: "A genuine product from the current Zanics image library. Ask the team about availability and current pricing." },
  { slug: "salicylic-anti-acne-serum", name: "Salicylic Acid Anti-Acne Serum", category: "Serums", image: "/products/studio/salicylic-anti-acne-serum.png", description: "A targeted serum option shown in the current product collection. Product guidance is available from our team." },
  { slug: "collagen-probiotic", name: "Collagen with Probiotic", category: "Wellness", image: "/products/studio/collagen-probiotic.png", description: "A carefully selected wellness product from the current collection. Contact us for current availability." },
  { slug: "glow-getter-body-butter", name: "The Glow Getter Multi-Oil Body Butter", category: "Body Care", image: "/products/studio/glow-getter-body-butter.png", description: "A body-care product from the current image library, selected for quality and customer demand." },
  { slug: "high-protein-gainer", name: "High Protein Gainer", category: "Wellness", image: "/products/catalogue/high-protein-gainer.jpg", description: "A wellness product shown in the current Zanics collection. Ask about supply and bulk ordering." },
  { slug: "shower-gel", name: "Firming and Rejuvenating Shower Gel", category: "Body Care", image: "/products/studio/shower-gel.png", description: "A personal-care staple for retail shelves, salons and individual buyers." },
  { slug: "collagen-peptides", name: "Grass-Fed Collagen Peptides", category: "Wellness", image: "/products/studio/collagen-peptides.png", description: "A genuine wellness product from the current catalogue. Contact us for verified stock information." },
  { slug: "advanced-repair-hand-cream", name: "Advanced Repair Hand Cream", category: "Body Care", image: "/products/studio/advanced-repair-hand-cream.png", description: "A hand-care option for everyday use, selected with product quality and customer fit in mind." },
  { slug: "evening-primrose-oil", name: "Evening Primrose Oil", category: "Wellness", image: "/products/catalogue/evening-primrose-oil.jpg", description: "A current wellness product shown as supplied. Ask our team about availability." },
  { slug: "28-day-detox-tea", name: "28 Day Detox Tea", category: "Wellness", image: "/products/catalogue/28-day-detox-tea.jpg", description: "A wellness product in the current image library. Product information should be confirmed before purchase." },
  { slug: "effaclar-purifying-cleanser", name: "Effaclar Purifying Cleanser", category: "Cleansers", image: "/products/studio/la-roche-posay-cleanser.png", description: "A genuine cleanser image from the current Zanics product collection." },
  { slug: "anthelios-invisible-fluid", name: "Anthelios UVMune 400 Invisible Fluid", category: "Sunscreen", image: "/products/studio/la-roche-posay-sunscreen.png", description: "A sunscreen product from the current collection. Contact us for current stock and pricing." },
  { slug: "restoring-body-lotion", name: "Restoring Body Lotion", category: "Body Care", image: "/products/catalogue/restoring-body-lotion.jpg", description: "A body-care product for customers seeking dependable everyday moisture." },
  { slug: "amlactin-body-lotion", name: "AmLactin Body Lotion", category: "Body Care", image: "/products/studio/amlactin-body-lotion.png", description: "A body-care product shown in the current image library. Ask about availability." },
  { slug: "anua-rice-moisturizing-milk", name: "Anua Rice 70 Intensive Moisturizing Milk", category: "Moisturisers", image: "/products/studio/anua-moisturizing-milk.png", description: "A moisturising product from the current Zanics collection, subject to current stock." },
  { slug: "skin-success-vitamin-e-body-lotion", name: "Skin Success Vitamin E Tone Correcting Body Lotion", category: "Body Care", image: "/products/studio/skin-success-body-lotion.png", description: "A body-care product from the current collection. Contact the team for current pricing." },
];

export const CATEGORIES: Category[] = ["Cleansers", "Serums", "Moisturisers", "Sunscreen", "Body Care", "Wellness"];

export const CATEGORY_DETAILS: Record<Category, { eyebrow: string; title: string; description: string; image: string }> = {
  Cleansers: { eyebrow: "Start well", title: "Cleansers for a fresh daily reset", description: "Carefully selected cleansing products for retailers, professionals and personal routines.", image: "/images/stock-cleanser.jpg" },
  Serums: { eyebrow: "Targeted care", title: "Serums for specific skin goals", description: "A considered range of serum options chosen around customer demand, suitability and quality.", image: "/images/stock-serum.jpg" },
  Moisturisers: { eyebrow: "Daily comfort", title: "Moisture that completes the routine", description: "Moisturising products for different skin needs, available for retail and bulk enquiries.", image: "/images/stock-moisturiser.jpg" },
  Sunscreen: { eyebrow: "Everyday protection", title: "Sun care made easy to stock", description: "In-demand sun-care products sourced for daily use and reliable resale.", image: "/images/stock-sunscreen.jpg" },
  "Body Care": { eyebrow: "Beyond the face", title: "Body care for every shelf", description: "Lotions, creams, oils and personal-care staples for stores, salons and individual buyers.", image: "/products/studio/glow-getter-body-butter.png" },
  Wellness: { eyebrow: "More ways to care", title: "Wellness products for growing shelves", description: "Selected wellness products for customers and businesses looking for a broader personal-care assortment.", image: "/products/studio/collagen-peptides.png" },
};

export interface TrustPoint { quote: string; name: string; role: string; rating: number; image: string; }

export const TRUST_POINTS: TrustPoint[] = [
  { quote: "Product authenticity and responsible sourcing remain important pillars of our business.", name: "Authenticity", role: "A promise to customers and business partners", rating: 5, image: "/products/studio/la-roche-posay-cleanser.png" },
  { quote: "Our wholesale customers are not merely buyers; they are business partners.", name: "Business partnership", role: "Supporting retailers, resellers and beauty professionals", rating: 5, image: "/products/studio/skin-success-body-lotion.png" },
  { quote: "Fast response, clear information, genuine products, competitive pricing and reliable delivery.", name: "Customer experience", role: "The standard we aim to deliver", rating: 5, image: "/products/studio/la-roche-posay-sunscreen.png" },
];

export const FAQS = [
  { question: "Do you supply retailers and resellers?", answer: "Yes. Zanic supplies skincare retailers, beauty stores, supermarkets, online vendors, salons, spas, resellers, bulk purchasers and independent distributors." },
  { question: "Where do you deliver?", answer: "We provide reliable nationwide delivery across Nigeria, with coverage extending to selected African and international markets. Contact us to confirm delivery options for your location." },
  { question: "How do you select products?", answer: "We consider authenticity, quality, customer suitability, market demand and commercial viability before adding products to our range." },
  { question: "Can I request wholesale pricing?", answer: "Yes. Contact our team with the products and quantities you need. We will share current availability, bulk pricing and delivery options." },
  { question: "How do you support wholesale partners?", answer: "Our partner programme is designed to provide product information, new-product updates, promotional support, priority availability and dependable communication." },
];
