// Select all the keys and audio elements
const keys = document.querySelectorAll(".key");
const audioElements = document.querySelectorAll("audio");

// Function to play sound and add 'playing' class
function playSound(keyCode) {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);

  if (!audio) return; // Exit if there's no audio element for the key

  audio.currentTime = 0; // Rewind to the start
  audio.play(); // Play the sound

  // Add 'playing' class to the key element
  if (key) {
    key.classList.add("playing");
  }
}

// Function to remove 'playing' class
function removeTransition(e) {
  if (e.propertyName !== "transform") return; // Skip if not transform
  this.classList.remove("playing"); // Remove 'playing' class
}

// Add event listeners for each key element
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// Add event listener for keydown event
window.addEventListener("keydown", (e) => {
  playSound(e.keyCode);
});

// Add event listener for click events on key elements
keys.forEach((key) => {
  key.addEventListener("click", () => {
    // Get the key code from the data attribute
    const keyCode = parseInt(key.getAttribute("data-key"));
    // Play the sound associated with the key code
    playSound(keyCode);
  });
});
