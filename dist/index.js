console.log("hello");
let x = 20; // type inference (number)
let y; // any
y = 7; // still (any)
// ---------------------------------------------------------
let num;
num = 10;
// num = "hello"   // Error
// ---------------------------------------------------------
let z;
z = 8;
if (typeof z === "number")
    z += 1;
// ---------------------------------------------------------
let s;
// ---------------------------------------------------------
// Functions:
function fun(num1, num2) {
    return num1 + num2;
}
function checkGreater(a, b) {
    if (a > b)
        return "A is greater than B";
    else if (b > a)
        return "B is greater than A";
}
console.log(checkGreater(10, 3));
console.log(checkGreater(10, 55));
function myFun() {
    throw new Error("error");
}
// ---------------------------------------------------------
let name;
name = "ahmed";
// ---------------------------------------------------------
// let arr: number[];  // you should assign value to void error
// arr.push(77);
// ---------------------------------------------------------
// Tuple:
let arr = [1, "mahmoud", true];
let name1;
name1 = "ali";
let myStudent;
myStudent = {
    name: "Ali",
    age: 24,
    grade: 90,
};
let myAdmin = {
    name: "admin1",
    email: "admin@gmail.com",
    role: "super-admin",
};
let userGender;
userGender = "male";
// ---------------------------------------------------------
var gender1;
(function (gender1) {
    gender1[gender1["male"] = 0] = "male";
    gender1[gender1["female"] = 1] = "female";
})(gender1 || (gender1 = {}));
// enum gender1 {
//   male = true,
//   female = false,
// }
let userGender1 = gender1.male; // 0 or 1
console.log(userGender1);
// ---------------------------------------------------------
// The correct way of using enum:
var Size;
(function (Size) {
    Size[Size["Small"] = 20] = "Small";
    Size[Size["Medium"] = 40] = "Medium";
    Size[Size["Large"] = 60] = "Large";
    Size[Size["XLarge"] = 80] = "XLarge";
})(Size || (Size = {}));
function calcTotalPrice(price, size) {
    return size * price;
}
console.log(calcTotalPrice(10, Size.Medium)); // 400
// ---------------------------------------------------------
// Type Casting:
// function should be on global scope to run from ts file
window.getName = function () {
    const input = document.getElementById("name");
    console.log(input.value);
};
// ---------------------------------------------------------
let k = "7";
let l = x;
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
    name;
    age;
    grade; // optional to assign it not give you an error at any time
    address; // Must be assign before use it => without it will give you error
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let myStudent2 = new Student("ali", 20);
console.log(myStudent2);
// ---------------------------------------------------------
//Inheritance:
// Animal.ts example:
export class Animal {
    name;
    category;
    constructor(name, category) {
        this.name = name;
        this.category = category;
    }
}
export class Cat extends Animal {
    gender;
    constructor(name, category, gender) {
        super(name, category); // لازم نستدعي الكونستركتور الأب
        this.gender = gender;
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
    name;
    email;
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    static currentEmployee; // should be static like method
    static createEmployee(name, email) {
        if (!this.currentEmployee) {
            this.currentEmployee = new Employee(name, email);
        }
        return this.currentEmployee;
    }
}
// const e = new Employee("Ali", "a@gmail.com"); // ❌ مش هينفع
console.log(Employee.createEmployee("ali", "e@gmail.com"));
console.log(Employee.createEmployee("omar", "e@gmail.com")); // will return ali again
let myUser;
myUser = {
    name: "Mahmoud",
    age: 24,
    address: "Giza",
};
// ** class can implements many interfaces but can't inherit from multiple classes **
class Person {
    name;
    age;
    address;
    grade;
    constructor(name, age, address, grade) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.grade = grade;
    }
    login(email, password) {
        return "";
    }
}
// ---------------------------------------------------------
// Generic:
// function myFun(arr: string[]) {
//   return arr.reverse();
// }
function genericFun(arr) {
    return arr.reverse();
}
console.log(genericFun([1, 2, 3, 4]));
console.log(genericFun(["ali", "omar"]));
// ---------------------------------------------------------
