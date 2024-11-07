// Excercise 1
/*
Write a JavaScript program to display the current day and time in the following
format.
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

// Get the current date and time.
function getCurrentDateTime() {
  // Create a new date object.
  const date = new Date();

  // Extract date compononents.
  const day = addLeadingZero(date.getDate());
  // +1 because getMonth() returns a zero-based index, in other words, January is 0.
  const month = addLeadingZero(date.getMonth() + 1);
  const year = date.getFullYear();

  return formats = {
    'mm-dd-yyyy': `${month}-${day}-${year}`,
    'mm/dd/yyyy': `${month}/${day}/${year}`,
    'dd-mm-yyyy': `${day}-${month}-${year}`,
    'dd/mm/yyyy': `${day}/${month}/${year}`
  }
}

// Add a leading zero to single digit numbers.
function addLeadingZero(num) {
  return num < 10 ? `0${num}` : num;
}

// Display dates in different formats.
function displayDates() {
  const formats = getCurrentDateTime();
  for (const format in formats) {
    console.log(formats[format]);
  }
}

displayDates();

// Excercise 2
/*
Write a JavaScript program to determine whether a given year is a leap year.
*/

function isLeapYear(year) {
  // A leap year is divisible by 4 and not divisible by 100, unless it is divisible by 400.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

console.log(isLeapYear(2020)); // true
console.log(isLeapYear(2025)); // false

// Excercise 3
/*
Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
*/

function findFirstJanSunday() {
  for (let year = 2014; year <= 2050; year++) {
    // Create a new date object, where the year is the current year and the month is January(0) and the day is 1.
    const date = new Date(year, 0, 1);
    // getDay() returns the day of the week, with 0 being Sunday.
    if (date.getDay() === 0) {
      console.log(`1st January ${year} is a Sunday.`);
    }
  }
}

findFirstJanSunday();

// Excercise 4
/*
Write a JavaScript program to calculate multiplication and division of two num-
bers (input from the user).
*/

function multiply() { 
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const result = num1 * num2;

  document.getElementById("result").innerHTML = "The result is: " + result;
}

function divide() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  if(num2 == 0) {
    document.getElementById("result").innerHTML = "Cannot divide by zero.";
    return;
  }
  const result = num1 / num2;

  document.getElementById("result").innerHTML = "The result is: " + result;
}


// Excercise 5
/* 
Write a JavaScript program to convert temperatures to and from Celsius, Fahr-
enheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = tempera-
ture in Fahrenheit ]
Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

function celsiusToFahrenheit(celsius) {
  return `${celsius}°C is ${(celsius * 9 / 5) + 32}°F`;
}

function fahrenheitToCelsius(fahrenheit) {
  return `${fahrenheit}°F is ${(fahrenheit - 32) * 5 / 9}°C`;
}
console.log(celsiusToFahrenheit(60)); // 60°C is 140°F
console.log(fahrenheitToCelsius(45)); // 45°F is 7.222222222222222°C

// Excercise 6
/*
Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.
*/

function removeCharacter(str, index) {
  return str.slice(0, index) + str.slice(index + 1);
}