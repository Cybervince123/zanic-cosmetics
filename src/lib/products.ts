export type Category = "Cleansers" | "Serums" | "Moisturisers" | "Sunscreen" | "Toners" | "Body Care";

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  description: string;
}

export const PRODUCTS: Product[] = [
  { slug: "daily-cleanser", name: "Daily Cleanser", category: "Cleansers", price: 4500, image: "/images/cleanser.png", description: "Everyday cleansing options selected for a clean, comfortable finish." },
  { slug: "radiance-serum", name: "Radiance Serum", category: "Serums", price: 8500, image: "/images/serum.png", description: "Targeted serum options for hydration, tone and a balanced routine." },
  { slug: "daily-moisturiser", name: "Daily Moisturiser", category: "Moisturisers", price: 6500, image: "/images/moisturizer.png", description: "Moisture support selected for different skin types and daily needs." },
  { slug: "daily-spf", name: "Daily SPF", category: "Sunscreen", price: 7000, image: "/images/sunscreen.png", description: "Practical sun-care choices for dependable everyday protection." },
  { slug: "balancing-toner", name: "Balancing Toner", category: "Toners", price: 5000, image: "/images/product-collection.png", description: "Toners selected to support a fresh, balanced skincare routine." },
  { slug: "body-lotion", name: "Nourishing Body Lotion", category: "Body Care", price: 7500, image: "/images/body-lotion.png", description: "Body-care essentials for lasting moisture and everyday comfort." },
];

export const CATEGORIES: Category[] = ["Cleansers", "Serums", "Moisturisers", "Sunscreen", "Toners", "Body Care"];

export const CATEGORY_DETAILS: Record<Category, { eyebrow: string; title: string; description: string; image: string }> = {
  Cleansers: { eyebrow: "Start well", title: "Cleansers for a fresh daily reset", description: "Carefully selected face and body cleansers for retailers, professionals and personal routines.", image: "/images/cleanser.png" },
  Serums: { eyebrow: "Targeted care", title: "Serums for specific skin goals", description: "A considered range of serum options chosen around customer demand, suitability and quality.", image: "/images/serum.png" },
  Moisturisers: { eyebrow: "Daily comfort", title: "Moisture that completes the routine", description: "Face creams and products for different skin needs, available for retail and bulk orders.", image: "/images/moisturizer.png" },
  Sunscreen: { eyebrow: "Everyday protection", title: "Sun care made easy to stock", description: "In-demand sunscreen formats sourced for daily use and reliable resale.", image: "/images/sunscreen.png" },
  Toners: { eyebrow: "Balance and prepare", title: "Toners customers return for", description: "Popular toner options selected for genuine quality, fit and commercial potential.", image: "/images/product-collection.png" },
  "Body Care": { eyebrow: "Beyond the face", title: "Body care for every shelf", description: "Lotions, creams, oils and personal-care staples for stores, salons and individual buyers.", image: "/images/body-lotion.png" },
};

export interface Testimonial { quote: string; name: string; role: string; rating: number; image: string; }

export const TESTIMONIALS: Testimonial[] = [
  { quote: "Zanic understands what retailers need: genuine products, clear information and supply we can plan around.", name: "Adaeze Okafor", role: "Beauty Retailer, Lagos", rating: 4.9, image: "/images/retail-partner.png" },
  { quote: "The product range is practical and the wholesale process is straightforward. That makes restocking much easier.", name: "Ngozi Bello", role: "Online Beauty Vendor, Abuja", rating: 4.8, image: "/images/wholesale-partner.png" },
  { quote: "I value the responsiveness. I get product information, dependable delivery and support after the sale.", name: "Chidinma Eze", role: "Salon Owner, Lagos", rating: 4.9, image: "/images/authenticity.png" },
];

export const FAQS = [
  { question: "Do you supply retailers and resellers?", answer: "Yes. Zanic supplies beauty stores, supermarkets, online vendors, salons, spas, resellers, bulk purchasers and independent distributors." },
  { question: "Where do you deliver?", answer: "We provide nationwide delivery across Nigeria, with growing coverage for selected African and international markets." },
  { question: "How do you select products?", answer: "We consider authenticity, quality, customer suitability, market demand and commercial viability before adding products to our range." },
  { question: "Can I request wholesale pricing?", answer: "Yes. Contact our team with the products and quantities you need. We will share current availability, bulk pricing and delivery options." },
  { question: "Do you support wholesale partners after purchase?", answer: "Our partner approach includes product information, new-product updates, priority availability, promotional support and responsive after-sales service." },
];
