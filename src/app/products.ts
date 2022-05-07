export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 1,
    name: 'iMac 24-inch 🖥', 
    price: 1299,
    description: 'A beautiful desktop computer with incredible processors, a retina display, and the worlds most advanced desktop operating system.'
  },
  {
    id: 2,
    name: 'MacBook Pro 14 💻"',
    price: 1999,
    description: 'An advanced option of the MacBook Air. Includes a fast M1 processors, incredible graphics, and spectacular retina displays.'
  },
  {
    id: 3,
    name: 'MacBook Air 💻',
    price: 999,
    description: 'A computer for mostly college students. Its light weight and the thinnest Apple computer. It also has an affordable price.'
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/