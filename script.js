const NGROK_URL = "https://botanical-onset-chief.ngrok-free.dev";

async function sendDataToPC() {
	const inputField = document.getElementById("userInput");
	const responseParagraph = document.getElementById("backendResponse");
	const payload = {
		user_text: inputField.value
	};

	responseParagraph.innerText = "Sending to servers";

	try {
		const response = await fetch(`${NGROK_URL}/api/submit`){
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"ngrok-skip-browser-warning": "true"
			},
			body: JSON.stringify(payload)
		})
		const data = await response.json();

		responseParagraph.innerText =  data.message;
		inputField.value = "";
	} catch (error) {
		console.error("Connect Failed:", error);
		responseParagraph.innerText = "Error: Couldn't connect to server";
	}
}
