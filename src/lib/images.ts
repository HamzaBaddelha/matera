/** Local assets under `public/images/`. Swap files on disk without changing imports. */
export const images = {
  logo: '/images/logo/logo-main.png',
  hero: '/images/branches/hero-image.jpg',
  aboutBanner: '/images/hero/about-banner.jpg',
  materaStory: '/images/hero/matera-story-bg.jpg',
  chef: '/images/menu/chef.jpg',
  menuPlaceholder: '/images/menu/placeholder.jpg',
  branch1: '/images/branches/branch-1.jpg',
  branch2: '/images/branches/branch-2.jpg',
  gallery: (n: number) => `/images/gallery/gallery-${n}.jpg`,
} as const;
