function validateEmail(email){
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}
function signUp(event) 
{
	event.preventDefault();
let email = document.getElementById("signup-email").value;
let password = document.getElementById("signup-password").value;
if (!validateEmail(email)){
document.getElementById("signup-message").innerText ="Invalid email format";
	return;  
}
localStorage.setItem("userEmail", email);  
localStorage.setItem("userPassword", password);
window.location.href = "signin.html";
}
function signIn(event)
{
	event.preventDefault();
let email = document.getElementById("signin-email").value;
let password = document.getElementById("signin-password").value;
let savedEmail = localStorage.getItem("userEmail");
let savedPassword = localStorage.getItem("userPassword");
if (!validateEmail(email)) 
{
	document.getElementById("signin-message").innerText ="Incorrect credentials";
	return;
}
if (email === savedEmail && password === savedPassword) 
{
 localStorage.setItem("loggedIn", "true");
 window.location.href = "dashboard.html";
}
	
	}

function loadProfile(){
	let email = localStorage.getItem("userEmail");
	if (!email){
		window.location.href="signin.html";
		return;
	}
document.getElementById("welcome-message").innerText='welcome,${email}';
document.getElementById("profile-email").innerText='Email:${email}';
}
function signOut()
{
localStorage.removeItem("loggedIn");
window.location.href = "signin.html";
}
function signUp(event) {
    event.preventDefault();

    let email = document.getElementById("signup-email").value;
    let password = document.getElementById("signup-password").value;
    let error = document.getElementById("signup-error");

    error.innerText = "";

    if (!validateEmail(email)) {
        error.innerText = "Please enter a valid email address.";
        return;
    }

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    window.location.href = "signin.html";
}



