const leftHeart = document.getElementById("leftHeart");
const rightHeart = document.getElementById("rightHeart");
const hint = document.getElementById("hint");
const backgroundVideo = document.getElementById("backgroundVideo");
const eng2Video = document.getElementById("eng2Video");

const hamburger = document.getElementById("hamburger");
const sideMenu = document.getElementById("sideMenu");
const blurOverlay = document.getElementById("blurOverlay");
const closeMenu = document.getElementById("closeMenu");

let clicked = false;

function handleHeartClick() {
  if (clicked) return;
  clicked = true;

  // Hide hint
  hint.style.opacity = 0;

  // Add glow effect to both hearts
  leftHeart.classList.add("glow");
  rightHeart.classList.add("glow");

  // Create audio element for song.mp3
  const audio = new Audio('AUDIO/song.mp3');
  audio.volume = 1.0;

  // After 4 seconds of glow, play audio and transition
  setTimeout(() => {
    // Play the audio
    audio.play().catch(e => console.log("Audio play failed:", e));
    
    // Fade out hearts
    leftHeart.style.transition = "opacity 0.5s ease";
    rightHeart.style.transition = "opacity 0.5s ease";
    leftHeart.style.opacity = 0;
    rightHeart.style.opacity = 0;
    
    setTimeout(() => {
      // Hide hearts completely
      leftHeart.style.display = "none";
      rightHeart.style.display = "none";
      
      // Smooth video transition
      backgroundVideo.style.transition = "opacity 1s ease";
      backgroundVideo.style.opacity = 0;
      
      setTimeout(() => {
        backgroundVideo.style.display = "none";
        eng2Video.style.display = "block";
        eng2Video.style.opacity = 0;
        eng2Video.style.transition = "opacity 1s ease";
        
        // Fade in new video
        setTimeout(() => {
          eng2Video.style.opacity = 1;
          eng2Video.play();
        }, 100);
      }, 1000);
    }, 500);
  }, 4000); // 4 seconds glow duration
}

// Menu toggle
function toggleMenu() {
  sideMenu.classList.toggle("open");
  document.body.classList.toggle("menu-open");
}

// Close menu on overlay click
blurOverlay.addEventListener("click", toggleMenu);

// Add click listeners to both hearts
leftHeart.addEventListener("click", handleHeartClick);
rightHeart.addEventListener("click", handleHeartClick);

hamburger.addEventListener("click", toggleMenu);

closeMenu.addEventListener("click", toggleMenu);
