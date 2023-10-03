# Omnifood

## About Omnifood

We are a technology company first, but with a major focus on consumer well-being through a healthy diet. Most people are very busy with their jobs, family and friends, and other important activities, which doesn't leave much time for cooking. This might lead to a poor diet and lasting health consequences. We want to solve this problem by using an AI-centric approach. Users can use our app to select their diet and foods they like and dislike, and our AI algorithm will create a custom and individual weekly meal plan. But we don't stop there. We partner with restaurants and other cooking partners to actually cook and deliver all meals from the generated meal plans, in selected cities. All this will be packed up in a monthly subscription, where users can choose between receiving one or two meals per day, every single day of the month.

## Branding

Headline: A healthy meal delivered to your door, every single day

Brand color: #e67e22

## Omnifood Website Content

### Summary

The smart 365-days-per-year food subscription that will make you eat healthy again. Tailored to your personal tastes and nutritional needs. We have delivered 250,000+ meals last year!

### Omnifood features

Never cook again!: Our subscriptions cover 365 days per year, even including major holidays.
Local and organic: Our cooks only use local, fresh, and organic products to prepare your meals.
No waste: All our partners only use reusable containers to package all your meals.
Pause anytime: Going on vacation? Just pause your subscription, and we refund unused days.

### How Omnifood works

[Show big app images]

**Your daily dose of health in 3 simple steps**

Tell us what you like (and what not): Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!

Approve your weekly meal plan: Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.

Receive meals at convenient time: Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!

### Omnifood works with any diet

Vegetarian
Vegan
Pescatarian
Gluten-free
Lactose-free
Keto
Paleo
Low FODMAP
Kid-friendly

### Sample meals

**Omnifood AI chooses from 5,000+ recipes**

Meal 1: Japanese Gyozas

- Category: Vegetarian
- Calories: 650
- NutriScore (Registered): 74
- Average rating: 4.9
- Number reviews: 537

Meal 2: Avocado Salad

- Category: Vegan and Paleo
- Calories: 400
- NutriScore (Registered): 92
- Average rating: 4.8
- Number reviews: 441

### We offer a free sample meal

[Create simple form for users to sign up]

Healthy, tasty and hassle-free meals are waiting for you. Start eating well today. You can cancel or pause anytime. And the first meal is on us!

### We have 2 pricing plans

Prices include all applicable taxes. Users can cancel at any time.

Starter: $399 per month

- 1 meal per day
- Order times are between 11am and 9pm
- Delivery is free

Complete: $649 per month

- 2 meal2 per day
- Order 24/7
- Delivery is free
- Get access to latest recipes

### Photo gallery

[Use the 12 photos we provided]

### Customer testimonials

[Photos of customers included]

Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical. (Dave Bryson)
The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore! (Ben Hadley)
Omnifood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now! (Steve Miller)
I got Omnifood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic. (Hannah Smith)

### Section with logos of featured publications [see images]

### Contact information

Address: 623 Harrison St., 2nd Floor, San Francisco, CA 94107
Phone: 415-201-6370
Email: hello@omnifood.com

Social profiles: instagram, facebook, twitter [links to them not available yet]

### Additional links [links not available yet]

Create account
Sign in
iOS app
Android app
About Omnifood
For Business
Cooking partners
Careers
Recipe directory
Help center
Privacy & terms


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



HOW MEDIA QUERY WORKS WITH MAX-WITDTH

@media(max-width:600px) the code will work from 0px-600px anything above will not work again

@media(max-width:1200px) the code will work from 0-1200px, anything above will not work again

The above overrides specific part of the css

if a phone is 400px, both 600 and 1200px will apply
if a phone is 1000px, 0nly 1200px media query will apply because it is greater than 600 and less than 1200px

Breakpoints 

These are viewport width we want our design to change
Based on populat devices is a bad practice

Good strategy
Based on screen width ranges : we will look at most used width of all categories, like phones, tabs and desktop, group them in a logical way before applying breakpoint.
we are not setting  breakpoint at one specific device but between several device sizes

Groups
Phones : 300px-500px breakpoint at 600px
Most Tabs: 600px-900px breakpoint at 900px
landscape tabs: 900-1100px breakpoint 1200px
Destop : 1200px




Perfect strategy: ignore devices and categories, look at web design put a breakpoint where ever the design looks bad.

always use the Good stratey and perfect strategy



@media(max-width: 1200px){
.section-hero {
    background-color: brown;
    /*turn brown color when hit 1200px*/
}
}



@media(max-width: 600px){
    .section-hero {
        background-color:;
        /*turn brown color when hit 1200px*/
    }
    }


### THE PROCESS BEHIND BUILDING A WEBSITE 


### Test and Optimize 

### Make sure website works well in all major browsers(chrome, Firefox, Safari, Edge maybe even old IE)

### Test the website on actual mobile devices, not just DevTools
### Optimize all images, in terms of dimentions and file size
### Fix simple accessibility problems( eg color contrast issues)
### Run the Lighthouse performance test in chrome DevTools and try to fix reported issues.
### Think about Search Engine Optimization (SEO) 


BROWSER SUPPORT, How different web browsers supports different CSS properties 

How to see how different browsers supports different CSS properties 
use (### caniuse.com) some old browsers will not see CSS grid edge, Firefox, chrome Safari (IOS)

Backdrop filter blurs content behind, which does not work in safari unless use webkit, firefox does not work at all.

safari does not support gap property in flex box until 2021, old iphones wont work



### Testing Performance with LIGHTHOUSE TOOL (DEVELOPED BY GOOGLE)


An automated tool used in improving the quality of our pages. check lighthouse from devTool

IMAGE OPTIMIZATION

MAKE YOUR IMAGE DOUBLE REAL IMAGE 
-Rendered image = 550  round it to 600
-double  600 * 2 = 1200 width 
use an app to resize the images
use Squoosh.app to compress images..
always use image.webpe ===> but check how this format is supported by  browsers


use Netlify to host projects
use hover.com to host your sites


