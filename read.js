window.onload = function () {
  var navbar = document.getElementById("header"); // Get the navbar element
  var triggerHeight = 50; // Height at which the color change will be triggered
  const articleSection = [];
  const titleSection = [];
  window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop; // Get the scroll position

    if (scrollTop > triggerHeight) {
      navbar.classList.add("scroll"); // Add "scroll" class to navbar when scrolled past triggerHeight
    } else {
      navbar.classList.remove("scroll"); // Remove "scroll" class from navbar when scrolled back above triggerHeight
    }
  });
};

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

const appSettings = {
  databaseURL:
    "https://carbon-insight-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const titleDB = ref(database, "title");
const articleDB = ref(database, "articles");

let inputTitle = document.getElementById("enterTitle");
let inputArticle = document.getElementById("enterArticle");
let btn = document.getElementById("btn");

// function appendToDOM(title, article) {
//   document.getElementById("title").innerText = inputTitle.value;
//   document.getElementById("article").innerText = inputArticle.value;
// }

// btn.addEventListener("click", function () {
//   let title = inputTitle.value;
//   let article = inputArticle.value;
//   // appendToDOM(title,article)
//   if (title != "" && article != "") {
//     push(titleDB, title);
//     push(articleDB, article);
//     console.log("Success");
//   } else {
//     console.log("Enter Value");
//   }
// });
let titleArray = [];
let articleArray = [];

function appendTitleHeadline(titleArray) {
  // console.log(titleArray);
  document.getElementById("oneTitle").innerText = titleArray[0];
  document.getElementById("twoTitle").innerText = titleArray[1];
  document.getElementById("threeTitle").innerText = titleArray[2];
  document.getElementById("fourTitle").innerText = titleArray[3];
  document.getElementById("fiveTitle").innerText = titleArray[4];
  document.getElementById("sixTitle").innerText = titleArray[5];
  document.getElementById("sevenTitle").innerText = titleArray[6];
  document.getElementById("eightTitle").innerText = titleArray[7];
  document.getElementById("nineTitle").innerText = titleArray[8];
  document.getElementById("tenTitle").innerText = titleArray[9];
}

function appendArticleHeadline(articleArray) {
  document.getElementById("oneArticle").innerText = articleArray[0];
  document.getElementById("twoArticle").innerText = articleArray[1];
  document.getElementById("threeArticle").innerText = articleArray[2];
  document.getElementById("fourArticle").innerText = articleArray[3];
  document.getElementById("fiveArticle").innerText = articleArray[4];
  document.getElementById("sixArticle").innerText = articleArray[5];
  document.getElementById("sevenArticle").innerText = articleArray[6];
  document.getElementById("eightArticle").innerText = articleArray[7];
  document.getElementById("nineArticle").innerText = articleArray[8];
  document.getElementById("tenArticle").innerText = articleArray[9];
}

function dbGen(titleArray, articleArray) {
  onValue(titleDB, function (snapshot) {
    titleArray = Object.values(snapshot.val());
    let titleKey = Object.keys(snapshot.val());
    // console.log(titleArray);
    appendTitleHeadline(titleArray);
  });
  onValue(articleDB, function (snapshot) {
    articleArray = Object.values(snapshot.val());
    let articlrKey = Object.keys(snapshot.val());
    appendArticleHeadline(articleArray);
  });
}

dbGen();
