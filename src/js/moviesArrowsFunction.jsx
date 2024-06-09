//Avançar para o próximo slide
//Em seguida, ela move o primeiro item da lista items (ou seja, items[0]) para o final dos filhos do elemento .slide, usando o método appendChild.
function nextMovieCard() {
  let items = document.querySelectorAll(".movie-item");
  document.querySelector(".movie-slide").prepend(items[items.length - 1]);
}
//Retroceder um slide
//Move o primeiro elemento da lista de itens (.item) para o final do contêiner com a classe slide.
function prevMovieCard() {
  let items = document.querySelectorAll(".movie-item");
  document.querySelector(".movie-slide").appendChild(items[0]);
}

export { nextMovieCard, prevMovieCard };