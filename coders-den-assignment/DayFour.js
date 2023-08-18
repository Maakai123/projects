let a = 4
let b = 3

if(a > b ){
  console.log(' a is greater than b')
} else{
  console.log(' a is less than b')
}


a>b ? console.log(' a is greater than b'):console.log(' a is less than b')


/*
const evenNumber = prompt('enter number')

if(evenNumber%2 === 0){
  console.log(`${evenNumber}: is an even number`)
}else{
  console.log(`${evenNumber}: is an odd number`)
}


//LEVEL 2, 
//NUMBER 1
const score= prompt('enter score')



if(score >= 80 && score <=100 ){
  console.log('A')
} else if (score >= 70 && score <=89 ){
  console.log('B')
} else if(score >= 60 && score <=69 ){
  console.log('C')
  
}else if(score >= 50 && score <=59 ){
  console.log('D')
  
} else if(score >= 0 && score <=49 ){
  console.log('F')
} else{
  console.log('Enter a number')
}
*/

/*

//NUMBER 2 

const input = prompt('Enter month').trim()

console.log("Input before conversion:", input);

if (input.toLowerCase() === 'september') {
  console.log('autumn');
} else if(input.toLowerCase() === 'october'){
  console.log('autumn');
} else if(input.toLowerCase() === 'november'){
  console.log('autumm')
} else if(input.toLowerCase() === 'december'){
  console.log('winter')
}else if(input.toLowerCase() === 'january'){
  console.log('winter')
} else if (input.toLowerCase() === 'february') {
  console.log('winter')
} else if (input.toLowerCase() === 'march') {
  console.log('spring')
}else if (input.toLowerCase() === 'april') {
  console.log('spring')
}else if (input.toLowerCase() === 'may') {
  console.log('spring')
}

else if (input.toLowerCase() === 'june') {
  console.log('summer')
}else if (input.toLowerCase() === 'july') {
  console.log('summer')
}else if (input.toLowerCase() === 'august') {
  console.log('summer')
} else{
  console.log('Invalid month ')
}

*/

//Num3
const weekdays = prompt('What is the day today').trim()

if(weekdays.toLowerCase() === 'sunday'){
  console.log('Sunday is a weekend')
} else if(weekdays.toLowerCase() === 'monday') {
  console.log('Monday is a working day')
}else if(weekdays.toLowerCase() === 'monday') {
  console.log('Monday is a working day')
}else if(weekdays.toLowerCase() === 'tuesday') {
  console.log('Tuesday is a working day')
} else if (weekdays.toLowerCase() === 'wednesday') {
  console.log('Wednesday is a working day')
}else if (weekdays.toLowerCase() === 'thursday') {
  console.log('Thursday is a working day')
}else if (weekdays.toLowerCase() === 'friday') {
  console.log('Friday is a working day')
}else if (weekdays.toLowerCase() === 'saturday') {
  console.log('Saturday is a weekend')
} else{
  console.log('invalid day ')
}



