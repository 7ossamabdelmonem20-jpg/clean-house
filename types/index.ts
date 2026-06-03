export interface Service {
  id: string;
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  bgColor: string;
  anchor: string;
}

export interface Testimonial {
  name: string;
  city: string;
  rating: number;
  text: string;
  service: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
  dropdown?: { label: string; href: string; icon: string }[];
}

export interface Stat {
  value: number;
  label: string;
  suffix: string;
  icon: string;
}
