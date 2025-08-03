document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("startOverlay");

  const line1 = document.getElementById("line1");
  const line2 = document.getElementById("line2");
  const line3 = document.getElementById("line3");
  const line4 = document.getElementById("line4");
  const blessing = document.getElementById("blessing");

  // Initially hide text elements
  line1.style.opacity = 0;
  line2.style.opacity = 0;
  line3.style.opacity = 0;
  line4.style.opacity = 0;
  blessing.style.opacity = 0;

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";

    const video = document.getElementById("backgroundVideo");
    if (video) {
      video.muted = false;
      video.play();
    }

    setTimeout(() => {
      line1.classList.add("float-in");
    }, 2000);

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
  });
});
