
function formatValue(inputValue: string | number | boolean): string | number | boolean {
  if (typeof inputValue === 'string') {
    return inputValue.toUpperCase();
  }
  
  if (typeof inputValue === 'number') {
    return inputValue * 10;
  }
  if (typeof inputValue === 'boolean') {
    return !inputValue;
  }
  return "invalid input value"
}


function getLength(inputValue: string | any[]): number {
    if (typeof inputValue === 'string') {
        return inputValue.length;
    } else if (Array.isArray(inputValue)) {
        return inputValue.length;
    }
    return 0;
}
 


class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}


interface RatedItem {
    title: string;
    rating: number;
}

function filterByRating(items: RatedItem[]): RatedItem[] {
    return items.filter(item => item.rating >= 4);
}


type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter(user => user.isActive === true);
}


type Book = {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  const availability = book.isAvailable ? 'Yes' : 'No';
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
  );
}


function getUniqueValues<T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] {
  const result: T[] = [];

  function contains(value: T): boolean {
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        return true;
      }
    }
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!contains(arr1[i])) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    if (!contains(arr2[i])) {
      result.push(arr2[i]);
    }
  }

  return result;
}


interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;  
}

function calculateTotalPrice(products: Product[]): number {
 
  if (products.length === 0) return 0;

  return products.reduce((total, product) => {
    const { price, quantity, discount = 0 } = product;

   
    const discountMultiplier = 1 - discount / 100;
    const finalPrice = price * discountMultiplier;

    
    return total + finalPrice * quantity;
  }, 0);
}