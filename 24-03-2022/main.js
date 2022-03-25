console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
    var representsMe = [
        {firstName: "Leen"},
        {lastName: "Khaled"},
        {age: 24},
        {dob: "23/10/1997"},
        {favFood: ["Shawerma", "zenger", "Mandi"]},
        {favMovie: ["Interstaller", "LaLa Land", "The God Father", "The Judge", "12 angry men"]},
    ];
    console.log(representsMe);



    var persons = [
        { name: { first: 'John', last: 'Hob' }, age: 35 },
        { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
        { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
        { name: { first: 'Zues', last: 'Odin' }, age: 55 },
        { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
    ];
          
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides
Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
    function firstName() {
        let x = [];
        for (i = 0; i < persons.length; i++) {
            x += (`${fn[i].name.first},`);
        }
        return x;
    }
     
    const fn = Object.create(persons)
    console.log(firstName());
    

   

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons
Ex: averageAge(persons) => 41.2
*/
    function averageAge() {
        let x= 0;
        let y = persons.length;
        for (i = 0; i < y; i++) {
            x += (avg[i].age);
        }

        return x / y;
    }

    const avg = Object.create(persons)
    console.log(averageAge());

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person
Ex: olderPerson(persons) => "Soso Al-Amora"
if (x < old[i].age)
*/
    function olderPerson() {
        let z=0;
        let x= old[z].age;
        let y = persons.length;
        for (i = 1; i < y; i++) {
            if (old[i].age > x ) {
                x = old[i].age;
                z = i;
            }
        }
        return old[z].name;
    }

    const old = Object.create(persons)
    console.log(olderPerson());

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
*/
    function longestName() {
        let x= lon[0].name.first + lon[0].name.last;
        let y = persons.length;
        for (i = 1; i < y; i++) {
            if (x.length < lon[i].name.first.length + lon[i].name.last.length) {
                x = lon[i].name.first + lon[i].name.last;
            }
        }
        return x;
    }

    const lon = Object.create(persons)
    console.log(longestName());
    


/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name
Ex: longestName(persons) => "Soso Al-Amora"
function longestName() {
    let x= long[0].name.first + long[0].name.last;
    let y = persons.length;
    for (i = 1; i < y; i++) {
        if (x.length < long[i].name.first.length + long[i].name.last.length) {
            x = long[i].name.first + long[i].name.last;
        }
    }
    return x;
}
const long = Object.create(persons)
console.log(longestName());
*/




//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??
Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
function repeatWord(word) {
    let rep = 0;
    let s = word.toUpperCase().split(" ");
   
    for (i = 0; i < s.length; i++) {
        for (j = 0; j < s.length; j++) {
            if (s[i] == s[j]) {
                rep++;

            }

        }
        console.log(s[i] + ":" + rep);
        rep =0;
    }
    

}

repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO");



/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??
Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/

function repeatChar(ch) {
    let reep = 0;
    let c = ch;
     
    for (i = 0; i < c.length; i++) {
        for (j = 0; j < c.length; j++) {
            if (c[i] == c[j]) {
                reep++;

            }

        }
        console.log(c[i] + ":" + reep);
        reep =0;
    }
}

repeatChar("mamababatetacedo");

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array
Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/

function selectFromObject(object , array){
    result = {};
    for(i = 0; i < array.length; i++){
        for (const [key , val] of Object.entries(object)) {
        if(key == array[i]){
            result[`${array[i]}`] = val;
        
    }}}

    return result;
  
}
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']));