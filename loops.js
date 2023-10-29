for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
  }
  
  let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}

let num = 0;
do {
  console.log("Number: " + num);
  num++;
} while (num < 5);

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
  };
  for (let key in person) {
    console.log(key + ": " + person[key]);
  }
  
  const colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log("Color: " + color);
}

const fruits = ["apple", "banana", "cherry"];
fruits.forEach(function (fruit) {
  console.log("Fruit: " + fruit);
});

