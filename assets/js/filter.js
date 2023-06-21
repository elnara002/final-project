const movies = document.getElementById("moviesAll");
const filmCards = document.getElementsByClassName("film-card");

function filterFilmsByGenre(genre) {
  for (let i = 0; i < filmCards.length; i++) {
    const cardGenre = filmCards[i].getElementsByClassName("filmGenre")[0].textContent;
    if (cardGenre.toLowerCase() === genre.toLowerCase()) {
      filmCards[i].style.display = "block"; 
    } else {
      filmCards[i].style.display = "none"; 
    }
  }
}

const dropdownItems = document.querySelectorAll(".dropdown-item");
dropdownItems.forEach((item) => {
  item.addEventListener("click", function () {
    const selectedGenre = this.textContent;
    filterFilmsByGenre(selectedGenre);
  });
});
