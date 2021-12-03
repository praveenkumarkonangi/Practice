
// program to check if the number is even or odd
// take input from the user
let number = prompt("Enter a even number to get LOGIN FORM: ");

//check if the number is even
if(number%2==0 || number==true) {
    let add=document.getElementById("root");
add.innerHTML="<h1>WELCOME TO LOGIN FORM</h1>";
add.innerHTML +="<h1>please login</h1>";
add.innerHTML +="<label>user name</label>";

add.innerHTML +="<input type='text' Placeholder='please enter name' required>";
add.innerHTML +="</br></br>";
add.innerHTML +="<label>email</label>";
add.innerHTML +="<input type='email'placeholder='please enter correct email' required/>";
add.innerHTML +="</br></br>";
add.innerHTML +="<label>password</label>";
add.innerHTML +="<input type='password' placeholder='please enter 8char password' required/>";
add.innerHTML +="</br></br>";       
add.innerHTML +="<label>contact</label>";
add.innerHTML +="<input type='number'placeholde='please enter 10digt number' required/>";
add.innerHTML +="</br></br>";
add.innerHTML +="<input type='radio' >";
add.innerHTML +="female";
add.innerHTML +="<input type='radio' >";
add.innerHTML +="male";
add.innerHTML +="</br></br>"
add.innerHTML +="countary"
add.innerHTML +="<select><option>--selectone</option><option>india</option><option>Afghanistan</option><option>Albania</otpion></select>";
add.innerHTML +="</br></br>"
add.innerHTML +="<button type='button' onclick='alert(\"your response successfully recorded\")'>LOGIN</button>";
} else {  
    let add=document.getElementById("root");
    add.innerHTML ="<h2>given number  is  a odd  please enter even number to get LOGINFORM</h2>";
}