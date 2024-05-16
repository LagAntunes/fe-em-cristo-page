//Função para pegar os versículos vindos da API
function fetchVerse() {
  fetch("https://www.abibliadigital.com.br/api/verses/acf/random")
    .then((response) => response.json())
    .then((data) => {
      const verseText = data.text;
      const verseReference = `${data.book.name} ${data.chapter}:${data.number}`;
      document.getElementById("verseText").textContent = verseText;
      document.getElementById("verseReference").textContent = verseReference;
    })
    .catch((error) => {
      console.error("Erro ao obter versículo:", error);
      document.getElementById("verseText").textContent =
        "Não foi possível carregar o versículo.";
    });
}

fetchVerse();

//Função para ativar a animação do FiveColours
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
  });
});

//Função para ativar o slider de imagens
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 500,
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
    },
  });
});
