'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

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
let getIngredients=[prompt(`Enter the ingredients for reciepe ingredient 1`),prompt(`Ingredient 2`),prompt(`Ingredient 3`)];
console.log(getIngredients);
restaurant.setOrderIngredients(...getIngredients);
let str='amazing this';
let newStr=[...str,'World'];
console.log(newStr);
//destructuring of objects
let newResturant={...restaurant};
newResturant.name='le Delice';
console.log(newResturant);









