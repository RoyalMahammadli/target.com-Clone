//findStores
export interface myStoreItems {
  name: string;
  location: string;
  open: boolean;
  openTime: string;
  tel: string;
  button1: string;
  button2: string;
}

export const storeItems: myStoreItems[] = [
  {
    name: "Cedar Rapids Southstore details",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: true,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Cedar Rapids Northstore details",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: false,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Coralville",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: true,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Iowa City Downtown",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: true,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Cedar Fallss",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: true,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Dubuque",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: false,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Dubuque",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: true,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Dubuque",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: false,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  },
  {
    name: "Dubuque",
    location: "3400 Edgewood Rd SW, Cedar Rapids, IA 52404-7214",
    open: true,
    openTime: "Open today: 7:00am - 10:00pm",
    tel: "319 3964444",
    button1: "store info",
    button2: "shop this store"
  }
];
//Navbar/topNav
export interface myListItems {
  name: string;
  id: number;
  to: string;
}
export const listItems: myListItems[] = [
  {
    name: "Registry",
    id: 1,
    to: "/gift-registry"
  },
  {
    name: "Weekly Ad",
    id: 2,
    to: "/weekly-ad"
  },
  {
    name: "RedCard",
    id: 3,
    to: "/redcard"
  },
  {
    name: "Target Circle",
    id: 4,
    to: "/circle"
  },

  {
    name: "Find Stores",
    id: 5,
    to: "/find-stores"
  }
];

//home/index.ts
export interface myHallowenItems {
  name: string;
  img: string;
  nameExtens?: string;
  id: number;
  percentNumb: string;
  percent: string;
  off: string;
}
export const HallowenItems: myHallowenItems[] = [
  {
    name: "costumes & decor*",
    img:
      "https://target.scene7.com/is/image/Target/GUEST_10ee1d04-2b1f-416b-adf8-abfaf3504be1?wid=521&qlt=80&fmt=webp",
    id: 1,
    percentNumb: "30",
    percent: "%",
    off: "off"
  },
  {
    name: " trick-or-treat candy",
    nameExtens: "with same-day delivery or pickup*",
    img:
      "https://target.scene7.com/is/image/Target/GUEST_0a91eee7-bfe9-414b-91a3-063d61294280?wid=521&qlt=80&fmt=webp",
    id: 1,
    percentNumb: "25",
    percent: "%",
    off: "off"
  },
  {
    name: "pet costumes, treats & toys*",
    img:
      "https://target.scene7.com/is/image/Target/GUEST_7ff6282e-ee5a-4ef5-a8c0-94850ffce809?wid=521&qlt=80&fmt=webp",
    id: 1,
    percentNumb: "30",
    percent: "%",
    off: "off"
  },
  {
    name: "Everything Halloween",
    nameExtens: "Celebrate the season of creepy-crawlies & sweet treats.",
    img:
      "https://target.scene7.com/is/image/Target/GUEST_a0908e56-7afb-49fd-9b11-85ee955d7537?wid=521&qlt=80&fmt=webp",
    id: 1,
    percentNumb: "",
    percent: "",
    off: ""
  }
];
