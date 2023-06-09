// Creating array to hold colors, comma outside of " " to seperate values
const myColors = ["red", "blue", "green", "orange", "brown", "purple"]
//Index of an array starts at 0 

const messageList = document.getElementById("colorMessages")

// gives the first child of messageList 
messageList.children[0].innerHTML += myColors[3]

myColors[4] = "cyan" 

messageList.children[1].innerHTML += myColors[4]

// adding a value to the end of an array using push()
myColors.push("darksalmon")
messageList.children[2].innerHTML += myColors

// remove a value from the end of the array 
myColors.pop()
messageList.children[3].innerHTML += myColors

// remove a value from the start of the array
myColors.shift() 
messageList.children[4].innerHTML += myColors

// add a value to the start of the array
myColors.unshift()
messageList.children[5].innerHTML += myColors

// STARTS @ 2nd index (3rd item) in the array, DELETES 0 items and adds "teal" value to array
myColors.splice(2, 0, "teal") 
messageList.children[6].innerHTML += myColors

// sorting the array using sort() 
myColors.sort()
messageList.children[7].innerHTML += myColors

const darkColors = ["darkseagreen", "darkgreen", "darkred"]
// const allColors = myColors.concat(darkColors) 

// this method is the short form on the concat methord, simply combines two strings together.
const allColors = [...myColors, ...darkColors]
messageList.children[8].innerHTML += allColors.join(" | ")


// **Checks if the user inputted color (in console) is in the array or not**

// function doYouHaveColor (colorName) {
//     let colorIndex = allColors.indexOf(colorName) 

//     // This essentially means, if the color is in the array, it ill say yes, else no
//     if (colorIndex >= 0) {
//         console.log("Yes, we do have this color")
//     } else {
//         console.log("No, we do not have this color")
//     }
// }

// **Shorter way to do previous function using .included() method**

// function doYouHaveColor (colorName) { 
//     // This essentially means, if the color is in the array, it ill say yes, else no
//     if (allColors.includes(colorName)) {
//         console.log("Yes, we do have this color")
//     } else {
//         console.log("No, we do not have this color")
//     }
// }

// Same as previous function but prints inside webpage rather than console
function doYouHaveColor (colorName) { 
    // This essentially means, if the color is in the array, it ill say yes, else no
    if (allColors.includes(colorName)) {
        document.getElementById("colorResponse").innerHTML = "Yes, we do have that color"
    } else {
        document.getElementById("colorResponse").innerHTML = "No, we do not have that color"
    }
}

const scores = [43, 68, 35, 82]

const scoreMessageList = document.getElementById("scoreMessages").children

// Using filer() method to find any value greater than 50 
const passingScore = scores.filter(score => score > 50)
scoreMessageList[0].innerHTML += passingScore.join(" | ")

// Using map() method to map each method with a function
const doubleScores = scores.map(score => score * 2)
scoreMessageList[1].innerHTML += doubleScores.join(" | ")

// reducing array to single value by running the provided function
const totalDoubleScore = doubleScores.reduce((accumulator, score) => accumulator + score)

scoreMessageList[2].innerHTML += totalDoubleScore

const coloredBoxesSection = document.getElementById("coloredBoxes")

for (color of allColors) {
    coloredBoxesSection.innerHTML += `<div class="box" style="background-color: ${color}"></div>`
}