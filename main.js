//Object  => {} => {key: value} pair
// let user ={
//     firstName : 'asad',
//     lastName : 'Nadeem',
//     age : 33,
// };
// // console.log(user);
// let student3 = {
//     name: 'shahid',
//     surname: 'anwar',
// };
// let student4 = {
//     name: 'moin',
//     surname: 'tayyab',
// };
// interface student {
//     name: string;
//     surname: string;
//     classTime: string;
//     classDay: string;
//     rollNumber: number;
//     classPlace: string;
//     subjects: string[];
//     isStillStudent: boolean;
//     }
// let student = {
//     name: 'Asad',
//     surname: 'Nadeem',
//     classTime: '8am - 10am',
//     classDay: 'Tuesday',
//     rollNumber : 123,
//     classPlace: 'Governer House',
//     subjects: ['Typescript', 'Ai', 'Javascript'],
//     isStillStudent: true,
//     student2: {
//         name2: 'kashif',
//         surname2: 'Yameen',
//         classTime: '8am - 10am',
//         classDay: 'tuesday',
//         rollNumber: 3345,
//         classPlace: 'governer house',
//     },
// };
// console.log(student.student2);
// console.log(student);
// interface studentDetails {
//     name: string;
//     surName: string;
//     rollNumber: number;
//     class: string;
//     classTime: string;
// };
// type class1 = {
//     student1: studentDetails,
//     student2: studentDetails,
//     student3: studentDetails,
//     student4: studentDetails,
//     student5: studentDetails,
// };
// let class1: studentDetails[] = [
//      {
//         name: "asad",
//         surName: "Nadeem",
//         rollNumber: 123,
//         class: "it class",
//         classTime: "8am-10am",
//     },
//     {
//         name: "kashif",
//         surName: "Yameen",
//         rollNumber: 1234,
//         class: "it class",
//         classTime: "8am-10am",
//     },
//     {
//         name: "Asfar",
//         surName: "Nadeem",
//         rollNumber: 12345,
//         class: "it class",
//         classTime: "8am-10am",
//     },
//     {
//         name: "Kiran",
//         surName: "Nadeem",
//         rollNumber: 123456,
//         class: "it class",
//         classTime: "8am-10am",
//     },
//     {
//         name: "Neha",
//         surName: "Asad",
//         rollNumber: 1234567,
//         class: "it class",
//         classTime: "8am-10am",
//     },
// ];
// // console.log(class1);
// console.log(class1[2].classTime);
// let grocery = {
//     banana : "2 dozens",
//     grains : "2 kilos",
//     rice : "5 kilos",
//     juice : "2 bottles",9
// };
// console.log(grocery);
//class 26-3-2024 tuesday-_--------_---___
// let fruitName = "banana";
// console.log(fruitName);
// function logFruitName() {
//     let fruitName = "mango";
//     console.log(fruitName)
// }
// logFruitName()          // calling statement
// let carName = "toyota";
// function logCarName () {
//     console.log(carName);
// }
// logCarName()
// function asad(){
//     let mYname = "asad";
//     let mYage = 33;
//     console.log(`${mYname} \n ${mYage}`)
// }
// function object(){
//     let student = {
//         name : "asad",
//         Class : "it class",
//         age : 33,
//         timing : "8am-10am",
//         location : "governor house",
//     };
// console.log(student.name);
// console.log(student.timing);
// }
// function array(){
//     let guestList: string[] = ["asad", "Nadeem", "Iqbal"];
//     console.log(guestList[1].toLocaleUpperCase());
//     guestList.forEach(list => console.log(list.toLowerCase()));
// }
// asad()
// object()
// array()
// function namesOfsample(fruitName, carName, myName, surName, age){
//     console.log(fruitName,carName,myName,surName,age);
// }
// namesOfsample("Mango", "toyota", "Asad", "Nadeem", 25)
// function fullFry(salt, butter, egg){
//     console.log(salt + butter + egg)
// }
// let order=fullFry(2,1.5,2)
// console.log(order)
// class 16 april 2024..........
//  function  converttouppercase(aPple, glass, bREad,) {
//  }
//  function converter(data: string) {
//     const stringInUpperCase = data.toUpperCase();
//     console.log(stringInUpperCase);
//     const stringInLowerCase = data.toLowerCase();
//     console.log(stringInLowerCase);
//  }
//  converter("\n aPPle");
// function amountList(){
//     let thingList = {
//         100 : "abcd",
//         150 : "efgh",
//     };
//     console.log(thingList[100]);
//     console.log(thingList[150]);
// }
// amountList();
// let items = {
//     100: "6 Eggs",
//     200: "Bread",
//     300: "Milk",
// }
// function buyItem(amount : number): string{
//     const itemName = items[amount];
//     return itemName;
// }
// const item = buyItem;
// console.log(buyItem(100));
//class 7-may-2024
// let myPercentage: number = 85
// let myGrade: string = "Your grade is A+";
// if (myPercentage >= 85) {console.log(myGrade)}
// let myPercentage = 35;
// let myGrade = "";
// if (myPercentage > 36) {
//   myGrade = "pass";
// } else {
//   myGrade = "fail";
// }
// console.log(myGrade);
//  let names : string[] = ["asd", "dfdg", "sfds",];
//  let nums : number[] = [1,2,3,4,5,6];
//  let bool : boolean[]= [true, false];
//  function isNameExist<rt>(item: rt, list: rt[]): boolean{
//     return list.includes(item);
//  }
//  console.log(isNameExist("asd", names));
//  console.log(isNameExist(3,nums));
//  console.log(isNameExist(true,bool));
// let veg : string[] = ["Tomato", "carrot", "Onion", "Potato"];
// let fruit :string[] = ["Mango", "Banana", "Watermelon", "Kiwi"];
// let quantity : number[] = [11, 22, 33, 44, 55, 66, 77, 88];
// let bool : boolean[] = [true, false];
// function isExist<w>(item: w, list: w[]){
//     return list.includes(item);
// }
// console.log(isExist<number>(45,quantity));
// console.log(isExist<boolean>(false,bool));
// console.log(isExist<string>("carrot", fruit));
// let names: string[] = ["asad", "Nadeem", "Iqbal"];
// function nameExist(item: string, list: string[]){
//     return list.includes(item);
// }
// console.log(nameExist("nadeem", names));
// console.log(nameExist("Nadeem", names));
// console.log(nameExist("Iqbal", names));
// console.log(nameExist("asad", names));
// console.log(nameExist("Asad",names));
// let nums : number[] = [1,2,3,4,5,6,7,8,9,10];
// function nums1(item: number){
//     return nums.includes(item)
// }
// console.log(nums1(3));
// let fav_fruits : string[] = ["mango", "banana", "strawberry"];
// if (fav_fruits.includes("banana")){
//     console.log("\nYou really like Bananas");
// };
// if (fav_fruits.includes("watermelon")){
//     console.log("\nYou really like Watermelon");
// };
// if (fav_fruits.includes("mango")){
//     console.log("\nYou really like Mango");
// };
// if (fav_fruits.includes("kiwi")){
//     console.log("\nYou really like Kiwi");
// };
// if (fav_fruits.includes("strawberry")){
//     console.log("\nYou really like Strawberry");
// };
// Class 14-5-2024----
// var a= 10;
// function getvalue() {
//     var a= 100;
//     if (true){
//         var a = 200;
//         console.log(a);
//     }
// };
// getvalue();
// const confirm = 10;
// console.log(confirm);
// const confirm = 100
// let petdog = {
//     name: "dog",
//     color: "brown",
//     legsCount: 4,
//     tail: true
// };
// let petcat = {
//     name: "cat",
//     color: "white",
//     legsCount: 4,
//     tail: true
// };
// interface pets{
//     name: string,
//     color: string,
//     legsCount: number,
//     tail: boolean
// };
// function petFactory(name: string, color: string, legsCount: number, tail:boolean): pets{
//     return {
//         name: name,
//         color: color,
//         legsCount: legsCount,
//         tail: tail,
//     }
// };
// const petCat = petFactory("cat", "white", 4, true);
// const petDog = petFactory("dog", "black", 4, false);
// console.log(petCat, petDog);
// interface family{
//     name: string,
//     surname: string,
//     number: number,
//     member: boolean,
// };
// function familyTree(name: string, surname: string, number: number, member: boolean): family {
//     return {
//         name,
//         surname,
//         number,
//         member
//     }
// };
// const asad = familyTree("asad", "Nadeem", .0304, true);
// const shahid = familyTree("shahid", "anwar", .0303, false);
// console.log (shahid , asad);
// LOOP DEFINATION:::
// for(initialization; condition; updation){
//     console.log("statement");
// }
// for (let i=1; i <= 10; i++){
//     console.log("statement", i);
// };
// let studets:string[] = ["asad", "kashif", "muniza", "annie"];
// console.log(studets.forEach(list => console.log(list)));
// for(let i = 0; i < studets.length; i++) {
//     console.log(studets[i]);
// };
// Map method
// map()
// let num:number[] = [1,2,3,4,5,6,7,8];
// let box = num.map(function (value,index){
//     return value * 2
// });
// console.log(box);
// let fruitNames :string[] = ["Apple", "Banana", "Melon", "strawberry", "kiwi"];
// let fruit = fruitNames.map(function (value, index){
//     return value + index
// })
// console.log(fruit);
// let ageOfUser: number | string | boolean = 8;
// console.log("08");
// if (ageOfUser < 10) {
//     ageOfUser = `0${ageOfUser}`;
// }
// console.log(ageOfUser);
// let randomNum = Math.floor(Math.random() * 10  + 1 )
// console.log(randomNum)
// let normalVar : number | string = randomNum > 5 ? "Asad" : 3
// // console.log(typeof normalVar) // string
// // normalVar = 10;
// // console.log(typeof normalVar) // number
// if(typeof normalVar == "string"){
//     console.log(normalVar);
//     console.log(normalVar.toUpperCase())
// } else if(normalVar < 5) {
//         console.log(`0${normalVar}`)
// }
// console.log(normalVar.toUpperCase());
// import inquirer from "inquirer";
// import chalk from "chalk";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter your Age:"}
// ]);
// console.log(chalk.redBright("Insha Allah, in " + chalk.bgYellow.blue((60 - answers.age)) + " years you will be 60 years old."));
// enum asad{
//     name = "asad",
//     surName = "Nadeem"
// }
// let myName : asad =asad.name
// let mySurName : asad = asad.surName
// console.log(myName, mySurName)
// const enum LogLevel {
//     ERROR,
//     WARN,
//     INFO,
//     DEBUG
// }
//  const enum trafficSignal {
//     RED = "RED",
//     GREEN = "GREEN",
//     YELLOW = "YELLOW"
//  }
//  type  trafficSignalType = keyof typeof trafficSignal;
let ourTuple;
ourTuple = ["asad", false, 45];
console.log(ourTuple);
ourTuple.push("nadeem");
console.log(ourTuple);
export {};
