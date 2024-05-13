function fetchRandomJoke() {
	const spinner = document.getElementById("spinner");
	const table = document.getElementById("table");

	spinner.classList.remove("d-none");
	table.classList.add("d-none");

	fetch("https://official-joke-api.appspot.com/random_joke")
		.then((res) => res.json())
		.then((record) => {
			spinner.classList.add("d-none");
			table.classList.remove("d-none");
			document.getElementById("setup").innerHTML = record.setup;
			document.getElementById("punchline").innerHTML = record.punchline;
		})
		.catch(() => {
			spinner.classList.add("d-none");
			alert("Something went wrong!");
		});
}

fetchRandomJoke();

document.getElementById("another-joke").addEventListener("click", fetchRandomJoke);
