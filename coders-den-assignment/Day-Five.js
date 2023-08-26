// Declare an _empty_ array;
const emptyArray = []
 
//Declare an array with more than 5 number of elements
 const elements = [2,3,4,5,6,6,7]
 
//Find the length of your array
console.log(elements.length)
 
 
// Get the first item, the middle item and the last item of the array

 console.log(elements[0])
 console.log(elements[3])
 console.log(elements.at(-1))
 

// Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, true, undefined, null, 'james', false]
console.log(mixedDataTypes.length)

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const companies = [
  'Facebook',
   'Google',
   'Microsoft',
   'Apple',
   'IBM',
   'Oracle',
   'Amazon'
  ]
  
  


//Print the array using _console.log()_
 console.log(companies)

// Print the number of companies in the array
console.log(companies.length)

//Print the first company, middle and last company
console.log(companies[0],companies[3], companies.at(-1))

// Print out each company
companies.forEach(function(company,i){
  console.log(`${i+1}: ${company}`)
})

// Change each company name to uppercase one by one and print them out

companies[0] = 'twitter'.toUpperCase();
companies[1] = 'Amazon'.toUpperCase()
companies[2] = 'IBM'.toUpperCase();
companies[3] = 'Google'.toUpperCase();
companies[4] = 'coinbase'.toUpperCase();
companies[5] = 'stake'.toUpperCase();
companies[6] = 'oracle'.toUpperCase();
console.log(companies)



//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const companyStrings = `${companies.toString()} ARE BIG IT COMPANIES`
console.log(companyStrings)


//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_

const checkItCompany = companies.includes('AMAZON')? console.log('it exists '): console.log('It doesnt exist')

console.log(checkItCompany)

/*
14. Filter out companies which have more than one 'o' without the filter method
*/

// Sort the array using _sort()_ method
console.log(companies.sort())

// Reverse the array using _reverse()_ method
console.log(companies.reverse())

//Slice out the first 3 companies from the array

console.log(companies.slice(3))

//Slice out the last 3 companies from the array
console.log(companies.slice(-3))

// Slice out the middle IT company or companies from the array
console.log(companies.slice(3, -3))

// Remove the first IT company from the array
console.log(companies.shift(0))

// Remove the middle IT company or companies from the array
console.log(companies.shift(3))
//Remove the last IT company from the array
console.log(companies.pop())

//Remove all IT companies


//level 2


//First remove all the punctuations and change the string to array and count the number of words in the array

let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const words = text.split(' ')
console.log(words)
console.log(words.length) // 13


//In the following shopping cart add, remove, edit items

let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
 
shoppingCart.unshift('Meat')
console.log(shoppingCart) //['Meat', Milk', 'Coffee', 'Tea', 'Honey']


//add Sugar at the end of you shopping cart if it has not been already added
shoppingCart.push('Sugar')
console.log(shoppingCart) //['Meat', Milk', 'Coffee', 'Tea', 'Honey','Sugar']


//remove 'Honey' if you are allergic to honey
let removeHoney = shoppingCart.indexOf('Honey')
if(removeHoney !== -1)
console.log(shoppingCart.splice(removeHoney, 1))
console.log(shoppingCart) 