const exp1 =100 % 50;
const exp2 = 100 /50;
const exp3 = exp1 < exp2;
const exp4 = exp3 && 300+5 ===305;
const exp5 = !exp4;
console.log(exp5);
/*
exp 1 = 0;
exp2 = 2;
exp3 = true;
exp4 = true;
exp5 = false
*/
//the expression 5 is evaluated to  'false'


// Everything in single line expression 
const result =  !( ((100 % 50) < (100 /50)) && ((300 +5) ===305));
console.log(result);