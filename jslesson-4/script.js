
// Задание 1:


let numbers = [0, -23, 5, 90, 104, 80, -55];
let minNum = numbers.sort((a, b) => a - b);
console.log(minNum[0]);
let maxNum = numbers.sort((a, b) => b - a);
console.log(maxNum[0]);

// --------------------------------------------------------------------

let negativeSum = numbers.reduce(function(accum, elem){
        if(elem < 0) {
            console.log(elem)
        return accum + elem;
        }
        return accum;
})
console.log(negativeSum);

let positiveSum = numbers.reduce(function(accum, elem){
              if(elem > 0) {
                  console.log(elem)
              return accum + elem;
              }
              return accum;
            })
              console.log(positiveSum);


// Задание 2:

let languages = [
  "javascript",
  "php",
  "php",
  "typescript",
  "javascript",
  "html",
  "html",
  "java",
  "javascript",
];
const arrUniq = [... new Set(languages)]
console.log(arrUniq);