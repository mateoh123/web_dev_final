/* INTRO TO JSON */

let outputElement = document.getElementById("outputElement");
let outputParagraph = document.getElementById("outputParagraph");
let contentGridElement = document.getElementById("contentGrid");

// Parallax library
var rellax;

let jsonDatabase = [
  {
    article_title: "Do not the car",
    writer: "Instagram",
    date: "11/29/24",
    link: "https://www.instagram.com/p/DC4sHqwxBzQ/?igsh=czV5N20zdW4zMjhv",
  },
  {
    article_title: "Meet Ice Spice in Fort Greene",
    writer: "Instagram",
    date: "11/1/24",
    link: "https://www.instagram.com/reel/C_eCH9WPoBy/?igsh=MTI0OTVrbjQ5Z3plNg%3D%3D",
  },
  {
    article_title: "Remember bedroom doorbells?",
    writer: "Instagram",
    date: "9/4/24",
    link: "https://www.instagram.com/reel/C_jSjRJy6bo/?igsh=M3Y1ejdha3U3emox",
  },
  {
    article_title: "Best Pumpkin Drinks!",
    writer: "Instagram",
    date: "---",
    link: "https://www.instagram.com/reels/DCPv48VPXCK/",
  },
  {
    article_title: "Im not a Monster",
    writer: "Instagram",
    date: "9/8/24",
    link: "https://www.instagram.com/p/DA4Srzys6ju/",
  },

  {
    article_title: "CAKKKEEEE",
    writer: "Instagram",
    date: "---",
    link: "https://www.instagram.com/reels/DCrVMeDsIY0/",
  },
  {
    article_title: "Withstanding Time",
    writer: "Twitter",
    date: "11/19/24",
    link: "https://x.com/IndiaTales7/status/1859094467103633420",
  },
  {
    article_title: "Wholesome Breakfast",
    writer: "Twitter",
    date: "7/11/24",
    link: "https://x.com/GoddessL_/status/1811411089856569502",
  },

  {
    article_title:
      "Xbox x Playstation",
    writer: "Twitter",
    date: "9/11/20",
    link: "https://x.com/Deebeegeek26/status/1304317945208766464?lang=en",
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
