console.log('Here is : ', 'array')





/*
1
Correct the syntax error
 [ 1,7  9  45, ]
 ["Str" "alex","moh"
 'the','fox' 'over' lazy, 'dog',  ]
*/
var arr = [1, 7, 9, 45,];
document.write(arr);
document.write("<br><br>");

var b = ["Str", "alex", "moh", 'the', 'fox', 'over', "lazy", 'dog',]
document.write(b + "<br><br>");



/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits = ["Tomato", "Banana", "Watermelon"];
var index = fruits.indexOf("Tomato");
document.write(index + "<br><br>");

var index = fruits.indexOf("Banana");
document.write(index + "<br><br>");

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
var Food = ["mansaf", "burger", "shawerma", "magloubeh", "pizza"];
var sport = ["Volleyball", "Tennes", "Football"];
var movie = ["Batman", "superman", "Jouker", "Titanic"];




/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
var array = [1, 4, 5];
function firstOfArray(arr) {
    return arr[0];
}
document.write(firstOfArray(array));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array
Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
var array = [1, 4, 5];
function lastOfArray(arr) {
    let length = arr.length;
    return arr[length - 1];
}
document.write(lastOfArray(array));

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)
var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8)
array.push(10)
console.log(array.push())



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you
var array2 = [5,9,-7,3.5]
*/

var array2 = [5, 9, -7, 3.5];
array2.push()
console.log(array2);
array2.unshift(15)
console.log(array2);
array2.shift()
console.log(array2);
array2.pop()
console.log(array2);
/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets
Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/

var array1 = [1, 4, 5,];
var array2 = ["t", "u", "g", "x"];
function middleOfArray(array) {
    lenth = array.length;
    if (lenth % 2 == 0) {
        var index1 = [array[((lenth / 2) - 1)], array[Math.floor(lenth / 2)]]
        return index1
    }

    else
        return array[Math.floor(lenth / 2)]
}

console.log(middleOfArray(array1));
console.log(middleOfArray(array2));

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something
var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals.pop()
animals[0] = ['Zebra']
animals[1] = ['Elephent']

console.log(animals)


/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index
var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9
**try more cases by your self
*/

var nums = [1, 2, 3, 8, 9];

function indexOfArray(arr, indx) {
    index = arr[indx];
    return index;
}
ndx = window.prompt("Please enter the index");
console.log(indexOfArray(nums, parseInt(ndx)));


/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9];

function arrayExceptLast(array) {
    var arr = [];
    for (var i = 0; i < array.length - 1; i++) {
        arr[i] = array[i]
    }
    return arr;
}
console.log(arrayExceptLast(nums));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array
var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9];
function addToEnd(array, value) {
    array[array.length - 1] = value;
    return array
}
console.log(addToEnd(nums, 55));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array
var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23
** solve it one time using for loop and another using while loop
**try more cases by your self
*/


// Using while loop
var nums = [1, 2, 3, 8, 9];

function sumArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}
sumArray(nums);


// Using while loop
function sumArray(array) {
    var sum = 0;
    var i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    console.log(sum);
}
sumArray(nums);

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array
var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1
** solve it one time using for loop and another using while loop
** try more cases by your self
*/

var nums = [1, 2, 3, 8, 9, 0];
function minInArray(array) {
    var min = array[0];
    document.write("min " + min);
    for (var i = 1; i < array.length; i++) {

        if (min > array[i]) {
            min = array[i];
        }

    }
    return min;
}
console.log(minInArray(nums));



var nums = [1, 2, 3, 8, 9, 0];
function minInArray(array) {
    var min = array[0];
    var i = 1;
    document.write("min " + min);
    while (i < array.length) {

        if (min > array[i]) {
            min = array[i];
        }
        i++;
    }
    return min;
}
console.log(minInArray(nums));



// console.log(min);



/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it
var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]
function minInArray(array, element) {
    var arr = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] != element) {
            arr[j] = array[i];
            j++;
        }

    }
    return arr;
}
console.log(minInArray(nums, 8))

var nums = [1, 2, 3, 8, 9]
function minInArray(array, element) {
    var arr = [];
    var j = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] != element) {
            arr[j] = array[i];
            j++;
        }
        i++;
    }
    return arr;
}
console.log(minInArray(nums, 8))
/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts
var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [1, 2, 3, 8, 9]
function oddArray(array) {
    var arr = [];
    var j = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] % 2 != 0) {
            arr[j] = array[i];
            j++;
        }
        i++;
    }
    return arr;
}
console.log(oddArray(nums))





var nums = [1, 2, 3, 8, 9]
function oddArray(array) {
    var arr = [];
    var j = 0;

    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            arr[j] = array[i];
            j++;
        }

    }
    return arr;
}
console.log(oddArray(nums))


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array
var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6
var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6
** solve it one time using for loop and another using while loop
**try more cases by your self
*/

var nums = [1, 2, 3, 8, 9]
function aveArray(array) {

    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];

    }
    return sum / array.length;
}
console.log(aveArray(nums));


var nums = [1, 2, 3, 8, 9]
function aveArray(array) {

    var sum = 0;
    var i = 0;
    while (i < array.length) {
        sum += array[i];
        i++;
    }
    return sum / array.length;
}
console.log(aveArray(nums));


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

function shorterInArray(array) {
    var len = strings[0].length;
    for (var i = 1; i < array.length; i++) {

        if (array[i].length < len) {
            len = array[i].length;

        }
    }
    return len;
}
console.log(shorterInArray(strings));




var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

function shorterInArray(array) {
    var len = strings[0].length;
    var i = 1;
    while(i < array.length) {

        if (array[i].length < len) {
            len = array[i].length;

        }
        i++;
    }
    return len;
}
console.log(shorterInArray(strings));

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string
var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string = "alex mercer madrasa rashed2 emad hala"

function repeatChar(str, char) {
    var count = 0;
    for (var i = 0; i < str.length; i++){
        if (char == str[i]) {
            count++;
        }
    }
    return count;
}
console.log(repeatChar(string, 'a'));



var string = "alex mercer madrasa rashed2 emad hala"

function repeatChar(str, char) {
    var count = 0;
    var i = 0;
   while(i < str.length) {
        if (char == str[i]) {
            count++;
        }
       i++;
    }
    return count;
}
console.log(repeatChar(string, 'a'));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];

function evenIndexOddLength(strings) {
    var newArray = [];
    var j = 0;
    for (var i = 0; i < strings.length; i++){
        if (i % 2 == 0) {
            if (strings[i].length % 2 != 0) {
                newArray[j] = strings[i];
                j++;
            }
        }
    }
    return newArray;
    
}
console.log(evenIndexOddLength(strings));

var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(strings) {
    var newArray = [];
    var j = 0;
    var i = 0;
    while(i < strings.length) {
        if (i % 2 == 0) {
            if (strings[i].length % 2 != 0) {
                newArray[j] = strings[i];
                j++;
            }
        }
        i++;
    }
    return newArray;

}
console.log(evenIndexOddLength(strings));



/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self
var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [44, 5, 4, 3, 2, 10]

function powerElementIndex(array) {
    var arr = [];
    for (var i = 0; i < array.length; i++){
        arr[i] = array[i] ** i;
    }
    return arr;
}

console.log(powerElementIndex(nums));

var nums = [44, 5, 4, 3, 2, 10]

function powerElementIndex(array) {
    var arr = [];
    var i = 0;
   while( i < array.length) {
       arr[i] = array[i] ** i;
       i++;
    }
    return arr;
}

console.log(powerElementIndex(nums));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]
** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];

function evenNumberEvenIndex(array) {
    var arr = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            if (array[i] % 2 == 0) {
                arr[j] = array[i];
                j++;
            }
        }

     }
    return arr;

}
console.log(evenNumberEvenIndex(nums));
var nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
function evenNumberEvenIndex(array) {
    var arr = [];
    var j = 0;
    var i = 0;
    while(i < array.length) {
        if (i % 2 == 0) {
            if (array[i] % 2 == 0) {
                arr[j] = array[i];
                j++;
            }
        }
        i++;
    }
    return arr;

}
console.log(evenNumberEvenIndex(nums));