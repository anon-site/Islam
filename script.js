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

// عناصر المشاركة
const shareBtn = document.getElementById("shareBtn");
const shareModal = document.getElementById("shareModal");
const closeShare = document.getElementById("closeShare");
const shareSongImage = document.getElementById("shareSongImage");
const shareSongTitle = document.getElementById("shareSongTitle");
const shareSongDescription = document.getElementById("shareSongDescription");
const shareText = document.getElementById("shareText");
const copyLink = document.getElementById("copyLink");
const shareWhatsApp = document.getElementById("shareWhatsApp");
const shareTelegram = document.getElementById("shareTelegram");
const shareTwitter = document.getElementById("shareTwitter");
const shareFacebook = document.getElementById("shareFacebook");

// عناصر التكرار
const repeatBtn = document.getElementById("repeatBtn");

let currentSongIndex = 0;
let isSongLoaded = false;

// متغيرات التكرار
let repeatMode = 'off'; // 'off', 'one', 'all'

const songs = [
  "https://dn721602.ca.archive.org/0/items/20250906_20250906_0433/%D8%A7%D8%B3%D8%AA%D9%85%D9%8A%D8%AA%D9%88%20%D9%88%D9%87%D8%A8%D9%88%D8%A7%20%D8%A7%D9%84%D8%AC%D8%AD%D9%8A%D9%85.mp3",
  "https://ia600901.us.archive.org/13/items/20250906_20250906_0412/%D8%A7%D9%84%D9%89%20%D8%A7%D9%84%D9%84%D9%87%20%D8%AC%D9%85%D8%B9%D8%A7%20%D8%AA%D9%86%D8%A7%D8%AF%D9%88%D8%A7%20%D8%B3%D8%B1%D8%A7%D8%B9%D8%A7%20%20%D8%A7%D9%86%D8%A7%D8%B4%D9%8A%D8%AF%20%D8%A7%D8%B3%D9%84%D8%A7%D9%85%D9%8A%D8%A9.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%A7%D9%86%D8%A7%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%AD%D8%B1%D8%A8%20%D8%A7%D9%84%D8%B9%D9%88%D8%A7%D9%86%20%20ANA%20FI%20ALHARB%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%A7%D9%86%D8%AA%D9%81%D8%B6%20%D8%A7%D9%88%20%D9%85%D8%AA%20%D8%A7%D8%B0%D8%A7%20%D8%B4%D8%A6%D8%AA%20%D8%B4%D9%87%D9%8A%D8%AF%D8%A7%20%20%20INTAFID%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%A8%D9%82%D8%A7%D9%8A%D8%A7%20%D8%A7%D9%84%D9%85%D8%AC%D8%AF%20%20BAQAYA%20ALMAJD%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D8%AD%D9%85%D8%A7%D8%A9%20%D8%A7%D9%84%D8%AF%D8%A7%D8%B1.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%B0%D9%83%D8%B1%20%D8%A7%D9%84%D8%B8%D8%A7%D9%84%D9%85%20%20THAKIR%20ALDHALEM%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%B1%D8%B3%D9%85%D8%AA%20%D8%A7%D8%B3%D8%B1%D8%AA%D9%86%D8%A7%20%20RASAMAT%20USRATUNA%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%B1%D8%B5%D9%88%D8%A7%20%D8%A7%D9%84%D8%B5%D9%81%D9%88%D9%81%20%20RUSSU%20ALSUFUF%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D8%B3%D8%A3%D9%84%D9%88%D8%A7%20%D8%A7%D9%84%D8%A3%D8%AD%D8%B2%D8%A7%D8%A8.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D8%B4%D8%B1%D9%8A%D8%B9%D8%AA%D9%86%D8%A7.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D8%B5%D8%A7%D9%85%D8%AF%D9%88%D9%86.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D9%81%D9%8A%20%D8%AF%D9%8A%D8%A7%D8%AC%D9%8A%D8%B1%20%D8%A7%D9%84%D8%B8%D9%84%D8%A7%D9%85%20%20FI%20DYAJIR%20ALZALAM%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%81%D9%8A%20%D8%B3%D8%A8%D9%8A%D9%84%20%D8%A7%D9%84%D9%84%D9%87.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%A7%D9%84%D9%84%D9%87%20%D8%A7%D8%B9%D9%84%D9%89%20%D9%88%D8%A7%D9%83%D8%A8%D8%B1%20%20ALLAH%20ALA%20WA%20AKBAR%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D8%AD%D8%A7%D8%B1%D8%A8%D9%88%D9%87%20%D9%8A%D8%A7%D8%B9%D8%AF%D8%A7%D9%87%20%20HARIBUHU%20YAUDAHU%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D9%87%D8%A7%D9%83%20%D9%82%D9%84%D8%A8%D9%8A%20%D9%88%D8%AF%D9%85%D9%8A%20%20HAKA%20QALBI%20WA%20DAMI%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%86%D8%B4%D9%8A%D8%AF%20%D9%8A%D8%A7%D8%B1%D9%81%D9%8A%D9%82%20%D8%A7%D9%84%D8%AF%D8%B1%D8%A8%20%20YA%20RAFIQ%20ALDARB%20NASHEED.mp3",
  "https://archive.org/download/20250906_20250906_0436/%D9%8A%D8%A7%D8%B4%D8%A8%D8%A7%D8%A8%20%D9%82%D8%AF%20%D8%A7%D9%86%D8%A7%D8%A8.mp3"
];

const songInfo = [
  {
    title: "استميتو وهبوا الجحيم",
    description: "نشيد قوي يبعث الحماس والثبات في النفوس",
    image: "img/استميتو وهبوا الجحيم.jpg"
  },
  {
    title: "الى الله جمعا تنادوا سراعا",
    description: "دعوة للاجتماع والتوحيد تحت راية الإسلام",
    image: "img/الى الله جمعا تنادوا سراعا  اناشيد اسلامية.jpg"
  },
  {
    title: "انا في الحرب العوان",
    description: "نشيد البطولة والشجاعة في ساحات القتال",
    image: "img/انا في الحرب العوان.jpg"
  },
  {
    title: "انتفض او مت",
    description: "نداء للثورة والتحرر من الظلم والاستبداد",
    image: "img/انتفض او مت.png"
  },
  {
    title: "بقايا المجد",
    description: "تذكير بمجد الأمة الإسلامية وعزتها",
    image: "img/بقايا المجد.png"
  },
  {
    title: "حماة الدار",
    description: "نشيد الدفاع عن الوطن والأرض المقدسة",
    image: "img/حماة الدار.jpg"
  },
  {
    title: "ذكر الظالم",
    description: "تذكير بآثار الظلم وضرورة العدل",
    image: "img/ذكر الظالم.png"
  },
  {
    title: "رسمت اسرتنا",
    description: "نشيد الأسرة المسلمة المتماسكة",
    image: "img/رسمت اسرتنا.png"
  },
  {
    title: "رصوا الصفوف",
    description: "دعوة للوحدة والتضامن في صفوف المسلمين",
    image: "img/رصوا الصفوف.jpg"
  },
  {
    title: "سألوا الأحزاب",
    description: "نشيد التحدي والثبات أمام الأعداء",
    image: "img/سألوا الأحزاب.jpg"
  },
  {
    title: "شريعتنا",
    description: "تأكيد على عظمة الشريعة الإسلامية",
    image: "img/شريعتنا.jpg"
  },
  {
    title: "صامدون",
    description: "نشيد الصمود والثبات في وجه التحديات",
    image: "img/صامدون.png"
  },
  {
    title: "في دياجير الظلام",
    description: "نشيد الأمل والضياء في أحلك الأوقات",
    image: "img/في دياجير الظلام.webp"
  },
  {
    title: "في سبيل الله",
    description: "نشيد الجهاد والتضحية في سبيل الدين",
    image: "img/في سبيل الله.jpg"
  },
  {
    title: "الله اعلى واكبر",
    description: "تسبيح وتعظيم لله تعالى",
    image: "img/نشيد الله اعلى واكبر.jpg"
  },
  {
    title: "قل لباغٍ نال منه",
    description: "نداء للمقاومة والجهاد ضد الأعداء",
    image: "img/نشيد حاربوه ياعداه.jpg"
  },
  {
    title: "هاك قلبي ودمي",
    description: "نشيد التضحية والفداء للدين والوطن",
    image: "img/هاك قلبي ودمي.png"
  },
  {
    title: "يارفيق الدرب",
    description: "نشيد الأخوة والرفقة في طريق الحق",
    image: "img/يارفيق الدرب.png"
  },
  {
    title: "ياشباب قد اناب",
    description: "نداء للشباب للعودة إلى طريق الإسلام",
    image: "img/ياشباب قد اناب.png"
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
  updateUrl(index);
  isSongLoaded = true;
}

function updateUrl(songIndex) {
  const newUrl = generateShareUrl(songIndex);
  // تحديث URL بدون إعادة تحميل الصفحة
  window.history.pushState({}, '', newUrl);
  
  // تحديث عنوان الصفحة للعرض في المتصفح
  document.title = `${songInfo[songIndex].title} - مشغل الأناشيد الإسلامية`;
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
  // إذا كان التكرار على النشيد الواحد، لا نغير النشيد
  if (repeatMode === 'one') {
    return;
  }
  
  // إذا كان التكرار على جميع الأناشيد، ننتقل للنشيد التالي
  if (repeatMode === 'all') {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  } else {
    // الوضع العادي - ننتقل للنشيد التالي
    currentSongIndex = (currentSongIndex + 1) % songs.length;
  }
  
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

audioPlayer.addEventListener("ended", () => {
  if (repeatMode === 'one') {
    // تكرار النشيد الحالي
    audioPlayer.currentTime = 0;
    playSong();
  } else if (repeatMode === 'all') {
    // تكرار جميع الأناشيد
    nextSong();
  } else {
    // الوضع العادي
    nextSong();
  }
});

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

// وظائف التكرار
function toggleRepeat() {
  // تغيير وضع التكرار: off -> one -> all -> off
  if (repeatMode === 'off') {
    repeatMode = 'one';
  } else if (repeatMode === 'one') {
    repeatMode = 'all';
  } else {
    repeatMode = 'off';
  }
  
  updateRepeatButton();
}

function updateRepeatButton() {
  if (repeatBtn) {
    // إزالة جميع الفئات
    repeatBtn.classList.remove('repeat-off', 'repeat-one', 'repeat-all');
    
    // إضافة الفئة المناسبة
    repeatBtn.classList.add(`repeat-${repeatMode}`);
    
    // تحديث العنوان التوضيحي
    const titles = {
      'off': 'تكرار النشيد',
      'one': 'تكرار النشيد الحالي',
      'all': 'تكرار جميع الأناشيد'
    };
    repeatBtn.title = titles[repeatMode];
  }
}


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

// إضافة مستمع الأحداث لزر التكرار
if (repeatBtn) {
  repeatBtn.addEventListener('click', toggleRepeat);
}

// تهيئة النص الأول
document.addEventListener('DOMContentLoaded', () => {
  // قراءة معاملات URL للتوجيه المباشر للنشيد
  const urlParams = new URLSearchParams(window.location.search);
  const songIndex = urlParams.get('song');
  
  if (songIndex !== null) {
    const index = parseInt(songIndex);
    if (index >= 0 && index < songs.length) {
      currentSongIndex = index;
      // تحديث Swiper للانتقال إلى النشيد المحدد
      setTimeout(() => {
        swiper.slideTo(index);
        loadAndPlaySong(index);
      }, 100);
    }
  }
  
  updateInfoCard(currentSongIndex);
  updateRepeatButton(); // تهيئة زر التكرار
});

// دعم العودة للخلف في المتصفح
window.addEventListener('popstate', (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const songIndex = urlParams.get('song');
  
  if (songIndex !== null) {
    const index = parseInt(songIndex);
    if (index >= 0 && index < songs.length && index !== currentSongIndex) {
      currentSongIndex = index;
      swiper.slideTo(index);
      loadAndPlaySong(index);
    }
  } else if (currentSongIndex !== 0) {
    // إذا لم يكن هناك معامل song، انتقل إلى النشيد الأول
    currentSongIndex = 0;
    swiper.slideTo(0);
    loadAndPlaySong(0);
  }
});

// تحديث عرض الوقت كل ثانية
setInterval(() => {
  if (!audioPlayer.paused && isSongLoaded) {
    updateTimeDisplay();
  }
}, 1000);

// وظائف المشاركة
function generateShareUrl(songIndex = currentSongIndex) {
  // إذا كان الموقع يعمل محلياً، استخدم مسار نسبي
  if (window.location.protocol === 'file:') {
    return `index.html?song=${songIndex}`;
  }
  // إذا كان الموقع على خادم ويب، استخدم الرابط الكامل
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?song=${songIndex}`;
}

function openShareModal() {
  const currentSong = songInfo[currentSongIndex];
  if (currentSong) {
    shareSongImage.src = currentSong.image;
    shareSongTitle.textContent = currentSong.title;
    shareSongDescription.textContent = currentSong.description;
    
    // إنشاء رابط المشاركة مع معرف النشيد
    const shareUrl = generateShareUrl(currentSongIndex);
    
    // تعيين نص المشاركة الافتراضي
    const defaultText = `🎵 ${currentSong.title}\n\n${currentSong.description}\n\nاستمع إلى هذا النشيد الإسلامي الجميل:\n${shareUrl}`;
    shareText.value = defaultText;
  }
  
  shareModal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function closeShareModal() {
  shareModal.classList.remove('show');
  document.body.style.overflow = 'auto';
}

function copyToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showNotification('تم نسخ الرابط إلى الحافظة!', 'success');
    }).catch(() => {
      fallbackCopyTextToClipboard(text);
    });
  } else {
    fallbackCopyTextToClipboard(text);
  }
}

function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showNotification('تم نسخ الرابط إلى الحافظة!', 'success');
  } catch (err) {
    showNotification('فشل في نسخ الرابط', 'error');
  }
  
  document.body.removeChild(textArea);
}

function showNotification(message, type = 'info') {
  // إنشاء إشعار مؤقت
  const notification = document.createElement('div');
  notification.className = `notification ${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    z-index: 3000;
    font-size: 14px;
    font-weight: 500;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    animation: slideInRight 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

function shareToWhatsApp() {
  const text = shareText.value || `🎵 ${songInfo[currentSongIndex].title}`;
  const shareUrl = generateShareUrl(currentSongIndex);
  const url = `https://wa.me/?text=${encodeURIComponent(text + '\n\n' + shareUrl)}`;
  window.open(url, '_blank');
}

function shareToTelegram() {
  const text = shareText.value || `🎵 ${songInfo[currentSongIndex].title}`;
  const shareUrl = generateShareUrl(currentSongIndex);
  const url = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

function shareToTwitter() {
  const text = shareText.value || `🎵 ${songInfo[currentSongIndex].title}`;
  const shareUrl = generateShareUrl(currentSongIndex);
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(shareUrl)}`;
  window.open(url, '_blank');
}

function shareToFacebook() {
  const shareUrl = generateShareUrl(currentSongIndex);
  const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
  window.open(url, '_blank');
}

// إضافة مستمعي الأحداث للمشاركة
if (shareBtn) {
  shareBtn.addEventListener('click', openShareModal);
}

if (closeShare) {
  closeShare.addEventListener('click', closeShareModal);
}

if (shareModal) {
  shareModal.addEventListener('click', (e) => {
    if (e.target === shareModal) {
      closeShareModal();
    }
  });
}

if (copyLink) {
  copyLink.addEventListener('click', () => {
    const text = shareText.value || `🎵 ${songInfo[currentSongIndex].title}`;
    const shareUrl = generateShareUrl(currentSongIndex);
    copyToClipboard(text + '\n\n' + shareUrl);
  });
}

if (shareWhatsApp) {
  shareWhatsApp.addEventListener('click', shareToWhatsApp);
}

if (shareTelegram) {
  shareTelegram.addEventListener('click', shareToTelegram);
}

if (shareTwitter) {
  shareTwitter.addEventListener('click', shareToTwitter);
}

if (shareFacebook) {
  shareFacebook.addEventListener('click', shareToFacebook);
}

// إضافة أنيميشن للإشعارات
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);