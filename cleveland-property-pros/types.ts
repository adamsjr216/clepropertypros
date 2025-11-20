import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PropertyType {
  title: string;
  description: string;
  priceRange: string;
  imageUrl: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}