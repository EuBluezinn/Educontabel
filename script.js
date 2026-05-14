// MENU LINKS

const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.style.transform = "scale(1.1)";
  });

  link.addEventListener("mouseleave", () => {
    link.style.transform = "scale(1)";
  });
});


// BOTÃO PRINCIPAL (COMEÇAR AGORA)

const botao = document.querySelector(".btn");

if (botao) {
  botao.addEventListener("click", (e) => {
    e.preventDefault();

    window.open(
      "https://typebot.co/a-d-a-lovelance-matematica-6b748hd",
      "_blank"
    );
  });
}


// ANIMAÇÃO DOS CARDS

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

  card.addEventListener("mouseenter", () => {
    card.style.background = "#dbeafe";
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "#f8fafc";
  });

});


// EFEITO DE ENTRADA

window.addEventListener("load", () => {

  const heroText = document.querySelector(".hero-text");

  if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(30px)";

    setTimeout(() => {
      heroText.style.transition = "1s";
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }, 300);
  }

});