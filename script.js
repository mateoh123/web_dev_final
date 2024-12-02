/* INTRO TO JSON */

let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

// Parallax library
var rellax;

let jsonDatabase = [
  {
    article_title: "Amazon deforestation halved in 2023",
    writer: "Victoria Pressler",
    date: "1/20/24",
    link: "https://thegoodnewshub.com/environment/amazon-deforestation-halved-in-2023/",
  },
  {
    article_title: "Animal shelter adopts out all of its animals",
    writer: "Victoria Pressler",
    date: "1/10/24",
    link: "https://thegoodnewshub.com/animals/animal-shelter-adopts-all-animals-over-christmas/",
  },
  {
    article_title: "Man keeps alive language thought to be extinct",
    writer: "Abraham Fletcher",
    date: "1/18/24",
    link: "https://thegoodnewshub.com/society/man-revives-extinct-chana-language/",
  },
  {
    article_title: "Ghana will enter ‘malaria elimination’ phase in 2024",
    writer: "Alexis Akwagyiram",
    date: "12/13/23",
    link: "https://www.semafor.com/article/12/13/2023/ghana-malaria-elimination-phase-2024",
  },
  {
    article_title:
      "How Google is using AI to help one U.S. city reduce traffic and emissions",
    writer: "Ben Tracy",
    date: "1/4/24",
    link: "https://www.cbsnews.com/news/google-project-green-light-seattle/",
  },

  {
    article_title:
      "All-Female City Council Marks a ‘Turning Point’ for a Twin City",
    writer: "Remy Tumin",
    date: "1/10/24",
    link: "https://www.nytimes.com/2024/01/10/us/st-paul-women-city-council.html",
  },
  {
    article_title: "Reproductive rights are winning in states across America.",
    writer: "Center for Reproductive Rights",
    date: "N/A",
    link: "https://reproductiverights.org/maps/abortion-laws-by-state/",
  },
  {
    article_title: "America’s Largest Offshore Wind Farm Wins Approval",
    writer: "GOODGOODGOOD",
    date: "11/1/23",
    link: "https://www.goodgoodgood.co/articles/us-largest-offshore-wind-farm",
  },

  {
    article_title: "New State Laws on Hot-Button Issues Take Effect Today",
    writer: "Adeel Hassan",
    date: "1/1/24",
    link: "https://www.nytimes.com/2024/01/01/us/new-state-laws-2024.html",
  },
];

for (var i = 0; i < jsonDatabase.length; i++) {
  createElementProper(jsonDatabase[i]);
}

rellax = new Rellax(".rellax");

function createElementProper(incomingJSON) {
  let newLinkElement = document.createElement("a");
  newLinkElement.href = incomingJSON["link"];
  newLinkElement.target = "_blank";
  newLinkElement.style.textDecoration = "none";

  let newContentElement = document.createElement("DIV");
  newContentElement.classList.add("contentItem");

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add("contentTitle");
  newContentHeading.innerText = incomingJSON["article_title"];

  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  newContentSubhead.innerText = incomingJSON["writer"];
  newContentElement.appendChild(newContentSubhead);

  let newContentYear = document.createElement("H5");
  newContentYear.innerText = `Post Date: ${incomingJSON["date"]}`;
  newContentElement.appendChild(newContentYear);

  newLinkElement.appendChild(newContentElement);

  contentGridElement.appendChild(newLinkElement);
}
