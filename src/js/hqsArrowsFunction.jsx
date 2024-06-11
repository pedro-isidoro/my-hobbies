function nextHQCard() {
  let items = document.querySelectorAll(".hq-item");
  document.querySelector(".hq-slide").prepend(items[items.length - 1]);
}
function prevHQCard() {
  let items = document.querySelectorAll(".hq-item");
  document.querySelector(".hq-slide").appendChild(items[0]);
}

export { nextHQCard, prevHQCard };
