document.addEventListener("DOMContentLoaded", function () {
  const boxAudioMap = {
    ".box-1": document.getElementById("backgroundMusic1"),
    ".box-2": document.getElementById("backgroundMusic2"),
    ".box-3": document.getElementById("backgroundMusic3"),
    ".box-4": document.getElementById("backgroundMusic4"),
    ".box-5": document.getElementById("backgroundMusic5"),
  };

  Object.entries(boxAudioMap).forEach(([boxSelector, audioElement]) => {
    const box = document.querySelector(boxSelector);

    if (box && audioElement) {
      box.addEventListener("mouseenter", () => {
        audioElement.play();
        audio.playbackRate = 2;
      });

      box.addEventListener("mouseleave", () => {
        audioElement.pause();
        audioElement.currentTime = 0;
      });
    }
  });
});
