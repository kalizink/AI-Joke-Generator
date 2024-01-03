function showJoke() {
	let showJoke = document.querySelector("#display-joke");
	let generateJoke = document.querySelector("#generate-joke");
	generateJoke.classList.add("hide");
	showJoke.innerHTML = "hi";
}

function generateJoke() {
	let generateJoke = document.querySelector("#generate-joke");
	generateJoke.innerHTML = "Generating a joke for you... please wait";
	let apiKey = "2ce1e1bf2899t12d0f6obada63d3f945";
	let context = "you a a witty dad";
	let prompt = "tell me a funny joke about animals";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
	axios.get(apiUrl).then(showJoke);
}
let button = document.querySelector("#button");
button.addEventListener("click", generateJoke);
