// JavaScript Code
// Website View Counter

const counter = document.querySelector(".counter-number"); // Finding element in index.html called counter-number.


// Function to update and retrieve view count.
async function updateCounter(){
	let response = await fetch("https://jp74dwgk2jzwhde7cixpa7zsr40idcyx.lambda-url.eu-west-2.on.aws/"); // Storing lambda function.
	let data = await response.json(); // Get Lamda response as data.
	counter.innerHTML = ` Views: ${data}`; // Store updated view count to display on Website.
}

updateCounter(); // Running the Function