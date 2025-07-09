function startListening() {
  const recognition = new webkitSpeechRecognition();
  recognition.lang = 'en-US';
  recognition.onresult = (event) => {
    document.getElementById("userInput").value = event.results[0][0].transcript;
  };
  recognition.start();
}

function respondToUser() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let responseText = "I'm not sure how to help with that yet.";

  if (input.includes("time")) {
    responseText = `The current time is ${new Date().toLocaleTimeString()}`;
  } else if (input.includes("date")) {
    responseText = `Today is ${new Date().toLocaleDateString()}`;
  } else if (input.includes("hello")) {
    responseText = "Hi there! I'm Pluto, your assistant.";
  }

  document.getElementById("response").innerText = responseText;
  speak(responseText);
}

function speak(text) {
  const synth = window.speechSynthesis;
  const utter = new SpeechSynthesisUtterance(text);
  synth.speak(utter);
}