console.log('Hello world')

//Set current year
const year = document.querySelector('.year')
const currentYear = new Date().getFullYear();

year.textContent = currentYear


//Make mobile navigation work 
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function(){
    //classList.toggle will check if nav-open is available? then will remove it
    //classList.toggle will also check if nav-0pen is removed, then add it
    headerEl.classList.toggle("nav-open")
})

///////////////////////////////////////////////////////////////////////////
//Smooth scrolling, make it  work on all browsers

// Target all links on the page
// use this script in html  to make it work in safari browsers  https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

const allLinks = document.querySelectorAll("a:link"); // choose A tags connected links

allLinks.forEach(function (link) {
    link.addEventListener("click", function(e) {
        e.preventDefault()
        const href = link.getAttribute("href") //get Attribute href;

        //Scroll back to top 
        if(href ===  "#")
        window.scrollTo({
       top: 0,
       behavior: "smooth",
    });
    //Scroll to other links

    if(href !== "#" && href.startsWith("#")){
        const sectionEl = document.querySelector(href);
        console.log(sectionEl)
        sectionEl.scrollIntoView({behavior: "smooth"})
    }

    //close mobile navigation
    //if link of main-nav-link are displaying, toggle nav-open

    })
})

//26:56..













//////////////////////////////////////////////////////////
// we want to observe hero section, sticky should start working only when 
// the Section hero move out of the view port
//STicky navigation 

const sectionHeroEl = document.querySelector(".section-hero")

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0]; //first entry
        console.log(ent)

        if(ent.isIntersecting === false ) {
            //Body should addclassList sticky
            document.body.classList.add("sticky")
        }

        if(ent.isIntersecting === true) {
            //Body should reomoveclassList sticky if true
            document.body.classList.remove("sticky")
        }
    },
    {
        //in the viewport
        root: null,//viewport
        threshold : 0, // when leaving the view port
        rootMargin: "-80px" // start from here
    }
);

obs.observe(sectionHeroEl)








// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");// This will add flex gap to
    //Safari  incase it does not support flex box gap==> check Css file (Last part)
  }
  checkFlexGap();

