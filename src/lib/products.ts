import { themedImage } from "@/lib/images";

export interface Product {
  slug: string;
  name: string;
  price: number;
  image: string;
}

// All product photography shares one ratio (4:5) — see the aspect-ratio note in
// product-card.tsx for why that's the site-wide portrait standard.
export const PRODUCTS: Product[] = [
  { slug: "rescue-balm", name: "Rescue Balm", price: 450, image: themedImage("cosmetics,jar", 640, 800, 2) },
  { slug: "dew-glow-moisturizer", name: "Dew Glow Moisturizer", price: 550, image: themedImage("moisturizer", 640, 800) },
  { slug: "daily-spf", name: "Daily SPF", price: 300, image: themedImage("sunscreen", 640, 800) },
  { slug: "velvet-glow-serum", name: "Velvet Glow Serum", price: 850, image: themedImage("skincare,serum", 640, 800, 3) },
  { slug: "balancing-toner", name: "Balancing Toner", price: 400, image: themedImage("toner", 640, 800) },
];

export const CATEGORIES = [
  "Cleansers",
  "Serums",
  "Moisturizers",
  "Sunscreen",
  "Toner",
  "Hair Oil",
  "Lotion",
  "Cream",
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "My skin was extremely dry and dull before discovering this brand - now it feels healthy, soft, and radiant. It completely changed how I take care of my skin daily.",
    name: "Adaeze Okafor",
    role: "Salon Owner, Lagos",
    rating: 4.9,
    image: themedImage("portrait,woman", 640, 800, 1),
  },
  {
    quote:
      "I stock a lot of skincare brands, but the quality and consistency here is what keeps my customers coming back every month. Reliable supply matters as much as the products.",
    name: "Ngozi Bello",
    role: "Retail Partner, Abuja",
    rating: 4.8,
    image: themedImage("portrait,woman", 640, 800, 2),
  },
  {
    quote:
      "This brand has become a trusted part of my routine. I consistently recommend their products to my clients, and they always deliver reliable results that make skin feel fresh and balanced.",
    name: "Chidinma Eze",
    role: "Beauty Entrepreneur",
    rating: 4.9,
    image: themedImage("portrait,woman", 640, 800, 4),
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Are your products suitable for sensitive skin?",
    answer:
      "Yes, our products are formulated to be gentle and suitable for most skin types, including sensitive skin. However, we recommend doing a patch test before using any product.",
  },
  {
    question: "How long does it take to see visible results?",
    answer:
      "Most customers notice visible improvements within 2–4 weeks of consistent use. Results may vary depending on individual skin type, lifestyle, and specific skin concerns.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, all of our products are 100% cruelty-free. We do not test our products on animals at any stage of development.",
  },
  {
    question: "Do you use harmful chemicals like parabens?",
    answer:
      "No, our products are formulated without harmful chemicals such as parabens, sulfates, and harsh toxins. We focus on safe and skin-friendly ingredients.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy for unused products. If you receive a damaged or incorrect item, please contact our support team and we will assist you with a replacement or refund.",
  },
];
