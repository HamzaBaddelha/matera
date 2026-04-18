import type { Branch } from '@/types';
import { images } from '@/lib/images';

export const branches: Branch[] = [
  {
    id: 'rawdha-khurais',
    nameEn: 'MATERA Rawdha Khurais Road',
    nameAr: 'ماتيرا الروضة طريق خريص',
    descriptionEn: 'MATERA branch at Rawdha Khurais Road.',
    descriptionAr: 'فرع ماتيرا في الروضة طريق خريص.',
    addressEn: 'Rawdha Khurais Road',
    addressAr: 'حي الروضة طريق خريص',
    phone: '+966 11 234 5678',
    email: 'rawdha@matera.sa',
    hoursEn: 'Daily from 7AM to 1 AM',
    hoursAr: 'يومياً من ٧ صباحاً إلى ١ صباحاً',
    mapUrl: '#',
    image: images.logo,
  },
  {
    id: 'kairouan',
    nameEn: 'MATERA Kairouan',
    nameAr: 'ماتيرا القيروان',
    descriptionEn: 'MATERA branch at Kairouan.',
    descriptionAr: 'فرع ماتيرا في القيروان.',
    addressEn: 'Kairouan',
    addressAr: 'القيروان',
    phone: '+966 12 345 6789',
    email: 'kairouan@matera.sa',
    hoursEn: 'Daily from 7AM to 1 AM',
    hoursAr: 'يومياً من ٧ صباحاً إلى ١ صباحاً',
    mapUrl: '#',
    image: images.logo,
  },
];
