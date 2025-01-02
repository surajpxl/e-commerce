// Selectors
const card = document.querySelector(".trend");
const card2 = document.getElementById("trendSec");
const about = document.querySelector(".about");
const contact = document.querySelector(".contact");
const blog = document.querySelector(".trends");
const mainPage = document.querySelector(".main");
const navLinks = document.querySelectorAll("nav ul li a");

// Helper function to reset section visibility
function resetSections() {
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  about.style.display = "none";
  contact.style.display = "none";
}

// Helper function to reset navigation link colors
function resetNavColors() {
  navLinks.forEach((link) => {
    link.style.color = "black";
  });
}

// Home function
function homes() {
  resetSections();
  resetNavColors();

  mainPage.style.display = "flex";
  card.style.display = "block";
  card2.style.display = "block";
  blog.style.display = "block";
  document.getElementById("home").style.color = "rgb(2, 173, 173)";
}

// Shop function
function shops() {
  resetSections();
  resetNavColors();

  card.style.display = "block";
  card2.style.display = "block";
  document.getElementById("shop").style.color = "rgb(2, 173, 173)";
}

// Blog function
function blogs() {
  resetSections();
  resetNavColors();

  blog.style.display = "block";
  document.getElementById("blog").style.color = "rgb(2, 173, 173)";
}

// About function
function abouts() {
  resetSections();
  resetNavColors();

  about.style.display = "block";
  document.getElementById("about").style.color = "rgb(2, 173, 173)";
}

// Contact function
function contacts() {
  resetSections();
  resetNavColors();

  contact.style.display = "block";
  document.getElementById("contact").style.color = "rgb(2, 173, 173)";
}

// Cart function to show selected item
function show(img) {
  const newImg = document.getElementById("newImg");
  if (newImg && img) {
    newImg.src = img.src;
  }

  resetSections();
  document.querySelector(".cart").style.display = "flex";
}

// Add to cart function
function addCart() {
  alert("Added to Cart");
  location.reload(); // Reload the page to reset states
}
