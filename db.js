
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

let titleArray = [];
let titleKey = [];

function appendToDOM(title, article) {
  document.getElementById("title").innerText = inputTitle.value;
  document.getElementById("article").innerText = inputArticle.value;
}

btn.addEventListener("click", function () {
  let title = inputTitle.value;
  let article = inputArticle.value;
  // appendToDOM(title,article)
  if (title != "" && article != "") {
    push(titleDB, title);
    push(articleDB, article);
    console.log("Success");
  } else {
    console.log("Enter Value");
  }
});

onValue(titleDB, function (snapshot) {
  let titleArray = Object.values(snapshot.val());
  let titleKey = Object.keys(snapshot.val());
  console.log(titleArray[1]);
});
onValue(articleDB, function (snapshot) {
  let articleArray = Object.values(snapshot.val());
  let articlrKey = Object.keys(snapshot.val());

  console.log(articleArray[1]);
});

