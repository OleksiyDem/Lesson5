//замикання

// function createNewSum(n) {
//   return function () {
//     console.log(10 * n);
//   };
// }

// const calc = createNewSum(5);
// calc(); //50

// function createNewNumber(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addFive = createNewNumber(5);

// console.log(addFive(10)); //15

// function createUrl(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = createUrl("com");
// const comUa = createUrl("ua");

// console.log(comUrl("google")); //https://google.com
// console.log(comUrl("fb")); //https://fb.com

// console.log(comUa("google")); //https://google.ua
// console.log(comUa("fb")); //https://fb.ua

//_________________________//
//_________________________//
//this

// function hello() {
//   console.log("hello");
// }

// hello();

// const user = {
//   name: "Ivan",
//   city: "Odesa",
//   sayHello: hello,
// };

// user.sayHello();

//-----

// function abc() {
//   console.log("В функції"); // В функції
//   console.log(this); // <p>Ann</p>
// }

// abc();

// document.querySelector("p").onclick = abc; // знаходить першу "p" в index.html та по кліку викликає функцію abc

// function changeColor() {
//   console.log(this);
//   this.style.background = "green";
// }
// document.querySelector("div").onclick = changeColor;

// function changeColor() {
//   this.style.background = "green";
// }

// let user = document.querySelectorAll("div"); // переберає усі "div"

// user.forEach(function (element) {
//   element.onclick = changeColor;
// });

//-----------

// const showList = () => {
//   console.log(this);
// };

// showList();

// const list = {
//   names: ["Ann", "Olga", "Nata"],
//   showList: showList,
// };

// list.showList(); // показує не об'єкт, а window тому що у стрілочної функції немає this

//========= bind - метод прив'язує потрібний контекст

// function hello() {
//   console.log(this);
// }

// const user = {
//   name: "Ivan",
//   age: 30,
//   hello: hello,
//   sayHelloWindow: hello.bind(window),
//   info: function (city) {
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`City is ${city}`);
//   },
// };

// user.hello();
// user.sayHelloWindow();
// user.info();

// const Ann = {
//   name: "Ann",
//   age: 23,
// };

// const Nata = {
//   name: "Natalia",
//   age: 50,
// };

// user.info.bind(Ann)("Kyiv");
// user.info.bind(Nata, "Odessa")();
// // ===== або
// const nataInfo = user.info.bind(Nata, "Odesa");
// nataInfo();

//========= call

// const userInfo = {
//   name: "name",
//   age: 98,
//   logInfo: function (job) {
//     console.group(`${name} info:`); // - групує консол логи
//     console.log(`Name is: ${this.name}`);
//     console.log(`Age is: ${this.age}`);
//     console.log(`Job is: ${job}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: "45",
// };

// // userInfo.logInfo();
// userInfo.logInfo.call(Vano, "developer"); // як bind знаходить контент і ще викликає функцію

//=========== apply

// const showUserInfo = {
//   name: name,
//   age: 87,
//   logInfo: function (job, city) {
//     console.group(`${name} info:`); // - групує консол логи
//     console.log(`Name is: ${this.name}`);
//     console.log(`Age is: ${this.age}`);
//     console.log(`Job is: ${job}`);
//     console.log(`City is: ${city}`);
//     console.groupEnd();
//   },
// };

// const Vano = {
//   name: "Ivan",
//   age: "45",
// };
// showUserInfo.logInfo.apply(Vano, ["developer", "Lviv"]); // додаткові аргументи мають передаватися як масив

///////////////////////////////////
///////////////////////////////////

// const message = function (name, stars) {
//   console.log(`${name}, Welcome to ${this.hotel}, stars ${stars}`);
// };
// const Bukovel = { hotel: "Bukovel" };
// const Turist = { hotel: "Turist" };
// message.call(Bukovel, "Ivan", "5");
// message.call(Turist, "Ivan", "3");

// message.apply(Bukovel, ["Ivan", "5"]);
// message.apply(Turist, ["Ivan", "3"]);

// message.bind(Bukovel, "Ivan", "5")();
// message.bind(Turist, "Ivan", "3")();

////////

// const cart = {
//   showItems() {
//     console.log("В корзині: ", this.items);
//     alert(`В корзині: ${this.items}`);
//   },
// };

// const woman = {
//   items: ["Сукня, туфлі"],
// };

// const man = {
//   items: ["Костюм, рубашка"],
// };

// const child = {
//   items: ["майка, шорти"],
// };

// cart.showItems.bind(man)();

// document
//   .querySelector("#wom")
//   .addEventListener("click", cart.showItems.bind(woman)); // () не ставимо, бо функція викликається по кліку

// document
//   .querySelector("#man")
//   .addEventListener("click", cart.showItems.bind(man));

// document
//   .querySelector("#kid")
//   .addEventListener("click", cart.showItems.bind(child));

// ////

// const infoCar = {
//   name: "BMW",
//   model: "M7",
//   color: "white",
//   showInfo: function () {
//     console.log(
//       "Car: " + this.name + " model: " + this.model + " color: " + this.color
//     );
//   },
// };

// car2 = {
//   name: "Opel",
//   model: "Vectra",
//   color: "red",
// };

// infoCar.showInfo.bind(car2)();
// infoCar.showInfo.call(car2);
// infoCar.showInfo.apply(car2);
