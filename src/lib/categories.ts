export interface Category {
  slug: string;
  label: string;
  description: string;
}

export const categories: Category[] = [
  { slug: "vision", label: "Vision & Eye Health", description: "Supplements that claim to support eyesight, macular health and age-related vision decline." },
  { slug: "hearing", label: "Hearing & Tinnitus", description: "Products marketed for hearing support, ear health and ringing in the ears." },
  { slug: "blood-sugar", label: "Blood Sugar", description: "Supplements that claim to support healthy glucose levels and metabolism." },
  { slug: "weight-loss", label: "Weight Loss", description: "Fat-burners, metabolism boosters and appetite-related supplements." },
  { slug: "brain", label: "Brain & Memory", description: "Nootropics and products marketed for focus, memory and cognitive health." },
  { slug: "prostate", label: "Prostate Health", description: "Supplements targeting prostate size, urinary flow and related symptoms." },
  { slug: "joint", label: "Joint & Mobility", description: "Products for joint comfort, cartilage and mobility support." },
  { slug: "heart", label: "Heart & Circulation", description: "Supplements marketed for cardiovascular health, blood pressure and circulation." },
  { slug: "dental", label: "Dental & Oral Health", description: "Products claiming to support teeth, gums and the oral microbiome." },
  { slug: "men", label: "Men's Health", description: "Testosterone, vitality and men's performance supplements." },
  { slug: "energy", label: "Energy & Metabolism", description: "Supplements marketed for energy, fatigue and metabolic support." },
  { slug: "sleep", label: "Sleep & Relaxation", description: "Products for sleep quality, relaxation and stress." },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
