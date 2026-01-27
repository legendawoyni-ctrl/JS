
// const son111 = 10;
// const son222 = 5;
// const arifmetikAmal = "+"
// let matija;

// switch ( arifmetikAmal ) {
//     case "+":
//         natija77 = son111 + son222
//         break;
//     case "-":
//         natija77 = son111 - son222  
//         break;
//     case "/":
//         natija77 = son111 / son222
//         break;
//     case "*":
//         natija77 = son111 * son222 
//         break;      
// }
// console.log (natija77)

// const kun = 4;
// let output;
// switch (kun) {
//  case 1:
//  output = 'dushanba';
//  break;
//  case 2:
//  output = 'Seshanba';
//  break;
//   case 3:
//  output = 'Chorshanba';
//  break;
//   case 4:
//  output = 'Payshanba';
//  break;
//  case 5:
//  output = 'Juma';
//  break;
//  case 6:
//  output = 'Shanba';
//  break;
//  case 7:
//  output = 'Yakshanba';
//  break;
//   default:
//  output = 'topilmadi';
//  break;
// }
// console.log(`Kun: ${output}`);

// for (let i = 0; i <= 20; i++) {
//  if (i % 2 == 0)
//  console.log(i);
// }


// let i = 0;
// while (i < 10) {
// i++;
// console.log(i);
// }

// let i = 10;
// while (i => 0) {
// i--;
// console.log(i);
// }

// let ik = 0; 
// while (ik <= 20) {
// if (ik % 2 == 0)
//  console.log(ik);
// ik++;
// }

// let i = 5;
// do {
// console.log(i);
// i--;
// } while (i >= 0)

// for (let i = 1; i <= 5; i++) {
//   let qator = "";
//   for (let k = 0; k < i; k++) {
//     qator += "*";
//   }
//   console.log(qator);
// }

// const kalkulator = (son1, son2, amal) => {
//   let natija;
//   switch (amal) {
//     case "+": 
//       natija = son1 + son2;
//       break;
//     case "-":
//       natija = son1 - son2;
//       break;    
//     case "*":
//       natija = son1 * son2;
//       break;  
//     case "/":
//       natija = son1 / son2;
//       break;  
//     default:
//       natija = "Noto'g'ri amal kiritildi";
//   }
//   return natija;
// };
// console.log(kalkulator(10, 5, "+"));
// console.log(kalkulator(10, 5, "-"));
// console.log(kalkulator(10, 5, "*"));
// console.log(kalkulator(10, 5, "/"));

// function baholash(ball){
//   let baho;
//   if( ball >= 95 ) {
//       baho = "A'lo";
//   } else if (ball >=70){
//       baho = "Qoniqarli";
//   }
//   else if (ball <= 45){
//       baho = "Yomon"
//   } else if (ball <= 10){
//       baho = "Juda yomon"
//   }
 
//   return baho;
// }

// console.log(baholash(95));
// console.log(baholash(72));
// console.log(baholash(10));

// function juftVatoqson(son){
//   if(son % 2 == 0){
//     console.log("Juft son");
//   } else {
//     console.log("Toq son");
//   }
// }
// juftVatoqson(2);
// juftVatoqson(5);

// function EngKattasi(a,b,c) {
// let maksimum = a;
//  if (b > maksimum) {
//   maksimum = b;
//  }
// if (c > maksimum) {
//   maksimum = c;
// }
// console.log ("Eng kotta son",maksimum)
// }
// EngKattasi(3,7,9);
// EngKattasi(8,3,5);

// let sonlar = [10,20,30];

// sonlar.push(40);
// console.log(sonlar);

// sonlar.unshift(5);
// console.log(sonlar)

// sonlar.pop();
// console.log(sonlar);

// sonlar.shift();
// console.log(sonlar);

// Quyidagi massivga "Anor" va "Nok" mevalarini oxiriga qo'shing. 
// let mevalar = ["Olma", "Banan", "Uzum"];
// mevalar.push("Anor","Nok");
// console.log(mevalar);
// // Quyidagi massivdan oxirgi 2 ta elementni olib tashlang va ularni konsolga chiqaring. 
// let sonlar = [10, 20, 30, 40, 50];

// let ohiri1 = sonlar.pop();
// let ohiri2 = sonlar.pop(); n

// console.log(ohiri2, ohiri1); 
// console.log(sonlar);       

// // Array ichidagi fagat juft sonlarni chiqarish kerak. 
// let numbers = [5, 12, 8, 17, 4, 21, 16, 9];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {
//     console.log(numbers[i]);
//   }
// }

// // Array nechta manfiy son borligini aniqlab chiqar. 
// let arr1 = [3, -5, 8, -2, 0, -9, 4, -1];

// let count = 0;
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] < 0) {
//     count++;
//   }
// }
// console.log(count);

// let texnologiyalar = ["HTML","JavaScript","Python","Java","CSS","React"];
// let kesim1 = texnologiyalar.slice(1, 4);
// console.log(kesim1);
// // console.log(texnologiyalar)


// let fanlar =["Ona T","Matem","Tarix","Ingliz",];
// let ozgartir = fanlar.splice(1,1, "Informatika");
// console.log(ozgartir);
// console.log(fanlar); 


// let Ranglar =["Qizil","Yashil","Kok","Sariq","Oq","Olma","Shaftoli",]
// let fruit = Ranglar.slice(5);
// console.log(fruit)



// let mevalar11 = ["HTML","CSS","JS","PYTHON","JAVA"];
// let tanlangan2 = mevalar11.splice(2,1, "TypeScript");
// console.log(tanlangan2); 
// console.log(mevalar11)


// let Ballar =[75,85,90,60,80,95];
// let kattalar = Ballar.filter(son => son > 80);
// console.log(kattalar);

// let Prices = [150, 80, 200, 50, 120];
// let Produkt = Prices.find(p => p < 100);
// console.log(Produkt);

// let Scores = [70, 85, 90, 95, 80];
// let natijaa = Scores.find(s => s >= 90);
// console.log(natijaa);

// let Fruits = ["olma", "banan", "bpelsin", "shaftoli"];
// let mevalarr = [];
// Fruits.forEach(f => {
//   mevalarr.push(f[0].toUpperCase() + f.slice(1));
// });
// console.log(mevalarr);

// let shaharlar = ["Toshkent", "Samarqand", "Buxoro", "Xiva", "Namangan", "Andijon"];
// let ohirii = shaharlar.slice(-3);
// console.log(ohirii);

// let fanlar2 = ["Ingliz tili", "Tarix", "Matematika", "Fizika", "Kimyo"];
// fanlar2.splice(2, 2, "Dasturlash");
// console.log(fanlar2);


//AMALIYOT

// const car = {
//   nomi: "Chevrolet",
//   rangi: "oq",
//   yili: 2022
// };

// console.log("Mashina:", car);

// let foydalanuvchi = {
//   ism: "Jasur",
//   yosh: 25,
//   shahar: "Toshkent"
// };

// foydalanuvchi.email = "JASURBEKmonstr@gmail.com";
// foydalanuvchi.yosh = 26;

// console.log("Foydalanuvchi:", foydalanuvchi);

// let talaba4 = {
//   ism: "Madina",
//   fakultet: "Informatika",
//   shahar: "Samarqand",
//   yil: 2
// };

// delete talaba4.shahar;

// console.log("Talaba:", talaba4);


//   let talabalar =[
//   {ism:"Ali",ball: 75},
//   {ism:"Vali",ball: 85},
//   {ism:"Guli",ball: 90},
//   {ism:"Olim",ball: 60}
//   ]
//   let yuqoriBallilar = talabalar.filter(t => t.ball > 80);
// console.log("80 dan yuqori ball olganlar:", yuqoriBallilar);



// let mahsulotlar =[
// {id:1,nomi:"Telefon",narxi:3000000},
// {id:2,nomi:"Laptop",narxi:8000000},
// {id:3,nomi:"Planshet",narxi:2500000}
// ]
// let topilganMahsulot = mahsulotlar.find(m => m.id === 3);

// console.log("Topilgan mahsulot:", topilganMahsulot);
// console.log("Narxi:", topilganMahsulot.narxi);

// //UYGA VAZIFA
// //1 MASIQ
// let talaba44 = {
//   ism: "Madina",
//   fakultet: "Informatika",
//   shahar: "Samarqand",
//   yili: 2
// };
// delete talaba4.shahar;
// console.log("Shahar o'chirilgandan keyin:", talaba4);

// //2 MASHQ

// let person = {
//   ism: "Karim",
//   yosh: 30
// };

// person.greet = function() {
//   console.log(`Salom, mening ismim ${this.ism}`);

// };

// person.greet();



// //3 MASHQ

// let kitob = {
//   nomi: "JavaScript Dasturlash",
//   muallif: "Saidjon",
//   yil: 2020
// };
// let yangiKitob = { kitob };
// console.log("Real kitob:", kitob);
// console.log("Nusxa kitob:", yangiKitob);


// let languages =["JS","PYTHON","Lava","C++"];
// const [birinchi,ikkinchi,uchinchi,tortinchi] = ajratilgan;
// console.log(birinchi);
// console.log(ikkinchi);
// console.log(uchinchi);
// console.log(tortinchi);



// let product = {
//   nomi:"Smartfon",
//   narxi:500,
//   rangi:"qora",
// }
// let { nomi, narxi, rangi, kategiriy = "boshqa" }=product;
// console.log(nomi);
// console.log(narxi);
// console.log(rangi); 
// console.log(kategiriy);



// const foydalanuvchi = {
//   id:1,
//   ism:"Ulugbek",
//   manzil:{
//    shaxar:"Buxoro",
//    tuman:"Toshken",
//    kocha:"navoi",
//   },
  
//   kontakt:{
//     telefon:"+998990010001",
//     email:"UlugbekKhon@gmail.com",
//   }
// };
// const {ism,manzil:{shaxar,tuman}}=foydalanuvchi

// console.log(ism);
// console.log(shaxar);
// console.log(tuman);

const a = [1, 2, 3]
const b = [4, 5, 6]
const c = [7, 8, 9]

const birlashgan = [0, ...a, ...b, ...c, 100]
console.log(birlashgan)

const mahsulot = {
  nomi: "Laptop",
  narxi: 5000000,
  rangi: "Kumush"
}

const { narxi, ...qolgan } = mahsulot
const yangiMahsulot = {
  ...qolgan,
  narxi: narxi * 1.2,
  chegirma: true
}
console.log(yangiMahsulot)

function kopaytma(...sonlar) {
  let natija = 1
  for (const son of sonlar) {
    natija *= son
  }
  return natija
}

console.log(kopaytma(2, 3, 4))
console.log(kopaytma(5, 5))
console.log(kopaytma(1, 2, 3, 4))