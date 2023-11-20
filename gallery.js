var mainImages = [
  "./public/JPEG/org_1.jpg",
  "./public/JPEG/org_2.jpg",
  "./public/JPEG/org_3.jpg",
  "./public/JPEG/org_4.jpg",
  "./public/JPEG/org_5.jpg",
  "./public/JPEG/org_6.jpg",
  "./public/JPEG/org_7.jpg",
  "./public/JPEG/org_8.jpg",
  "./public/JPEG/org_9.jpg",
  "./public/JPEG/org_10.jpg",
  "./public/JPEG/org_11.jpg",
  "./public/JPEG/org_12.jpg",
  "./public/JPEG/org_13.jpg",
  "./public/JPEG/org_14.jpg",
  "./public/JPEG/org_15.jpg",
  "./public/JPEG/org_17.jpg",
  "./public/JPEG/org_18.jpg",
  "./public/JPEG/org_19.jpg",
  "./public/JPEG/org_20.jpg",
];

var eraseImages = [
  "./public/JPEG/erase_1.jpg",
  "./public/JPEG/erase_2.jpg",
  "./public/JPEG/erase_3.jpg",
  "./public/JPEG/erase_4.jpg",
  "./public/JPEG/erase_5.jpg",
  "./public/JPEG/erase_6.jpg",
  "./public/JPEG/erase_7.jpg",
  "./public/JPEG/erase_8.jpg",
  "./public/JPEG/erase_9.jpg",
  "./public/JPEG/erase_10.jpg",
  "./public/JPEG/erase_11.jpg",
  "./public/JPEG/erase_12.jpg",
  "./public/JPEG/erase_13.jpg",
  "./public/JPEG/erase_14.jpg",
  "./public/JPEG/erase_15.jpg",
  "./public/JPEG/erase_17.jpg",
  "./public/JPEG/erase_18.jpg",
  "./public/JPEG/erase_19.jpg",
  "./public/JPEG/erase_20.jpg",
];

function showPreviousImage() {
  let imgIndex;
  const prevImgIndex = parseInt(sessionStorage.getItem("prevImgIndex"));

  do {
    imgIndex = (prevImgIndex - 1 + mainImages.length) % mainImages.length;
  } while (imgIndex === prevImgIndex);

  document.getElementById("password-form").classList.add("show");
  document.getElementById("password-form").classList.remove("hidden");
  document.getElementById("secret-image").classList.add("hidden");
  document.getElementById("secret-image").classList.remove("show");
  document.getElementById("main-img").classList.add("show");
  document.getElementById("main-img").classList.remove("hidden");

  changeImage(imgIndex);
}

function showNextImage() {
  let imgIndex;
  const prevImgIndex = parseInt(sessionStorage.getItem("prevImgIndex"));

  do {
    imgIndex = (prevImgIndex + 1) % mainImages.length;
  } while (imgIndex === prevImgIndex);

  document.getElementById("password-form").classList.add("show");
  document.getElementById("password-form").classList.remove("hidden");
  document.getElementById("secret-image").classList.add("hidden");
  document.getElementById("secret-image").classList.remove("show");
  document.getElementById("main-img").classList.add("show");
  document.getElementById("main-img").classList.remove("hidden");

  changeImage(imgIndex);

  document.getElementById("next-button-container").style.display = "none";
}

function changeImage(imgIndex) {
  sessionStorage.setItem("prevImgIndex", imgIndex);

  var mainImage = mainImages[imgIndex];
  var eraseImage = eraseImages[imgIndex];
  document.getElementById("main-img").src = mainImage;
  document.getElementById("erase-img").src = eraseImage;
}

// Add an event listener for keydown events on the document object
document.addEventListener("keydown", function (event) {
  switch (event.keyCode) {
    // If the left arrow key is pressed
    case 37:
      showPreviousImage();
      break;
    // If the right arrow key is pressed
    case 39:
      showNextImage();
      break;
    default:
      break;
  }
});

changeImage(0);

document.getElementById("next-button").addEventListener("click", function () {
  showNextImage();
});
