console.log("hello");

let x = 20; // type inference (number)

let y; // any

y = 7; // still (any)

// ---------------------------------------------------------

let num: number;
num = 10;

// num = "hello"   // Error

// ---------------------------------------------------------

let z: unknown;

z = 8;
if (typeof z === "number") z += 1;

// ---------------------------------------------------------
let s: number | boolean;

// ---------------------------------------------------------
// Functions:

function fun(num1: number, num2: number) {
  return num1 + num2;
}

function checkGreater(a: number, b: number) {
  if (a > b) return "A is greater than B";
  else if (b > a) return "B is greater than A";
}

console.log(checkGreater(10, 3));
console.log(checkGreater(10, 55));

function myFun(): never {
  throw new Error("error");
}

// ---------------------------------------------------------
let name: "ali" | "omar" | "ahmed";

name = "ahmed";
// ---------------------------------------------------------

// let arr: number[];  // you should assign value to void error

// arr.push(77);

// ---------------------------------------------------------
// Tuple:
let arr: [number, string, boolean] = [1, "mahmoud", true];

// ---------------------------------------------------------
// Alias types:
type TSring = string;

let name1: TSring;
name1 = "ali";

// ---------------------------------------------------------
type student = {
  name: string;
  grade: number;
  age: number;
};

let myStudent: student;

myStudent = {
  name: "Ali",
  age: 24,
  grade: 90,
};
// ---------------------------------------------------------
type user = {
  name: string;
  email: string;
};

type admin = user & {
  role: string;
};

let myAdmin: admin = {
  name: "admin1",
  email: "admin@gmail.com",
  role: "super-admin",
};

// ---------------------------------------------------------

type gender = "male" | "female";
let userGender: gender;
userGender = "male";

// ---------------------------------------------------------
enum gender1 {
  male,
  female,
}
// enum gender1 {
//   male = true,
//   female = false,
// }
let userGender1: gender1 = gender1.male; // 0 or 1

console.log(userGender1);

// ---------------------------------------------------------
// The correct way of using enum:
enum Size {
  Small = 20,
  Medium = 40,
  Large = 60,
  XLarge = 80,
}

function calcTotalPrice(price: number, size: Size) {
  return size * price;
}

console.log(calcTotalPrice(10, Size.Medium)); // 400
// ---------------------------------------------------------
// Type Casting:

// function should be on global scope to run from ts file
(window as any).getName = function () {
  const input = document.getElementById("name") as HTMLInputElement;
  console.log(input.value);
};
// ---------------------------------------------------------
let k = "7";
let l: number = x as number;
// ---------------------------------------------------------
// Class:

// old way:
// class Student {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// new way:
class Student {
  grade?: number; // optional to assign it not give you an error at any time
  address!: string; // Must be assign before use it => without it will give you error
  constructor(
    public name: string,
    public age: number,
  ) {}
}

let myStudent2 = new Student("ali", 20);
console.log(myStudent2);

// ---------------------------------------------------------
//Inheritance:
// Animal.ts example:
export class Animal {
  constructor(
    public name: string,
    public category: string,
  ) {}
}

export class Cat extends Animal {
  constructor(
    name: string,
    category: string,
    public gender: "male" | "female",
  ) {
    super(name, category); // لازم نستدعي الكونستركتور الأب
  }

  meow() {
    return `${this.name} says Meow!`;
  }
}

let cat = new Cat("nagwa", "cat", "female");

console.log(cat.meow());

// ---------------------------------------------------------
// Singleton: (constructor could be private in this usage)

class Employee {
  private constructor(
    public name: string,
    public email: string,
  ) {}

  static currentEmployee: Employee; // should be static like method

  static createEmployee(name: string, email: string) {
    if (!this.currentEmployee) {
      this.currentEmployee = new Employee(name, email);
    }
    return this.currentEmployee;
  }
}

// const e = new Employee("Ali", "a@gmail.com"); // ❌ مش هينفع
console.log(Employee.createEmployee("ali", "e@gmail.com"));
console.log(Employee.createEmployee("omar", "e@gmail.com")); // will return ali again

// ---------------------------------------------------------
// Interface it's a contract that must use each thing on it
interface IUser {
  name: string;
  age: number;
  address: string;
  login?: (email: string, password: string) => string;
}

let myUser: IUser;
myUser = {
  name: "Mahmoud",
  age: 24,
  address: "Giza",
};

// ---------------------------------------------------------
type studentType = {
  name: string;
  age: string;
};

// ** class can implements many interfaces but can't inherit from multiple classes **

class Person implements IUser {
  constructor(
    public name: string,
    public age: number,
    public address: string,
    public grade: number, // allow to add property
  ) {}
  login(email: string, password: string): string {
    return "";
  }
}
// ---------------------------------------------------------
// Generic:
// function myFun(arr: string[]) {
//   return arr.reverse();
// }

function genericFun<T>(arr: T[]): T[] {
  return arr.reverse();
}
console.log(genericFun([1, 2, 3, 4]));
console.log(genericFun(["ali", "omar"]));

// ---------------------------------------------------------
