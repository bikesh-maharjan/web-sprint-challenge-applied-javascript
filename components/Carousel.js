/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const mainCarouselContainer = document.querySelector(".carousel-container");
const errorContainer = document.querySelector(".errors-container");
function carouselMaker() {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const imgSrc1 = document.createElement("img");
  const imgSrc2 = document.createElement("img");
  const imgSrc3 = document.createElement("img");
  const imgSrc4 = document.createElement("img");
  const rightButton = document.createElement("div");

  leftButton.textContent = "Click here!";
  imgSrc1.setAttribute("src", "./assets/carousel/mountains.jpeg");
  imgSrc2.setAttribute("src", "./assets/carousel/computer.jpeg");
  imgSrc3.setAttribute("src", "./assets/carousel/trees.jpeg");
  imgSrc4.setAttribute("src", "./assets/carousel/turntable.jpeg");
  rightButton.textContent = "Click here!";

  carousel.appendChild(leftButton);
  carousel.appendChild(imgSrc1);
  carousel.appendChild(imgSrc2);
  carousel.appendChild(imgSrc3);
  carousel.appendChild(imgSrc4);
  carousel.appendChild(rightButton);

  console.log(carousel);
  return carousel;
}

mainCarouselContainer.appendChild(carouselMaker());
