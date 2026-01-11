 const sum = 5 + 3; // '+' qo'shish operatori
 console.log(sum); // 8

 const isEqual = 5 === 5; // '===' solishtirish operatori
 console.log(isEqual); // true

 const str = "5";
 const num = +str; // "5" (matn)ni 5 (son)ga aylantiradi
 console.log(num); // 5

 const num1 = 5;
 const neg = -num1; // Qiymatni manfiy qiladi
 console.log(neg); // -5

 const as = 10;
 const bs = 5;
 const result = as + bs; // Qo‘shish operatori/ console.log(result); // Natija: 15

 const ab = 10;
 const bb = 3;
 const result1 = ab - bb; // Ayirish operatori
 console.log(result); // Natija: 7

 const aa = 4;
 const ba = 3;
 const result2 = aa * ba; // Ko‘paytirish operatori console.log(result); // Natija: 12

 const ad = 20;
const bd = 4;
 const result3 = ad / bd; // Bo‘lish operatori
 console.log(result); // Natija: 5

 const ae = 10;
 const be = 3;
 const result4 = ae % be;
 console.log(result);

 const base = 2;
 const exponent = 3;
 const result5 = base ** exponent; // Darajaga oshirish operatori
 console.log(result); // Natija: 8

 let xx = 5;
 let yy = xx++ ;
 console.log(xx); // 6 (x avval y ga qiymatini beradi, keyin 1 ga oshadi)
 console.log(yy); // 5 (x ning dastlabki qiymati y ga berilgan)

 let xy = 5;
 let yx = ++xx;
 console.log(xy); // 6 (x avval 1 ga oshadi)
 console.log(yx); // 6 (x ning yangi qiymati y ga berilgan)

 let xa = 5;
 let ya = xa--;
 console.log(xa); // 4 (x avval y ga qiymatini beradi, keyin 1 ga kamayadi)
 console.log(ya); // 5 (x ning dastlabki qiymati y ga berilgan)

 let x = 5;
 let y = --x;
 console.log(x); // 4 (x avval 1 ga kamayadi)
 console.log(y); // 4 (x ning yangi qiymati y ga berilgan)

 const aq = 5;
 const bq = "5";
 console.log(aq == bq); // true, qiymat teng bo'lgani uchun

 const aw = 5;
 const bw = "5";
 console.log(aw === bw); // false, chunki turi har xil

 const ar = 5;
 const br = 3;
 console.log(ar != br); // true, qiymatlar teng emas

 const az = 7;
const bz = 5;
console.log(az > bz); // true, 7 katta 5 dan

const ax = 10;
 const bx = 10;
 console.log(ax <= bx); // true, 10 kichik yoki teng 10 ga

 const ap = 5; // a ga 5 qiymati tayinlandi
 console.log(ap); // 5

 let al = 5;
 al += 3; // a = a + 3
 console.log(al); // 8

 let an = 10;// an -= 2; // a = an - 2
 console.log(an); // 8

 let aj = 4;
 aj *= 3; // a = a * 3
 console.log(aj); // 12

 let ag = 20;
 ag /= 4; // a = a / 4
 console.log(ag); // 5

let au = 2;
 au **= 3;
 console.log(au); 

let arr = 10;
arr %= 3;
console.log(arr); 

let a = 15;

let b = 4;

Natija:

console.log(a+b);

console.log(a-b);

console.log(a*b);

console.log(a / b);

console.log(a % b);

console.log(a ** 2);

let x1 = 5;
let y1 =10;

console.log(x1++)
console.log(x1)
console.log(++x1)
console.log(y1)

let z = 8;
console.log(x1--)
console.log(--x1)
console.log(17 % 5)
console.log(20 % 5)
console.log(15 % 6)
console.log(9 % 2)

let olmalar = 47;
let bolalar = 5;

let harbiriga3 = 47/5;
let qoldiq = 47 % 5

console . log ( "Har bir bolaga " + harbiriga3 + " ta olma to'g'ri keladi." ) ;
console . log ( "Qoldiq esa " + qoldiq + " ta olma bo'ladi." ) ;

let a2 = 5;
let b2 = "5"
let c = 5;
console.log(a2 == b2)
console.log(a2 === b2)
console.log(a2 == c)
console.log(a === c)

console.log(0 == false)
console.log(0 === false)
console.log("" == false)
console.log("" === false)

let yosh = 18;
let balans = 1000;
let narx = 500;

console.log(yosh > 17)
console.log(yosh >= 18)
console.log(balans < narx)
console.log(balans <= 1000)
console.log(yosh != 18)
console.log(yosh !== "18")

console.log(10 > 5 + 3);      // 1) Natija: ___
console.log(15 - 5 == 10);    // 2) Natija: ___
console.log(4 * 2 === 8);     // 3) Natija: ___
console.log(20 / 4 > 6);      // 4) Natija: ___
console.log(17 % 5 == 2);     // 5) Natija: ___

let x5 = 10;

x5 += 5;   // 1) x = ___
x5 -= 3;   // 2) x = ___
x5 *= 2;   // 3) x = ___
x5 /= 4;   // 4) x = ___
x5 %= 3;   // 5) x = ___
x5 **= 2;  // 6) x = ___

let narx1 = 1000;   // boshlang'ich narx
let chegirma = 20; // 20% chegirma
let soliq = 12;    // 12% soliq

// 1) Chegirmani hisoblang va narxdan ayiring
narx1 -= chegirma;  // narx = ___

// 2) Soliqni qo'shing
narx1 += soliq;  // narx = ___

// Yakuniy narx qancha?
console.log("Yakuniy narx:", narx1);

let son = 100;

son /= 2;     // son = ___
son += 25;    // son = ___
son *= 2;     // son = ___
son -= 50;    // son = ___
son %= 30;    // son = ___

let a6 = true;
let b6 = false;
let c6 = true;

console.log(a6 && b6);   // 1) Natija: ___
console.log(a6 && c6);   // 2) Natija: ___
console.log(b6 && c6);   // 3) Natija: ___
console.log(b6 && b6);   // 4) Natija: ___

// Amaliy misol
let yosh4 = 25;
let guvohnoma = true;

console.log(yosh >= 18 && guvohnoma);  // 5) Natija: ___

let a7 = true;
let b7 = false;

console.log(a7 || b7);   // 1) Natija: ___
console.log(b7 || b7);   // 2) Natija: ___
console.log(a7 || a7);   // 3) Natija: ___

// Amaliy misol
let talaba = false;
let pensioner = true;

console.log(talaba || pensioner);  // 4) Natija: ___

let hafta_ishi = false;
let bayram = false;
console.log(hafta_ishi || bayram); // 5) Natija: ___

let faol = true;
let bloklangan = false;

console.log(!faol);        // 1) Natija: ___
console.log(!bloklangan);  // 2) Natija: ___
console.log(!!faol);       // 3) Natija: ___
console.log(!!!faol);      // 4) Natija: ___

// Qo'shimcha
console.log(!0);           // 5) Natija: ___
console.log(!"");          // 6) Natija: ___
console.log(!"Salom");     // 7) Natija: ___
console.log(!null);        // 8) Natija: ___

let x8 = 10;
let y8 = 5;
let z8 = 15;

console.log(x8 > y8 && y8 < z8);              // 1) Natija: ___
console.log(x8 < y8 || z8 > x8);              // 2) Natija: ___
console.log(!(x8 == 10));                  // 3) Natija: ___
console.log(x8 >= 10 && y8 <= 5 && z8 > 10); // 4) Natija: ___
console.log((x8 > y8 || y8 > z8) && z8 > x8);   // 5) Natija: ___

console.log(5 + 3 * 2);                    // 1) Natija: ___
console.log((5 + 3) * 2);                  // 2) Natija: ___
console.log(10 - 4 / 2);                   // 3) Natija: ___
console.log(2 ** 3 + 1);                   // 4) Natija: ___
console.log(10 % 3 + 5 * 2);               // 5) Natija: ___
console.log(15 / 3 == 5 && 2 + 2 == 4);    // 6) Natija: ___

let mahsulotNarxi = 500;
let soni = 3;
let premiumMijoz = true;
let kuponBor = false;
let tasdiqlangan

console.log("To'lov summasi:");
// Kutilgan natija: ___ 

// 1) Foydalanuvchi ro'yxatdan o'ta oladimi?
// Shart: yosh >= 18 VA balans > 0
let royxatOtish = yosh >= 18 && balans > 0;
// Natija: ___

// 2) Chegirma oladimi?
// Shart: yosh < 18 YOKI yosh > 60
let chegirma3 = yosh < 18 || yosh > 60;
// Natija: ___

// 3) Premium xizmatga kirish
// Shart: tasdiqlangan VA (balans >= 1000 YOKI yosh > 25)
let premium = tasdiqlangan && (balans >= 1000 || yosh > 25);

function hisoblash(son1, son2, operator) {
    let natija;
    
    if (operator === "+") {
        natija = son1 + son2;
    } else if (operator === "-") {
        natija = son1 - son2;
    } else if (operator === "*") {
        natija = son1 * son2;
    } else if (operator === "/") {
        // Nolga bo'lishni tekshiring!
        if (son2 === 0) {
            return "Xato: Nolga bo'lish mumkin emas!";
        }
    } else if (operator === "%") {
        natija = son1 % son2;
    } else {
        return "Noto'g'ri operator!";
    }
    
    return natija;
}

function yoshTekshir(yosh) {
    // Shartlar:
    // yosh < 0 yoki yosh > 120 - "Noto'g'ri yosh"
    // yosh < 13 - "Bola"
    // yosh >= 13 VA yosh < 18 - "O'smir"
    // yosh >= 18 VA yosh < 60 - "Katta"
    // yosh >= 60 - "Keksa"
    
    if (yosh < yosh < 0 || yosh >120) {
        return "Noto'g'ri yosh";
    } else if (yosh < 13) {
        return "Bola";
    } else if (yosh >=13 && yosh < 18) {
        return "O'smir";
    } else if (yosh >= 18 && yosh < 60) {
        return "Katta";
    } else {
        return "Keksa";
    }
}

// Test
console.log(yoshTekshir(10));   // Kutilgan: "Bola"
console.log(yoshTekshir(15));   // Kutilgan: "O'smir"
console.log(yoshTekshir(25));   // Kutilgan: "Katta"
console.log(yoshTekshir(70));   // Kutilgan: "Keksa"
console.log(yoshTekshir(-5));   // Kutilgan: "Noto'g'ri yosh"

function juftToq(son) {
    // % operatoridan foydalaning
    // Agar son 2 ga bo'linganda qoldiq 0 bo'lsa - juft
    
    if (son % 2 === son / 2) {
        return "Juft";
    } else {
        return "Toq";
    }
}

// Test
console.log(juftToq(4));   // Kutilgan: "Juft"
console.log(juftToq(7));   // Kutilgan: "Toq"
console.log(juftToq(0));   // Kutilgan: "Juft"
console.log(juftToq(-3));  // Kutilgan: "Toq"

function kirishTekshir(login, parol, bloklangan, premium) {
    const togriLogin = "admin";
    const togriParol = "12345";
    
    // 1) Login va parol to'g'riligini tekshirish
    let loginTogri = login === togriLogin;
    let parolTogri = parol === togriParol;
    
    // 2) Barcha shartlarni birlashtirish
    // Login to'g'ri VA parol to'g'ri VA bloklangan EMAS
    let kirishMumkin = loginTogri && parolTogri && !bloklangan;
    
    if (kirishMumkin) {
        if (premium) {
            return "Premium foydalanuvchi sifatida kirdingiz!";
        } else {
            return "Oddiy foydalanuvchi sifatida kirdingiz!";
        }
    } else {
        return "Kirish rad etildi!";
    }
}

// Testlar
console.log(kirishTekshir("admin", "12345", false, true));
console.log(kirishTekshir("admin", "12345", false, false));
console.log(kirishTekshir("admin", "xato", false, true));
console.log(kirishTekshir("admin", "12345", true, true));