document.addEventListener("DOMContentLoaded", function(){
    // Variables
    let numInput = document.getElementById("number"),

        intNumbers = document.querySelectorAll(".int"),

        integers = document.querySelectorAll(".integer"),

        checkEvenOdd = document.getElementById("even-odd-input"),

        vowelCharInput = document.getElementById("vowel-input"),

        numBegin = document.getElementById("num-list-input"),

        multipleNumInput = document.getElementById("multiple-num-input"),

        listEvenInput = document.getElementById("list-even-num-input"),

        numPowInput = document.querySelectorAll(".num-power"),
        numberPowerInput = document.getElementById("number-input"),
        powerInput = document.getElementById("power-input"),

        marksInput = document.querySelectorAll(".mark"),
        numMarksInput = marksInput.length,

        monthInput = document.getElementById("month"),

        gradesInput = document.querySelectorAll(".grade"),
        gradesInputNum = gradesInput.length,

        calcNumbers = document.querySelectorAll(".Num");
    
    // Functions
    numInput.addEventListener("input", function(){
        // Q:1
        document.getElementById("output").innerHTML = numInput.value;

        // Q:2
        if(numInput.value % 3 === 0 && numInput.value % 4 === 0){
            document.getElementById("case-division").innerHTML = "Yes, this number is divisble by 3 and 4";
        }
        else{
            document.getElementById("case-division").innerHTML = "No, this number is not divisble by 3 and 4";
        }

        // Q:4
        if(numInput.value < 0){
            document.getElementById("pos-neg").innerHTML = "The number is negative";
        }
        else if(numInput.value > 0){
            document.getElementById("pos-neg").innerHTML = "The number is positive";
        }
    });

    // Q:3
    document.getElementById("int1").addEventListener("input", function(){
        getMax();
    });
    document.getElementById("int2").addEventListener("input", function(){
        getMax();
    });
    function getMax(){
        let int1 = parseInt(document.getElementById("int1").value);
        let int2 = parseInt(document.getElementById("int2").value);
        if(int1 > int2){
            document.getElementById("max").innerHTML = "Max: " + int1;
        }
        else if( int2 > int1){
            document.getElementById("max").innerHTML = "Max: " + int2;
        }
        else{
            document.getElementById("max").innerHTML = "The 2 Numbers are Equal";
        }
    }

    // Q:5
    for(let i = 0; i < integers.length; i++){
        integers[i].addEventListener("input", getMinMax);
    }
    function getMinMax(){
        let int1 = parseInt(document.getElementById("int-1").value);
        let int2 = parseInt(document.getElementById("int-2").value);
        let int3 = parseInt(document.getElementById("int-3").value);

        // Find max
        let max = int1;
        if (int2 > max) max = int2;
        if (int3 > max) max = int3;

        // Find min
        let min = int1;
        if (int2 < min) min = int2;
        if (int3 < min) min = int3;

        document.getElementById("max-min").textContent = "Max Element = " + max + ", Min Element = " + min;
    }

    // Q:6
    checkEvenOdd.addEventListener("input", function(){
        let num = parseInt(checkEvenOdd.value);
        if(num == ''){
            document.getElementById("even-odd-result").innerHTML = "";
        }
        else if(num % 2 === 0){
            document.getElementById("even-odd-result").innerHTML = "The Number is Even";
        }
        else{
            document.getElementById("even-odd-result").innerHTML = "The Number is Odd";
        }
    });

    // Q:8
    vowelCharInput.addEventListener("input", function(){
        let char = vowelCharInput.value;
        if(char === ''){
            document.getElementById("vowel-output").innerHTML = "";
        }
        else if( char === 'a' || char === 'A'){
            document.getElementById("vowel-output").innerHTML = "The Char is Vowel";
        }
        else if( char === 'e' || char === 'E'){
            document.getElementById("vowel-output").innerHTML = "The Char is Vowel";
        }
        else if( char === 'l' || char === 'L'){
            document.getElementById("vowel-output").innerHTML = "The Char is Vowel";
        }
        else if( char === 'o' || char === 'O'){
            document.getElementById("vowel-output").innerHTML = "The Char is Vowel";
        }
        else if( char === 'u' || char === 'U'){
            document.getElementById("vowel-output").innerHTML = "The Char is Vowel";
        }
        else{
            document.getElementById("vowel-output").innerHTML = "The Char is Consonant";
        }
    });

    // Q:9
    numBegin.addEventListener("input", function(){
        let start = parseInt(numBegin.value);
        let listNums = '';
        for( let i = 1; i <= start ; i++ ){
            if( i !== start){
                listNums += i + ',';
            }else{
                listNums += i + '';
            }
        }
        document.getElementById("num-list-output").innerHTML = listNums;
    });

    // Q:10
    multipleNumInput.addEventListener("input", function(){
        let num = parseInt(multipleNumInput.value),
            result = '';
        
        if(num !== '' || num !== 0){
            let start = num;
            for(let i = 0 ; i < 12 ; i++){
                result += num + ' ';
                num += start;
                // result += `${num * (i+1)}  `;
            }
            document.getElementById("multiple-num-output").innerHTML = result;
        }
    });

    // Q:11
    listEvenInput.addEventListener("input", function(){
        let num = parseInt(listEvenInput.value),
            result = '';
        if(num !== '' || num !== 0){
            for(let i = 0 ; i <= num; i++){
                if( i !== 0 && i % 2 === 0){
                    result += i + ' ';
                }
            }
            document.getElementById("list-even-num-output").innerHTML = result;
        }
    });

    // Q:12
    // for(let i = 0; i < numPowInput.length; i++){
    //     numPowInput[i].addEventListener("input", function(){
    //         getPow(numberPowerInput , powerInput);
    //     });
    // }
    numPowInput.forEach(input =>{
        this.addEventListener("input", function(){
            getPow(numberPowerInput , powerInput);
        });
    });
    function getPow(numberPowerInput , powerInput){
        
        let num = parseInt(numberPowerInput.value),
            pow = parseInt(powerInput.value),
            res = 1 ;

        if(!isNaN(num) && !isNaN(pow)){
            for(let i = 1 ; i <= pow ; i++){
                res *= num;
            }
            document.getElementById("power-res").innerHTML = res;
        }
        else{
            document.getElementById("power-res").innerHTML = '';
        }
    }

    // Q:12
    for(let i = 0; i < numMarksInput; i++){
        marksInput[i].addEventListener("input", function(){
            getTotal();
            getAvg();
            getPercent();
        });
    }
    function getTotal(){
        let total = 0;
        for(let i = 0; i < numMarksInput; i++){
            let mark = parseInt(marksInput[i].value);
            if( !isNaN(mark)){
                total += mark;
            }
        }
        document.getElementById("total-res").innerHTML = `Total Marks = ${total}`;
        return total;
    }
    function getAvg(){
        /*
        let sum = 0,
            avg = 0;
        for( let i = 0; i < numMarksInput; i++){
            let mark = parseInt(marksInput[i].value);
            if(!isNaN(mark)){
                sum += mark;
            }
        }
        avg = sum / numMarksInput;
        document.getElementById("avg-res").innerHTML = `Average Marks = ${avg}`;
        */
        // or use the return function getTotal() directly
        let sum = getTotal(),
            avg = sum / numMarksInput;
        document.getElementById("avg-res").innerHTML = `Average Marks = ${avg}`;

        return avg;
    }
    /*
    function getPercent(){
        let sum = getTotal(),
            percent = (sum * 100 / numMarksInput )/ 100;
        document.getElementById("percent-res").innerHTML = `Average Marks = ${percent}`;
    }
    */
    
    // annother function
    /*
    function getPercent(){
        let sum = getTotal(),
            avg = getAvg();
            percent = avg *100 / 100;
        document.getElementById("percent-res").innerHTML = `Average Marks = ${percent}`;
    }
    */
    
    //    another function
    function getPercent() {
        let sum = getTotal(),
            maxMarks = numMarksInput* 100,
            percent = (sum / maxMarks) * 100;
        document.getElementById("percent-res").innerHTML = `Percentage = ${percent}`;
    }
    
    // Q:13
    monthInput.addEventListener("input", function(){
        let month = parseInt(monthInput.value);
        // let days = document.getElementById("month-days");
        let daysMonth ;
        if(!isNaN(month) && month !== 0 && month > 0 ){
            if(month >= 1 && month <= 12){
                if(month < 8){
                    if( month % 2 !== 0 ){
                        daysMonth = 31;
                        // days.innerHTML = `Days in Month: ${daysMonth}`;
                    }
                    else if(month === 2){
                        daysMonth = 28;
                    }
                    else{
                        daysMonth = 30;
                    }
                }
                else{
                    if(month % 2 === 0){
                        daysMonth = 31;
                    }
                    else{
                        daysMonth = 30;
                    }
                }
                document.getElementById("month-days").innerHTML = `Days in Month: ${daysMonth}`;
            }
            
            else{
                document.getElementById("month-days").innerHTML = "Please enter a valid month number (1 to 12).";
            }
        }
        
    });

    // Q:14
    gradesInput.forEach(grade => {
        this.addEventListener("input", function(){
            getGradesPercentAndGrade();
        });
    });
    function getGradesPercentAndGrade(){
        // let percentage = getPercent(),
        let totalGrades = getTotalGrades(),
            percentage  = (totalGrades / (gradesInputNum*100) )* 100,
            grade;
        if(percentage >= 90 ){
            grade = 'A';
        }
        else if(percentage >= 80 ){
            grade = 'B';
        }
        else if(percentage >= 70 ){
            grade = 'C';
        }
        else if(percentage >= 60 ){
            grade = 'D';
        }
        else if(percentage >= 40 ){
            grade = 'E';
        }
        else if(percentage < 40 ){
            grade = 'F';
        }

        document.getElementById("percent-grade").innerHTML = `Percentage = ${percentage} , Grade = ${grade};`;
    }
    function getTotalGrades(){
        let sum = 0;
        gradesInput.forEach(grade => {
            let gradeValue = parseInt(grade.value);
            if(!isNaN(gradeValue)){
                sum += gradeValue;
            }
        });
        return sum;
    }

    // Switch
    // Q:15
    monthInput.addEventListener("input", function(){
        let month = parseInt(monthInput.value);
        let daysMonth = 0;
        if(month >= 1 && month <= 12 ){
            switch(month){
                case 2:
                    daysMonth = 28;
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    daysMonth = 30;
                    break;
                default:
                    daysMonth = 31;
                    break;
            }
            console.log(`Days in Month: ${daysMonth}`) ;
        }
        else{
            console.log("Please enter a valid month number (1 to 12).")
        }
    });
    
    // Q:16
    vowelCharInput.addEventListener("input", function(){
        let char = vowelCharInput.value;
        switch(char){
            case "":
                output = "";
                break;
            case "a":
            case "A":
            case "o":
            case "O":
            case "e":
            case "E":
            case "l":
            case "L":
            case "u":
            case "U":
                console.log("The Char is Vowel");
                break;
            default:
                console.log("The Char is Consonant");;
                break;

        }
    });

    // Q:17
    intNumbers.forEach(num => {
        this.addEventListener("input",getMaxBySwitch);
    });
    function getMaxBySwitch(){
        let num1 = parseInt(document.getElementById("int1").value);
        let num2 = parseInt(document.getElementById("int2").value);
        if(!isNaN(num1) && !isNaN(num2)){
            switch(true){
                case num1 > num2 :
                    console.log("Max: " + num1);
                    break;
                case num1 < num2 :
                    console.log("Max: " + num2);
                    break;
                default :
                console.log("The 2 Numbers are Equal");
                break;
            }
        }
    }

    // Q:18
    checkEvenOdd.addEventListener("input", function(){
        let input = parseInt(checkEvenOdd.value);
        switch(true){
            case input % 2 === 0:
                console.log("The Number is Even");
                break;
            case input % 2 !== 0:
                console.log("The Number is Odd");
                break;
            default:
                console.log("InValid Input");
                break;
        }
    });

    // Q:19
    numInput.addEventListener("input", function(){
        let input = parseInt(numInput.value);
        switch(true){
            case input > 0:
                console.log("The Number Is Positive");
                break;
            case input < 0:
                console.log("The Number Is Negative");
                break;
            default:
                console.log(`The Number Is Zero`);
                break;
        }
    });

    // Q:20
    // calcNumbers.forEach(num =>{
    //     num.addEventListener("input", function(){
    //         let num1 = parseInt(document.getElementById("Num1").value);
    //         let num2 = parseInt(document.getElementById("Num2").value);
    //         let sign = document.getElementById("operation").value;
    //         let res;
    //         switch(sign){
    //             case '+':
    //                 res = num1 + num2;
    //                 break;
    //             case '-':
    //                 res = num1 - num2;
    //                 break;
    //             case '/':
    //                 res = num2 !== 0 ? num1 / num2 : "Infinity";
    //                 break;
    //             case '*':
    //                 res = num1 * num2;
    //                 break;
    //             default:
    //                 res = "InValid Sign Input";
    //                 break;
    //         }
    //         document.getElementById("calc-output").innerHTML = res;
    //     });
    // });
    
    document.getElementById("calculateBtn").addEventListener("click", function calculate() {
        let num1 = parseInt(document.getElementById("Num1").value);
        let num2 = parseInt(document.getElementById("Num2").value);
        let sign = document.getElementById("operation").value;
        let res;

        switch(sign) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    res = "Cannot divide by zero";
                } else {
                    res = num1 / num2;
                }
                break;
            default:
                res = "Invalid operation";
                break;
        }

        document.getElementById("calc-output").innerHTML = "Result: " + res;
    });
    

});