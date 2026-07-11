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
    mapUrl: 'https://maps.app.goo.gl/mgRMU4d7pry71oK5A?g_st=iw',
    qrImage: '/images/branches/rawdha-khurais-qr.png',
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
    mapUrl: 'https://www.google.com/maps?q=24.84119987487793,46.606624603271484&z=17&hl=en',
    qrImage: '/images/branches/kairouan-qr.png',
    image: images.logo,
  },
];
