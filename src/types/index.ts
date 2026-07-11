export type Locale = 'en' | 'ar';

export interface MenuItem {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn?: string;
  descriptionAr?: string;
  price?: number;
  calories?: number;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  items: MenuItem[];
}

export interface Branch {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  addressEn: string;
  addressAr: string;
  phone: string;
  email: string;
  hoursEn: string;
  hoursAr: string;
  mapUrl: string;
  qrImage: string;
  image: string;
}

export interface Testimonial {
  id: string;
  nameEn: string;
  nameAr: string;
  roleEn?: string;
  roleAr?: string;
  textEn: string;
  textAr: string;
  rating: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  altEn: string;
  altAr: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Dictionary = Record<string, any>;
