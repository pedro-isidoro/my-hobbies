function nextBookCard() {
  let items = document.querySelectorAll(".book-item");
  document.querySelector(".book-slide").prepend(items[items.length - 1]);
}
function prevBookCard() {
  let items = document.querySelectorAll(".book-item");
  document.querySelector(".book-slide").appendChild(items[0]);
}

export { nextBookCard, prevBookCard };
