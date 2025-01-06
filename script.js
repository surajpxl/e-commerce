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

  window.scrollTo({
    top: 0,      // Scroll to the top of the page
    behavior: 'smooth' // Smooth scrolling effect
  });
}

// Shop function
function shops() {
  resetSections();
  resetNavColors();

  card.style.display = "block";
  card2.style.display = "block";
  document.getElementById("shop").style.color = "rgb(2, 173, 173)";

  window.scrollTo({
    top: 0,      // Scroll to the top of the page
    behavior: 'smooth' // Smooth scrolling effect
  });
}


// About function
function abouts() {
  resetSections();
  resetNavColors();

  about.style.display = "block";
  document.getElementById("about").style.color = "rgb(2, 173, 173)";

  window.scrollTo({
    top: 0,      // Scroll to the top of the page
    behavior: 'smooth' // Smooth scrolling effect
  });
}

// Contact function
function contacts() {
  resetSections();
  resetNavColors();

  document.querySelectorAll(".footer").forEach(footer => {
    footer.style.display = "none";
  });
  
  document.querySelectorAll(".letter").forEach(footer => {
    footer.style.display = "none";
  });

  contact.style.display = "block";
  document.getElementById("contact").style.color = "rgb(2, 173, 173)";

  window.scrollTo({
    top: 0,      // Scroll to the top of the page
    behavior: 'smooth' // Smooth scrolling effect
  });
}



// Add to cart function
function addCart() {
  alert("Added to Cart");
  location.reload(); // Reload the page to reset states
}
