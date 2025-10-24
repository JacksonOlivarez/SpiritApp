const audio = new Audio();
audio.src = "example/file/path.mp3";


// This is to grab HTML Elements, placeholder names for now
const playButton = document.getElementById("PlayButton");
const pauseButton = document.getElementById("PauseButton");
const stopButton = document.getElementById("StopButton");
const volumeSlider = document.getElementById("VolumeSlider");

playButton.addEventListener("click", () => {
    audio.play().catch(err => console.error("Playback Error: ", err))
});

pauseButton.addEventListener("click", () => {
    audio.pause()
})
