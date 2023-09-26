const input = require('readline-sync');

// Part A: #1 Populate these arrays

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];


  /// Part A #2: Write a ``for`` loop inside this function
  /// Code your solution for part A #2 below this comment (and above the return statement) ... ///
  for (let x = 0; x < numMeals; x++) { //packs a completed meal into the meals array
    let onevalueMeal = [];
    for (let y = 0; y < pantry.length; y++) { //creates an individual meal
      onevalueMeal.push(pantry[y][x]);
    }
    meals.push(onevalueMeal);
  }

  return meals;
}

function askForNumber() {
  numMeals = Number(question("How many meals would you like to make?  Enter a number from 1 to 6: "));

  /// CODE YOUR SOLUTION TO PART B here ///

  while (numMeals < 1 || numMeals > 6 || isNaN(numMeals)) {
    numMeals = Number(question("Invalid Entry!  Please try again."));
  }
  console.log("You got it!");
  return numMeals;
}


function generatePassword(string1, string2) {
  let longerString;
  let shorterString;

  if (string1.length > string2.length) {
    longerString = string1;
    shorterString = string2;
  } else {
    longerString = string2;
    shorterString = string1;
  }

  let code = '';

  /// Code your Bonus Mission Solution here ///
  for (let x = 0; x < longerString.length; x++) {
    if (shorterString[x] === undefined) {
      code += longerString[x];
    } else {
      code += longerString[x] + shorterString[x];
    }
  }
  return code;

}

function runProgram() {

  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///

  //let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 1);
  //console.log(meals)


  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///

  let mealsForZ = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForZ);

  /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  let password1 = 'BobaTea*';
  let password2 = 'SpringRoll';
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password2, password1)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram,

};
