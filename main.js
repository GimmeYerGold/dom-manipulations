 // TASK #1


document.querySelector("#thanks button").addEventListener('click',function(){
  alert("Yowch! don't click me so hard!")
})


 // TASK #2

document.querySelector("#double button").addEventListener('click',function(){
	var double = document.querySelector("#compoundInvestment")
	double.innerHTML = double.innerHTML * 2
	 
})

//  // TASK #3

document.querySelector("#color-circle button").addEventListener('click',function(){
  var circle = document.querySelector("#circle-bw")
  if (circle.style.background === "black") {
  		circle.style.background = "white"
}
  else {				
  		circle.style.background = "black"
  	}

})

//  // TASK #4

document.querySelector("#blow-up button").addEventListener('click',function(){

var redCircle = document.querySelector(".circle-red")  




var redCircleStyles = window.getComputedStyle(redCircle)

var oldCircleWidth = parseInt(redCircleStyles.width)
redCircle.style.width = (oldCircleWidth * 2) + "px"

var oldCircleHeight = parseInt(redCircleStyles.height)
redCircle.style.height = (oldCircleHeight * 2) + "px"

if (oldCircleHeight >= 320) {
	redCircle.style.width = 40 + "px"
	redCircle.style.height = 40 + "px"
}

})

// // TASK #5

document.querySelector("#remove button").addEventListener('click',function(){


	var userList = document.querySelector("#userList")
	var inactiveItems = document.querySelectorAll(".inactive")

	while (inactiveItems.length) {

		userList.removeChild(inactiveItems[0])

	inactiveItems = document.querySelectorAll(".inactive")
			
			
	}

})

//  // TASK #6

document.querySelector("#reverse-squares button").addEventListener('click',function(){
 
var boxContainer = document.querySelector("#reverse-squares .answer-box")
var hollywoodSquares = boxContainer.querySelectorAll(".square")
	

for (var i = hollywoodSquares.length; i--;) {
 
	boxContainer.appendChild(hollywoodSquares[i])

}
	
})

// // TASK #7

document.querySelector("#pig-latin button").addEventListener('click',function(){
  
var listContainer = document.querySelector("#pig-latin .answer-box") 
// var listItem = listContainer.querySelector("li")
// var string = listItem.innerHTML

var listItems = listContainer.querySelectorAll("li")

// alert("1: " + listItem.innerHTML.length)
// alert("2: " + string[0])
// alert("3: " + typeof listContainer)
// alert("4: " + listContainer.length)
// alert ("5: " + allListItems)
// alert ("6: " + allListItems.length)

// alert("8: " + string)
// alert("9: " + allListItems[2].innerHTML)

// function reverse(string)


for (var i = 0; i < listItems.length; i++) {
 

	listItems[i].innerHTML = listItems[i].innerHTML.split("").reverse().join("")
	
}



})
// TASK #8

document.querySelector("#cycle-image button").addEventListener('click',function(){

var image = document.querySelector("#city-img")

var lastdigit = image.src.length


	
var i = parseInt(image.src.substring(lastdigit-1))

i = i + 1

image.src = image.src.substring(0, [lastdigit-1]) + i 

})