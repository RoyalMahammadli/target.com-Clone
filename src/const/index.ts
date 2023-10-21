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
        name: 'Registry',
        id: 1,
        to: '/gift-registry'
    },
    {
        name: 'Weekly Ad',
        id: 2,
        to: '/weekly-ad'
    },
    {
        name: 'RedCard',
        id: 3,
        to: '/redcard'

    },
    {
        name: 'Target Circle',
        id: 4,
        to: '/circle'
    },

    {
        name: 'Find Stores',
        id: 5,
        to: '/find-stores'
    }
]
