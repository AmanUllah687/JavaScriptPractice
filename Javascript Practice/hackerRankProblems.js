// hacker rank problem 1
/*
let array = [1,2,3];
let revArray = []
  
    for(i=array.length-1;i>=0;i--) {
        revArray.push(array[i])
    }
 console.log(revArray);
 */
 // hacker rank problem 2
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