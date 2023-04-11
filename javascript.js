/*
function compareTriplets(a, b) {
    const results = [0, 0];
    let arrayLength = a.length;    
    for (let i = 0; i < arrayLength; i++){        
        if (a[i] > b[i]){
            results[0] += 1;
        }else if(a[i] < b[i]){
            results[1] += 1;
        }    
    }    
    return results;
}
const a = [5, 6, 7];
const b = [3, 6, 10];
console.log(compareTriplets(a, b)) 

function aVeryBigSum(ar) { 
    // Write your code here 
    let arrayLenght = ar[0] + 1; 
    let bigSum = 0; 
    for (let i = 1; i < arrayLenght; i++){ 
        bigSum += parseInt(ar[i]); 
    } 
    return BigInt(bigSum).toString(); // Devuelve un LONG_INTEGER como cadena 
}
const c = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];              
console.log(aVeryBigSum(c));


function aVeryBigSum(ar) { 
    let sum = 0;
    for(let i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    return sum - ar[0];
}
const c = [5, 1000000001, 1000000002, 1000000003, 1000000004, 1000000005];              
console.log(aVeryBigSum(c));


let  plusMinusArray = [-4, 3, -9, 0, 4, 1]

function plusMinus(arr) {
    // Write your code here
    let elementsQty = arr.length;
    let decimalQty = 7
    let plusQty = arr.filter((elem) => elem > 0).length;
    let minusQty = arr.filter((elem) => elem < 0).length;
    let zerosQty = arr.filter((elem) => elem == 0).length;
    let plusProp = (plusQty / elementsQty).toFixed(decimalQty);
    let minusProp = (minusQty / elementsQty).toFixed(decimalQty);
    let zerosProp = (zerosQty / elementsQty).toFixed(decimalQty);
    
    console.log(`${plusProp}\n${minusProp}\n${zerosProp}`);
}
plusMinus(plusMinusArray);


00 01 02 
10 11 12
20 21 22



function diagonalDifference (arr) {
    // Write your code here
    let n = arr.length;
    let diag01 = 0, diag02 = 0;    
    for (let i = 0; i < n; i++){
        for (let j = 0; j < n; j++){
            if ( i == j) {
                diag01 += arr[i][j];                
            }
            if (j == n - i - 1)
                diag02 += arr[i][j];
        }        
    }
    return ((diag01 - diag02) > 0) ? diag01 - diag02 : (diag01 - diag02) * (-1);
    //console.log(diag01, diag02, moduleDiff);
}

const testArr = [
                [11, 2, 4],
                [4, 5, 6],
                [10, 8, -12]
                ];

console.log(diagonalDifference(testArr));

_ _ _ _ _ _ #
0 1 2 3 4 5


function staircase(n) {
    // Write your code here    
    let linea = '';
    for(let i = 1; i <= n; i++){        
        for (let j = 1; j <= n; j++){
            linea += (j > n - i ) ? '#' : ' ';                      
        }                
        console.log(linea);        
        linea = '';
    }
}
staircase(6);



function miniMaxSum(arr) {
    // Write your code here
    let sortedArr = arr.sort();
    let minis = sortedArr.slice(0, 4);
    let maxis = sortedArr.slice(1, 5);    
    let minisSum = minis.reduce((a, b) => a + b);
    let maxisSum = maxis.reduce((a, b) => a + b);
    console.log(`${minisSum} ${maxisSum}`);
}
const miniMaxSumArray = [7, 5, 3, 1, 9];
miniMaxSum(miniMaxSumArray);



function birthdayCakeCandles(candles) {
    // Write your code here
    let candlesQuantity = candles.length;
    let candleBigger = Number.NEGATIVE_INFINITY;
    let candlesBiggerQuantity = 1;
    for (let i = 0; i < candlesQuantity; i++){
        let candleCurrent = candles[i];
        if (candleCurrent > candleBigger){
            candleBigger = candleCurrent;
            candlesBiggerQuantity = 1;
        }else if (candleCurrent == candleBigger){
            candlesBiggerQuantity += 1; 
        }
    }
    return candlesBiggerQuantity;
}

const candles =  [1, 1, 1, 1];
console.log(birthdayCakeCandles(candles));


function timeConversion(s) {
    // Write your code here
    let suffix = s.slice(-2);
    let hoursInt = parseInt(s.slice(0,2));
    let hoursStr = '', Format24Hs = '';
    if (suffix == 'PM'){
        hoursInt = (hoursInt == 12) ? hoursInt : (hoursInt + 12) % 24;                
    }else if(suffix == 'AM'){
        hoursInt = (hoursInt == 12) ? 0 : (hoursInt ) % 24;                
    }
    hoursStr = (hoursInt < 10) ? '0'+hoursInt : hoursInt ;
    Format24Hs = hoursStr + s.slice(2, 8);
    //console.log(`${s} <=> ${Format24Hs} (24 Hs format)`);
    return Format24Hs;
}
let timeConversionTest = '06:40:03AM' ;
console.log(timeConversion(timeConversionTest));


function gradingStudents(grades) {
    // Write your code here
    let myGrades = [];
    let fiveMultis = [];        
    for (let i = 0; i <= 100; i += 5){
        fiveMultis.push(i);
    }   
    grades.forEach((grade, index) => {
        let nextMultiBig = fiveMultis.find(multi => grade < multi && multi - grade < 5);
        let gradeRounded =  ((nextMultiBig - grade < 3) && grade >= 38) ? nextMultiBig : grade;
        myGrades.push(gradeRounded);
        //console.log(grade, nextMultiBig, gradeRounded);                
    });
    return myGrades;
}
const graddingTest = [73, 67, 38, 33];
console.log(gradingStudents(graddingTest));
*/

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let m = oranges.length;
    let n = apples.length;
    if ((a < s) &&  (s < t) && (t < b) 
        && (a >= 1 && a < 10000) && (b >= 1 && b < 10000) && (s >= 1 && s < 10000) && (t >= 1 && t < 10000) && (n >= 1 && n < 10000) && (m >= 1 && m < 10000)
        ){                
        let applesLanding = apples.map(apple => a + apple);
        let orangesLanding = oranges.map(orange => b + orange);
        let applesAtSamHome = applesLanding.filter(apple => apple >= s && apple < t).length;
        let orangeAtSamHome = orangesLanding.filter(orange => orange >= s && orange < t).length;
        //console.log(applesLanding, applesAtSamHome);
        //console.log(orangesLanding, orangeAtSamHome);
        console.log(parseInt(applesAtSamHome));
        console.log(parseInt(orangeAtSamHome));
    }else{
    console.log('Error');
    }
}
const myApples = [-2, 2, 1];
const myOranges = [5, -6];
countApplesAndOranges(7, 11, 5, 15, myApples, myOranges);