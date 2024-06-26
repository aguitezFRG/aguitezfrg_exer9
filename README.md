## FRANC ROGER GLASON P. AGUITEZ
## 2022-01775 
## CMSC 100 - UV2L


Task: Design the new e-commerce website for Lazado. While also implementing useState react methods to modify contents of an object/variable/array


## Code Description:
**I.**  ***App.js***
 - contains the blocks of code that the browser uses (html elements)

**II.** ***App.css***
 - external stylesheet that stylizes the App.js html elements
 - employed onhover transition animations to make the website more lively

**III.** ***items.js, menu.js and cart.js***
 - component js files containing the html elements and methods found specifically in that component
 - uses mapping to show elements in an array

## How to Use?
*Assuming that you've already set your directory to the one containing the essential files*

**I.** ***Installing the necessary modules (make sure you have npm/nodejs installed):***
> 1. Open a terminal of your choice and type `npm i`
> 2. Wait for a few moments while frequently checking the status of your download
> 3. When you see the message `Run `npm audit` for details.` on your terminal, the download is complete

**II.** ***Proceed to these steps if you successfully installed the necessary module***
> 1. On your *wsl terminal* type `node server.js`
    - this opens or sets up the server hosting your react app 
> 2. A browser tab would open up with the url `http://localhost:3000/`
> 3. You can wait until node finishes compiling (web loads) or you could head back to the terminal and wait for the message `webpack compiled successfully` to appear
> 4. If one of the three scenarios in the previous number is observed, the react app is now running/online
> 5. Clicking the **Add to Cart** button of logs to the console the item being `Added successfully`
    - press `Ctrl + Shift + C` (Windows) to open the ***Inspect Element mode*** of the browser
> 6. After adding an item to the cart, you also have an option to remove said item
    - if you had 2 iPhones in your cart, if you hit remove both would get wiped
    - item quantity and total price is also shown

## Difficulties Encountered:
> 1. The author had a difficult time understanding what bullet B **(Functionality)** in the exercise handout meant
> 2. The author had a difficult time figuring out how to effectively use useState
> 3. The author had a difficult time applying styles to hovered elements. Specifically how to modify elements related to the hovered element
> 4. The author experienced difficulties in passing around the cart array for modification