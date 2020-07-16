const numbers = [-91,18,11,-23,-98,28,-81,-100,-7,-45,52,41,75,-98,27,41,25,2,39,-18];
let pozitiveCount = 0;
let negativeCount = 0;
let pozitiveSum = 0;
let negativeSum = 0;
    

for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0){
    pozitiveCount++;  
    pozitiveSum += numbers[i];    
    }
    else{
    negativeCount++;
    negativeSum += numbers[i];    
    }
}

console.log("положительных чисел:" + pozitiveCount);
console.log("отрицательных чисел:" + negativeCount);
console.log("сумма положительных чисел:" + pozitiveSum);
console.log("сумма отрицательных чисел:" + negativeSum);