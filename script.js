let favoriteSandwich = 'veggie sub'
let leastFavoriteSandwich = {
    name: 'meatball sub',
    price: 5.99,
    ingredients: ['meatballs', 'cheese', 'sauce', 'bread']
}
console.log(leastFavoriteSandwich.name)
console.log(leastFavoriteSandwich["price"])
console.log(leastFavoriteSandwich.ingredients[0])


let menu = [

    {
    name: 'meatball sub',
    price: 5.99,
    ingredients: ['meatballs', 'sauce', 'bread']
    },

    {
    name: 'veggie sub',
    price: 5.99,
    ingredients: ['onions', 'mushrooms', 'peppers', 'bread']
    },

    {
    name: 'grilled cheese',
    price: 3.99,
    ingredients: ['cheese', 'bread']

    }
]

console.log(menu[2].name)
for(let i = 0; i < menu.length; i++){
console.log(i)
console.log(menu[i])
console.log(menu[i].name)
}
//Write a function that loops over every item in the menu array and builds a sentence about the name and price of each sandwich. Example: "The tomato sandwich is 6.99."

for(let i = 0; i < menu.length; i++){
    console.log(`The ${menu[i].name} is ${menu[i].price}.`)
}

//Write a function that accepts a string of sandwich name, a number of price, and an array of ingredients. The function should build an object that represents a sandwich and add it to the array.

function newSandwichArray(name, price, ingredientsArray) {
    let newSandwichObject = {name, price, ingredientsArray};
    menu.push(newSandwichObject)
    console.log(menu)
}
newSandwichArray('turkey', 6.99, ['turkey', 'cheese', 'bread'])

//Write a function that reduces every sandwich's price by 25% and returns a new array of discount sandwiches.

function sandwichSale(){
let discountSandwiches = []
for(let i = 0; i < menu.length; i++){
   let discountPrice = (menu[i].price - menu[i].price*.25).toFixed(2)
   discountSandwiches.push(menu[i].name, discountPrice)
}
    return discountSandwiches
}
console.log(sandwichSale())


// Write a "Dairy Free" function that loops through your array of sandwiches and returns a new array of sandwiches that do NOT include cheese in their ingredient list. (Make sure you have at least one sandwich with cheese so you can test if this function works.)


function dairyFree(){
    let dairyFreeMenu = []
    for (let i = 0; i < menu[i].ingredients.length; i++){
        if(menu[i].ingredients.includes('cheese') === false){
            dairyFreeMenu.push(menu[i].name)
        } 
     }
      return dairyFreeMenu
     }

console.log(dairyFree())
     
// // //var newArray = array.filter(function(item) {
//   return condition;
// });




// //Write a for loop to print each ingredient for just a Rueben to the console

// //1

// //1:39
// //2. Extra challenge: If you get done early and feel inspired, try writing a loop within a loop to print each ingredient for every sandwich to the console

// //loop through the last sandwich

// for(let i = 0; i < menu[2].ingredients.length; i++){
//     console.log(menu[2].ingredients[i])
// }

// //print ingredients all sandwiches
// for(let i = 0; i < menu.length; i++){
//     console.log(menu[i].ingredients)
//     for (let j =0; j < menu[i].ingredients.length; j++){
//         console.log(menu[i].ingredients[j])
//     }
// }



// // for(let i = 0; i < menu.length; i++){
// //     if(menu[i].name === favoriteSandwich){
// //         console.log("CHEF'S CHOICE", menu[i].name)
// //     } else{
// //         console.log(menu[i].name)
// //     }
// //     }








// for(let i = 0; i < menu.length; i++){
//     if(menu[i].price < 10.00){
//     console.log("SALE", menu[i].name)
//     } else {
//         console.log(menu[i].name)
//     }
//   };


    
    
      
