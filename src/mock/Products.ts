export type isType = {
  idType: number;
  gb: number;
  price: number;
};

export interface isProduct {
  id: number;
  name: string;
  picture: any;
  quanlity: number;
  type: isType[];
}

export const Products: isProduct[] = [
  {
    id: 1,
    name: "Iphone 12",
    picture: `https://picsum.photos/seed/${1}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 22000000 },
      { idType: 2, gb: 512, price: 25000000 },
    ],
  },
  {
    id: 2,
    name: "Iphone 12 pro",
    picture: `https://picsum.photos/seed/${2}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 20000000 },
      { idType: 2, gb: 512, price: 23000000 },
    ],
  },
  {
    id: 3,
    name: "Iphone 12 pro max",
    picture: `https://picsum.photos/seed/${3}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 15000000 },
      { idType: 2, gb: 512, price: 25000000 },
    ],
  },
  {
    id: 4,
    name: "Iphone 13",
    picture: `https://picsum.photos/seed/${4}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 24000000 },
      { idType: 2, gb: 512, price: 25000000 },
    ],
  },
  {
    id: 5,
    name: "Iphone 13 pro",
    picture: `https://picsum.photos/seed/${5}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 19000000 },
      { idType: 2, gb: 512, price: 24000000 },
    ],
  },
  {
    id: 6,
    name: "Iphone 13 pro max",
    picture: `https://picsum.photos/seed/${6}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 20000000 },
      { idType: 2, gb: 512, price: 25000000 },
    ],
  },
  {
    id: 7,
    name: "Iphone 14",
    picture: `https://picsum.photos/seed/${7}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 26000000 },
      { idType: 2, gb: 512, price: 28000000 },
    ],
  },
  {
    id: 8,
    name: "Iphone 14 pro",
    picture: `https://picsum.photos/seed/${8}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 22000000 },
      { idType: 2, gb: 512, price: 29000000 },
    ],
  },
  {
    id: 9,
    name: "Iphone 14 pro max",
    picture: `https://picsum.photos/seed/${9}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 29000000 },
      { idType: 2, gb: 512, price: 32000000 },
    ],
  },
  {
    id: 10,
    name: "Iphone 15 pro max",
    picture: `https://picsum.photos/seed/${10}/200/300`,
    quanlity: 10,
    type: [
      { idType: 1, gb: 256, price: 29000000 },
      { idType: 2, gb: 512, price: 38000000 },
    ],
  },
];
