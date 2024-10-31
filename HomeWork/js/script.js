// --1--
// const studentInfo = {
//   logInfo: function (missed) {
//     console.group(`${this.name} info:`);
//     console.log(`Name is: ${this.name}`);
//     console.log(`Speciality is: ${this.spec}`);
//     console.log(`Average score is: ${this.score}`);
//     console.log(`Missed classes: ${missed}`);
//     console.groupEnd();
//   },
// };

// const student1 = {
//   name: "Anna",
//   spec: "economics",
//   score: 10,
//   // missed: 2,
// };

// const student2 = {
//   name: "Alex",
//   spec: "management",
//   score: 11,
//   // missed: 4,
// };

// const student3 = {
//   name: "Olga",
//   spec: "accounting",
//   score: 12,
//   // missed: 0,
// };

// studentInfo.logInfo.call(student1, "2");
// studentInfo.logInfo.call(student2, "4");
// studentInfo.logInfo.call(student3, "0");

// studentInfo.logInfo.bind(student1, "2")();
// studentInfo.logInfo.bind(student2, "4")();
// studentInfo.logInfo.bind(student3, "0")();

// studentInfo.logInfo.apply(student1, ["2"]);
// studentInfo.logInfo.apply(student2, ["4"]);
// studentInfo.logInfo.apply(student3, ["0"]);

// --2--

// const definition = {
//   showDef() {
//     alert(`${this.description}`);
//   },
// };

// const html = {
//   description: "Hypertext Markup Language",
// };

// const css = {
//   description: "Cascading Style Sheets",
// };

// document
//   .querySelector("#html")
//   .addEventListener("click", definition.showDef.bind(html));

// document
//   .querySelector("#css")
//   .addEventListener("click", definition.showDef.bind(css));

// --3--

// const shop = {
//   itemInfo() {
//     console.log(`${this.name} - ${this.price}$/kg`);
//   },
// };

// item1 = {
//   name: "banana",
//   price: "30",
//   amount: "4,5",
// };

// item2 = {
//   name: "cherry",
//   price: "58",
//   amount: "1,3",
// };

// item3 = {
//   name: "orange",
//   price: "89",
//   amount: "3,4",
// };

// const enterName = prompt("Enter the product name");
// if (enterName == "banana") {
//   shop.itemInfo.call(item1);
// } else if (enterName == "cherry") {
//   shop.itemInfo.call(item2);
// } else if (enterName == "orange") {
//   shop.itemInfo.call(item3);
// } else {
//   alert("Wrong name!");
// }

// https://uk.javascript.info/object-methods#lancyug-viklikiv

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this; // - повертає об'єкт, ��об можна застосувати декілька методів послідовно
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // показує поточний крок
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // покаже 1, потім 0
