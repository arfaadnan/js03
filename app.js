// ************************JavaScript:03(Chapter 14-16)*****************************
// Question 1
// var studentNames = [];

// Question 2


// var studentNames = new Array();


// Question 3

// var stringsArray = ["apple", "banana", "cherry"];


// Question 4

// var numbersArray = [1, 2, 3, 4, 5];

// Question 5

// var booleanArray = [true, false, true];

// Question 6

// var mixedArray = [1, "apple", true, "banana", 42, false];

// Question 7

// var educationQualifications = [
//     "SSC",
//     "HSC",
//     "BCS",
//     "BS",
//     "BCOM",
//     "MS",
//     "M. Phil.",
//     "PhD"
// ];


// document.write("<h1>Available Education Qualifications in Pakistan:</h1>");
// document.write("<ul>");

// for (var i = 0; i < educationQualifications.length; i++) {
//     document.write("<li>" + educationQualifications[i] + "</li>");
// }

// document.write("</ul>");

// Question 8


// var studentNames = ["Student 1", "Student 2", "Student 3"];
// var studentScores = [420, 480, 350];


// var totalMarks = 500;


// for (var i = 0; i < studentNames.length; i++) {
//     var studentName = studentNames[i];
//     var studentScore = studentScores[i];
    
    
//     var percentage = (studentScore / totalMarks) * 100;
    

//     console.log(studentName + ":");
//     console.log("Score: " + studentScore);
//     console.log("Percentage: " + percentage.toFixed(2) + "%");
//     console.log("---------------------------");
// }

// Question 9


// var colors = ["Red", "Green", "Blue"];


// console.log("Original Array: " + colors);


// var colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
// colors.unshift(colorToAddAtBeginning);


// console.log("Updated Array after adding to the beginning: " + colors);


// var colorToAddAtEnd = prompt("Enter a color to add to the end:");
// colors.push(colorToAddAtEnd);


// console.log("Updated Array after adding to the end: " + colors);


// var colorsToAddAtBeginning = prompt("Enter two colors to add to the beginning (comma-separated):");
// var newColors = colorsToAddAtBeginning.split(",");
// colors = newColors.concat(colors);


// console.log("Updated Array after adding two colors to the beginning: " + colors);


// colors.shift();


// console.log("Updated Array after deleting the first color: " + colors);


// colors.pop();


// console.log("Updated Array after deleting the last color: " + colors);


// var indexToAdd = parseInt(prompt("Enter the index to add a color:"));
// var colorToAddAtIndex = prompt("Enter the color to add at index " + indexToAdd + ":");
// colors.splice(indexToAdd, 0, colorToAddAtIndex);

// console.log("Updated Array after adding a color at index " + indexToAdd + ": " + colors);


// var indexToDelete = parseInt(prompt("Enter the index from which to delete color(s):"));
// var numToDelete = parseInt(prompt("Enter the number of colors to delete:"));
// colors.splice(indexToDelete, numToDelete);


// console.log("Updated Array after deleting " + numToDelete + " color(s) from index " + indexToDelete + ": " + colors);

// Question 10



// var studentScores = [85, 92, 78, 95, 88, 90];


// studentScores.sort(function(a, b) {
//     return a - b;
// });

// console.log("Sorted Student Scores (Ascending Order): " + studentScores);

// Question 11



// var cities = ["Karachi", "Lahore", "Chitral", "Peshawar", "Quetta"];

// var selectedCities = [];


// selectedCities.push(cities[0]); 
// selectedCities.push(cities[2]); 
// selectedCities.push(cities[4]); 


// console.log("Selected Cities:", selectedCities);

// Question 12

// var arr = ["This", "is", "my", "cat"];
// var singleString = arr.join(" ");

// console.log(singleString);

// Question 13

// var fifoQueue = [];


// fifoQueue.push("Value 1");
// fifoQueue.push("Value 2");
// fifoQueue.push("Value 3");


// var firstValue = fifoQueue.shift(); 
// var secondValue = fifoQueue.shift(); 
// var thirdValue = fifoQueue.shift(); 


// console.log("First Value:", firstValue);
// console.log("Second Value:", secondValue);
// console.log("Third Value:", thirdValue);

// Qusetion 14


// var lifoStack = [];


// lifoStack.push("Value 1");
// lifoStack.push("Value 2");
// lifoStack.push("Value 3");


// var lastValue = lifoStack.pop(); 
// var secondToLastValue = lifoStack.pop(); 
// var firstValue = lifoStack.pop(); 


// console.log("Last Value:", lastValue);
// console.log("Second to Last Value:", secondToLastValue);
// console.log("First Value:", firstValue);

// Question 15

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// var selectHTML = '<select id="manufacturerSelect">';


// for (var i = 0; i < manufacturers.length; i++) {
//     selectHTML += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>';
// }


// selectHTML += '</select>';


// document.write(selectHTML);



// **************************the end*******************************


















































