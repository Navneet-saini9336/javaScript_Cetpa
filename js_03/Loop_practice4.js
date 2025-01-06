/*Get the sum of two arrays…actually the sum of all their elements.
P.S. Each array includes only integer numbers. Output is a number too.

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // 

 Example output: 
 276 + 351 = 627*/

let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; 
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; 


let sum1 =0;
for(let i = 0 ; i<arr_1.length ; i++)
{
   
    sum1 += arr_1[i]
   

}
console.log(sum1);

let sum2 =0;
for(let i = 0 ; i<arr_2.length ; i++)
{
   
    sum2 += arr_2[i]
   

}
console.log(sum2);

let sum3 = sum1+sum2;

console.log(sum3);