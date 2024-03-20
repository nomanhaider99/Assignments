"use strict";
// // Question No 1
// // Install Node JS, TypeScript and VS code.
// // Question No 2
// // Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let Name = "Noman";
let message = `Hello ${Name}, would you like to learn some Python today?`;
console.log(message);
// // Question No 3
// // Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let SecondName = "hARIS";
console.log(`lowercase form is ${SecondName.toLowerCase()}`);
console.log(`lowercase form is ${SecondName.toUpperCase()}`);
let first_char = SecondName[0];
let result1 = SecondName.charAt(0).toUpperCase();
let result2 = SecondName.slice(1, 5).toLowerCase();
console.log(`Title case is ${result1}${result2}`);
// // Question No 4
// //Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
console.log("Albert Einstein once said, “A person who never made a mistake never tried anything new.");
// // Question No 5
// // Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let author = "Albert Einstein";
let quote = "A person who never made a mistake never tried anything new.";
console.log(`${author} once said, ${quote}`);
// // Question No 6
// // Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName_1 = "/t/n John Doe/y/n";
let orgStr = personName_1;
let newStr1 = personName_1.slice(5, 9);
let newStr2 = personName_1.slice(10, 13);
console.log(orgStr);
console.log(`${newStr1} ${newStr2}`);
// // Question No 7
// // Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(`${6 + 2} is equals to 8.`);
console.log(`${10 - 2} is equals to 8.`);
console.log(`${4 * 2} is equals to 8.`);
console.log(`${16 / 2} is equals to 8.`);
// // Question No 8
// // You should create four lines that look like this:
// // our output should simply be four lines with the number 8 appearing once on each line
console.log("\n");
console.log(5 + 3);
console.log("\n");
// // Question No 9
// // Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 9;
let Message = `Favorite Number: ${favoriteNumber}`;
console.log(Message);
// // Question No 10
// // Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// In this program i have stored the author name in author variable and his quote in the quote variable then i used console.log statements to print the statement like this: Albert Einstein once said, A person who never made a mistake never tried anything new. then instaed of + operator in statement i used tempelate literals `` and ${} to print the value of a variable.
let author1 = "Albert Einstein";
let quote1 = "A person who never made a mistake never tried anything new.";
console.log(`${author1} once said, ${quote1}`);
// In this program i stored two names of boys in an array of a string then i made a function that takse persons's array as a parameter and return the statement that stored name is a boy, then i used forEach method that prints the statement for all the names stored in an array.
const persons = ["Noman", "Haris"];
function printMessage(persons) {
    console.log(`${persons} is a boy.`);
}
persons.forEach(persons => printMessage(persons));
// // Question No 11
// // Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let persons1 = ["Noman", "Haris", "Faizan", "Taha"];
console.log(persons1[0]);
console.log(persons1[1]);
console.log(persons1[2]);
console.log(persons1[3]);
// // Question No 12
// // Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let persons2 = ["Noman", "Haris", "Faizan", "Taha"];
function printMessage1(persons) {
    console.log(`${persons} is a boy.`);
}
persons2.forEach(persons => printMessage(persons));
// // Question No 13 
// // Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
let list = [
    "motorcycle", "car", "train", "private jet", "airplane"
];
console.log(`I had ${list[0]} last year.`);
console.log(`I will buy ${list[1]} tommorrow.`);
console.log(`I could afford to buy ${list[2]}.`);
console.log(`I will travel in ${list[2]} next month.`);
// // Question No 14
// //Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guests = [
    "Arbaz butt", "Daniyal butt", "Taimoor butt"
];
guests.forEach((person) => {
    console.log(`> ${person}`);
});
// // Question No 15
// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
let guests1 = [
    "Arbaz butt", "Daniyal butt", "Taimoor butt"
];
guests1.pop();
guests1.push("Shera");
let addedGuest30 = guests1.forEach((person) => {
    console.log(`${person}`);
});
console.log(addedGuest30);
// // Question No 16
// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// // • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// // • Add one new guest to the beginning of your array.
// // • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guests2 = [
    "Arbaz butt", "Daniyal butt", "Taimoor butt"
];
console.log("I found a bigger dinning table...");
guests2.unshift("Noman");
guests2.push("Haris");
let middle_index = Math.floor(guests.length / 2);
guests.splice(middle_index, 0, "Anwer");
console.log(guests);
// Question No 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
let guests3 = [
    "Arbaz butt", "Daniyal butt", "Taimoor butt"
];
guests3.unshift("Noman");
guests3.push("Haris");
let middle_index2 = Math.floor(guests.length / 2);
guests.splice(middle_index2, 0, "Anwer");
console.log("I can invite only two people for dinner.");
let last_guest = guests3.pop();
let secondlast_guest = guests3.pop();
let thirdlast_guest = guests3.pop();
let fourthlast_guest = guests3.pop();
console.log(`Dear ${last_guest} sorry you are not invited to dinner.`);
console.log(`Dear ${secondlast_guest} sorry you are not invited to dinner.`);
console.log(`Dear ${thirdlast_guest} sorry you are not invited to dinner.`);
console.log(`Dear ${fourthlast_guest} sorry you are not invited to dinner.`);
guests3.forEach((guest) => {
    console.log(`${guest} You're still invite`);
});
guests3.pop();
guests3.pop();
console.log(guests3);
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ["Karachi", "Swat", "Multan", "Dadu", "Balakot"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order after sorting:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order after reverse sorting:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order after double reversal:", places);
places.sort();
console.log("Sorted in alphabetical order:", places);
places.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", places);
// Question No 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
// ex 14
let guests5 = [
    "Arbaz butt", "Daniyal butt", "Taimoor butt"
];
guests5.forEach((person) => {
    console.log(`- ${person}`);
});
// ex 15
guests5.pop();
guests5.push("Shera");
let addedGuest = guests.forEach((person) => {
    console.log(`${person}`);
});
console.log(addedGuest);
// ex 16
console.log("I found a bigger dinning table...");
guests5.unshift("Noman");
guests5.push("Haris");
let middle_index5 = Math.floor(guests.length / 2);
guests.splice(middle_index5, 0, "Anwer");
console.log(guests5);
// ex 17
console.log("I can invite only two people for dinner.");
let last_guest5 = guests5.pop();
let secondlast_guest5 = guests5.pop();
let thirdlast_guest5 = guests5.pop();
let fourthlast_guest5 = guests5.pop();
console.log(`Dear ${last_guest5} sorry you are not invited to dinner.`);
console.log(`Dear ${secondlast_guest5} sorry you are not invited to dinner.`);
console.log(`Dear ${thirdlast_guest5} sorry you are not invited to dinner.`);
console.log(`Dear ${fourthlast_guest5} sorry you are not invited to dinner.`);
guests5.forEach((guest) => {
    console.log(`${guest} You're still invite`);
});
console.log(`We have only ${guests5.length} guests left`);
// According to program no 14, 15, 16 and 17 in program no 14 we invited 3 guest then in profram 15 we poped outlast guest and invited other guest then in ex 16 weinvited three more guest by placing them in the begining, middle and end of an array.In ex 17 we told them i can invite only two guests so we popped out last four guest from an array. So, technically we have only two guest left..
// And it is shown in the code above...
// Question No 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let things = ["mountains", "rivers", "cities"];
const listed = things.forEach((items) => {
});
for (let i = 1; i <= things.length; i++) {
    console.log(`${i}: ${things[i]}`);
}
// Question No 21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
const newObj = {
    "mountains": { color: "green", height: "26548ft" },
    "rivers": { country: "pakistan", city: "Jehlum" },
    "cities": { lon: 27.1524, lat: 65.3181 }
};
console.log(newObj);
console.log(typeof newObj);
// Question No 22
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let myArray = [100, true, "Noman"];
console.log(myArray[3]);
if (myArray.length >= 3) {
    console.log(`Yes array's length is ${myArray.length}`);
}
else {
    console.log("Array contains three elements");
}
// Question No 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let x = 5;
let y = 10;
console.log("Is x equal to 5? I predict True.");
console.log(x == 5);
console.log("Is y equal to 10? I predict True.");
console.log(y == 10);
console.log("Is x not equal to y? I predict True.");
console.log(x != y);
console.log("Is x less than y? I predict True.");
console.log(x < y);
console.log("Is x greater than y? I predict False.");
console.log(x > y);
console.log("Is x less than or equal to 5? I predict True.");
console.log(x <= 5);
console.log("Is y greater than or equal to 10? I predict True.");
console.log(y >= 10);
console.log("Is x equal to 9? I predict False.");
console.log(x == 9);
console.log("Is x cancel with '2'? I predict False.");
console.log(x % 2 == 0);
console.log("Is x not equal to 5? I predict False.");
console.log(x != 5);
// Question No 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let a = [1, 2, "Noman"];
let b = "hello";
let c = 1;
let d = 2;
let e = "hello";
console.log("Is b=e, I predict True");
console.log(b == e);
console.log("Is c less than or equal to d, I predict False");
console.log(c <= d);
console.log("Is b has a type string or a number, I predict True");
console.log(typeof b == "string" || "number");
// Question No 25 
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
console.log("-------------------------Game started!------------------------");
let alien_color = "red";
if (alien_color == "green") {
    console.log("You earned 5 points..");
}
else { }
console.log("------------------Game finished!------------------------");
// Question No 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
console.log("-------------------------Game started!------------------------");
let alien_color1 = "green";
if (alien_color1 == "green") {
    console.log("You earned 5 points for shooting the alien.");
}
else {
    console.log("You earned 10 points.");
}
console.log("------------------Game finished!------------------------");
console.log("-------------------------Game started!------------------------");
let alien_color2 = "red";
if (alien_color2 == "green") {
    console.log("You earned 5 points for shooting the alien.");
}
else {
    console.log("You earned 10 points.");
}
console.log("------------------Game finished!------------------------");
// Question No 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
let alien_color51 = "green";
if (alien_color51 == "green") {
    console.log("player earned 5 points.");
}
let alien_color52 = "yellow";
if (alien_color52 == "yellow") {
    console.log("player earned 10 points");
}
let alien_color3 = "red";
if (alien_color3 == "red") {
    console.log("player earned 15 points");
}
// Question No 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// • If the person is age 65 or older, print a message that the person is an elder.
let age = 42;
if (age < 2) {
    console.log("person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("person is a adult.");
}
else if (age >= 65) {
    console.log("person is an elder");
}
// Question No 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let Fav_fruits = ["apple", "orange", "grapes", "mango"];
if ("apple" in Fav_fruits) {
    console.log("You really like apple");
}
if ("banana" in Fav_fruits) {
    console.log("You really like banana");
}
if ("orange" in Fav_fruits) {
    console.log("You really like orange");
}
console.log(Fav_fruits);
// Question No 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
let usernames = ["admin", "noman", "haris", "anwer", "hassan"];
const login = (ans) => {
    console.log("-----------Enter 1 for login--------------------");
    if (ans !== 1) {
        console.log("You don't wont to login.");
    }
    else {
        console.log("You logged in.");
    }
};
usernames.forEach((greet) => {
    login(1);
    if (greet == "admin") {
        console.log(`Hello ${greet}, would you like to see the status. `);
    }
    else {
        console.log(`Hello ${greet}, thank you for logging in!`);
    }
});
// Question No 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed
let users = [];
console.log(`We have ${users.length} users.`);
if (users.length == 0) {
    console.log("We need to find some users!");
}
else {
    console.log("We have users!");
}
// Question No 32  
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["noman", "haris", "anwer", "hassan", "ahmed"];
let new_users = ["Noman", "Haris", "arsalan", "zahoor", "malhar"];
let lower_current_user = current_users.map((user) => user.toLowerCase());
let lower_new_user = new_users.map((user) => user.toLowerCase());
lower_new_user.forEach((user) => {
    if (lower_current_user.includes(user)) {
        console.log(`Sorry, the username '${user}' is not available. Please choose a different one.`);
    }
    else {
        console.log(`username ${user} is available.`);
    }
});
// Question No 33
// Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
let MyArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slicedArray1 = MyArray.slice(0, 3);
let slicedArray2 = MyArray.slice(0, 8);
console.log(`${slicedArray1[0]}st`);
console.log(`${slicedArray1[1]}nd`);
console.log(`${slicedArray1[2]}rd`);
for (let i = 3; i <= slicedArray2.length; i++) {
    console.log(`${MyArray[i]}th`);
}
// Question No 34
// Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
let pizza = ["tikka", "fajita", "pepporoni"];
for (let i = 0; i < pizza.length; i++) {
    console.log(`I like ${pizza[i]} pizza.`);
}
pizza.forEach((flavour) => {
    console.log(`The tantalizing fusion of smoky ${flavour} flavors with the comforting familiarity of pizza crust captivates my taste buds like nothing else. The sizzle of seasoned meats, the vibrant colors of peppers and onions, all harmonizing atop a bed of melted cheese, evoke a culinary symphony that I simply can't resist.\n`);
});
// Question No 35
// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = ["dog", "cat", "cow"];
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} would make a great pet.`);
}
console.log("What these animals have in common: ");
console.log("Any of these animals would make a great pet. ");
// Question No 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
const make_shirt = (size, message) => {
    return `-${message} should have written on ${size} size shirt.`;
};
console.log(make_shirt("Large", "THE BOYS"));
// Question No 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
const make_shirt0 = (size = "large", mesg = "I love TS") => {
    console.log(`write a ${mesg} on the ${size} size shirt.`);
};
make_shirt0();
const make_shirt1 = (size, mesg = "I love TS") => {
    console.log(`write a ${mesg} on the ${size} size shirt.`);
};
make_shirt1("large");
make_shirt1("medium");
const make_shirt2 = (mesg, size = "any") => {
    console.log(`write a ${mesg} on the ${size} size shirt.`);
};
make_shirt2("THE BOYS");
make_shirt2("Don't talk much show me the code...");
// Question No 38
// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
const describe_city = (city, country = "pakistan") => {
    console.log(`${city} is in ${country}.`);
};
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York");
// Question No 39
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
const city_country = (city, country) => {
    console.log(`${city}, ${country}`);
};
city_country("Karachi", "Paksitan");
city_country("Multan", "Paksitan");
city_country("Helsinki", "Finland");
const make_album = (artist_name, album_title, number_of_tracks) => {
    const Obj = {
        artist_name,
        album_title,
    };
    if (number_of_tracks !== undefined) {
        Obj.tracks = number_of_tracks;
    }
    return Obj;
};
console.log(make_album("Noman", "High like a kite", 32));
console.log(make_album("Haris", "Bye Bye Sun"));
// Question No 41
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = [];
const show_magicians = (magicians) => {
    magicians.forEach((names) => {
        console.log(`-${names}`);
    });
};
show_magicians(["Joe", "John", "Kinder", "Harvard"]);
// Question No 42
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
let magicians0 = [];
const show_magicians0 = (magicians) => {
    magicians0.forEach((names) => {
        console.log(`-${names}`);
    });
    const make_great0 = (magicians) => {
        magicians.forEach((name) => {
            console.log(`The Great ${name}.`);
        });
    };
    make_great0(["Joe", "John", "Harry"]);
};
show_magicians0(["Joe", "John", "Harry"]);
// Question No 44
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
const add_topping = (items) => {
    return `I need a sandwich which have ${items[0]} sauce on the top of the chicken, and have ${items[1]} sauce below the chicken.`;
};
console.log(add_topping(["Ketchup", "Chilli"]));
const car_info = (manufacturer, model, Hybrid, Seddan) => {
    const Car = {
        manufacturer,
        model,
    };
    if (Hybrid !== undefined) {
        Car.isHybrid = Hybrid;
    }
    if (Seddan !== undefined) {
        Car.isSeddan = Seddan;
    }
    return Car;
};
console.log(car_info("Tesla", "2022", true, false));
console.log(car_info("Buggati", "2022", false));
console.log(car_info("Toyota", "2024"));
