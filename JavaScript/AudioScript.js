const audio = new Audio();
audio.src = "example/file/path.mp3";


// This is to grab HTML Elements, placeholder names for now
const playButton = document.getElementById("PlayButton");
const pauseButton = document.getElementById("PauseButton");
const restartButton = document.getElementById("StopButton");
const forwardTenButton = document.getElementById("ForwardTenButton");
const backTenButton = document.getElementById("BackTenButton");
const volumeSlider = document.getElementById("VolumeSlider");

playButton.addEventListener("click", () => {
    audio.play().catch(err => console.error("Playback Error: ", err))
});

pauseButton.addEventListener("click", () => {
    audio.pause()
});

restartButton.addEventListener("click", () => {
    audio.currentTime = 0;
});

forwardTenButton.addEventListener("click", () => {
    audio.currentTime = audio.currentTime + 10;
});
backTenButton.addEventListener("click", () => {
    audio.currentTime = audio.currentTime - 10;
});

