// Welcome message on page load
document.addEventListener("DOMContentLoaded", () => {
  alert("Welcome to Solanki Jatin's Portfolio Website!");
  console.log("Portfolio Website Loaded Successfully!");

  // Set copyright year dynamically
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
