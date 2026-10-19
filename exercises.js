//1
console.log('Hello, JS! ' );
//2
console.log('Renana');//Renana
console.log('Beer Sheva');//Beer Sheva
console.log('2026');//2026
//3
const city="Beer Sheva";
console.log(`${city};`);//Beer Sheva
//4
let score=0;
console.log(`${score}`);//0
score=10;
console.log(`${score}`);//10
//5
console.log('score:',score);//score:10
//7
/*const pi=3.14;
pi=3
TypeError: Assignment to constant variable.*/
//8 let מאפשר השמה מחדש
let color="blue";
color="red";
//9 - Identifier 'a' has already been declared
/*let a = 1;
let a = 2;*/

//10-הודפס הערך 2, מכיוון ש־var מאפשר הכרזה חוזרת על אותו משתנה. למרות זאת, לא מומלץ להשתמש בו כי הוא עלול לגרום לבאגים
var b=1;
var b=2;
console.log(`${b}`);
//11
let total;
console.log(`${total}`);// מודפס undefined
total=5;
console.log(`${total}`);// מודפס 5
//12
const birthday="06.09.2003";
let point=10;
const lastName="Houri";
let counter=0;
//13
/*
 userName-תקין
 2fast-לא תקין
 my var-לא תקין 
 _count-תקין
 $price-תקין
  let-לא תקין
  first-name-לא תקין
   totalPrice-תקין,
    Total-  תקין
    class-לא תקין
*/

//14
/*
fast2
myVar
let_val
firstName
className
*/

//15 
//  שתיהם משתנים שונים בהדפסה:20 30
 let age = 20; 
 let Age=30;
 console.log(`${age}`);
 console.log(`${Age}`);

//16
 const price_prudact=100//;מתאר טוב את מחיר המוצר
 let isLogIn=false;//הis עוזר להבין שזזה ערך בוליאני
 let numberOfChildren = 3;//מתאר מה המשתנה סופר

//17
const first_name="Renana";
const age17=23;
const isStudent=false;
console.log(first_name);
console.log(age17);
console.log(isStudent)

//18
let user1='Renana'
let user2="Dana"
let user3=`Ron`

console.log(user1);
console.log(user2);
console.log(user3);

//19
const text1 = "It's me";
const text2='it\'s me';

//20
//שניהם מטיפוס number
let num1=7;
let num2=7.5;
console.log(num1);
console.log(num2);
console.log(typeof(num1));
console.log(typeof(num2));

//21
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 4); // 2.5
console.log(10 % 3); // 1 % מחשב את השארית של 10 חלקי 3

//22
 let isStudent22=true;
 let isVegan22=false;
 console.log(isStudent22);
 console.log(isVegan22)

//23
//הטיפוס הוא bolean
console.log(5 > 3);   // true
console.log(5 < 3);   // false
console.log(5 === 5); // true

//24
let str1='';
let str2=' '
console.log(str1);//מחרוזת ריקה באורך 0
console.log(str2);//מחרוזת שמכילה רווח באורך 1

//25
let u;
console.log(u);//undefined

//26
const middleName = null;
console.log(middleName);//null
//undefined-משתנה שהוצהר אך לא קיבל ערך
//null- ערך שהמתכנת הציב בכוונה כדי לציין שאין ערך

//27
console.log(null == undefined);  // true לפי כללי javaScript null וundefined נחשבים שווים
console.log(null === undefined); // false,=== בודק גם טיפוס   null וundefined  מטיפוסים שונים ולכן false.

//28
/*string,number,boolean,undefined,null
const name28="Renana";  string
let age28=23; number
let isStudent28=false; boolean
let vegan; undefined
let color=null; null
*/

//29
 console.log(typeof 42);
 console.log(typeof 'hello');
 console.log(typeof true);
 console.log(typeof undefined);
 console.log(typeof null);

//30
// מודפס object . ציפינו שיודפס הסוג שלו null

//31
console.log(typeof NaN);// מודפס number . מפתיע כי NaN פירושו שזה לא מספר 

//32
console.log(typeof 42);//number

//33
const name33="Renana";  
let age33=23;
let isStudent33=false;
let vegan33;
let color33=null;

console.log("name33:", typeof name33, "age33:", typeof age33, "isStudent33:", typeof isStudent33, "vegan33:", typeof vegan33, "color33:", typeof color33);

//34
//ב־JavaScript הטיפוס שייך לערך ולא למשתנה עצמו.
let value = 5;
console.log(typeof value);
value='5';
console.log(typeof value);

//35
const name35="Renana";
const age35=23;
console.log(`My name is ${name35} and I am ${age35} years old.`)
//36
console.log("My name is " + name35 + " and I am " + age35 + " years old.")

//37
console.log(`The sum of 3 and 4 is ${3 + 4}.`)

//38
const price=80;
const quantity =3;
console.log(`Total:${price*quantity}`);

//39
console.log(`My name is Renana
I am 23 years old`);
console.log('My name is Renana\nI am 23 years old');

//40
let numberOfKids=0;
let isVegan=false;

console.log(`Vegan: ${isVegan}, kids: ${numberOfKids}`);

//41
console.log(Number('42'));         
console.log(typeof Number('42')); 

//42
console.log(String('123'));
console.log(typeof String('123') );

//43
console.log(Number('12px'));//NaN מסוג number

//44
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number(''));        // 0

//45
console.log(String(true));
console.log(String(null));
console.log(String(undefined));

//46
const input = '25';
console.log(input+5);//255
console.log(Number(input)+5);//30
//בלי המרה מתבצע שרשור מחרוזות. עם המרה מתבצע חיבור מספרי

//47
console.log('5' + 1);//51
console.log('5' - 1);//4
console.log('5' * 2);//10
console.log('10' / 2);//5
//כאשר משתמשים ב־+ ואחד הערכים הוא מחרוזת, מתבצע שרשור. בשימוש ב־-, * ו־/, JavaScript מנסה לבצע המרה למספרים.

//48: 55
//49:3
//50:5true
//51:2
//52:string
//53: object undefined
//54:undefined undefined
//55:NaN,number
//56:false
//57:שגיאה

//58
const name58 = "Renana";
const age58 = 23;
const city58 = "Beer Sheva";
const isStudent58 = false;
const likesCoffee58 = true;
console.log(`Personal ID Card
Name: ${name58}
Age: ${age58}
City: ${city58}
Student: ${isStudent58}
Likes coffee: ${likesCoffee58}`);
console.log("Name:", typeof name58);
console.log("Age:", typeof age58);
console.log("City:", typeof city58);
console.log("Student:", typeof isStudent58);
console.log("Likes coffee:", typeof likesCoffee58);

//59
const price1 = 10;
const quantity1 = 2;

const price2 = 20;
const quantity2 = 3;

const price3 = 15;
const quantity3 = 1;

const total1 = price1 * quantity1;
const total2 = price2 * quantity2;
const total3 = price3 * quantity3;

const total59= total1 + total2 + total3;
console.log(`Shopping Receipt
Product 1: ${total1} 
Product 2: ${total2} 
Product 3: ${total3} 
Total: ${total}`);

//60
 const celsius = 25;
 const fahrenheit=celsius * 9 / 5 + 32;
 console.log(`${celsius}C= ${fahrenheit}`);
 console.log( typeof fahrenheit);

 //61
 const heightInput = '1.75';
 const ageInput = '30';
 console.log(heightInput,typeof heightInput);
 console.log(ageInput,typeof ageInput);
 const height61=Number(heightInput);
 const age61=Number(ageInput);
 console.log(height61,typeof height61);
 console.log(age61,typeof age61);

 //62
 // String
const name62 = "Renana";
const city62 = "Beer Sheva";

// Number
const age62 = 23;
const height62 = 1.70;

// Boolean
const isStudent62 = true;
const isVegan62 = false;

// Undefined
let x62;
let y62;

// Null
const middleName62 = null;
const address62 = null;

console.log(`Value: ${name62}, Type: ${typeof name62}`);
console.log(`Value: ${city62}, Type: ${typeof city62}`);

console.log(`Value: ${age62}, Type: ${typeof age62}`);
console.log(`Value: ${height62}, Type: ${typeof height62}`);

console.log(`Value: ${isStudent62}, Type: ${typeof isStudent62}`);
console.log(`Value: ${isVegan62}, Type: ${typeof isVegan62}`);

console.log(`Value: ${x62}, Type: ${typeof x62}`);
console.log(`Value: ${y62}, Type: ${typeof y62}`);

console.log(`Value: ${middleName62}, Type: ${typeof middleName62}`);
console.log(`Value: ${address62}, Type: ${typeof address62}`);

//63
 console.log(0.1 + 0.2) //0.30000000000000004

 //64
  console.log('b' + 'a' + +'a' + 'a')//












