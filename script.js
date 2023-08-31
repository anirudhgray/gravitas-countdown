const startButton = document.getElementById('button-container');
const countdownContainer = document.getElementById('countdownContainer');
const iframeContainer = document.getElementById('iframeContainer');

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  countdown();
});

function countdown() {
  const countdownElement = document.getElementById('countdown');
  let count = countdownElement.textContent;
  countdownElement.textContent = count;

  const countdownInterval = setInterval(() => {
    count--;
    countdownElement.textContent = count;

    if (count === 0) {
      clearInterval(countdownInterval);
      countdownContainer.style.transform = 'translateY(-100%)';
      iframeContainer.style.maxHeight = '100%'; // Take up the whole screen
    }
  }, 1000);
}
