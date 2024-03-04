// //----------------------Chapter no.09 - 11----------------------

// //---------------------------Q1---------------------------
// var city = prompt("Enter your city name:");

// if(city == "karachi"){
//     document.write("<h1>Welcome to City of lights</h1>");
// }else{
//     document.write("");
// }

// //---------------------------Q2---------------------------
// var gender = prompt("Enter your gender:");

// if(gender == "male"){
//     document.write("Good Morning Sir.");
// }
// else if(gender == "female"){
//     document.write("Good Morning Ma'am.");
// }

// //---------------------------Q3---------------------------
// var red = prompt("Enter the 1st color of traffic signal");
// var yellow = prompt("Enter the 2nd color of traffic signal");
// var green = prompt("Enter the 3rd color of traffic signal");

// document.write("<table>");

// document.write("<tr>");
// document.write("<td>" + "<b>" + "Signal Color" + "</b>" + "</td>");
// document.write("<td>" + "<b>" + "message" + "</b>" + "</td>");
// document.write("</tr>");

// document.write("</table");

// document.write("<table>");

// document.write("<tr>");
// document.write("<td>" + red +"</td>");
// document.write("<td>" + "Must Stop" +"</td>");
// document.write("</tr>");

// document.write("</table");

// document.write("<table>");

// document.write("<tr>");
// document.write("<td>" + yellow +"</td>");
// document.write("<td>" + "Ready to move" +"</td>");
// document.write("</tr>");

// document.write("</table");

// document.write("<table>");

// document.write("<tr>");
// document.write("<td>" + green +"</td>");
// document.write("<td>" + "Move" +"</td>");
// document.write("</tr>");

// document.write("</table");

// //---------------------------Q4---------------------------
// var feul = prompt("Enter your fuel in (ltr):")
// if(feul <= "0.25"){
//     document.write("Please refill the fuel in your car");
// }

// //---------------------------Q5---------------------------
// a
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }//this statement is true

// b
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }//this statement is false

// c
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }//this statement is false
// if (c === 13){
// alert("condition 2 is true");
// }//this statement is true
// if (++c < 14){
// alert("condition 3 is true");
// }//this statement is false
// if(c === 14){
// alert("condition 4 is true");
// }//this statement is true

// d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }//this statement is true

// e
// if (true){
//     alert("True");
//     }//this statement is true
//     if (false){
//     alert("False");
//     }//this statement is false

// f
// if("car" < "cat"){
//     alert("car is smaller than cat");
// }//this statement is true

// //---------------------------Q6---------------------------
// var totalMarks1 = +prompt("Enter total marks of 1st subject:");
// var totalMarks2 = +prompt("Enter total marks of 2nd subject:");
// var totalMarks3 = +prompt("Enter total marks of 3rd subject:");
// var totalMarks = totalMarks1+totalMarks2+totalMarks3;
// var obtMarks1 = +prompt("Enter obtained marks of 1st subject:");
// var obtMarks2 = +prompt("Enter obtained marks of 2nd subject:");
// var obtMarks3 = +prompt("Enter obtained marks of 3rd subject:");
// var totalObtMarks = obtMarks1 + obtMarks2 + obtMarks3;
// var percentage1 = +(obtMarks1/totalMarks1)*100;
// var percentage2 = +(obtMarks2/totalMarks2)*100;
// var percentage3 = +(obtMarks3/totalMarks3)*100;
// var totalpercent = totalObtMarks/totalMarks*100;
// var grade;

// if(percentage1 >= "80"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }else if(percentage1 >= "70"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }else if(percentage1 >= "60"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }else if(percentage1 < "60"){
//     document.write("<br>Total Marks: " + totalMarks);
//     document.write("<br>Marks Obtained: " + totalObtMarks);
//     document.write("<br>Percentage: " + totalpercent + "%");
//     document.write("<br>Grade: Fail");
//     document.write("<br>Remarks: Sorry");
// }

// //---------------------------Q7---------------------------
// var num1 = prompt("Guess a secret number from 1-10:");
// var num2 = 7;
// if(num1 == num2){
//     document.write("<h1>Bingo! Correct answer.</h1>");
// }else{
//     document.write(num1 + " is not secret number");
// }

// //---------------------------Q8---------------------------
// var num = prompt("Enter a number:");
// if (num %3 == 0) {
//   document.write(num + " is divisible by 3");
// }
// else{
//     document.write(num + " is not divisible by 3")
// }

// //---------------------------Q9---------------------------
// var num = prompt("Enter a number:");
// if(num %2 == 0){  //i learn this in my university
//     document.write(num + " number is even");
// }else{
//     document.write(num + " number is odd");
// }

// //--------------------------Q10---------------------------
// var temp = prompt("Enter a temperature");
// if(temp > "40"){
//     document.write("It is too hot outside.");
// }else if(temp > "30"){
//     document.write("The Weather today is Normal.");
// }else if(temp > "20"){
//     document.write("Today’s Weather is cool.");
// }else if(temp > "10"){
//     document.write("OMG! Today’s weather is so Cool.");
// }

// //--------------------------Q11---------------------------
// var num1 = +prompt("Enter number 1");
// var opt = prompt("Enter operator");
// var num2 = +prompt("Enter number 2");

// if(opt == "+"){
//     document.write(num1 + num2);
// }
// else if(opt == "-"){
//     document.write(num1 - num2);
// }
// else if(opt == "*"){
//     document.write(num1 * num2);
// }
// else if(opt == "/"){
//     document.write(num1 / num2);
// }
// else if(opt == "%"){
//     document.write(num1 % num2);
// }
// else{
//     document.write("Kindly insert a number");
// }

// //----------------------Chapter no.12 - 13----------------------

// //---------------------------Q1---------------------------
// var char = prompt("Enter character:");
// if(char >= 0){
//     document.write(char + " is number");
// }else if(char.toUpperCase() == char){
//     document.write(char + " is Upper case character");
// }else if(char.toLowerCase() == char){
//     document.write(char + " is lower case character");
// }

// //---------------------------Q2---------------------------
// var num1 = prompt("Enter a 1st integer:");
// var num2 = prompt("Enter a 2nd integer:");

// if(num1 > num2){
//     document.write(num1 + " is greater than " + num2)
// }else if(num1 == num2){
//     document.write(num1 + " is equals to " + num2)
// }

// //---------------------------Q3---------------------------
// var num = prompt("Enter a number:");
// if(num > 0){
//     document.write("The number is positive");
// }else if(num == 0){
//     document.write("The number is zero");
// }else{
//     document.write("The number is negative");
// }

// //---------------------------Q4---------------------------
// var vowels = prompt("Enter a character:");
// if(vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u"){
//     document.write(vowels + " is vowel");
// }else{
//     document.write(vowels + " is not vowel");
// }

// //---------------------------Q5---------------------------
// var password = "saylaniSmit";
// var checkPass = prompt("Please enter your password:");
// if(checkPass == password){
//     document.write("Correct! The password you entered matches the original password.");
// }else{
//     document.write("Incorrect password");
// }

// //---------------------------Q6---------------------------
// var greeting;
// var hour = "13";
// if (hour < "18") {
//   greeting = "Good day";
//   document.write(greeting);
// } else {
//   greeting = "Good evening";
//   document.write(greeting);
// }

// //---------------------------Q7---------------------------
// var time = prompt("Enter time in 24 hour's format");
// if(time >= "0000" && time < 1200){
//     document.write("Good Morning!");
// }else if(time >= 1200 && time < 1700){
//     document.write("Good afternoon!");
// }else if(time >= 1700 && time < 2100){
//     document.write("Good evening!");
// }else if(time >= 2100 && time < 2359){
//     document.write("Good night!");
// }