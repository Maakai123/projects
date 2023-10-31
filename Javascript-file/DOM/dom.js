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
  // Menu fade animation 
  const nav = document.querySelector('.nav')


 //refactor the code 
const handleHover = function (e, /*opacity*/){
  console.log(this) //0.5 0r 1
  if(e.target.classList.contains('nav__link')) {
    const link = e.target; //each links
    const siblings = link.closest('.nav') //Parent then search for all children and siblings
    .querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    //loop through siblings and add opacity
    siblings.forEach(el => {
      //this keyword will point towards bind(), it will be equal to any number passed into bind
     
      if(el !== link ) el.style.opacity = this;
    });

    logo.style.opacity = this;
  }
}



//This wont work 

//nav.addEventListener('mouseover', handleHover(e, opacity))This function needs a function

/*This key word = curent target 
nav.addEventListener('mouseover', function(e){
  handleHover(e, 0.5)
})

//Fade out

nav.addEventListener('mouseout', function(e){
  handleHover(e, 1)
})

*/

//this keyword will point towards bind(), it will be equal to any number passed into bind

//Passing argument into handler, one aug can be passed into the function
nav.addEventListener('mouseover',  handleHover.bind(0.5))
  //bind returns a new function


//Fade out

nav.addEventListener('mouseout',  handleHover.bind(1))



//Sticky Navigation
//scroll is available in window and addEventListener

//scroll fires all the time, it affect performance 
//Method 1

/*
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords)

window.addEventListener('scroll', function() {
  console.log(window.scrollY)
  if(this.window.scrollY > initialCoords.top) {
    nav.classList.add('sticky');
    
  } else nav.classList.remove('sticky')
})

*/

//Method 2 better way using The Intersction Observer API
//This API Helps our code to observe changes to the way a certain Target Element intersect another Element

/*
const obsCallback = function(entries, oberver) {
 entries.forEach(entry => {
   console.log(entry)
 }) 
  

}



const obsOptions = {
  root: null,
  threshold: [0, 0.2] // At zero, = each section or each out of view and it fires immediately, it fires again when = 20 of the page

}


const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1)

*/

//Navigatin sticky should happen, when ever we dont see the header again


const headerInt  = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)

const stickyNav = function(entries) {
 /* entries.forEach(entry => {
    console.log(entry)
  })*/
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) nav.classList.add('sticky'); //if entry is not intersecting 
  else nav.classList.remove('sticky')
}


const headerObserver = new IntersectionObserver(stickyNav, {
  root:null,
  threshold:0,
  rootMargin: `-${navHeight}px`,  //This is a box of -90px that vwill added to our terget Element (HeaderInt) 
  //the distance between the out going page and the one coming in.
})

headerObserver.observe(headerInt)


//Reaveal sections 


const alSections = document.querySelectorAll('.section')

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden')
  //unobserve
  observer.unobserve(entry.target)
}


const sectionObserver = new IntersectionObserver(revealSection, {
  root:null,
  threshold: 0.15,
});

alSections.forEach(function(section){
  sectionObserver.observe(section)
 // section.classList.add('section--hidden'); //hide all sections
})



//Lazy Loading IMAGES

const imgTargets = document.querySelectorAll('img[data-src]') //access only images with data src
const loadImg = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;

  //Replace src with data-src
  entry.target.src = entry.target.dataset.src // main image
  //the image will return a event load, which we can listen for
//when ever the image loads remove lazy loading 

  entry.target.addEventListener('load', function() {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold:0,
  //load the image in the background without user noticing
  rootMargin:'200px'
})

imgTargets.forEach(img => imgObserver.observe(img))


//Building A slider Component
//2:37:12

//slider

//get all the slides 
const sliderFunc = function () {
const slides = document.querySelectorAll('.slide')
//const slider = document.querySelector('.slider')
const btnLeft = document.querySelector('.slider__btn--left')
const btnRight = document.querySelector('.slider__btn--right')
const dotContainer = document.querySelector('.dots')

let currentSlide = 0;
const maxSlide = slides.length;

//increase all slides

//slider.style.transform = 'scale(0.3) translateX(-1200px)' //translateX will move pix to the left
//visible
//slider.style.overflow = 'visible';

//Dots



//functions 

const createDots = function() {
  slides.forEach(function(_,i){ //for slides but we dont need it rather only index 0-3
    dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot" data-slide="${i}"></button>`)
  })
}

// => createDots()


//Activate Dots
const activeDot = function (slide) {
  //remove all active classes
  document.querySelectorAll('.dots__dot').forEach(dot => 
    dot.classList.remove('dots__dot--active'));

  //add the active class we want by using data attributes
  document.querySelector(`.dots__dot[data-slide="${slide}"]`)
  .classList.add('dots__dot--active')
};

//=> activeDot(0)



//loop through each slides
//slides.forEach((s,i) => s.style.transform = `translateX(${100 * i}%)`) //translateX   will start at 100%, the 2nd will start at the end of first image 200%
// 0%,100%, 200%, 300%,  index = 0,  the first one 0 * 100 = 0, when i = 1 1*100 = 100%


//Refactor code 
//function left or right

const goToSlide = function(slide) {
  slides.forEach(
    (s,i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
}


//slides.forEach((s,i) => s.style.transform = `translateX(${100 * i}%)`)
//=> goToSlide(0) //this is the same as above
//Next slide

//Note, when you want to move to next,the first slide is at zero, move next you will increase it from zero

const nextSlide = function() {
//stop the slides when it gets to the last one
  /*If curr slide = maxslide, has reached the last return curent to zero*/ 
  if(currentSlide === maxSlide - 1){ //MaxSlide = 4 its not zero based, the slide will move one more time before returning to the begining,
    //to make it zero base add -1

    currentSlide  = 0;
  } else {
     
    //move to the right, increase the current  slide to 1
   currentSlide++;
  }


  goToSlide(currentSlide)
  //slides.forEach((s,i) => s.style.transform = `translateX(${100 * (i - currentSlide)}%)`)


  // curSlide = 1;  -100%  0%, 200%, 300%,   i = 0, 0-1 = 1, -1 * 100  = -100%, i=1 => 0%
  activeDot(currentSlide)


}


const prevSlide = function(){
  //Note they work same both forward or backward
  if(currentSlide === 0) {
    currentSlide = maxSlide - 1
  } else {
    currentSlide--;
  }
  
  goToSlide(currentSlide)
  activeDot(currentSlide)
}



//refactor the code with initilization functions 

const init = function() {
  goToSlide(0)
  createDots()
  activeDot(0)
}

init()

//Events
btnRight.addEventListener('click', nextSlide )
btnLeft.addEventListener('click',prevSlide)

//use keyboard to make it slide
document.addEventListener('keydown', function(e){
  console.log(e)
  if(e.key === 'ArrowLeft') prevSlide();
  //
  e.key === 'ArrowRight' && nextSlide()
})

//Dots
dotContainer.addEventListener('click', function(e){ //event deligation, 
  //check for class, if its available with or match the element we are interested in
  if(e.target.classList.contains('dots__dot')){
    console.log("dot")
   const slide = e.target.dataset.slide; //the Index is in the  "data-slide${i}"  
    //use destructing since slide and slide are same
    //const {slide} =  e.target.dataset
    //go to slide we just targeted
    goToSlide(slide)
    activeDot(slide)
  }
})

}
sliderFunc()

/******************* *****************
//LIFE CYCLE DOM EVENT
*************************************/

//how fast the images loads, we wamt all our codes to be executed only when the dom is ready
document.addEventListener('DOMContentLoaded', function(e) {
  console.log('HTML parsed and Dom tree built', e)
})


//Load Event 

window.addEventListener('load', function(e) {
  console.log('page fully loaded', e)
})


//before unload

//window.addEventListener('beforeunload', function(e) {
  
 // e.preventDefault()
  //console.log(e)
 // e.returnValue = '';
//})

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
//h1.closest('.header').style.background = 'var(--gradient-secondary)';
//the whole header conatiner

h1.closest('h1').style.background = 'var(--gradient-primary)'


//going sideaways:siblings

//there is no previous sibling, the first is always the child Element

console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)
console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children)

