console.log("hi");

    // grab an element
    var myElement = document.querySelector("header");
    // construct an instance of Headroom, passing the element
    var headroom = new Headroom(myElement);
    // initialise
    headroom.init();
// Workspace
let btn = document.querySelector(".gear");
let gear = document.querySelector(".fa-gear");
let settings = document.querySelector(".settings");
let background = document.querySelector(".landing");

btn.addEventListener("click", () => {
  if (settings.classList.contains("show")) {
    settings.classList.remove("show");
    gear.classList.remove("spin");
  } else {
    settings.classList.add("show");
    gear.classList.add("spin");
  }
});
// Colors
let colors = document.querySelectorAll(".colors span");
colors.forEach((e) => {
  e.style.backgroundColor = e.dataset.color;

  e.addEventListener("click", () => {
    document.documentElement.style.setProperty("--maincolor", e.dataset.color);
  });
});

// Background Yes No
let yesNo = document.querySelectorAll(".background .yes-no span");
let counter;
yesNo.forEach((e) => {
  e.addEventListener("click", () => {
    yesNo.forEach((el) => {
      if (!el.classList.contains("shaded")) {
        el.classList.add("shaded");
      }
    });
    e.classList.remove("shaded");

    if (e.innerHTML === "Yes") {
      // Background Shuffle
      counter = setInterval(() => {
        backgroundShuffle();
      }, 1000);
    } else {
      clearInterval(counter);
    }
  });
});
// Bullets Yes No
let yesNoBullets = document.querySelectorAll(".show-bullets .yes-no span");
let bulletsDiv = document.querySelector(".bullets");
yesNoBullets.forEach((e) => {
  e.addEventListener("click", () => {
    yesNoBullets.forEach((el) => {
      if (!el.classList.contains("shaded")) {
        el.classList.add("shaded");
      }
    });
    e.classList.remove("shaded");

    // Show Bullets
    if (e.innerHTML === "Yes") {
      bulletsDiv.style.display = "block";
    } else {
      bulletsDiv.style.display = "none";
    }
  });
});

let images = [
  "/Images/mn.jpg",
  "/Images/01.jpg",
  "/Images/02 (1).jpg",
  "/Images/03.jpg",
  "/Images/realmountain.jpeg",
  "/Images/port1.jpg",
];
function backgroundShuffle() {
  let randomImage = images[Math.floor(Math.random() * images.length)];
  background.style.backgroundImage = `url(${randomImage})`;
}
// Bullets
let bulletsBalls = document.querySelectorAll(".bullets .ball");
let bullets = document.querySelectorAll(".bullets > div > div:first-child");

bulletsBalls.forEach((e, ind) => {
  e.addEventListener("mouseover", () => {
    bulletsBalls.forEach((ele, hi) => {
      bullets[hi].style.opacity = "0";
    });
    bullets[ind].style.opacity = "1";
  });
  e.addEventListener("mouseout", () => {
    bullets[ind].style.opacity = "0";
  });
});

// reset
let reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  window.location.reload();
});
