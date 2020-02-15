// Define DOM elements to work on
const name1 = document.getElementById('name1');
const name2 = document.getElementById('name2');

const form = document.querySelector('.love-form');

const iconArea = document.getElementById('results-icon');

// Let's rig the results...
const me = 'Phil';
const myCrush = 'Andie';

// Generate compatibility percentage
function calculateCompatibility() {
  // Apply the rigged results here
  if ((name1.value === me && name2.value === myCrush) || (name1.value === myCrush && name2.value === me)) {
    return 100;
  } else {
    return Math.floor(Math.random() * 100);
  }
}

// Change elements on the page
function displayCompatibility(percentage) {
  const showArea = document.getElementById('results-text');

  showArea.innerText = `You are ${percentage}% compatible!`;
}

function showIcon(percentage) {
  iconArea.innerHTML = '';

  let icon = 'question';
  if (percentage < 50) {
    icon = 'thumbs-down';
  } else if (percentage >= 50 && percentage < 90) {
    icon = 'thumbs-up';
  } else {
    icon = 'heart';
  }

  const imgElement = document.createElement('img');
  imgElement.setAttribute('src', `img/${icon}.svg`);

  iconArea.appendChild(imgElement);
}

// Listen for form submissions and apply changes
function updateResults(e) {
  e.preventDefault()

  const compatibility = calculateCompatibility();
  showIcon(compatibility);
  displayCompatibility(compatibility);
}

form.addEventListener('submit', updateResults);
