const video = document.getElementById("video")
const play_btn = document.getElementById("play")
const stop_btn = document.getElementById("stop")
const seek_bar = document.getElementById("progress")
const timestamp = document.getElementById("timestamp")

function toggleVideoStatus(){
    if(video.paused){
        video.play()
    }
    else{
        video.pause()
    }
}

function togglePlayIcon(){
    if(video.paused){
        play_btn.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }
    else{
        play_btn.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
    }
}

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100
}

function secondsToTimeString(duration){
    // Get the minutes
    let mins = Math.floor(duration / 60);
    if(mins < video.duration){
        mins = (String(mins).length < 2? '0':'') + String(mins);
    }

    // Get Seconds
    let secs = Math.floor(duration % 60);
    if(secs < video.duration){
        secs = (String(secs).length < 2? '0':'') + String(secs);
    }
    return `${mins}:${secs}`
}

function updateProgressBar(){
    progress.value = video.currentTime * 100/video.duration

    const currentTime = secondsToTimeString(video.currentTime)
    const videoDuration = secondsToTimeString(video.duration)

    timestamp.innerHTML = currentTime+'/'+videoDuration;
}

video.addEventListener('click', toggleVideoStatus)
video.addEventListener('play', togglePlayIcon)
video.addEventListener('pause', togglePlayIcon)
video.addEventListener('timeupdate', updateProgressBar)
play_btn.addEventListener('click', toggleVideoStatus)
stop_btn.addEventListener('click', stopVideo)
progress.addEventListener('input', setVideoProgress)