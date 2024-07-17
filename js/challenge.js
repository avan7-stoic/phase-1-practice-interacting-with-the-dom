const counterEl = document.getElementById('counter');
const likeButton = document.getElementById('like');
const commentList = document.getElementById('comment-list');
const commentBox = document.getElementById('comment-box');
const submitCommentButton = document.getElementById('submit-comment');
const pauseButton = document.getElementById('pause');

let count = 0;
let likes = {}; // Object to store likes for each counter value
let isPaused = false;

// Update counter display
function updateCounter() {
  counterEl.textContent = count;
  likeButton.textContent = `❤️ (${likes[count] || 0})`; // Update like count for current number
}

// Start timer to increment counter every second
const intervalId = setInterval(() => {
  if (!isPaused) {
    count++;
    updateCounter();
  }
}, 1000);

// Plus button click event listener
document.getElementById('plus').addEventListener('click', () => {
  if (!isPaused) {
    count++;
    updateCounter();
  }
});

// Minus button click event listener
document.getElementById('minus').addEventListener('click', () => {
  if (!isPaused && count > 0) {
    count--;
    updateCounter();
  }
});

// Like button click event listener
likeButton.addEventListener('click', () => {
  if (!isPaused) {
    likes[count] = likes[count] ? likes[count] + 1 : 1; // Increment or initialize like count for current number
    updateCounter();
  }
});

// Pause button click event listener
pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseButton.textContent = isPaused;
  updateCounter();
});
