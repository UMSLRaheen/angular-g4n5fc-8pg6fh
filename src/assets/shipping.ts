export interface Shipping {
  type: string;
  price: number;
}

export const shipping = [
  {
    type: "Overnight",
    price: 25.99
  },
  {
    type: "2-Day",
    price: 9.99
  },
  {
    type: "Postal",
    price: 2.99
  }
];