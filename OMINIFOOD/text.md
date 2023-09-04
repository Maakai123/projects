7 Steps to a great Website 

1. Define  the project

-Define WHO the website is for, is it for yourself? for a client of your angency
or your freelancing business.

-Define What the website is for. the purpose of the site, define business and
user goals of your website project which includes providing information, selling something or entertaining

for example Business goal: Selling premium dog food
user goal example:Finding high-quality dog food for good price 

-Define a target audeience. Be really specific if possible and if it majkes sense for your website 
Example Women 20 to 40 years old, living in Europe, earning over 2000$ with a passion for dogs 


2.PLAN THE PROJECT 

Plan and gather website content: copy(text),images, videos etc 
Content is usually provided by the client, but you can help them produce and find some content

for bigger sites, plan out the sitemap: what pages the site needs, and how they are related to one another.

Based on the content, plan what sections each page needs in order to convey the content's message and in which order

Define the website personality 



3.SKETCH LAYOUT AND COMPONENT IDEAS

The content should always guild the design 

Think about what components you need, and how you can use them in layout patterns(get inspiration from other web design)
Get ideas out of your head: Sketch them with pen and paper or with some design software

This is an iterative process: experiment with different components and layout, until you arrived at a first good solution 

You dont need to skect everything 


4.Design and Build website 

Use decisions, content and sketches from steps1,2 ans 3 to design and build the website with HTML AND CSS(Design in the browser)

You already have the layout and components that you selected in step3.
in this step you need to design the actual visual styles 

create the design baseed on selected website personality, the design guidelines and inspiration
Use the clients branding for design if it exist, designs like colors, typography, icons etc 

5. TEST AND OPTIMIZE 
-Make sure website works well in all major browsers(chrome, firefox, safari, Edge)
-Test the website on actual mobile devices, not just in DevTools 
-Optimize all images, in terms of dimensions and file size 
-fix simple accessibility problems(eg color contrats issues)
-Run the Lighthouse performance test in chrome DevTools and try to fix reported issues 
-Think about Search Engine Optimization (SEO)


6.LAUNCH 

-Upload your website files to a hosting platform. There are countless platform, (Netlify)
-Choose and buy a great domain name.

-MAINTAIN AND UPDATE 

Keep the website content updated over time. if your working with a client, you cancreate a monthly
maintenance contract

-Install analytics software(e.g Google Analytics of Fathom) to get statistics about website users 

A blog should be updated regularly 



# DEFINE THE OMINIFOOD PROJECT 

# Who the website is for ?

For a client

# What the website is for ?
-Business goal: Selling monthly food subscription 
-User goal: Eating well effortlessly, without spending a lot of time and money 

# Define target audience ?

Busy people who like technology, are interested in a healthy diet and have a well-paying job.
.....................................................



# PLANE THE PROJECT 

plan and gather website content 

--No sitemap since its a landing page 


# Define website personality 

 Based on the tech-centerd target audience, as well as the actual product beign sold, we will use the startup/upbeat personality.
 we  might add some elements of the calm/peaceful personality, since the product is all about consumer well-beigned as well


 # Plan page sections

 ## Section 
-Logo + Navigation
-Hero
-Featured in
-How it works
-Meals and list of diets
-Testinonials + Gallery
-Pricing + Features
-CTA call to action 
-Footer 


 ## First Ideas and Sketch

 ## Design and development
 



 ## PRINCIPLE OF RESPONSIVE DESIGN
 --Before starting your project make sure, you start with responsive design.

 --What is Responsive web-design
Design techniques to make a webpage adjust its layout and visual style to any possible screen size(window or viewport size)
in Practice, this means that responsive design makes websites usable on all devices, such as desktop computers,tablets, and mobile phones 

It a set of practices, not a separate technology. its just CSS 


 ##  RESPONSIVE DESIGN INGREDIENTS 

 ## --FLUID LAYOUTS 
-To allow webpage to adapt to current viewport width(or even height)
-Use % percentage(or vh/vw) unit instead of px for elements that should adapt to viewport(usually layout)
-Use max-with instead of width

## --RESPONSIVE UNITS 
-Use rem unit instead of px for most lengths
-To make it easy to scale the entire layout down(or up)automatically

Note: setting 1rem to 10px for easy calculations

## --FLEXIBLE IMAGES
-By default, images dont scale automatically as we change the viewport, so we need to fix that

-Always use % percentage for immage dimensions, together with the max-width property 


## --Media Queries 
-Bring responsive sites to life, allow developers to create different versions of a website for different types of devices because different devices has differnt width.

-To change CSS styles on certain viewport widths(called breakpoints)

We need to start creating a fluid layout,responsive units and Flexible images  from the very begining.



# STRATEGIES IN BUILDING A WEBSITE 

## -- DESKTOP-FIRST 

--Start writing CSS for the desktop: large screen 
--Then, media queries shrink design to smaller screens.

## -- MOBILE-FIRST DEVELOPMENT
Start writing CSS for mobile devices: small screen 
Then, mediad queries expand design to large screen
Forces us to reduces websites and apps to the absolute essentials.


## ---MAX-WIDTH 
If the container width is larger than the specified max width, the the width of the element is equal that value that was specified.

How ever if the container width is lesser than the specified max width,the width of the element will be 100 percent of the conatiner element width.


## --REM 
Root Element font size
Root Element is the HTML element, if we dont define any font size in our HTML 1 REM will be default font size od the browser, 16px
.text{
    /*max-width: 1000px;*/
    background-color: red;
    padding: 100px;
    max-width: 50rem; /*800px*/
    padding: 4rem; /*4*16= 64px*/
    font-size:2rem; /*2*16= 32
    so default changes to 32px because i decalered a font-size
    if font size on html is declared, default wont be 16 again rather 20*/
    /*By default 1rem = 16px *50 = 800*/
}

## NOTE

When building media queries, if you want to build for mobile, you want the length to be smaller you can use leave every element value in rems and just adjust the font size in the html everything will shrink.
always set the set the default or root font-size in html to 10px so it can be easy for calculations but its not perfect because it will always remain 10px and the user cant increase it.

so the best way to go is set font size to the percentage of your browser
html{
    /*font-size: 10px;*/
    /* our fix value 10 / divide default browser value 16 = 0.625* 100 = 62.5%*/
     /*Percentage of user's browser font-size settings*/
    font-size: 62.5%
}
The user can now increase the font size on thier browser, if he/she wants to increase font size to 7.5, just increase it to 12px which 128o.625


https://meet.google.com/qoi-wsfg-gnq

1:33:55


