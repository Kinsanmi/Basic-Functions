function printIngredient (quantity: string, ingredient: string, extra?: string){
    console.log(`${quantity} ${ingredient} ${extra ? `${extra}` : ""}`)
}


printIngredient("10", "Sugar");
printIngredient("10", "Sugar", "something more");


// optional field


interface User {
    id: string,
    info? : {
        email?: string;
    }
}


function getEmail(User: User){
    if(User.info){
        return User.info.email
    }
}


// tuple

type Coordinate = [x: number, y:number, z:number]


export const addCoordinate = (c1: Coordinate, c2: Coordinate): Coordinate =>{
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2],
    ]
}


console.log(addCoordinate([0,2,0], [10,20,30]))


function simpleString(initial: string): [()=> string, (v: string) => void]{
    let str: string = initial;

    return [
        () => str,
        (v: string) => {
            str = v
        }
    ]
}

const [str1getter, str1setter] = simpleString('Hello')
console.log(str1getter())

str1setter("Goodbye")

console.log(str1getter());