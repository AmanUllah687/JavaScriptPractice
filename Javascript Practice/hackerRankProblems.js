//  problem 1
/*
let array = [1,2,3];
let revArray = []
  
    for(i=array.length-1;i>=0;i--) {
        revArray.push(array[i])
    }
 console.log(revArray);
 */
// problem 2
/*
let Array = [
    [10, 20, 60],
    [8, 10, 52],
    [15, 5, 24],
    [26, 28, 43],
    [12, 16, 51]
  ];
  let sum = 0;
  Array.forEach((row) => {
    row.forEach((element) => {
        sum += element;
    });
 });
console.log(sum);
*/
//Problem 3
const Array = [1000000001,1000000002,1000000003,1000000004,1000000005];
let sum = 0;
for(i=0;i<Array.length;i++) {
    sum += Array[i];
} 
console.log(sum);