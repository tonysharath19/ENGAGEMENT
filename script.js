const leftHeart = document.getElementById("leftHeart");
const rightHeart = document.getElementById("rightHeart");
const hint = document.getElementById("hint");
const initials = document.getElementById("initials");
const bgm = document.getElementById("bgm");

// Scene 2 elements
const backgroundVideo = document.getElementById("backgroundVideo");
const startOverlay = document.getElementById("startOverlay");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const blessing = document.getElementById("blessing");
const venueButton = document.getElementById("venueButton");

let clicked = false;

function playAudioFor6Seconds(audioSrc) {
  bgm.src = audioSrc;
  bgm.play();
  setTimeout(() => {
    bgm.pause();
    bgm.currentTime = 0;
  }, 7500);
}

function handleLeftHeartClick() {
  if (clicked) return;
  clicked = true;
  playAudioFor6Seconds("AUDIO/song.mp3");

  // Hide hint
  setTimeout(() => {
    hint.style.opacity = 0;
  }, 1500);

  // Add glow to both hearts
  setTimeout(() => {
    leftHeart.classList.add("glow");
    rightHeart.classList.add("glow");
  }, 1000); // Apply glow after 1 second

  // Show initials after glow and hide hearts
  setTimeout(() => {
    leftHeart.style.opacity = 0; // Fade out hearts
    rightHeart.style.opacity = 0; // Fade out hearts
    // Give a small delay for opacity transition before hiding display
    setTimeout(() => {
      leftHeart.style.display = "none";
      rightHeart.style.display = "none";
    }, 500); // Wait for 0.5s opacity transition

    initials.style.display = "block";
    initials.style.opacity = 0;
    initials.style.transition = "opacity 3s ease, transform 3s ease";
    setTimeout(() => {
      initials.style.opacity = 1;
      initials.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
  }, 3500); // After glow has been visible for a bit (1000ms + 2500ms for glow effect)

  // After initials are shown, fade out and show scene 2
  setTimeout(() => {
    const initials = document.getElementById("initials");
    initials.style.transition = "opacity 3.5s ease";
    initials.style.opacity = 0;

    setTimeout(() => {
      // Hide scene 1 elements
      document.getElementById("scene1").style.display = "none";
      
      // Show scene 2 elements
      backgroundVideo.style.display = "block";
      // Remove startOverlay display and event listener completely
      venueButton.style.display = "block";
      
      // Play video immediately
      backgroundVideo.muted = false;
      backgroundVideo.play();
      
      // Show invitation text
      document.querySelector(".invite-top").style.display = "block";
      
      // Show line1 positioned below top
      setTimeout(() => {
        line1.style.opacity = 1;
      }, 2000);

      // Show other invitation text elements in sequence below line1
      setTimeout(() => {
        line2.classList.add("float-in", "glow");
      }, 3000);

      setTimeout(() => {
        line3.classList.add("float-in");
      }, 4000);

      setTimeout(() => {
        line4.classList.add("float-in");
      }, 4500);

      setTimeout(() => {
        blessing.classList.add("float-in");
      }, 5000);
    }, 1500); // Wait for fade-out
  }, 5500); // Keep initials visible for 8 seconds (3500ms + 8000ms)
}

function handleRightHeartClick() {
  if (clicked) return;
  clicked = true;
  playAudioFor6Seconds("AUDIO/song.mp3");

  // Hide hint
  setTimeout(() => {
    hint.style.opacity = 0;
  }, 1500);

  // Add glow to both hearts
  setTimeout(() => {
    leftHeart.classList.add("glow");
    rightHeart.classList.add("glow");
  }, 1000); // Apply glow after 1 second

  // Show initials after glow and hide hearts
  setTimeout(() => {
    leftHeart.style.opacity = 0; // Fade out hearts
    rightHeart.style.opacity = 0; // Fade out hearts
    // Give a small delay for opacity transition before hiding display
    setTimeout(() => {
      leftHeart.style.display = "none";
      rightHeart.style.display = "none";
    }, 500); // Wait for 0.5s opacity transition

    initials.style.display = "block";
    initials.style.opacity = 0;
    initials.style.transition = "opacity 3s ease, transform 3s ease";
    setTimeout(() => {
      initials.style.opacity = 1;
      initials.style.transform = "translate(-50%, -50%) scale(1)";
    }, 100);
  }, 3500); // After glow has been visible for a bit (1000ms + 2500ms for glow effect)

  // After initials are shown, fade out and show scene 2
  setTimeout(() => {
    const initials = document.getElementById("initials");
    initials.style.transition = "opacity 3.5s ease";
    initials.style.opacity = 0;

    setTimeout(() => {
      // Hide scene 1 elements
      document.getElementById("scene1").style.display = "none";
      
      // Show scene 2 elements
      backgroundVideo.style.display = "block";
      // Remove startOverlay display and event listener completely
      venueButton.style.display = "block";
      
      // Play video immediately
      backgroundVideo.muted = false;
      backgroundVideo.play();
      
      // Show invitation text
      document.querySelector(".invite-top").style.display = "block";
      
      // Show line1 positioned below top
      setTimeout(() => {
        line1.style.opacity = 1;
      }, 2000);

      // Show other invitation text elements in sequence below line1
      setTimeout(() => {
        line2.classList.add("float-in", "glow");
      }, 3000);

      setTimeout(() => {
        line3.classList.add("float-in");
      }, 4000);

      setTimeout(() => {
        line4.classList.add("float-in");
      }, 4500);

      setTimeout(() => {
        blessing.classList.add("float-in");
      }, 5000);
    }, 1500); // Wait for fade-out
  }, 5500); // Keep initials visible for 8 seconds (3500ms + 8000ms)
}

leftHeart.addEventListener("click", handleLeftHeartClick);
rightHeart.addEventListener("click", handleRightHeartClick);
