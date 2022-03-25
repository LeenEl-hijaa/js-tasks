/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
var first = window.prompt("Please enter first Integer:");
var two = window.prompt("Please enter two Integer:");

function lagerNumber(fn, sn) {
    if (fn > sn) {
        return fn;
    }
    else
        return sn;
}
console.log(lagerNumber(first, two));


/******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
function product(num1, num2, num3) {
    var mult = num1 * num2 * num3;
    if (mult < 0)
        return "The sign is -";
    else
        return "The sign is +";

}

console.log(product(9, 6, -1));


/******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
function sorting(num1, num2, num3) {

    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            window.alert(num1 + "," + num2 + "," + num3);
        } else {
        }
        window.alert(num1 + "," + num3 + "," + num2);
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            window.alert(num2 + "," + num1 + "," + num3);
        } else {
            window.alert(num2 + "," + num3 + "," + num1);

        }


    } else {

        if (num1 > num2) {
            window.alert(num3 + "," + num1 + "," + num2);
        } else {
            window.alert(num3 + "," + num2 + "," + num1);

        }

    }



}

/******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
var array = [-5, -2, -6, 0, -1]
function largestNum(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];

        }
    }
    return max;
}

console.log(largestNum(array));

/******* End Your Code ********* */

/* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
if (x > y) {
    document.write("Hello World")
}
else
    window.alert("Goodbye")

/******* End Your Code ********* */
