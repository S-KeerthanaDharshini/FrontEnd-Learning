//Both of the code will not  produce the same answer 

//the first snippet  produce the answer "false" because of === that cares both the value and the datatype should be same.
const firstNumber = 20;
const secondNumber = '20';
const result = firstNumber === secondNumber;
console.log(result);
//the second snippet produce the answer "true" because of == that only cares about the values to be same.
const firstNumber1 = 20;
const secondNumber1 = '20';
const result1 = firstNumber == secondNumber;
console.log(result1);