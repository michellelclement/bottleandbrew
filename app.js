const buttons = document.querySelectorAll(".button");

const aboutBtn = document.querySelector('.about-btn');
const addVenueBtn = document.querySelector('.add-venue-btn');

const aboutSection = document.querySelector('.about-us');
const addVenue = document.querySelector('.add-venue');

if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    console.log('btn clicked');
    aboutSection.classList.remove("hidden");
    addVenue.classList.add("hidden");
  });
}

if (addVenueBtn) {
  addVenueBtn.addEventListener("click", () => {
    console.log('aboutbtn clicked');
    aboutSection.classList.add("hidden");
    addVenue.classList.remove("hidden");
  });
}




// aboutBtn.addEventListener("click", function(){
//   aboutSection.classList.remove("hidden");
//   addVenue.classList.add("hidden");
// });

// addVenueBtn.addEventListener("click", function(){
//   aboutSection.classList.add("hidden");
//   addVenue.classList.remove("hidden");
// });