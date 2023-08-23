'use strict'

//MAP MRTHOD TO LOOP ARRAYS

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

//convert euros to us dollars

const eurToUsd = 1.1

const movementsUSD = movements.map(function (mov){
    return  mov *eurToUsd
})

//use error function
const movementsUSD2 = movements.map(mov=>/*return statement*/  mov * eurToUsd)

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
