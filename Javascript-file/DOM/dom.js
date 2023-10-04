'use strict';

//How to Select Elements

console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const allSections = document.querySelectorAll('.section')
console.log(allSections)
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))



//Creating and inserting elements

//create a new div using dom

const message = document.createElement('div');
//add css to the div message which is created
//To format the div well 
message.classList.add('cookie-message')

//make the div show on the page and also create button with class

message.innerHTML = 'We use cookies to improve functionality and analytics <button class="btn btn--close-cookie">Got it</button>'

//finally insert the  above message and the created div in header
const header = document.querySelector('.header')

//insert the above in first part or child
//It will be inserted above

/******************* *****************
header.prepend(message)
*************************************/

//make it show down or lastchild
//it will show in the last part of the header

header.append(message)

//you can make appaear both up and down
/******************* *****************
header.append(message.cloneNode(true))
*************************************/

//Insert the message before the header or after the header

/******************* *****************
header.before(message)
header.after(message)
*************************************/



/******************* *****************
Delete ELEMENTS 
*************************************/
document
.querySelector('.btn--close-cookie')
.addEventListener('click', function(){
  message.remove()
  /*old way use dom traversing
  message.parentElement.removeChild(message) */
})



/******************* *****************
STYLES, ATTRIBUTES AND CLASSES
*************************************/

//STYLES 
//This styles are inline styles, the once we created ourselves

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height)// wont work, we cant access styles we did not 
//create since its inline styles
//we can use or access  all the real styles
console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).color)

console.log(message.style.backgroundColor)// This will work because
//we set the style ourselves above

//lets use or access all the real styles 
/* parseFloat will convert decimals strings  to numbers*/
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+ 30 + 'px'


/* custom variables  */
//documentElemt = root where the variables are defined 
//change colors on the pages
document.documentElement.style.setProperty('--color-primary', 'orangered')


//ATTRIBUTES 
//src, alt, class and id are attributes 
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
//Absolute version
console.log(logo.src)
//relative
console.log(logo.getAttribute('src'))
console.log(logo.className)

logo.alt = "Beautiful me"

//Non standard
console.log(logo.designer)
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'Bankist')

//10:18

