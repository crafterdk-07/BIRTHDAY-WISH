// script.js
const video = document.getElementById('bdayVideo');
const overlay = document.getElementById('videoOverlay');

overlay.addEventListener('click', () => {
    video.play();
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.visibility = 'hidden';
    }, 500);
});

// Video khatam hone par wapas play button dikhane ke liye
video.addEventListener('ended', () => {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});