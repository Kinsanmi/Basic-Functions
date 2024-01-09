export const printFile = (text: string, callback: ()=> void): void =>{
    callback();
}

type MutationFunction = (v: number) => number




export const arrayOfNumber = (numbers: number[], mutate: MutationFunction): number[] =>{
    return numbers.map(mutate);
}


console.log(arrayOfNumber([1,2,3], (v)=> v * 5))





export function createAdd(num: number): (val: number) => number{
    return (val: number) => num + val;
}

const addOne = createAdd(1);
console.log(addOne(39))




