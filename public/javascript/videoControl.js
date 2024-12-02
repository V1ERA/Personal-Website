function enableVideo() {
    const video = document.getElementById('background-video');
    const clickText = document.getElementById('click-to-play');
    
    clickText.style.display = 'none';
    
    video.muted = false;
    video.volume = 0.2;
    video.play();
}
