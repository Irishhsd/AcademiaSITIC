function addNumbers(a: number, b: number){
return a+b;
}

//Funcion flecha
const addNumbersArrow = (a: number, b: number): string => {
    //return (a + b).toString();
    return `${a+ b}`;
}

function multiply(firstNumber: number, secondNumber?: number, baseNumber: number = 2){
    return firstNumber*baseNumber;
}

const multiplyResult:number = multiply(1);
const multiplyResult2: number = multiply(1,2);
const multiplyResult3: number = multiply(5,2,3);


console.log({multiplyResult,multiplyResult2,multiplyResult3});

// const result = addNumbers(2, 2);
// const result2 = addNumbersArrow(3,5);

// console.log('Result1: ', result);
// console.log('Result2: ', result2);

// console.log(result, result2);

// console.log({result,result2});

export{};