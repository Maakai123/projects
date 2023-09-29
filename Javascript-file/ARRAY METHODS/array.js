'use strict'

//MAP MRTHOD TO LOOP ARRAYS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//convert euros to us dollars


const eurToUsd = 1.1

const movementsUSD = movements.map(function(mov){
    return mov* 1.1
})

//use error function
const movementsUSD2 = movements.map(mov => mov * eurToUsd)
//const movementsUSD2 = movements.map(mov=>/*return statement*/  mov * eurToUsd)

console.log(movementsUSD2)

console.log(movements)
console.log(movementsUSD)

//using for of loop
const movementsUSDfor = []
for(const mov of movements)  movementsUSDfor.push(mov * eurToUsd)
console.log(movementsUSDfor)


//map method can get access to current index and array method 

const movementsDescriptions = movements.map((mov, i)=> //{
   
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited': 'withdrew'} ${Math.abs(mov)}`
    /*
    if(mov > 0) {
        return `Movement ${i + 1}: You deposited ${mov}`
    } else {
        return `Movement ${i + 1}: You widthrew ${Math.abs(mov)}`
    }
    */
//}
);


console.log(movementsDescriptions)


//Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, 
and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. 
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]


Solution
*/



const allDogs = function(juliaDogs,kateDogs){

    const correctedDogs = juliaDogs.slice(1,-2)
    console.log(correctedDogs)

    //2
   const  newDogs = [...correctedDogs, ...kateDogs]
   console.log(newDogs)

//3 
newDogs.forEach(function(dog,i){
  const dogAge = dog >= 3? `Dog number ${i +1} is an adult and its ${dog} years old`: `Dog ${i + 1} is still a puppy`
  console.log(dogAge)

   
const dogAge2 = dog < 1? `Dog number ${i +1} is an adult and its ${dog} years old`: `Dog ${i + 1} is still a puppy`

console.log(dogAge2)




})



}

allDogs([3, 5, 2, 12, 7],[4, 1, 15, 8, 3])



// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/



const calcAverageHumanAge = function( ages ) {

  const humanAges =  ages.map(age =>(age < 2? 2 *age : 16 + age * 4))
    
  console.log(humanAges)
   

 const filtered = humanAges.filter( age => (age >= 18))
 console.log( filtered)

const averageAge = filtered.reduce((acc, age ) => acc + age/ filtered.length , 0)

        console.log(averageAge)
        //40.6
}



calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])

let euroToUsd = 1.1

const  displayNumbers =  [200, -200, 340, -300, -20, 50, 400, -460]

const EuroUsd = displayNumbers.filter( positive => positive > 0)
.map(postive => postive * eurToUsd).reduce((acc, curr) => acc + curr, 0)
console.log( EuroUsd)

//Big to small decend
const sortItems = [200, -200, 340, -300, -20, 50, 400, -460] 
const value = sortItems.sort((a,b ) => b-a)
console.log(value)


//small to big Accend 
const sortNumbers = function(arr){

const items = arr.sort((a,b) => a-b)
console.log(items)
}

sortNumbers([100,500,200,300,500,100,-300,0])


//big to small
const sortdecend = function(arr){

    const items = arr.sort((a,b) => b-a)
    console.log(items)
    }
    
    sortdecend([100,500,200,300,500,100,-300,0])


    function descendingSort(arr) {
        // Your code here
       return arr.sort((a,b) => b.localeCompare(a))
      }
      
      const fruits = ["apple", "banana", "cherry", "date"];
      console.log(descendingSort(fruits)); // Should output ["date", "cherry", "banana", "apple"]
      

      function sortByProperty(arr, age) {
        // Your code here
        const property =  arr.sort((a, b) => a.age - b.age);
        console.log(property)
      }
      
      const students = [
        { name: "Alice", age: 22 },
        { name: "Bob", age: 19 },
        { name: "Charlie", age: 25 },
      ];

      sortByProperty(students)



    const y = Array.from({length:7}, () => 1)
    console.log(y)

    const account1 = {
        owner: 'Jonas Schmedtmann',
        movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
        interestRate: 1.2, // %
        pin: 1111,
      };
      
      const account2 = {
        owner: 'Jessica Davis',
        movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
        interestRate: 1.5,
        pin: 2222,
      };
      
      const account3 = {
        owner: 'Steven Thomas Williams',
        movements: [200, -200, 340, -300, -20, 50, 400, -460],
        interestRate: 0.7,
        pin: 3333,
      };
      
      const account4 = {
        owner: 'Sarah Smith',
        movements: [430, 1000, 700, 50, 90],
        interestRate: 1,
        pin: 4444,
      };
      
      const accounts = [account1, account2, account3, account4];


    const bankDepositSum = accounts.map(acc => acc.movements).flat()
    console.log(bankDepositSum)

    //2

    const bankDepositSum2 = accounts.flatMap(acc => acc.movements)
    .filter( mov => mov > 0)
    .reduce((acc,value) => acc + value , 0)
    console.log(bankDepositSum2) //25180

    //q2 Count how many deposit there have  been in a bank with atleast 1000 Dollars
    const deposit100 = accounts.flatMap( acc => acc.movements).filter(fil => fil >= 1000).length
    console.log(deposit100) //6 deposits


    const { deposits, withdrawals } = accounts.flatMap(acc => acc.movements)
    .reduce((sums, curr) => {
      curr > 0? (sums.deposits += curr) : (sums.withdrawals += curr)
     // sums[curr > 0 ? 'deposit' : 'widthdraw'] += curr 
      return sums
    },
    { deposits: 0, withdrawals: 0}
    
    )
    console.log(deposits, withdrawals)

  console.log("This".slice(1))

   const convertTitleCase = function(title) {
    
    const exceptions = ['a','an','then','but','or','on', 'in', 'with']
    
    const capitalize =  title[0].toUpperCase() + title.slice(1) //his = This
    const titleCase = title.toLowerCase().split('').map(word => exceptions.includes(word)? word :capitalize(word)).join('')
   
    return capitalize(titleCase)
   
   }

 console.log(convertTitleCase("This is nice"))