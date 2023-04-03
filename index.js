// Array of image paths
var mainImages = [
  "./public/erase/birthday2.jpg",
  "./public/erase/powers0029.jpg",
  "./public/erase/decentercb_2.jpg",
  "./public/erase/decentercb_4.jpg",
  "./public/erase/decentercb_6.jpg",
  "./public/erase/decentercb_8.jpg",
  "./public/erase/decentercb_10.jpg",
  "./public/erase/decentercb_12.JPG",
  "./public/erase/decentercb_14.jpg",
  "./public/erase/decentercb_15.jpg",
  "./public/erase/decentercb_17.jpg",
  "./public/erase/decentercb_19.jpg",
  "./public/erase/olivia_full.jpg",
];

var eraseImages = [
  "./public/erase/decenter1.jpg",
  "./public/erase/decentercb_.jpg",
  "./public/erase/decentercb_1.jpg",
  "./public/erase/decentercb_3.jpg",
  "./public/erase/decentercb_5.jpg",
  "./public/erase/decentercb_7.jpg",
  "./public/erase/decentercb_9.jpg",
  "./public/erase/decentercb_11.jpg",
  "./public/erase/decentercb_13.jpg",
  "./public/erase/decentercb_16.jpg",
  "./public/erase/decentercb_18.jpg",
  "./public/erase/decentercb_20.jpg",
  "./public/erase/olivia_erase.jpg",
];

// Function to set random image path for given element ID
function setRandomImage() {
  let imgIndex;
  const prevImgIndex = parseInt(sessionStorage.getItem("prevImgIndex"));

  do {
    imgIndex = Math.floor(Math.random() * mainImages.length);
  } while (imgIndex === prevImgIndex);

  sessionStorage.setItem("prevImgIndex", imgIndex);

  var mainImage = mainImages[imgIndex];
  var eraseImage = eraseImages[imgIndex];
  document.getElementById("main-img").src = mainImage;
  document.getElementById("erase-img").src = eraseImage;
}

// Set random images on page load
setRandomImage();

function checkPassword(event) {
  const password = document.getElementById("password-input").value;
  if (password.toLowerCase().trim() == "decenter") {
    document.getElementById("password-form").classList.add("hidden");
    document.getElementById("secret-image").classList.add("show");
    document.getElementById("secret-image").classList.remove("hidden");
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function submitForm(event) {
  event.preventDefault(); // This will prevent the default form submission behavior
  checkPassword(event);
}

// List of sentences
var _CONTENT = ["PUT HEADPHONES ON", "ENTER 'decenter' BELOW"];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Cursor element
var _CURSOR = document.querySelector("#cursor");

// Implements typing effect
function Type() {
  // Get substring with 1 characater added
  var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX++;

  // If full sentence has been displayed then start to delete the sentence after some time
  if (text === _CONTENT[_PART]) {
    // Hide the cursor
    //_CURSOR.style.display = "none";

    clearInterval(_INTERVAL_VAL);
    setTimeout(function () {
      _INTERVAL_VAL = setInterval(Delete, 50);
    }, 1000);
  }
}

// Implements deleting effect
function Delete() {
  // Get substring with 1 characater deleted
  var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
  _ELEMENT.innerHTML = text;
  _PART_INDEX--;

  // If sentence has been deleted then start to display the next sentence
  if (text === "") {
    clearInterval(_INTERVAL_VAL);

    // If current sentence was last then display the first one, else move to the next
    if (_PART == _CONTENT.length - 1) _PART = 0;
    else _PART++;

    _PART_INDEX = 0;

    // Start to display the next sentence after some time
    setTimeout(function () {
      _CURSOR.style.display = "inline-block";
      _INTERVAL_VAL = setInterval(Type, 100);
    }, 200);
  }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
