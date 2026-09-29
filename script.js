// Elements

const video = document.getElementById("video");
const videoUpload = document.getElementById("videoUpload");
const uploadArea = document.getElementById("uploadArea");
const emptyState = document.querySelector(".empty-state");
const playPause = document.getElementById("playPause");
const backward = document.getElementById("backward");
const forward = document.getElementById("forward");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const mute = document.getElementById("mute");
const volume = document.getElementById("volume");
const fullscreen = document.getElementById("fullscreen");
const videoPlayer = document.querySelector(".video-player");
const download = document.getElementById("download");


// Upload Video

videoUpload.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) {
        return;
    }
    const videoURL = URL.createObjectURL(file);
    video.src = videoURL;

    video.load();
    video.play();

    download.href = videoURL;
    playPause.textContent = "⏸";
    emptyState.style.display = "none";
});


// Play / Pause

playPause.addEventListener("click", function () {

    if (video.paused) {
        video.play();
    } 
    else {
        video.pause();
    }
});

video.addEventListener("play", function () {
    playPause.textContent = "⏸";
});

video.addEventListener("pause", function () {
    playPause.textContent = "▶";
});

video.addEventListener("ended", function () {
    playPause.textContent = "▶";
});


// Backward 10 Seconds

backward.addEventListener("click", function () {
    video.currentTime = Math.max(
        0,
        video.currentTime - 10
    );
});


// Forward 10 Seconds

forward.addEventListener("click", function () {
    video.currentTime = Math.min(
        video.duration,
        video.currentTime + 10
    );
});


// Video Metadata

video.addEventListener("loadedmetadata", function () {
    progress.max = video.duration;

    duration.textContent =
        formatTime(video.duration);
    updateProgressBar();
});


// Video Progress

video.addEventListener("timeupdate", function () {
    progress.value = video.currentTime;

    currentTime.textContent =
        formatTime(video.currentTime);
    updateProgressBar();

});


function updateProgressBar() {
    if (!video.duration) {
        return;
    }

    const percentage = (video.currentTime / video.duration) * 100;

    progress.style.background = `
        linear-gradient(
            to right,
            #9b7cff ${percentage}%,
            #36343e ${percentage}%
        )
    `;

}


// Seek Video

progress.addEventListener("input", function () {
    video.currentTime = progress.value;
});


// Format Time

function formatTime(time) {

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}


// Mute

mute.addEventListener("click", function () {
    video.muted = !video.muted;

    if (video.muted) {
        mute.textContent = "🔇";
    } 
    else {
        mute.textContent = "🔊";
    }
});


// Volume

volume.addEventListener("input", function () {
    video.volume = volume.value;

    updateVolumeBar();

    if (video.volume === 0) {
        video.muted = true;
        mute.textContent = "🔇";
    } 
    else {
        video.muted = false;
        mute.textContent = "🔊";
    }
});


function updateVolumeBar() {

    const percentage = video.volume * 100;

    volume.style.background = `
        linear-gradient(
            to right,
            #9b7cff ${percentage}%,
            #36343e ${percentage}%
        )
    `;

}
updateVolumeBar();


// Fullscreen

fullscreen.addEventListener("click", function () {
    if (!document.fullscreenElement) {
        videoPlayer.requestFullscreen();
    } 
    else {
        document.exitFullscreen();
    }
});


document.addEventListener(
    "fullscreenchange",
    function () {
        const isFullscreen =
            document.fullscreenElement === videoPlayer;

        fullscreen.classList.toggle(
            "is-fullscreen",
            isFullscreen
        );

        fullscreen.setAttribute(
            "aria-label",
            isFullscreen
                ? "Exit fullscreen"
                : "Enter fullscreen"
        );

    }
);


// Keyboard Seek

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowRight") {
        event.preventDefault();

        if (video.duration) {
            video.currentTime = Math.min(
                video.duration,
                video.currentTime + 10
            );
        }
    }

    if (event.key === "ArrowLeft") {
        event.preventDefault();

        if (video.duration) {
            video.currentTime = Math.max(
                0,
                video.currentTime - 10
            );
        }
    }
});


// Drag & Drop Upload

uploadArea.addEventListener(
    "dragover",
    function (event) {
        event.preventDefault();
        uploadArea.classList.add("drag-over");
    }
);


uploadArea.addEventListener(
    "dragleave",
    function () {
        uploadArea.classList.remove(
            "drag-over"
        );
    }
);


uploadArea.addEventListener(
    "drop",
    function (event) {
        event.preventDefault();
        uploadArea.classList.remove(
            "drag-over"
        );

        const file =
            event.dataTransfer.files[0];
        if (
            file &&
            file.type.startsWith("video/")
        ) {
            videoUpload.files = event.dataTransfer.files;

            videoUpload.dispatchEvent(
                new Event("change")
            );

        }

    }
);