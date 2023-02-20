import { DataType, EventType } from "./types";

const data: DataType = {
  groom: {
    name: "Zakka",
    fullname: "Musthofa Zakka",
    fatherName: "Abd. Qodim",
    motherName: "Basni Masrohatin",
    ig: "zakkazakuwi",
    photo:
      "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/zakka.png",
  },
  bride: {
    name: "Tyas",
    fullname: "Maharani Pujaning Tyas",
    fatherName: "Ani Saputro",
    motherName: "Trinovita",
    ig: "mhrntys09_",
    photo:
      "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/tyas.png",
  },
};

const imageSrc = {
  cover:
    "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/cover.png",
  ending:
    "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/ending.png",
  open: "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/open.png",
};

const audioLink =
  "https://zehusnfzvihagybljexx.supabase.co/storage/v1/object/public/photo/y2mate.com%20-%20Yang%20Terakhir.mp3";

const altImage = `${data.groom.name} & ${data.bride.name}`;

const date = {
  date: "12",
  month: "03",
  year: "2023",
};

const event: EventType[] = [
  {
    title: "Akad & Resepsi",
    date: "Jumat, 3 Maret 2023",
    times: [
      { title: "Akad", time: "08.00 - selesai" },
      { title: "Resepsi", time: "13.00 - selesai" },
    ],
    locationTitle: "Kediaman Mempelai Wanita",
    location: "Ds. Sumbersari, Kec. Udanawu, Kab. Blitar",
    mapLink: "https://goo.gl/maps/MYxrE8D7csLdkD6b9",
    mapIframe:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3950.7761043064047!2d112.06054021477955!3d-8.022007894223195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOMKwMDEnMTkuMiJTIDExMsKwMDMnNDUuOCJF!5e0!3m2!1sen!2sid!4v1676882300206!5m2!1sen!2sid",
  },
  {
    title: "Unduh Mantu",
    date: "Minggu, 12 Maret 2023",
    times: [{ title: "unduh mantu", time: "10.00 - 15.00" }],
    locationTitle: "Kediaman Mempelai Pria",
    location: "Ds. Kowang, Kec. Semanding, Kab. Tuban",
    mapLink: "https://goo.gl/maps/7wXztL71tP5UNWXQ7",
    mapIframe:
      "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3960.5843126316036!2d112.08555701477296!3d-6.94018079498574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTYnMjQuNyJTIDExMsKwMDUnMTUuOSJF!5e0!3m2!1sen!2sid!4v1676794952224!5m2!1sen!2sid",
  },
];

const gift = {
  bankAccount: [
    {
      nameAcount: "Maharani Pujaning Tyas",
      bankAcount: "bca",
      accountNumber: "8240772222",
    },
    {
      nameAcount: "Musthofa Zakka",
      bankAcount: "bca",
      accountNumber: "8240806381",
    },
  ],
  address: [
    // {
    //   name: 'M Labib Naufal A',
    //   phoneNumber: '081585737170',
    //   addres: 'Jl.WR Supratman Gg XI No 79 RT.3/RW.6, Kel.Sendangharjo, Kab.Tuban, Jawa Timur, ID 62319'
    // }
  ],
};

export { date, altImage, audioLink, imageSrc, data, event, gift };
