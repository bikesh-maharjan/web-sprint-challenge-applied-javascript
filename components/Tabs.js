import axios from "axios";

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const topics = "https://lambda-times-backend.herokuapp.com/topics";
axios
  .get(topics)
  .then(function (response) {
    const dataArr = response.data.topics;
    console.log(response.data.topics);
    dataArr.forEach(function (data) {
      const newTab = document.createElement("div");

      newTab.classList.add("tab");
      newTab.textContent = data;
      getTopicElement.appendChild(newTab);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
const getTopicElement = document.querySelector(".topics");
