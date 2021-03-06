//hours in a year
//let hoursInYear = 24 * 365;
//alert("There are " + hoursInYear + " hours in a year.");

//#minutes in a decade
//var minutes = 60;
//var hours = 24;
//var days = 365;
//var years = 10;
//var minutesDecade = ((minutes*hours) * days) * years;
//
//alert("There are " + minutesDecade + " minutes in a decade.");


// My age in seconds
//alert( ((3600 * 24) * 365) * 28);

 // Christina's age in miliseconds
//alert( ((3600 * 24) * 365) * 32 * 1000);

//#32-bit
// alert(Math.floor(2**32 / 1000 / 60 / 60 / 24));

// #64-bit
// alert(Math.floor(2**64 / 1000 / 60 / 60 / 24));


// my accurate age
//var date1 = new Date('September 20, 1989 02:30:00');
//var date2 = new Date().getTime();
//alert(date2 - date1); // 911941294004 


// DAY 3

// Full name greeting. Write a program that asks for a person’s first name, then middle, and then last. Finally, it should greet the person using their full name.

//let firstName = prompt("What is your first name?");
//let middleName = prompt("What is your middle name?");
//let lastName = prompt("What is your last name?");
//
//alert("Hi and welcome to JavaScript learning bootcamp, " + firstName + " " + middleName + " " + lastName + ".");



// Bigger, better favorite number. Write a program that asks for a person’s favorite number. Have your program add 1 to the number, and then suggest the result as a bigger and better favorite number. (Do be tactful about it, though.)

//let favNumber = prompt("What is your favorite number?");
//let suggestedNumber = parseInt(favNumber) + 1;
//
//alert("We think " + suggestedNumber + " is way cooler than " + favNumber + ".");



// Angry boss. Write an angry boss program that rudely asks what you want. Whatever you answer, the angry boss should yell it back to you and then fire you. For example, if you type in I want a raise, it should yell back like this:
// WHADDAYA MEAN "I WANT A RAISE"?!? YOU'RE FIRED!!

//let answer = prompt("What do you want from me?");
//alert("WHADDAYA MEAN " + answer.toUpperCase() + "?!? YOU'RE FIRED!!");

//Table of contents. Here’s something for you to do in order to play around more with center, ljust, and rjust: write a program that will display a table of contents so that it looks like this:
//Table of Contents
//
//Chapter 1: Getting Started page 1 
//Chapter 2: Numbers page 9 
//Chapter 3: Letters page 13
//
//Optional: in JS we may prefer to 'print' these to the HTML file itself rather than the console.
//
//let mytable = ["Chapter 1: Getting Started", "page 1", "Chapter 2: Numbers", "page 9", "Chapter 3: Letters", "page 13"];
//
//let td_1 = document.getElementById("td-1");
//let pg_1 = document.getElementById("pg-1");
//let td_2 = document.getElementById("td-2");
//let pg_2 = document.getElementById("pg-2");
//let td_3 = document.getElementById("td-3");
//let pg_3 = document.getElementById("pg-3");
//
//td_1.textContent = mytable[0];
//pg_1.textContent = mytable[1];
//td_2.textContent = mytable[2];
//pg_2.textContent = mytable[3];
//td_3.textContent = mytable[4];
//pg_3.textContent = mytable[5];


// Generate a random number
//between 1 and 10
//between 1 and 100
//between 1930 and 1950

//let first = Math.round(Math.random() * 10);
//let li1 = document.getElementById("li-1");
//li1.textContent = first;
//
//let second = Math.round(Math.random() * 100);
//let li2 = document.getElementById("li-2");
//li2.textContent = second;
//
//let third = Math.round(Math.random() * 100);
//let li3 = document.getElementById("li-3");
//li3.textContent = third;

// Music A 440 Hz 1 octave is double the frequency tempered piano A' 880 Hz Calculate and console.log the frequency each of the 12 notes between A and A' Hint: the notes are NOT in a linear scale, but in a geometric scale

//function freq() {
//    let A = 440;
//    let notes = ["A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"];
//         for (i = 0; i < notes.length; i++) {
//             let formula = A * Math.pow(2, (i+1) / 12);
//             let frequency = formula;
//             console.log("Frequency of " + notes[i] + " is " + frequency);
//         }
//}
//freq();


// “99 Bottles of Beer on the Wall.” Write a program that prints out the lyrics to that beloved classic, “99 Bottles of Beer on the Wall.”
//
//i = 99;
//while (i > 0) {
//    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.\nTake one down and pass it around, " + i + " bottles of beer on the wall.");
//    i--;
//}
//console.log("No more bottles of beer on the wall, no more bottles of beer. \nGo to the store and buy some more, 99 bottles of beer on the wall.");




//Deaf grandma. Whatever you say to Grandma (whatever you type in), she should respond with this: HUH?! SPEAK UP, GIRL!
//
//unless you shout it (type in all capitals). If you shout, she can hear you (or at least she thinks so) and yells back:
//
//NO, NOT SINCE 1938!
//
//To make your program really believable, have Grandma shout a different year each time, maybe any year at random between 1930 and 1950. (This part is optional and would be much easier if you read the section on JavaScript’s random number generator under the Math Object.) You can’t stop talking to Grandma until you shout BYE.
//
//Hint: Try to think about what parts of your program should happen over and over again. All of those should be in your while loop.
//
//Hint: People often ask me, “How can I make random give me a number in a range not starting at zero?” But you don’t need it to. Is there something you could do to the number random returns to you?
//
//Deaf grandma extended. What if Grandma doesn’t want you to leave? When you shout BYE, she could pretend not to hear you. Change your previous program so that you have to shout BYE three times in a row. Make sure to test your program: if you shout BYE three times but not in a row, you should still be talking to Grandma.

//let user = prompt("Say something to grandma!");
//
//while (user !== "BYEBYEBYE"){
//if (user !== user.toUpperCase()) {
//    alert("HUH?! SPEAK UP, GIRL!");
//    user = prompt("Grandma is listening to you.");
//}
//else {
//    function getRandomArbitrary(min, max) {
//        return Math.floor(Math.random() * (max - min) + min);
//}
//    alert("NO, NOT SINCE " + getRandomArbitrary(1930, 1950) + " !");
//    user = prompt("Grandma is listening to you.");
//}
//}



//
//Leap years. Write a program that asks for a starting year and an ending year and then puts all the leap years between them (and including them, if they are also leap years). Leap years are years divisible by 4 (like 1984 and 2004). However, years divisible by 100 are not leap years (such as 1800 and 1900) unless they are also divisible by 400 (such as 1600 and 2000, which were in fact leap years). What a mess!
//

//
//
//firstYear = parseInt(prompt("Please enter the first year: "));
//secondYear = parseInt(prompt("Please enter the second year: "));
//
//for (var x = firstYear; x <= secondYear; x++) {
//    if (x % 400 == 0) {
//        console.log(x);
//    } 	
//	else if (x % 4 == 0 && x % 100 != 0) {
//        console.log(x);
//    }
//}


//Table of contents. Write a table of contents program here. Start the program with a list holding all of the information for your table of contents (chapter names, page numbers, and so on). Then print out the information from the list in a beautifully formatted table of contents. Use string formatting such as left align, right align, center.

//
//let mytable = ["Chapter 1: HTML5", "page 1", "Chapter 2: CSS3", "page 77", "Chapter 3: JavaScript", "page 158", "Chapter 4: Python", "page 245"];
//
//let td_1 = document.getElementById("td-1");
//let pg_1 = document.getElementById("pg-1");
//let td_2 = document.getElementById("td-2");
//let pg_2 = document.getElementById("pg-2");
//let td_3 = document.getElementById("td-3");
//let pg_3 = document.getElementById("pg-3");
//
//td_1.textContent = mytable[0];
//pg_1.textContent = mytable[1];
//td_2.textContent = mytable[2];
//pg_2.textContent = mytable[3];
//td_3.textContent = mytable[4];
//pg_3.textContent = mytable[5];
//

// Planets Calculate and console log how many 'minutes' the Moon travels in a day. Hint: first calculate how many degrees the Moons travels in the sky when the Earth returns to the same position during its daily rotation.
//
//let fullCircle = 360;
//let daysMoon = 29.5;
//let degreesPerDay = fullCircle / daysMoon;
//// dividing by 24 hours / 60min
//let earthAnglePerMinute = fullCircle / 24 / 60;
//console.log(earthAnglePerMinute / degreesPerDay);


//Building and sorting an array. Write the program that asks us to type as many words as we want (one word per line, continuing until we just press Enter on an empty line) and then repeats the words back to us in alphabetical order. Make sure to test your program thoroughly; for example, does hitting Enter on an empty line always exit your program? Even on the first line? And the second?
//Hint: There’s a lovely array method that will give you a sorted version of an array: sorted(). Use it!
//

//let answer = [];
//let user = "";
//let only_enter = false;
//while (!only_enter) {
//    let word = prompt("Please add an item.");
//    if (!word) {
//        only_enter = true;
//    } else {
//        answer.push(word);
//    }
//   
//}
// console.log(answer.sort());