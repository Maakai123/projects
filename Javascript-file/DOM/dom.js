'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')


const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

/*for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);*/

  //use for Each Method 
  btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});




//BUTTON SCROLLING 


btnScrollTo.addEventListener('click', function(e){
  //co-ordinate
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords)
  
  //current scroll
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  //SCROLLING
   //old way
  /*window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  )
 */
//2
/*
  window.scrollTo({ 
  left: s1cords.left + window.pageXOffset,
   top: s1cords.top + window.pageYOffset,
   behavior: 'smooth',
})
*/

//Modern way 

//take the section we want to scroll to

section1.scrollIntoView({behavior:  'smooth'})
})



//Build Tabbed component 


//Note when using clicked = e.target to fine the individual clicked buttons
//Note that if you click on the span it will also work which is bad
//Then if you add parent e.target.parentElement span=> button but click on button
// => the parent element which is bad, use closest which fine the closest parent of the button
 //Guard clause is an if statement that returns early if some condition is met.
 

 //class on all the button
 const tabs = document.querySelectorAll('.operations__tab')
 const tabsContainer = document.querySelector('.operations__tab-container')
console.log(tabsContainer)

 //for the content text space 
 const tabsContent = document.querySelectorAll('.operations__content')
 console.log(tabsContent)

 //parent 
 tabsContainer.addEventListener('click', function (e) {
  //prevent it from returning null when click in open space between the each btns
  const clicked = e.target.closest('.operations__tab') //each btn
  console.log(clicked)

  //Ignore any clicks where there is Null. (click in between the btns)

  //Guard 
  //if there is no click, return it immediately, since null is falsey it will return true
  //if there is click the return wont work

    /*
  if(clicked){
    clicked.classList.add('operations__tab--active')
  }
  */
  if(!clicked) return 

  //remove class first from each btns
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))

  //remove active class from each contents 
  tabsContent.forEach(con => con.classList.remove('operations__content--active'))

  //Active Tab
  clicked.classList.add('operations__tab--active')


  //Activate content area
  console.log(clicked.dataset.tab)
  //Each dataSet 1 ,2 0r 3 are stored in clicked
  //if i click 2 clicked = 2 automatically content of 2 will be displayed.
  document.querySelector(`.operations__content--${clicked.dataset.tab}`)
  .classList.add('operations__content--active'); //add the content that is active 
   

 })

 //Passing Arguments to Event Handlers 1:15:36pm

 







/******************* *****************
EVENT DELIGATION
*************************************/
// Page Navigations 



/*
//1) method but it has limitations 

document.querySelectorAll('.nav__link').forEach(function(el){
  el.addEventListener('click', function(e){
    e.preventDefault() //stop unneccesary scrolling;
    const id = this.getAttribute('href')// this =current Target
    console.log(id) //return each id #section--1,#section--2,#section--2 when click on each of them
  

//add the scroll to each id's
document.querySelector(id).scrollIntoView({
  behavior:'smooth'
})

  })
})
*/

//2)Method 2 Event deligations

//a Add event listener to common parent element
//b Determine what element originated the event

document.querySelector('.nav__link').addEventListener //Target each links
('click', function(e) {
  e.preventDefault() //stop unneccesary scrolling;

  //Matching strategy: will not allow us click on what is not link

  if(e.target.classList.contains('nav__link')) { // if e.target has the nav__link
  const id = e.target.getAttribute('href');//return each id #section--1,#section--2,#section--2 when click on each of them
  
  document.querySelector(id).scrollIntoView({
    behavior: 'smooth'
  })

  }
})





//////////////////////////////////////////////////////////////////////////

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
/*
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

/*message.style.height = Number.parseFloat(getComputedStyle(message).height, 10)+ 30 + 'px'


/* custom variables  */
//documentElemt = root where the variables are defined 
//change colors on the pages
/*document.documentElement.style.setProperty('--color-primary', 'orangered')


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

//Data attributes 
//They start with the word data, use to store data in the user interface
console.log(logo.dataset.versionNumber)

//clases
logo.classList.add('c','j')
logo.classList.remove('c','j')
logo.classList.toggle('c')
logo.classList.contains('c')


//dont use
logo.className

//Smooth scrolling 
*/

//scrolling effect

/*
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', function(e){
  //co-ordinate
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords)
  
  //current scroll
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset)

  //SCROLLING
   //old way
  /*window.scrollTo(
    s1cords.left + window.pageXOffset,
    s1cords.top + window.pageYOffset
  )
 */
//2
/*
  window.scrollTo({ 
  left: s1cords.left + window.pageXOffset,
   top: s1cords.top + window.pageYOffset,
   behavior: 'smooth',
})



//Modern way 

//take the section we want to scroll to

section1.scrollIntoView({behavior:  'smooth'})
})

 
//EVENTS 

const h1 = document.querySelector('h1')
/*
h1.addEventListener('mouseenter', function(e){
  alert('addEventListener: you are reading the heading : D')
})

const alertH1 = function(e) {
  alert('addEventListener: you are reading the heading : D')
}

h1.addEventListener('mouseenter', alertH1)
//remove event after 3s

setTimeout(()=> h1.removeEventListener('mouseenter', alertH1), 3000)

//WE CAN USE ONMOUSEENTER
//old school, onclick;
/*h1.onmouseenter = function (e) {
  alert('addEventListener: you are reading the heading : D')
}


//GENERATE RANDOM COLORS

//rgb(255,255,255)

//generate colors between 0 and 255


const randomInt = (min, max) => 
Math.floor(Math.random() *(max - min + 1) + min);
console.log(randomInt)
const randomColor = () => 
`rgba(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

console.log( randomColor())

const navLink = document.querySelector('.nav__link')

navLink.addEventListener('click',function(e){
 
  this.style.backgroundColor = randomColor()
  console.log('LINK', e.target)

  //STOP PROPAGATION

  //e.stopPropagation()
})

document.querySelector('.nav__links').addEventListener('click', function(e){
  this.style.backgroundColor = randomColor()
  console.log('CONTAINER', e.target)
}) 

  

  document.querySelector('.nav').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor()
    console.log('NAV', e.target)
},)
  */

//Dom Traversing, 39: 28;
const h1 = document.querySelector('h1')

console.log(h1.querySelectorAll('.highlight'))
//going downwards:child we use querySelector

console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children)

h1.firstElementChild.style.color = 'white'
h1.lastElementChild.style.color = 'orangered'

//Going upwards: parents 
console.log(h1.parentNode);
console.log(h1.parentElement)
h1.closest('.header').style.background = 'var(--gradient-secondary)';
//the whole header conatiner

h1.closest('h1').style.background = 'var(--gradient-primary)'


//going sideaways:siblings

//there is no previous sibling, the first is always the child Element

console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)
console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children)

