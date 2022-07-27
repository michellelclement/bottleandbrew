const buttons = document.querySelectorAll(".button");

const aboutBtn = document.querySelector('.about-btn');
const addVenueBtn = document.querySelector('.add-venue-btn');

const aboutSection = document.querySelector('.about-us');
const addVenue = document.querySelector('.add-venue');

if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    console.log("Button clicked")
    aboutSection.classList.remove("hidden");
    addVenue.classList.add("hidden");
  });
}

if (addVenueBtn) {
  addVenueBtn.addEventListener("click", () => {
    console.log("Button clicked")
    aboutSection.classList.add("hidden");
    addVenue.classList.remove("hidden");
  });
}
