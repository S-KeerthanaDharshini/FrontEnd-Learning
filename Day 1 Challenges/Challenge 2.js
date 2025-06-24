/* 
There are three things wrong with this code
Find them and explain why they are wrong.
const some Number = 20;
someNumber =50;
 */

//ANSWER
/* 3 Wrong Things
The declaration of variable name is incorrect,there are two names or the variable name is splited by space
The Variable is decalred as const so updation is not possible
missing of semi colon in the third line
*/

//CORRECT CODE
let someNumber = 20;
someNumber =50;
console.log(someNumber);