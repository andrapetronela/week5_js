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


// Table of contents. Here’s something for you to do in order to play around more with center, ljust, and rjust: write a program that will display a table of contents so that it looks like this:
//Table of Contents
//
//Chapter 1: Getting Started page 1 Chapter 2: Numbers page 9 Chapter 3: Letters page 13
//
//Optional: in JS we may prefer to 'print' these to the HTML file itself rather than the console.




















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





