// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  // creating elements
  const headerDiv = document.createElement("div");
  //   console.log(headerDiv);
  const spanDate = document.createElement("span");
  const h1 = document.createElement("h1");
  const spanTemp = document.createElement("span");
  const headerContainer = document.querySelector(".header-container");
  //   console.log(headerContainer)
  // adding classes
  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  // content of the elements

  spanDate.textContent = "March 28, 2020";
  h1.textContent = "Lambda Times";
  spanTemp.textContent = "98°";

  // appending the elements
  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(h1);
  headerDiv.appendChild(spanTemp);
  headerContainer.appendChild(headerDiv);
}
Header();
