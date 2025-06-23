//String type
const firstVariable = 'Hello world';
console.log(firstVariable);

//numeric value by declaring it with the "let" keyword
let secondVariable;
secondVariable = 20;
console.log(secondVariable);

//object 
const thirdVariable = {firstProperty : 'Hello world'};
console.log(thirdVariable);

//"let" for reassigning values multiple times 
let counter =0;
counter = counter+1;
console.log(counter);   //output : 1
console.log(counter++); //output : 1
console.log(counter); // output : 2

//using const for the varible which gets frequently updated shows error
//not suitable for incrementing works 

/*const inc =0;
inc = inc +1;
console.log(inc);
*/

//declaring function to a variable 
const funVar = (function(){
    return 'hello';
})();
console.log(funVar);

//boolean variable 
const boolVar = false;
console.log(boolVar);//output : false

//typeof (to find the type of variable)
console.log(typeof boolVar);

//implicit and explicit conversion

const number1 = '20';
const number2 = 30;

//adding a string and number will implicitly convert the number to string 
console.log(number1 + number2);

//doing an explicit conversion
console.log(Number(number1) + number2);

//Array
const firstArray = [10,20,30];
//Array with mixed datatype 
console.log(firstArray);
const secondArray = [10,'a string',{prop :'abc'},[10,20,30]];
console.log(secondArray);

//object which is accessed using "dot" notation followed by the key name

const objVariable ={ prop1 : 20 , prop2 : 30 , prop3 : 'Apple'};
console.log(objVariable.prop3);

//nested object 

const nestedObject = {
    layer1 : {
        layer2 :{
            layer3 :{
                layer4 : 20
            }
        }
    }
};
console.log(nestedObject.layer1.layer2.layer3.layer4);

//Assigning functions to variable 

const functionVariable = function(){
    return 10;
}
console.log(functionVariable());