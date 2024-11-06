let numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]); // 3
console.log(numbers[20]); // Undefined

// adding element to the end of the array
numbers.push(6, 7);

// removing the last element of the array
numbers.pop();

const filteredArray = numbers.filter((n) => n % 2 === 0);
console.log(filteredArray);

const squaredNumbers = numbers.map((n) => n * n); // [1, 2, 3, 4, 5, 6]
console.log(squaredNumbers);

//numbers.forEach( num => console.log(num));

let fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(2, 0, "kiwi"); // used to add and remove

let indexOfBanana = fruits.lastIndexOf("banana");
fruits.splice(indexOfBanana, 1); // used to add and remove
console.log(fruits);

console.log("------------------");

const person = {
  name: "John",
  age: 30,
  isStudent: true,
  address: {
    city: "NY",
    country: "USA",
  },
};

console.log(person.name); // "John"
console.log(person.address.city); // "NY"
person.isStudent = false;
//person["isStudent"] = false;

const menus = [{ item: "Test" }, { item: "Test2" }];

let itemListElements = menus.map((element) => {
  let ilElement = "<il>" + element.item + "</il>";
  return ilElement;
});

console.log(itemListElements)
