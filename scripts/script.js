const navEl = document.querySelector(".align-btn");
const navEl2 = document.querySelector(".navbar-content");
const hamburgerEl = document.querySelector(".hamburguer");

hamburgerEl.addEventListener("click", (evento) => {
  evento.stopPropagation(); //impedir que o clique suba até o document
  navEl.classList.toggle("align-btn--open");
  navEl2.classList.toggle("navbar-content--open");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu =
    navEl.contains(event.target) || navEl2.contains(event.target); //contains(event.target) verifica se o clique foi dentro do menu
  const isClickOnHamburger = hamburgerEl.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    navEl.classList.remove("align-btn--open");
    navEl2.classList.remove("navbar-content--open");
  }
});

//Search-bar events

const searchBarEl = document.getElementById("search-bar");
const searchBarIcon = document.getElementById("search-btn");

searchBarIcon.addEventListener("click", (evento) => {
  evento.stopPropagation();
  searchBarEl.classList.toggle("search-bar--open");
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = searchBarEl.contains(event.target);
  const isClickOnIcon = searchBarIcon.contains(event.target); //previne que se eu clicar no botao search como menu já aberto , o codument listener vai interpretar como "clique fora" e fecha geral

  if (!isClickInsideMenu && !isClickOnIcon) {
    searchBarEl.classList.remove("search-bar--open");
  }
});
