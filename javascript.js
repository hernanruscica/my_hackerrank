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

*/