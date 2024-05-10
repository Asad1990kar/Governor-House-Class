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
let names = ["asad", "Nadeem", "Iqbal"];
function nameExist(item, list) {
    return list.includes(item);
}
console.log(nameExist("nadeem", names));
console.log(nameExist("Nadeem", names));
console.log(nameExist("Iqbal", names));
console.log(nameExist("asad", names));
console.log(nameExist("Asad", names));
export {};
