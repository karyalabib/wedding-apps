import { DataType } from "./types";

const data: DataType = {
  groom: {
    name: "Zakka",
    fullname: "Musthofa Zakka",
    fatherName: "Abd. Qodim",
    motherName: "Basni Masrohatin",
    ig: "zakkazakuwi",
    photo: "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/zakka.png",
  },
  bride: {
    name: "Tyas",
    fullname: "Maharani Pujaning Tyas",
    fatherName: "Ani Saputro",
    motherName: "Trinovita",
    ig: "mhrntys09_",
    photo: "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/tyas.png",
  },
};

const imageSrc = {
  cover:
    "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/cover.png",
  ending: "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/ending.png",
  open: "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/open.png",
};

const audioLink =
  "https://gctupmxqbczdwwhyntpz.supabase.co/storage/v1/object/sign/audio/Jangan%20Berhenti%20Mencintaiku%20(Saxophone%20Cover%20by%20Dori%20Wirawan).mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdWRpby9KYW5nYW4gQmVyaGVudGkgTWVuY2ludGFpa3UgKFNheG9waG9uZSBDb3ZlciBieSBEb3JpIFdpcmF3YW4pLm1wMyIsImlhdCI6MTY2OTkyMjM2OSwiZXhwIjoxOTg1MjgyMzY5fQ.cT_pEZLiLJO7udmTpLsM1mtqR135TrLTOGAj6Vl_gjc";

const altImage = `${data.groom.name} & ${data.bride.name}`;

const date = {
  date: "12",
  month: "03",
  year: "2023",
};

const event = [
  {
    title: 'AKAD & RESEPSEPSI',
    date: 'Jumat, 3 Maret 2023',
    time: '08.00 - 13.00',
    locationTitle: 'Kediaman Mempelai Wanita',
    location: 'Ds. Sumbersari, Kec. Udanawu, Kab. Blitar'
  },
  {
    title: 'UNDUH MANTU',
    date: 'Minggu, 12 Maret 2023',
    time: '10.00 - 15.00',
    locationTitle: 'Kediaman Mempelai Pria',
    location: 'Ds. Kowang, Kec. Semanding, Kab. Tuban'
  }
]

export { date, altImage, audioLink, imageSrc, data, event };
