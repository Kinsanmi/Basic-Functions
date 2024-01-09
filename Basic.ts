let userName: string = 'Stonzz';

let hasLoggedIn: boolean = true;

userName += " Mike";


console.log(userName)


hasLoggedIn = false;

let myNumber:number = 10;

let values: string[] = userName.split("");

/* const names: string[] = userName.split(""); */



let myValue: Array<number> = [1,2,3,4,5];


interface Person  {
    firstName: string;
    lastName: string;
}

const myPerson: Person = {
    firstName: 'Stonzz',
    lastName: 'Mike',
}


interface Price {
    value: number;
    type: boolean;
}

const myPrice: Price = {
    value: 10,
    type: true
}


const ids = {
    10: 'a',
    20: 'b',
}

if(ids[10] ==='a'){

}


const out = [1,2,3,4,5].map((V)=> console.log(V));

["10", "20", "30"].forEach((t) => console.log(t));


