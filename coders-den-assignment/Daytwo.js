 //1 
 const challenge = '30 Days of JavaScript'

//2
 console.log(challenge) // 30 Days of JavaScript

 //3

 console.log(challenge.length) //output : 21
//4
 console.log(challenge.toUpperCase()) //  30 DAYS OF JAVASCRIPT

 //5
 console.log(challenge.toLowerCase()) // 30 days of javascript

 //6
 console.log(challenge.substring(0, 3))  // 30

 7//
 console.log(challenge.substring(3, 20)) //Days of JavaScrip

 8//
 console.log(challenge.includes('Script')) //true

9// split into an array

console.log(challenge.split()) //[ '30 Days of JavaScript' ]

10//
console.log(challenge.split(''))

11//

const split =  'Facebook, Google,  Microsoft, Apple, IBM, Oracle, Amazon'
console.log(split.split(',')) //convert to Arrays


12//  

console.log(challenge.replace('JavaScript', 'Python'))  //30 Days of Python

const challenges = '30 Days of Javascript'
console.log(challenges.charAt(15)) //s
console.log(challenges.charCodeAt(10))//32
console.log(challenges.lastIndexOf(13))//-1

console.log(challenges.trim())
console.log(challenges.startsWith('30'))//true 

console.log(challenges.endsWith('t'))
console.log(challenges.match(/a/g)) //[a,a,a]
const newChall = '30 Days of'
console.log(newChall.concat('JavasCript'))//30DaysofJavascript
console.log(challenges.repeat(2))//Days ofJavasCript
//30 Days of Javascript



//Level two





console.log("The quote''There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.'")
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log( Number('10') === 10)//true

console.log(Math.round(9.81))              // 10

//Check if 'on' is found in both python and jargon
console.log('python'.includes('on'))
console.log('jargon'.includes('on'))

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 51) + 50)
console.log(Math.floor(Math.random() * 256))



const mainString = 'javaScript'

   const stringIndex = Math.floor(Math.random()*mainString.length)
   console.log(mainString[stringIndex ])

   