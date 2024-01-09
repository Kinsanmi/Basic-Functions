function addNumber (a: number,b: string  ): string{
    return a+ b;
}

export default addNumber;

// defining via const


export const addStrings = (str1: string, str2: string): string =>{
    return `${str1} ${str2}`
}


export const format = (title: string, param: string | number ): string =>{
    return `${title} ${param}`;
};


function introduction(salutation: string, ...names: string[]):string{
    return `${salutation} ${names.join("")}`
}


 
export const getName = (user: 
    {first: string, last: string
    }): string =>{
    return `${user.first} ${user.last}`;
}


export const emailBass = (list: {item1: string,  item2: string, item3: number}): string =>{
    return `${list.item1} ${list.item2} ${list.item3}`
}