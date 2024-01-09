// Visa knappen när användaren scrollar ner 100px från toppen
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    till_toppen.style.display = "block";
  } else {
    till_toppen.style.display = "none";
  }
};

// Scrolla till toppen när knappen klickas
window.scrollToTop = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
