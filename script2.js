/* INTRO TO JSON */

let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

// Parallax library
var rellax;

let jsonDatabase = [
  {
    article_title:
      "These toddlers' heartwarming reaction to spotting each other on the street will make your day",
    writer: "ABC News",
    date: "8/10/19",
    link: "https://www.youtube.com/watch?v=zIZ8l5XeQ3k",
  },
  {
    article_title: "Charlie Brown meets Snoopy for the first time",
    writer: "Everything Peanuts",
    date: "8/29/19",
    link: "https://www.youtube.com/watch?v=AcfWm01MFQ0",
  },
  {
    article_title: "Pet Penguin in Japan",
    writer: "DASA Productions",
    date: "1/4/10",
    link: "https://www.youtube.com/watch?v=11xs9mFKObs",
  },
  {
    article_title:
      "Loving Husband Spends 2 Years Planting Thousands Of Flowers For His Blind Wife To Smell",
    writer: "The Asahi Shimbun Company",
    date: "4/11/13",
    link: "https://www.youtube.com/watch?v=aVXpBqj67BY",
  },
  {
    article_title: "Dog Gets Too Excited And Passes Out",
    writer: "Daily Dose Of Internet",
    date: "6/20/19",
    link: "https://www.youtube.com/watch?v=3rzFgBlj8m4",
  },

  {
    article_title: "I wish cats actually existed",
    writer: "cat.mp4",
    date: "11/10/24",
    link: "https://www.youtube.com/watch?v=Qo5ZNtr1eV0",
  },
  {
    article_title: "The Most Dramatic Rescue Dog Transformations | The Dodo",
    writer: "The Dodo",
    date: "11/2/24",
    link: "https://www.youtube.com/watch?v=hu17vmgBOF0",
  },
  {
    article_title: "Man Who Dove Off Bridge to Save Baby ‘Didn’t Think Twice’",
    writer: "Inside Edition",
    date: "5/7/21",
    link: "https://www.youtube.com/watch?v=sBTS_sX1YFA",
  },

  {
    article_title:
      "Teen helps rescue woman being swept out to sea from Florida inlet",
    writer: "The National Desk",
    date: "12/15/23",
    link: "https://www.youtube.com/watch?v=7kQJTE2iFXw",
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
