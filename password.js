function checkPassword(event) {
  const password = document.getElementById("password-input").value;
  if (password.toLowerCase().trim() == "decenter") {
    document.getElementById("password-form").classList.add("hidden");
    document.getElementById("secret-image").classList.add("show");
    document.getElementById("secret-image").classList.remove("hidden");
    document.getElementById("main-img").classList.add("hidden");
    document.getElementById("password-input").value = "";
    document.getElementById("next-button").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

function submitForm(event) {
  event.preventDefault(); // This will prevent the default form submission behavior
  checkPassword(event);
}
