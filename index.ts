
let firstName = "Adekunle";

console.log(`${firstName}`);


// variable to be declared with specific types

let priceNumber: string
// annotation comes after variable declaration


// annotation to function parameters

// implicity of "any" type function need to assigned a typeof
function totalPrice  (unit: number, quantity: number, discount: number) : number {
    const priceRange = unit * quantity; //7500
    const priceDiscount = priceRange * discount; //150,000
    return priceDiscount - priceRange  //142500
}

let total = totalPrice(500, 10, 4);  //A string isn't assignable to typeof number

let amount = totalPrice(500, 15, 20)  //passed

console.log(amount);

let flag = false; //boolean type;
console.log(flag, typeof false)


let today: Date = new Date(); //Date type

today.getFullYear();
//console.log(today);

// the 'unknown' type
fetch("https://swapi.dev/api/people/1")
.then(res => res.json())
.then((data: unknown) => {
    if(isCharacter(data)){
        console.log("Name", data.name)
    }
})

// if statement to verify if isCharacter is contained within the object


function isCharacter (
    character : any
): character is {name: string} {
    return "name" in character
}

let information;  //let information: any type

// void type represent a function type where the function doesn’t return a value.

function isAble (text: string) {
    while(true){
        return `${text}`
    }
    
}
console.log(isAble("Nothing is impossible"))

// Array generic syntax

const number: Array<number> = [10,20,30];

const myDigit: number[] = [1,2,3,4,5,6,7];

console.log(myNumber)

console.log(number);


// type alias
// ? optional 
type ProductList = {name: string; units?: number};

let table: ProductList = {name: "table"};
let chair: ProductList = {name: "chair", units: 40}

// extend into Product {&}
type Discount = Product & { discount: number}


type Purchase = (quantity: number) => void;
type Product ={
    name: string;
    unitPrice: number;
    purchase: Purchase;
}


let tableFix: Product = {
    name: "Table",
    unitPrice: 10,
    purchase: (quantity) => console.log(`Purchase ${quantity} tables`)
}

tableFix.purchase(10);

// interface

interface Names {
    title: string,
    value: number;
    add: string
}


const myNames:Names  = {
    add: "Abel",
    title: "Unknown",
    value: 10,
}
/* 
console.log(myNames) */

interface DiscountPrice {
    amount: number;
}

const PriceList: DiscountPrice = {
    amount: 20,
}

console.log(PriceList)

// classes with constructor function

class ClassName {
    names?: string;
    age?: number
}

class Item {
    name
    price
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
}



class Identify {
    //if the constructor parameters are marked as public no need defining the properties
    constructor( public date: number,public list: number) {
        this.date = date;
        this.list = list
    }

    getDiscount(discount: number): number{
        return this.list - discount
    }
}


const tableList = new Identify(10, 20)

console.log(tableList.getDiscount(10))


class Heros {
    constructor(public flash: string, public batman: string, public superman: string) {
        this.flash = flash,
        this.batman = batman,
        this.superman = superman
    }
}


// enumeration

enum Value {
    Low,
    Medium,
    High
}

let level = Value.Low

console.log(level);

let gap = Value.Medium
console.log(gap);

let ap = Value.High
console.log(ap);



