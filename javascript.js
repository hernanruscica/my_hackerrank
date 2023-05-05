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


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    let m = oranges.length;
    let n = apples.length;                   
    let applesLanding = apples.map(apple => a + apple);
    let orangesLanding = oranges.map(orange => b + orange);
    let applesAtSamHome = applesLanding.filter(apple => apple >= s && apple <= t).length;
    let orangeAtSamHome = orangesLanding.filter(orange => orange >= s && orange <= t).length;    
    console.log(parseInt(applesAtSamHome));
    console.log(parseInt(orangeAtSamHome));            
}
const myApples = [2];
const myOranges = [-2];
countApplesAndOranges(2, 3, 1, 5, myApples, myOranges);
*/

/*   BON APPETIT
4 1 => cuatro items, el indice del item que no comio anna es k (n, k)
3 10 2 9 =>  El total de items que reconoce anna es de 3 + 2 + 9 = 14 (actual) . Es decir que deberia pagar 7  (array bill)
12  => segun la cuenta de Brian. El total era 24, entonces la parte de anna era de 12. (b) charged by Brian
Por consiguiente la diferencia que le tiene que devolver es de 12 - 7 = 5*/

/*
function bonAppetit(bill, k, b) {
    // Write your code here
    let result = null;
    let myBill = [...bill];    
    myBill.splice(k, 1);    
    let actual = myBill.reduce((a, b) => a + b);   
    result = (b - (actual / 2) == 0) ? 'Bon Appetit' : parseInt((b - (actual / 2))) ;
    console.log(result);
}

const bonAppetitTestArray = [3, 10, 2, 9];
bonAppetit(bonAppetitTestArray, 1, 7);


00 01 02
10 11 12
20 21 22



function hourglassSum(arr) {
    // Write your code here
    const allHourglassSums = [];    
    const sumHourglas = (startX, startY, matrix6x6) => {     
        let sum = 0, counter = 0;
        let endX = (startX + 3 <= matrix6x6[0].length) ? startX + 2 : 3;
        let endY = (startY + 3 <= matrix6x6[0].length) ? startY + 2 : 3;
        
        for (let i = startX; i <= endX; i++){
            for (let j = startY; j <= endY; j++){         
                if (counter != 3 && counter != 5){
                    sum += arr[i][j];        
                }
                counter++;
            }
        }
        return sum;
    } 
    for (let i = 0; i <= 3; i++){
        for (let j = 0; j <= 3; j++){
            allHourglassSums.push(sumHourglas(i, j, arr));
        }
    }        
    console.log(allHourglassSums);
    return  Math.max(...allHourglassSums);
}
const hourGlassTest = [
                        [-9, -9, -9, 1, 1, 1],
                        [ 0, -9,  0, 4, 3, 2],
                        [-9, -9, -9, 1, 2, 3],
                        [ 0,  0,  8, 6, 6, 0],
                        [ 0,  0,  0,-2, 0, 0],
                        [ 0,  0,  1, 2, 4, 0],
                        ];
const test01 = [
                [ 1,  1,  1, 0, 0, 0],
                [ 0,  1,  0, 0, 0, 0],
                [ 1,  1,  1, 0, 0, 0],
                [ 0,  0,  2, 4, 4, 0],
                [ 0,  0,  0, 2, 0, 0],
                [ 0,  0,  1, 2, 4, 0],
                ]; //19
const test02 = [
            [ 1,  1,  1, 0, 0, 0],
            [ 0,  1,  0, 0, 0, 0],
            [ 1,  1,  1, 0, 0, 0],
            [ 0,  9,  2, -4, -4, 0],
            [ 0,  0,  0, -2, 0, 0],
            [ 0,  0,  -1, -2, -4, 0],
            ]; //13
console.log(`the maximum hourglass sum is : ${hourglassSum(test01)}`)
console.log(`the maximum hourglass sum is : ${hourglassSum(test02)}`)


function breakingRecords(scores) {
    // Write your code here
    let highestScore = scores[0];
    let lowestScore = scores[0];
    let breakingScoreHighestCounter = 0;
    let breakingScoreLowestCounter = 0;    
    scores.forEach(score => {
        if (score > highestScore){
            highestScore = score;
            breakingScoreHighestCounter += 1;       
            console.log(highestScore);     
        }
        if (score < lowestScore){
            lowestScore = score;
            breakingScoreLowestCounter += 1;
        }
    });
    return [breakingScoreHighestCounter, breakingScoreLowestCounter];    
}
const scoresTest = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(scoresTest);
const myBreakingRecords = breakingRecords(scoresTest);
//console.log(`Breaking most points records: ${myBreakingRecords[0]}\nBreaking least points records: ${myBreakingRecords[1]}`);
console.log(myBreakingRecords);



// Complete the catAndMouse function below.  

function catAndMouse(x, y, z) {
    let results = null;  
    let distanceA = Math.abs(z - x);
    let distanceB = Math.abs(z - y);
    if (distanceA > distanceB) {
        results = 'Cat B'
    }else if (distanceA == distanceB){
        results = 'Mouse C';
    }else{
        results = 'Cat A'
    }        
    return results;        
};
//console.log(catAndMouse(0, 4, 1));//Deberia devolver 'Cat A'
console.log(catAndMouse(0, 4, 2));//Deberia devolver 'Mouse'
//catAndMouse(queries);//Deberia devolver 'Cat B'
*/

/*
5 > cantidad de partes del chocolate
1 2 1 3 2 => cada una de las partes y cuanto suma cada una
3 2 => d = 3 (cuanto tiene que sumar en total), m = 2 (cantidad de partes a darle) 
1 + 2 = 3 > una forma
2 + 1 => 3 > otra forma
en total dos formas de repartir el chocolate, la salida es de 2 (entero)
*/
/*
function birthday(s, d, m) {
    // Write your code here
    let result = 0;    
    s.forEach((portion, index, array)=> {            
        let subArrayPortion = array.slice(index, index + m );
        let sumSubArrayPortion = subArrayPortion.reduce((a, b) => (a + b));
        if (subArrayPortion.length == m && sumSubArrayPortion == d){
            result += 1;
        }
        console.log(subArrayPortion, sumSubArrayPortion);
    });
    return result
};

const birthdayTestArr = [2, 2, 1, 3, 2];
const birthdayTestArr2 = [1, 1, 1, 1, 1];
const birthdayTestArr3 = [1, 2, 1, 3, 2];
const birthdayTestArr4 = [4];
//console.log(birthday(birthdayTestArr, 4, 2));
//console.log(birthday(birthdayTestArr2, 3, 2));
//console.log(birthday(birthdayTestArr3, 3, 2));
console.log(birthday(birthdayTestArr4, 4, 1));


function camelcase(s) {
    // Write your code here
    let numberWords = 0;
    let sLong = s.length;
    
    for (let i = 1; i< sLong; i++){
        if (s.charCodeAt(i) > 64 && s.charCodeAt(i) <= 90){
            numberWords += 1;
        }
    }

    //console.log(s.charCodeAt(0));
    return numberWords + 1;
}
console.log(camelcase('oneTwoThree'));
*/

/*
function hurdleRace(k, height) {
    // Write your code here
    let potionDoses = 0;       
    //let maxHeight = k.sort((a, b) => (a > b) ? -1 : 1)[0];    
    let arrayLength = height.length;
    let maxHeight = -Infinity;
    //console.log(arrayLength)
    for (let i = 0; i < arrayLength; i++){
        if (height[i] > maxHeight){
            maxHeight = height[i];
        }
    }
    //console.log('max height :', maxHeight);
    potionDoses = (maxHeight > k ) ? maxHeight - k : 0 ;    
    return potionDoses;
}
let hurdleRaceTest01 = [1, 6, 3, 5, 2];
let hurdleRaceTest02 = [2, 5, 4, 5, 2];
console.log(hurdleRace(4, hurdleRaceTest01));
console.log(hurdleRace(7, hurdleRaceTest02));
*/

/* 
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const MIN_QTY_CHARS = 6;    
    let digitsCounter = 0, upperCaseCounter = 0, lowerCaseCounter = 0, specialsCharCounter = 0;
    let toAdd = 0;
    let constrains = 0;
    for (let i = 0; i <= n; i++){        
        if(password.charAt(i).search(/[0-9]/) == 0){
            digitsCounter += 1;               
        }
        if(password.charAt(i).search(/[a-z]/) == 0){
            lowerCaseCounter += 1;            
        }
        if(password.charAt(i).search(/[A-Z]/) == 0){
            upperCaseCounter += 1;            
        }
        if(password.charAt(i).search(/[!@#$%^&*()\-+]/) == 0){
            specialsCharCounter += 1;            
        }        
    }        
    if (n < MIN_QTY_CHARS){
        toAdd = MIN_QTY_CHARS - n;
    }

    constrains += (digitsCounter < 1) ? 1 : 0;        
    constrains += (lowerCaseCounter < 1) ? 1 : 0;
    constrains += (upperCaseCounter < 1) ? 1 : 0;
    constrains += (specialsCharCounter < 1) ? 1 : 0;
        
    console.log(toAdd, constrains);
    return (toAdd >= constrains) ? toAdd : constrains ;
    }      
//console.log(minimumNumber(11, '#HackerRank'));
console.log(minimumNumber(7, 'AUzs-nV'));


function kangaroo(x1, v1, x2, v2) {
    // Write your code here    
    let jump = 0;
    let founded = false;            
    do {
        if(x1 == x2) founded = true;        
        //console.log(`jump: ${jump} kangoo1: ${x1} || kangoo2: ${x2}`);  
        x1 += v1;
        x2 += v2;
        jump += 1;      
    }while(!founded && jump < 10000);
    return (founded) ? 'YES' : 'NO';
}
console.log(kangaroo(0, 3, 4, 2));


function dayOfProgrammer(year) {
    // It needs to accept years the inclusive range from 1700 to 2700.
    //From 1700 to 1917, Russia's official calendar was the Julian calendar
    let dayOfTheProgrammer = null, monthOfTheProgrammer = null;
    let typeOfCalendar = null;
    let isLeapYear = false;
    let daysCounter = 0, finishDay = 256;
    const daysQtyMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (year >= 1700 && year <= 1917) typeOfCalendar = 'julian'
    else if (year > 1917 && year <= 2700) typeOfCalendar = 'gregorian';

    if (typeOfCalendar == 'julian' && year % 4 == 0) isLeapYear = true;
    if (typeOfCalendar == 'gregorian'){
        if (year % 4 == 0 ){
            if (year % 100 != 0){
                isLeapYear = true;
            }else if (year % 400 == 0){
                isLeapYear = true;
            }            
        }
    }  
    daysQtyMonths[1] = (isLeapYear == true) ? 29 : 28; 

    daysQtyMonths.forEach((daysQty, index) => {
        if (daysCounter + daysQty <= finishDay){
            daysCounter += daysQty;
            monthOfTheProgrammer = index + 2;            
            dayOfTheProgrammer = finishDay - daysCounter;
        }        
    }
    )

    const zero = (num) => {
        return (num <= 9) ? `0${num}` : `${num}`;        
    }

    console.log(typeOfCalendar, isLeapYear, monthOfTheProgrammer);
    console.log(daysQtyMonths);
    dayOfTheProgrammer = (year == 1918) ? 26 : dayOfTheProgrammer;
    return `${zero(dayOfTheProgrammer)}.${zero(monthOfTheProgrammer)}.${year}`;
}

console.log(dayOfProgrammer(1919)); 


function angryProfessor(k, a) {
    // Write your code here
    let onTimeCount = 0;
    a.forEach(time => {
        onTimeCount += (time <= 0) ? 1 : 0;
    });
    console.log(onTimeCount);
    return (onTimeCount >= k) ? 'NO' : 'YES';
}
const angryProfessorTest01 = [-1, -3, 4, 2];
const angryProfessorTest02 = [0, -1, 2, 1];
console.log(angryProfessor(3, angryProfessorTest01));
console.log(angryProfessor(2, angryProfessorTest02));



function pickingNumbers(a) {
    // Write your code here
    let sortedArray = a.sort(function(a,b){
        return(a - b);
    })
    
    let currentArray = [];
    let longestArray = 0;
    let startNumber = 0;
    for(let i = 0; i < sortedArray.length; i++){
        let result = Math.abs(sortedArray[startNumber] - sortedArray[i]);
        if (result <= 1){
            currentArray.push(sortedArray[i]);
            if(currentArray.length > longestArray){
                    longestArray = currentArray.length
                };
        }else {
    
            startNumber = i;
            if(currentArray.length > longestArray){
                longestArray = currentArray.length
            }
            currentArray = [];
            currentArray.push(sortedArray[i]);
        }
    
    }
    return longestArray;
}

const pickingNumbersTest01 = [4, 6, 5, 3, 3, 1];
const pickingNumbersTest02 = [1, 2, 2, 3, 1, 2];
console.log(pickingNumbers(pickingNumbersTest01));
console.log(pickingNumbers(pickingNumbersTest02));


function hackerrankInString(s) {
    // Write your code here
    let searchedWord = 'hackerrank';
    let searchedWordLen = searchedWord.length;
    let response = 'YES';   
    for (let i = 0; i < searchedWordLen; i++){
        //console.log(searchedWord[i]);
        let currentChar = searchedWord[i];       
        let positionFounded = s.search(currentChar);
        if (positionFounded != -1){
            s = s.slice(positionFounded + 1);
            //console.log(s)            
        }else{
            //console.log("not founded");
            response = 'NO';
        }
    }
    return response;
}
let hackerrankInStringTest01 = 'hhaacckkekraraannk'; 
let hackerrankInStringTest02 = 'hackerworld';
let hackerrankInStringTest03 = 'hhaacckkekraraannk';
let hackerrankInStringTest04 = 'rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt';


console.log(hackerrankInString(hackerrankInStringTest01)); //YES
console.log(hackerrankInString(hackerrankInStringTest02)); //NO
console.log(hackerrankInString(hackerrankInStringTest03)); //YES
console.log(hackerrankInString(hackerrankInStringTest04)); //NO
*/

function pangrams(s) {
    // Write your code here    
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let alphabetLen = alphabet.length;
    let counter = 0;
    
    alphabet.forEach((currentChar) => {
        //console.log(currentChar)
        let currentCharLower = currentChar.toLowerCase();
        let foundedCharPosUpper = s.search(currentChar) > -1;
        let foundedCharPosLower = s.search(currentCharLower) > -1;

        if (foundedCharPosUpper || foundedCharPosLower){
            //console.log('Founded');
            counter += 1;
            foundedCharPosUpper = false;
            foundedCharPosLower = false;
        }
    });    
    return (counter == alphabetLen) ? 'pangram' : 'not pangram';
}

console.log(pangrams('We promptly juged antique ivory buckles for the next prize'));
console.log(pangrams('We promptly judged antique ivory buckles for the prize'));
