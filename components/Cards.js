// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const articleData = "https://lambda-times-backend.herokuapp.com/articles";

axios
  .get(articleData)
  .then((response) => {
    console.log(response);
    const divMainContainer = document.querySelector(".cards-container");

    const entries = Object.values(response.data.articles);

    entries.forEach((element) => {
      element.forEach((article) => {
        divMainContainer.appendChild(articleMaker(article));
        console.log("Card Created");
      });
    });
  })

  .catch(function (error) {
    console.log(error);
  });

function articleMaker(object) {
  const div = document.createElement("div");
  div.classList.add("card");

  const div1 = document.createElement("div");
  div1.classList.add("headline");
  div1.innerHTML = object.headline;
  div.appendChild(div1);

  const div2 = document.createElement("div");
  div2.classList.add("author");
  div.appendChild(div2);

  const div3 = document.createElement("div");
  div3.classList.add("img-container");
  div2.appendChild(div3);

  const img = document.createElement("img");
  img.src = object.authorPhoto;
  div3.appendChild(img);

  const span = document.createElement("span");
  span.innerHTML = "By " + object.authorName;
  div2.appendChild(span);

  return div;
}
