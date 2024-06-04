//creating event

const ourAudio = document.getElementById("groovy-audio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const stopBtn = document.getElementById("stopBtn");
const skipBack = document.getElementById("skipBack");
const skipFor = document.getElementById("skipFor");

//adding reusable funcions

function playAction(SampleAudio) {
  SampleAudio.play();
}

function pauseAction(SampleAudio) {
  SampleAudio.pause();
}

function stopAction(SampleAudio) {
  SampleAudio.pause();
  ourAudio.currentTime = 0;
}

function skipBackAction(SampleAudio) {
  SampleAudio.pause();
  ourAudio.currentTime -= 5;
}

function skipForAction(SampleAudio) {
  SampleAudio.pause();
  ourAudio.currentTime += 5;
}

//event listener

playBtn.addEventListener("click", () => playAction(ourAudio));

pauseBtn.addEventListener("click", () => pauseAction(ourAudio));

stopBtn.addEventListener("click", () => stopAction(ourAudio));

skipBack.addEventListener("click", () => skipBackAction(ourAudio));

skipFor.addEventListener("click", () => skipForAction(ourAudio));
