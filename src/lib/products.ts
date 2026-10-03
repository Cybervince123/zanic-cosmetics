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
  { slug: "collagen-peptides", name: "Grass-Fed Collagen Peptides", category: "Wellness", image: "/products/studio/collagen-peptides.png", description: "A selected wellness product for customers and businesses expanding their range." },
  { slug: "advanced-repair-hand-cream", name: "Advanced Repair Hand Cream", category: "Body Care", image: "/products/studio/advanced-repair-hand-cream.png", description: "An everyday hand-care option for personal-care shelves and routines." },
  { slug: "evening-primrose-oil", name: "Evening Primrose Oil", category: "Wellness", image: "/products/catalogue/evening-primrose-oil.jpg", description: "A wellness product available for current-stock and bulk-order enquiries." },
  { slug: "28-day-detox-tea", name: "28 Day Detox Tea", category: "Wellness", image: "/products/catalogue/28-day-detox-tea.jpg", description: "A selected wellness product for customers seeking a broader assortment." },
  { slug: "effaclar-purifying-cleanser", name: "Effaclar Purifying Cleanser", category: "Cleansers", image: "/products/studio/la-roche-posay-cleanser.png", description: "A recognised cleansing option for daily routines and skincare retail shelves." },
  { slug: "anthelios-invisible-fluid", name: "Anthelios UVMune 400 Invisible Fluid", category: "Sunscreen", image: "/products/studio/la-roche-posay-sunscreen.png", description: "An everyday sun-care option for personal routines and dependable resale." },
  { slug: "restoring-body-lotion", name: "Restoring Body Lotion", category: "Body Care", image: "/products/catalogue/restoring-body-lotion.jpg", description: "A body-care option for customers seeking practical everyday moisture." },
  { slug: "amlactin-body-lotion", name: "AmLactin Body Lotion", category: "Body Care", image: "/products/studio/amlactin-body-lotion.png", description: "A selected body-care product for retail, salon and personal-care customers." },
  { slug: "anua-rice-moisturizing-milk", name: "Anua Rice 70 Intensive Moisturizing Milk", category: "Moisturisers", image: "/products/studio/anua-moisturizing-milk.png", description: "A moisturising option selected for different routines and customer needs." },
  { slug: "skin-success-vitamin-e-body-lotion", name: "Skin Success Vitamin E Tone Correcting Body Lotion", category: "Body Care", image: "/products/studio/skin-success-body-lotion.png", description: "A body-care product selected for everyday routines and retail demand." },
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
  { question: "Who can order from Zanic?", answer: "We supply skincare retailers, beauty stores, supermarkets, online vendors, skincare entrepreneurs, salons, spas, resellers, bulk purchasers, distributors and individual customers." },
  { question: "Where do you deliver?", answer: "We provide reliable nationwide delivery across Nigeria, with coverage extending to selected African and international markets. Contact us to confirm the best option for your location." },
  { question: "How do you choose products?", answer: "We consider authenticity, quality, customer suitability, market demand and commercial viability before adding products to our range." },
  { question: "How do I get wholesale pricing?", answer: "Send us the products and quantities you need. We will confirm current availability, competitive bulk pricing and delivery options." },
  { question: "What support is available for wholesale partners?", answer: "Our partner programme can include product information, new-product updates, promotional support, business materials, priority availability and distribution opportunities." },
];
