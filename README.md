# Custom Video Player

A modern and responsive video player built with HTML, CSS, and JavaScript.
The project allows users to upload a local video, play it directly in the browser, control playback, adjust the volume, seek through the video, enter fullscreen mode, and download the selected video.

## Features

- Upload videos directly from your device
- Drag and drop video files
- Play and pause controls
- Skip forward and backward by 10 seconds
- Interactive video progress bar
- Current time and total duration display
- Mute and unmute
- Volume control
- Fullscreen mode
- Download the selected video
- Responsive design
- Modern dark UI with custom styling

## Technologies

- HTML5
- CSS3
- JavaScript
- HTML5 Video API
- Browser File API
- Fullscreen API

## Project Structure

video-player/
│
├── index.html
├── style.css
├── script.js
└── README.md

## How to Run

No installation or external dependencies are required.

1. Clone the repository:

```bash
git clone https://github.com/basmalamohamedd35/custom-video-player.git
```

2. Open the project folder.

3. Open `index.html` in your browser.

That's it.

## How to Use

1. Click **Choose Video** or drag and drop a video file into the upload area.
2. The selected video will appear in the player.
3. Use the player controls to:

   * Play or pause the video
   * Skip 10 seconds backward or forward
   * Adjust the playback position
   * Mute or unmute the audio
   * Change the volume
   * Enter fullscreen mode
   * Download the video

## Supported Formats

The player accepts common browser-supported video formats through:

```html
<input type="file" accept="video/*">
```

Actual playback support depends on the browser and the video's codec.

## Browser Compatibility

The project uses standard browser APIs and should work in modern browsers that support HTML5 video.
Recommended browsers:
* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## Future Improvements

Possible future improvements include:

* Video file information and metadata
* Custom playback speed
* Picture-in-picture mode
* Subtitle support
* Playlist support
* Keyboard shortcuts
* Additional video player themes

## License

This project is created for learning and educational purposes.