// Challenge 0
//
// Write a Challenge Banner printing function THAT'S A LITTLE DIFFERENT THAN BEFORE. This one will print out not only "Challenge n", where n is the number passed into it, but will also print n "#" characters to the left and n "#" to the right of the "Challenge n" text. You should also include a space between the "#" characters and the text.
//
// Call this function before each of the below challenges, passing in the number of the current challenge.
// 
//
function banner(n) {
  console.log("\n\n" + '#'.repeat(n) + " Challenge " + n + ' ' + '#'.repeat(n));
}
function printArray(array) {
  for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

// Challenge 1
//
// Loop through the following array, console.logging out each value.
banner(1);
const students = [
  'Bogdan',
  'Carlos',
  'David',
  'Denis',
  'Jumary',
  'Marc',
  'Deaundre',
  'LaToddra',
  'Michael',
  'Patrick',
  'Sharod',
  'Tyrell',
  'Wilson',
];
printArray(students);


// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be first and 100 last.
banner(2);
const grades = [100, 80, 110, 75, 83, 64];
for(let i = grades.length - 1; i >= 0; i--) {
  console.log(grades[i]);
}


// Challenge 3
// Console.log out only the even numbers in the following array.
banner(3);
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
for(let i = 0; i < positiveNumbers.length; i++) {
  if(positiveNumbers[i] % 2 === 0) {
    console.log(positiveNumbers[i]);
  }
}


// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four of them!
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];
banner(4);
for(let i = 0; i < mixedSignNumbers.length; i++) {
  if(mixedSignNumbers[i] % 2 === 0) {
    console.log(mixedSignNumbers[i]);
  }
}

// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, and then console.log out each value individually.
banner(5);
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
symmetricalCapitals.shift();
symmetricalCapitals.shift();
symmetricalCapitals.pop();
printArray(symmetricalCapitals);


// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end, and then console.log out each value individually.
banner(6);
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift(0);
fibonacciNumbers.push(42, 666);
printArray(fibonacciNumbers);


// Challenge 7
// Make a NEW array, putting 5 values of your choice, using the format for placing values in while declaring the variable (the same format as the previous 6 challenges), and then console.log out each value individually.
banner(7);
const chal7 = ["Scorpion", "Sub-Zero", "Reptile", "Smoke", "Noob Saibot"];
printArray(chal7);


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using .push and/or .unshift, and then console.log out each value individually.
banner(8);
const mk1Chars = [];
mk1Chars.push("Johnny Cage");
mk1Chars.push("Kano");
mk1Chars.push("Raiden");
mk1Chars.push("Liu Kang");
mk1Chars.push("Scorpion");
mk1Chars.push("Sub-Zero");
mk1Chars.push("Sonya");
mk1Chars.push("Goro");
mk1Chars.push("Shang Tsung");
mk1Chars.push("Reptile");
printArray(mk1Chars);

// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
banner(9);
for(let i = 3; i <= 10; i++) {
  console.log(students[i]);
}

// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally.
banner(10);
const c10 = [];
for(let i = 3; i <= 10; i++) {
  c10.push(students[i]);
}
printArray(c10);

// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy indivudally. THEN log out each value of the original array. Slice does NOT modify the original array.
banner(11);
const c11 = students.slice(3, 11);
printArray(c11);
console.log();
printArray(students);

// Challenge 12
// Pull the items at the 4th-6th indices (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the original array. .splice WILL change the original array.
banner(12);
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
dinosaurs.splice(4, 3);
printArray(dinosaurs);


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
banner(13);
console.log(dinosaurs.join('*'));

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
banner(14);
dinosaurs.reverse();
printArray(dinosaurs);


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make. Then console.log out each value of that new array individually. .concat does NOT mutate the original arrays.
banner(15);
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
const colors = primaries.concat(secondaries);
printArray(colors);