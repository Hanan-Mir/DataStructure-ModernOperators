'use strict';

// Data needed for a later exercise

// Data needed for first part of the section
let restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  setOrderIngredients:function(ingredients1,ingredient2,ingredient3){
    console.log(`Your order is ready with the ingredients ${ingredients1},${ingredient2},${ingredient3}`);
  }

};
//-------------------------------------DESTRUCTURING ARRAYS----------------------------------------------
const ratings=[['rating',4.9],['ratingsCount',144584]]
const ratingStar=[63405,1808];
let [mainCourse,speciality,starter]=restaurant.categories;
console.log(mainCourse,speciality,starter);
let [, , ,zeroFatFood]=restaurant.categories;
console.log(zeroFatFood);
let [[,rating],[,ratingsCount]]=ratings;
console.log(rating,ratingsCount);

let [fiveStarRatings,oneStarRatings,threeStarRatings=0]=ratingStar;
console.log(fiveStarRatings,oneStarRatings,threeStarRatings);
//-----------------------------------------DESTRUCTURING OBJECTS-----------------------------------------
const booksArray=[{book1Name:'Javascript',book2Name:'Python',book3Name:'Java'},{author1:'Adil gani',author2:'yasir',author3:'Abrar'}];
let {book1Name:mainBook,book2Name:fundamentalsbook,book3Name:additionalBook}=booksArray[0];
console.log(mainBook );
let {starterMenu:complimentaryFood}=restaurant;
console.log(complimentaryFood);
let {location:newLocation,mainBranch='Italy ver sa do'}=restaurant;
console.log(newLocation,mainBranch);

let biodata={
  firstName:'Hanan',
  lastName:'mir'
}
let firstName="Yasir";
let lastName='Reshi';

({firstName,lastName}=biodata);
console.log(firstName);
console.log(lastName);
console.log(biodata.firstName);
console.log(biodata.lastName);
//destructuring of nested objects
let {fri:{
  open:o,
  close:c
}}=restaurant.openingHours;
console.log(o,c);
let{
  openingHours:{
    thu:thursday
  }
}=restaurant;
console.log(thursday);
//----------------------------------------SPREAD OPERATOR--------------------------------------
const resturantOfferings=[...restaurant.starterMenu,...restaurant.mainMenu];
console.log(resturantOfferings);
//let getIngredients=[prompt(`Enter the ingredients for reciepe ingredient 1`),prompt(`Ingredient 2`),prompt(`Ingredient 3`)];
// console.log(getIngredients);
// restaurant.setOrderIngredients(...getIngredients);
let str='amazing this';
let newStr=[...str,'World'];
console.log(newStr);
//destructuring of objects
let newResturant={...restaurant};
newResturant.name='le Delice';
console.log(newResturant);
//-----------------------------REST PATTERN AND PARAMETERS--------------------------------------
let [chefSpecial,...favouriteFood]=restaurant.starterMenu;
console.log(favouriteFood);
let addFunction=function(...arr){
  let sum=0;
  for(let i=0;i<arr.length;i++){
    sum=sum+arr[i]
  }
  console.log(`Result of sum using rest pattern ${sum}`);
}
let num1=[2,3];
let num2=[5,6,8];
let num3=[8,6,77];
addFunction(...[1,2,4]);
addFunction(...num1);
addFunction(...num2);
addFunction(...num3);
//using rest pattern for objects
let newPlace ={newResturant,...restaurant};
console.log(newPlace);
//-------------------------SHORT CIRCUTING-----------------------------------
//using || operator
console.log(0||'Hanan'); //hanan
console.log(null || 0 ||'Hanan'||'Mir');//hanan
console.log('Hanan mir'|| 0 || null);//hanan mir
console.log(undefined || 0 ||null);//null
//can be used to check weather a method is present in object or not
resturantOfferings.vacancy=0;
let vacancy=restaurant.vacancy ||`No vacancy`;
console.log(vacancy);



// using && operator
console.log(0&&'Hanan'); //0
console.log(null && 0 &&'Hanan'&&'Mir');//null
console.log('Hanan mir'&& 0 && null);//0
console.log(undefined && 0 &&null);//undefined
console.log('Hanan' && 'Mir' && 'Tral')//Tral
//-------------------------Nullsih coalescing operator------------------------
 restaurant.guests=0
//let guestNumber=restaurant.guests || 'guests Not defined'; // guests not defined
let guestNumber=restaurant.guests ?? 'guests not defined';// 0
console.log(guestNumber);
//--------------------logical assignment operator------------
const rest1={
  name:'Mac Donald',
  numGuests:0
}
const rest2={
  owner:'Hanan',
  location:'via del elserado'
}
// rest1.numGuests=rest1.numGuests ||'No guests present';
// rest1.numGuests||='No guests present';
rest1.numGuests??='No guests present';
rest2.numGuests||='No guests present';
console.log(rest1.numGuests);
console.log(rest2.numGuests);
//---------------------------------------------CODING CHALLENGE #1----------------------------------------
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  }
  //creating two players array for each team
  let players1=game.players[0];
  let players2=game.players[1];
  console.log(players1);
  console.log(players2);
//storing player 1 as goal keeper and rest as feild players
let [goalKeeper,...feildPlayer]=players1;
console.log(goalKeeper);
console.log(feildPlayer);
let allPlayers=[...players1,...players2];
console.log(allPlayers);
let players1Final=[...players1,'Thiago','coutihno','perisic'];
console.log(players1Final);
let {team1,x:draw,team2}=game.odds;
console.log(team1);
console.log(draw);
console.log(team2);
game.printGoals=function(...players){
  let numGoals=players.length;
  for(let i=0;i<players.length;i++){
    console.log(`The name of player ${players[i]} and total goals ${numGoals}`)
  }
}
let testData=['Davies', 'Muller', 'Lewandowski','Kimmich'];
game.printGoals(...testData);
let winnerTeam=team1<team2 && "team1" ||"team2";
console.log(`Winnig team---------: ${winnerTeam}`);
//----------------------------------------FOR OF LOOP---------------
const allFoodItems=[...restaurant.starterMenu,...restaurant.mainMenu];
//console.log(allFoodItems);
for(let [i,item] of allFoodItems.entries()){
  console.log(`${i+1}:${item}`);
}
console.log(...allFoodItems.entries());
const days=['Sunday','Monday','Thursday'];
const openingHours={
  [days[0]]:{
    open:4.00,
    close:9.00,
    break:2
  },
  [days[2]]:{
    open:8.09,
    close:5.00

  },
  Monday:{
    open:9.00,
    close:4.00
  }
}
console.log(openingHours.friday?.close);
let checkOpen=function(day){
  if(openingHours[day]){
    console.log(openingHours[day].open);
    console.log(openingHours[day]?.break||`Break not defined for this date`)
  }
}
checkOpen('Monday');
checkOpen('Thursday');
checkOpen('Sunday');
//-------------------Looping through objects------------------------------
const objectKeys=Object.keys(restaurant);
const objectValues=Object.values(restaurant);
const objectEntries=Object.entries(restaurant);
console.log(`Object entries are: ${objectEntries}`);
console.log(`Object keys are: ${objectKeys}`);
console.log(`Object values are: ${objectValues}`);
for(let keys of objectKeys){
  console.log(`keys are:${keys}`);
}
const timming=Object.entries(openingHours);
console.log(timming);
for(let [day,{open,close}] of timming){
  console.log(`on ${day}, the opening time ${open} and closing time ${close}`);
}

console.log(openingHours)
const resturantMenu={
  vegeteraion:['dal','tomato curry','chick pea','cheese'],
  non_Vegetarion:['chicken','butter chicken','masala meat']
}
const resturantStaff={
resturantName:"The Royal Peoples Resturant",
location:'Tral civil lines house 34',
staffMembers:['Rohan','latif','Kaiser','Rukshar'],
addNewStaffMember(name){
  this.staffMembers.push(name);
  console.log(`New member added ${name}`);
},
resturantMenu,
openingHours
}
console.log(resturantStaff);
resturantStaff.addNewStaffMember('Rohan');
//-----------------------------CODING CHALLENGE #2-----------------------------
let goalScored=game.scored;
for(let [index,value] of goalScored.entries()){
  console.log(`Goal ${index+1}:${value}`);
}
let averageOdd=Object.values(game.odds);
let average;
let sum=0;
console.log(averageOdd);
for(let value of averageOdd){
  sum+=value;
}
console.log(`The average is: ${sum/averageOdd.length}`)
let teamArray=Object.entries(game.odds);
for(let [index,value] of teamArray){
  if(index==='x'){
    console.log(`Odd of victory draw:${value}`);
  }else{
  console.log(`Odd of victory ${game[index]}:${value}`);
}
}
//----------------------------WORKING WITH SETS--------------------------------
const allResturantOffering=['pasta','pizza','rosoto','pizza']
const uniqueOffering=new Set(allResturantOffering);
console.log(uniqueOffering);
//----------------sets methods----------------------------------
console.log(uniqueOffering.size);
console.log(uniqueOffering.has('rosoto'));
uniqueOffering.add('Wazwan');
console.log(uniqueOffering);
uniqueOffering.delete('Wazwan');
console.log(uniqueOffering);
//uniqueOffering.clear();
console.log(uniqueOffering);
//creating an empty set
let newSet=new Set();
console.log(newSet);
//counting number of unique letters in a string
let myName=new Set('Hanan Mir');
console.log(myName.size);
//iterating through an set
for(let value of uniqueOffering){
console.log(value);
}
//--------------------------------------MAPS PRACTICE--------------------------
let resturantMap=new Map();
resturantMap.set('Name','Davis el Salrado');
resturantMap.set('Address','paris la sel ve');
resturantMap.set('starter',['icecream','popcorn','ledicie','cornflakes']);
console.log(resturantMap);
resturantMap.set('open',15).set('close',23).set(true,'We are open :D').set(false,'we are close :(');
resturantMap.set('mainMenu',['rista','abhgosh','paneer']);
console.log(resturantMap);
let currentTime=22;
console.log(resturantMap.get(currentTime>resturantMap.get('open') && currentTime< resturantMap.get('close')));
console.log(resturantMap.has('address'));
//console.log(resturantMap.delete('Address'));
resturantMap.set([2,4,5],"working days of week");
console.log(resturantMap.size);
console.log(resturantMap);
//-----------------------------------------quiz game--------
let question= new Map([
  ['Question1',`What is the summer capital of jammmu kashmir?`],
  [1,'Delhi'],[2,'Mumbai'],[3,'Srinagar'],[4,'None of the above'],
  ['correct',3],[true,'Right Answer'],[false,'Wrong answer']
])
console.log(question);
console.log(question.get('Question1'));
for(let [key,value] of question){
  if(typeof key==='number'){
    console.log(`Option ${key}:${value}`)
  }
}
let answer=Number(prompt(`Enter the right option`));
console.log(question.get(answer===question.get('correct3')?true:false));
//-------------------------------------CODING CHALLENGE #3--------------------
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
  ]);
//challenge 1
  // let eventsSet=new Set(gameEvents);
  // eventsSet= new Set(eventsSet);
  // console.log(eventsSet);
  // let eventsValue=[];
  // for(let [key,value] of eventsSet){
    // eventsValue.push(value);
  // }
// let events= new Set(eventsValue);
// events=[...events];
let events=[...new Set(gameEvents.values())];
console.log(events);
//challenge 2
gameEvents.delete(64);
console.log(gameEvents);
//challenge 3
for(let [key,value] of gameEvents){
  if(key<90){
    console.log(`An ${value} happened on an average of ${Math.trunc(90/key)}`)
  }
}
//challenge 4 
for(let [key,value] of gameEvents){
 console.log( key<=45?`[First Half] ${key}:${value}`:`[Second Half] ${key}:${value}`);
}
//---------------------------CODING CHALLENGE #4-----------------------------------------
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
let enterButton=document.querySelector('button');
enterButton.addEventListener('click',function(){
  let userData=document.querySelector('textarea').value;
  let userDataArray=userData.split('\n');
  for(let value of userDataArray){
  let output=value.slice().trim();
  let index=output.indexOf('_');
  output=output.slice(0,index)+output[index+1].toUpperCase()+output.slice(index+2);
console.log(output);
  }
  // if(userData.includes('_')){
  //   userData=userData.trim().toLowerCase();
  //   let index=userData.indexOf('_');
  //   console.log(index);
  //   userData=userData.slice(0,index)+userData[index+1].toUpperCase()+userData.slice(index+2);
  //   console.log(userData);
  // }
})
let convertCase=function(input){
  return input.slice(0,3).toUpperCase();
}
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
 const flightsArray=flights.split('+');
 for(let value of flightsArray){
  let [status,from,to,time]=value.split(';');
  status=status.replaceAll('_'," ");
 const output=`${status} from ${convertCase(from)} to ${convertCase(to)} (${time.replace(':','h')})`.padStart(47,'*');
 console.log(output);
 }
 //practicing strings
 let hideCardDigits=function(){
  let getCardNumber=prompt('Enter the 16 digit card Number');
getCardNumber=getCardNumber.slice();
console.log(getCardNumber);
if(getCardNumber.length<16){
  console.log('Enter 16 digit cardNumber');
}
const output=getCardNumber.slice(-4);
console.log(output.padStart(16,'*'));
 }
 hideCardDigits();

















































































