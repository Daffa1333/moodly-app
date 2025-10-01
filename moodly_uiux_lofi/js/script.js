const playerContainer = document.querySelector('.player-container');
const songTitle = document.getElementById('song-title');
const songArtist = document.getElementById('song-artist');
const audioSource = document.getElementById('audio-source');
const progressContainer = document.querySelector('.progress-container');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const prevBtn = document.getElementById('prev-btn');
const playBtn = document.getElementById('play-btn');
const nextBtn = document.getElementById('next-btn');
const albumArt = document.querySelector('.album-art');
const background = document.querySelector('.background-image');
const playIcon = document.querySelector('.play-pause img');

// Ganti dengan data lagu Anda
// Buat folder 'assets' di dalam 'lofi', lalu masukkan file musik dan gambar Anda
const songs = [
    {
        title: 'Lost in Thought',
        artist: 'Lofi Beats',
        audio: 'assets/music-1.mp3', // Ganti dengan file audio Anda
        cover: 'assets/cover-1.jpg'  // Ganti dengan gambar cover Anda
    },
    {
        title: 'Midnight Stroll',
        artist: 'Chillhop',
        audio: 'assets/music-2.mp3', // Ganti dengan file audio Anda
        cover: 'assets/cover-2.jpg'  // Ganti dengan gambar cover Anda
    },
    {
        title: 'Rainy Day',
        artist: 'Study Vibes',
        audio: 'assets/music-3.mp3', // Ganti dengan file audio Anda
        cover: 'assets/cover-3.jpg'  // Ganti dengan gambar cover Anda
    }
];

let songIndex = 0;

// Memuat lagu pertama saat halaman dibuka
loadSong(songs[songIndex]);

function loadSong(song) {
    songTitle.innerText = song.title;
    songArtist.innerText = song.artist;
    audioSource.src = song.audio;
    albumArt.src = song.cover;
    background.style.backgroundImage = `url(${song.cover})`;
}

function playSong() {
    playerContainer.classList.add('play');
    playIcon.src = 'assets/pause.svg'; // Ganti dengan path ikon pause Anda
    playIcon.alt = 'Pause';
    audioSource.play();
}

function pauseSong() {
    playerContainer.classList.remove('play');
    playIcon.src = 'assets/play.svg'; // Ganti dengan path ikon play Anda
    playIcon.alt = 'Play';
    audioSource.pause();
}

function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;

    // Update time display
    if (duration) {
        durationEl.textContent = formatTime(duration);
    }
    currentTimeEl.textContent = formatTime(currentTime);
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audioSource.duration;

    audioSource.currentTime = (clickX / width) * duration;
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Event Listeners
playBtn.addEventListener('click', () => {
    const isPlaying = playerContainer.classList.contains('play');
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audioSource.addEventListener('timeupdate', updateProgress);
audioSource.addEventListener('ended', nextSong);

progressBar.addEventListener('click', setProgress);
