//let fullName = 'Rasul Ibrahimli Adil'

// 1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// function sayHello() {
// console.log(fullName.split(''))
// }
// sayHello()

// 2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin

// function sayHello() {
// console.log(fullName.slice(6,15), fullName.slice(0,5), fullName.slice(16))
// }
// sayHello()

// 3) Alinan yeni arrayi stringe cevirin(join)
//console.log(fullName.split('').join(''));

// function sayHello() {
// let splittedName = fullName.split(' ');
// console.log(splittedName); 
// let newFullName = splittedName[1] + ' ' + splittedName[0] + ' ' + splittedName[2];
// console.log(newFullName); 
// }
// sayHello();

//let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]


//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
// for (let i = 0 ;i < arr.length ; i ++) {
//   if (arr[i]==5)
//   {
//     console.log(arr[i])
//   }
// }


// function sayHello() {
// let a = 0 
// for (let i = 0; i <arr.length; i++) {
//     if (arr[i] === 5) {
//         a++
//     }
// }
// console.log(a)
// }
// sayHello();
 
//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
// let sum = 0
// for (let i=0; i<arr.length; i++){
//     sum+=arr[i]
// } console.log(sum);

// function sayHello() {
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)
// }


//6) arrayda tekrar olunan reqemleri artan sira ile duzun
// arr.sort()
// console.log(arr);

// function sayHello() {
// arr.sort()
// console.log(arr)}

// sayHello();

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
// let maxNumber=arr[0]
// for (let i = 0; i< arr.length; i++)
// if (maxNumber < arr[i]){
//     maxNumber=arr[i]
// }
// let count=0
// for(let i=0; i< arr.length; i++){
//     if(maxNumber===arr[i])
//     {
//         count++
//     }
// }
// console.log(maxNumber + " in tekrarlandigi say " + count);


// function sayHello() {
// console.log(Math.max(...arr))
// }

// sayHello();

//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
// let namee = "rasul"
// let say = namee.length
// console.log(arr.includes(say));

// function sayHello() {
// let myName= "Macid"
// let myNamelengthYes = "Yes"
// for(let i=0; i<arr.length; i++){
//       if(myName.length === arr[i]){
//         myNamelengthYes = "true"
//       }
// }
// console.log("Var?    :" , myNamelengthYes)
// }

// sayHello();


//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
// for(let i =0; i< arr.length;i++){
//     if(arr[i] % 3 ===2){
//         console.log("reqem :" + arr[i] + " , indexi: " + i);
//         break
//     }
// }

// let sayHello = function() {
// for(let i=0; i<arr.length; i++){
//     if (arr[i] % 3 === 2) {
//         console.log("Bu eded:",arr[i], " ", "Bu index:", i);
//         break;
//       }
// }
// }

// sayHello();

//10) arraydaki en boyuk reqemin ilk indexini tapin
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === Math.max(...arr)) {
//         console.log(i)
//         break;
//     }
// }


// let sayHello = function() {
// for(let i=0; i<arr.length; i++){
//     if (arr[i] === Math.max(...arr)) {
//         console.log(i)
//         break;
//     }
// }
// }
// sayHello();

 //11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
// for (let i = 0; i > arr.length; i++) {
//   if (arr[i] == 4) {
//     console.log(arr.lastIndexOf(arr[i], i));
//   }
// }

// let sayHello = function() {
// for(let i=0; i < arr.length; i++){
//      if (arr[i] === 4) {
//          console.log(i)
//      }
// }
// }
// sayHello();

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin

// let indexMaxMin = [];
// for (let i=0; i < arr.length; i++) {
//       if (arr[i] === 5) {
//           indexMaxMin.push(i);

//       }
    
// }
// console.log(indexMaxMin);
// console.log( "Minimum Indexi:",Math.min(...indexMaxMin) + " " +  "Maksimum indexi: ", Math.max(...indexMaxMin));


// let saybye = function() {

// let indexMaxMin = [];
// for (let i=0; i < arr.length; i++) {
//       if (arr[i] === 5) {
//           indexMaxMin.push(i);

//       }
    
// }
// console.log(indexMaxMin);
// console.log( "Minimum Indexi:",Math.min(...indexMaxMin) + " " +  "Maksimum indexi: ", Math.max(...indexMaxMin));
// }
// saybye();

//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
// newArr = [];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > 2) {
//         newArr.push(arr[i])
//     }
// }
// console.log(arr.length - newArr.length)

// let saybye = function() {
// newArr = [];
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > 2) {
//         newArr.push(arr[i])
//     }
// }
// console.log(arr.length - newArr.length)
// }

// saybye();


//14) 7 reqeminin indexleri cemini tapin.
// cem = 0;
// for(let i = 0; i <  arr.length; i++) {

//     if (arr[i] === 7) {
//         cem = cem + arr[i];
//     }
// }
// console.log(cem)

// let saybye = function() {
// cem = 0;
// for(let i = 0; i <  arr.length; i++) {

//     if (arr[i] === 7) {
//         cem = cem + arr[i];
//     }
// }
// console.log(cem)}

// saybye();

// let arr2 = [
//     {
//         name: 'test',
//         key: 1
//     },
//     {
//         name: 'task',
//         key: 2
//     },
//     {
//         name: 'tanqo',
//         key: 3
//     },
//     {
//         name: 'like',
//         key: 4
//     },
//     {
//         name: 'task',
//         key: 5
//     },
//     {
//         name: 'trust',
//         key: 6
//     },
//     {
//         name: 'test',
//         key: 7
//     },
//     {
//         name: 'last',
//         key: 8
//     },
//     {
//         name: 'tanqo',
//         key: 9
//     },
//     {
//         name: 'elephant',
//         key: 10
//     },
//     {
//         name: 'love',
//         key: 11
//     },
//     {
//         name: 'small',
//         key: 12
//     },
//     {
//         name: 'little',
//         key: 13
//     },
// ]

//Aşağıdakı hər bir taskı function icərisində yazın.

//QEYD Bu tasklarda arr2 istifade edilecekdir

//16) arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
// let newarr = [];

// for (i = 0; i < arr2.length; i++) {
//     if(arr2[i].name.slice(0,1) === 't') {
//         newarr.push(arr2[i])
//     } 
// }
// console.log(newarr)


// let saybye = function() {
// let newarr = [];

// for (i = 0; i < arr2.length; i++) {
//     if(arr2[i].name.slice(0,1) === 't') {
//         newarr.push(arr2[i])
//     } 
// }
// console.log(newarr)}

// saybye();



//17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin


// for(i = 0; i < arr2.length; i++){
//     let soz=0
//     soz == arr2[i].name.length - 1
//         if (arr2[i].name.slice(0,1) === 't' &&  arr2[i].name.slice(soz-1) === 't')
//         { 
//             console.log(arr2[i].name)
//         } 
// }


// let sayHello = () => {
// for(i = 0; i < arr2.length; i++){
//     let wordl=0
//     wordl == arr2[i].name.length - 1
//         if (arr2[i].name.slice(0,1) === 't' &&  arr2[i].name.slice(wordl-1) === 't')
//         { 
//             console.log(arr2[i].name)
//         } 
// }}

// sayHello()



//18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// keysum = 0
// for(i = 0; i < arr2.length; i++){
//         let soz=0
//         soz == arr2[i].name.length - 1
//             if (arr2[i].name.slice(0,1) === 't' &&  arr2[i].name.slice(soz-1) === 't')
//             { 
//                 console.log(arr2[i].name)
//                 keysum = keysum + arr2[i].key
//             } 
//     }
//     console.log(keysum)


// let sayHello = () =>{
// keycem = 0
// for(i = 0; i < arr2.length; i++){
//         let wordl=0
//         wordl == arr2[i].name.length - 1
//             if (arr2[i].name.slice(0,1) === 't' &&  arr2[i].name.slice(wordl-1) === 't')
//             { 
//                 console.log(arr2[i].name)
//                 keycem = keycem + arr2[i].key
//             } 
//     }
//     console.log(keycem)}
// sayHello();

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// for(i = 0; i < arr2.length; i++){
//             let soz=0
//             soz == arr2[i].name.length - 1
//                 if (arr2[i].name.slice(soz-1) === 'e')
//                 { 
//                     arr2[i].name = "SuperDev"
//                 } 
//         }
// console.log(arr2)


// let sayHello = () =>{
// for(i = 0; i < arr2.length; i++){
//             let wordl=0
//             wordl == arr2[i].name.length - 1
//                 if (arr2[i].name.slice(wordl-1) === 'e')
//                 { 
//                     arr2[i].name = "SuperDev"
//                 } 
//         }
// console.log(arr2)}

// sayHello();


// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
//? function keyi(arr2) {
//?   const enUzunOlan = arr2.reduce((longest, obj) => obj.name.length > longest.name.length ? obj : longest);
//?   return enUzunOlan.key;
//? }
//? console.log(keyi(arr2));

// let sayHello = () =>{
// for(i = 0; i < arr2.length; i++){

//                 if (arr2[i].name.length == 8)
//                 { 
//                     console.log(arr2[i].key)
//                 } 
//         }
//     }
    
// sayHello();

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
//? function square(arr2) {
// ?  const index = arr2.findIndex(obj => obj.name.length === Math.max(...arr2.map(o => o.name.length)));
//?   return index ** 2;
//? }
// ?console.log(square(arr2));

// let sayHello = () =>{
// for(i = 0; i < arr2.length; i++){

//                 if (arr2[i].name.length == 8)
//                 { 
//                     console.log(i);
//                 } 
                
//          }
//     }
// sayHello();



// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
//? function uzdord(arr2) {
// ?  return arr2.filter(obj => obj.name.length === 4);
//? }
//? console.log(uzdord(arr2));

// let sayHello = () =>{
// let newrrr = []
// for(i = 0; i < arr2.length; i++){

//                     if (arr2[i].name.length == 4)
//                     { 
//                         newrrr.push(arr2[i])
//                     } 
                    
//              }
// console.log(newrrr)}

// sayHello();

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
//? let maxKeyIndex = arr2.reduce((maxIndex, currentObj, currentIndex, array) => {
//?     return currentObj.key > array[maxIndex].key ? currentIndex : maxIndex;
//? }, 0);


//? let maxKeyName = arr2[maxKeyIndex].name;

//? console.log("En boyuk key:", maxKeyName);

// let sayHello = () =>{
//  for(i = 0; i < arr2.length; i++){

//                     if (arr2[i].key == 13)
//                     { 
//                         console.log(arr2[i].name)
//                     }    
// }}

// sayHello();

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
//? let indl = arr2.reduce((indexes, currentObj, currentIndex) => {
// ?    if (currentObj.name.includes('ll')) {
// ?        indexes.push(currentIndex);
// ?    }
// ?    return indexes;
//? }, []);
//? console.log("terkibinde 2 l herfi olan indexler", indl);

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
//? let indt = arr2.reduce((keys, currentObj) => {
// ?    if ((currentObj.name.match(/t/g) || []).length >= 2) {
// ?        keys.push(currentObj.key);
// ?    }
// ?    return keys;
//? }, []);

//? console.log("terkibinde 2 t herfi olan indexler:", indt);