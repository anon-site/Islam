const playlistItems = document.querySelectorAll(".playlist-item");
const audioPlayer = document.getElementById("audioPlayer");
const volumeRange = document.getElementById("volume-range");
const progressBar = document.getElementById("progress-bar");
const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const shuffleBtn = document.getElementById("shuffleBtn");
const currentTimeElement = document.getElementById("current-time");
const totalTimeElement = document.getElementById("total-time");
const playlistToggle = document.getElementById("playlistToggle");
const closePlaylist = document.getElementById("closePlaylist");
const playlist = document.getElementById("playlist");
const infoCard = document.querySelector(".mobile-info-card");
const infoTitle = document.querySelector(".info-content h3");
const infoDescription = document.querySelector(".info-content p");

let currentSongIndex = 0;
let isSongLoaded = false;

const songs = [
  "song/استميتو وهبوا الجحيم.mp3",
  "https://ia600901.us.archive.org/13/items/20250906_20250906_0412/%D8%A7%D9%84%D9%89%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AC%D9%85%D8%B9%D8%A7%20%D8%AA%D9%86%D8%A7%D8%AF%D9%88%D8%A7%20%D8%B3%D8%B1%D8%A7%D8%B9%D8%A7%20%20%D8%A7%D9%86%D8%A7%D8%B4%D9%8A%D8%AF%20%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.mp3",
  "song/نشيد انا في الحرب العوان  ANA FI ALHARB NASHEED.mp3",
  "song/نشيد انتفض او مت اذا شئت شهيدا   INTAFID NASHEED.mp3",
  "song/نشيد بقايا المجد  BAQAYA ALMAJD NASHEED.mp3",
  "song/حماة الدار.mp3",
  "song/نشيد ذكر الظالم  THAKIR ALDHALEM NASHEED.mp3",
  "song/نشيد رسمت اسرتنا  RASAMAT USRATUNA NASHEED.mp3",
  "song/نشيد رصوا الصفوف  RUSSU ALSUFUF NASHEED.mp3",
  "song/سألوا الأحزاب.mp3",
  "song/شريعتنا.mp3",
  "song/صامدون.mp3",
  "song/نشيد في دياجير الظلام  FI DYAJIR ALZALAM NASHEED.mp3",
  "song/في سبيل الله.mp3",
  "song/نشيد الله اعلى واكبر  ALLAH ALA WA AKBAR NASHEED.mp3",
  "song/نشيد حاربوه ياعداه  HARIBUHU YAUDAHU NASHEED.mp3",
  "song/نشيد هاك قلبي ودمي  HAKA QALBI WA DAMI NASHEED.mp3",
  "song/نشيد يارفيق الدرب  YA RAFIQ ALDARB NASHEED.mp3",
  "song/ياشباب قد اناب.mp3"
];

const songInfo = [
  {
    title: "استميتو وهبوا الجحيم",
    description: "نشيد قوي يبعث الحماس والثبات في النفوس"
  },
  {
    title: "الى الله جمعا تنادوا سراعا",
    description: "دعوة للاجتماع والتوحيد تحت راية الإسلام"
  },
  {
    title: "انا في الحرب العوان",
    description: "نشيد البطولة والشجاعة في ساحات القتال"
  },
  {
    title: "انتفض او مت",
    description: "نداء للثورة والتحرر من الظلم والاستبداد"
  },
  {
    title: "بقايا المجد",
    description: "تذكير بمجد الأمة الإسلامية وعزتها"
  },
  {
    title: "حماة الدار",
    description: "نشيد الدفاع عن الوطن والأرض المقدسة"
  },
  {
    title: "ذكر الظالم",
    description: "تذكير بآثار الظلم وضرورة العدل"
  },
  {
    title: "رسمت اسرتنا",
    description: "نشيد الأسرة المسلمة المتماسكة"
  },
  {
    title: "رصوا الصفوف",
    description: "دعوة للوحدة والتضامن في صفوف المسلمين"
  },
  {
    title: "سألوا الأحزاب",
    description: "نشيد التحدي والثبات أمام الأعداء"
  },
  {
    title: "شريعتنا",
    description: "تأكيد على عظمة الشريعة الإسلامية"
  },
  {
    title: "صامدون",
    description: "نشيد الصمود والثبات في وجه التحديات"
  },
  {
    title: "في دياجير الظلام",
    description: "نشيد الأمل والضياء في أحلك الأوقات"
  },
  {
    title: "في سبيل الله",
    description: "نشيد الجهاد والتضحية في سبيل الدين"
  },
  {
    title: "الله اعلى واكبر",
    description: "تسبيح وتعظيم لله تعالى"
  },
  {
    title: "حاربوه ياعداه",
    description: "نداء للمقاومة والجهاد ضد الأعداء"
  },
  {
    title: "هاك قلبي ودمي",
    description: "نشيد التضحية والفداء للدين والوطن"
  },
  {
    title: "يارفيق الدرب",
    description: "نشيد الأخوة والرفقة في طريق الحق"
  },
  {
    title: "ياشباب قد اناب",
    description: "نداء للشباب للعودة إلى طريق الإسلام"
  }
];

var swiper = new Swiper(".swiper", {
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 9,
    perSlideRotate: 3,
  },
  grabCursor: true,
  speed: 700,
  initialSlide: 0,
});

swiper.on("slideChange", () => {
  const newIndex = swiper.realIndex;
  if (newIndex !== currentSongIndex) {
    currentSongIndex = newIndex;
    loadAndPlaySong(currentSongIndex);
    updatePlayPauseIcon(true);
  }
});

function updateSwiperToMatchSong(index) {
  if (swiper.activeIndex !== index) {
    swiper.slideTo(index);
  }
}

function updatePlaylistHighlight(index) {
  playlistItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active-playlist-item");
    } else {
      item.classList.remove("active-playlist-item");
    }
  });
}

function loadAndPlaySong(index) {
  audioPlayer.src = songs[index];
  playSong();
  updatePlaylistHighlight(index);
  updateSwiperToMatchSong(index);
  updateInfoCard(index);
  isSongLoaded = true;
}

function updateInfoCard(index) {
  if (infoCard && infoTitle && infoDescription) {
    const info = songInfo[index];
    if (info) {
      infoTitle.textContent = info.title;
      infoDescription.textContent = info.description;
      
      // إضافة تأثير fade
      infoCard.style.opacity = '0.7';
      setTimeout(() => {
        infoCard.style.opacity = '1';
      }, 200);
    }
  }
}

function pauseSong() {
  audioPlayer.pause();
  updatePlayPauseIcon(false);
}

function playSong() {
  audioPlayer.play();
  updatePlayPauseIcon(true);
}

function togglePlayPause() {
  if (!isSongLoaded) {
    loadAndPlaySong(currentSongIndex);
    isSongLoaded = true;
  } else if (audioPlayer.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

function updatePlayPauseIcon(isPlaying) {
  if (isPlaying) {
    playPauseIcon.classList.add("fa-pause");
    playPauseIcon.classList.remove("fa-play");
  } else {
    playPauseIcon.classList.add("fa-play");
    playPauseIcon.classList.remove("fa-pause");
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadAndPlaySong(currentSongIndex);
  swiper.slideTo(currentSongIndex);
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadAndPlaySong(currentSongIndex);
  swiper.slideTo(currentSongIndex);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function updateTimeDisplay() {
  const currentTime = audioPlayer.currentTime;
  const duration = audioPlayer.duration;
  
  currentTimeElement.textContent = formatTime(currentTime);
  
  if (duration && !isNaN(duration)) {
    totalTimeElement.textContent = formatTime(duration);
  }
}

function updateDurationDisplay() {
  const duration = audioPlayer.duration;
  if (duration && !isNaN(duration)) {
    totalTimeElement.textContent = formatTime(duration);
    progressBar.max = duration;
  }
}

playlistItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentSongIndex = index;
    loadAndPlaySong(index);
    // إغلاق القائمة الجانبية في وضع الهاتف
    if (window.innerWidth <= 900) {
      closePlaylistHandler();
    }
  });
});

playPauseBtn.addEventListener("click", togglePlayPause);
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

audioPlayer.addEventListener("loadedmetadata", () => {
  updateDurationDisplay();
  progressBar.value = audioPlayer.currentTime;
});

audioPlayer.addEventListener("timeupdate", () => {
  if (!audioPlayer.paused) {
    progressBar.value = audioPlayer.currentTime;
    updateTimeDisplay();
  }
});

progressBar.addEventListener("input", () => {
  audioPlayer.currentTime = progressBar.value;
  updateTimeDisplay();
});

progressBar.addEventListener("change", () => {
  playSong();
});

volumeRange.addEventListener("input", () => {
  var newVolume = volumeRange.value;
  audioPlayer.volume = newVolume / 100;
});

audioPlayer.addEventListener("ended", nextSong);

shuffleBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * songs.length);

  if (randomIndex !== currentSongIndex) {
    currentSongIndex = randomIndex;
    loadAndPlaySong(currentSongIndex);
  } else {
    const nextRandomIndex = (randomIndex + 1) % songs.length;
    currentSongIndex = nextRandomIndex;
    loadAndPlaySong(currentSongIndex);
  }
});


// وظائف القائمة الجانبية
function openPlaylist() {
  playlist.classList.add("show");
  document.body.style.overflow = "hidden";
}

function closePlaylistHandler() {
  playlist.classList.remove("show");
  document.body.style.overflow = "auto";
}

// إضافة مستمعي الأحداث للقائمة الجانبية
if (playlistToggle) {
  playlistToggle.addEventListener("click", openPlaylist);
}

if (closePlaylist) {
  closePlaylist.addEventListener("click", closePlaylistHandler);
}

// إغلاق القائمة عند النقر خارجها
if (playlist) {
  playlist.addEventListener("click", (e) => {
    if (e.target === playlist) {
      closePlaylistHandler();
    }
  });
}

// تهيئة النص الأول
document.addEventListener('DOMContentLoaded', () => {
  updateInfoCard(currentSongIndex);
});

// تحديث عرض الوقت كل ثانية
setInterval(() => {
  if (!audioPlayer.paused && isSongLoaded) {
    updateTimeDisplay();
  }
}, 1000);