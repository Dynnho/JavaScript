document.addEventListener("DOMContentLoaded", (event) => {
  const botoesDetalhes = document.querySelectorAll(".btn-toggle-detalhes");

  botoesDetalhes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const detalhes = botao.parentNode.querySelector(".detalhes-ocultos");

      if (detalhes.style.display === "none") {
        detalhes.style.display = "block";
        botao.textContent = "Ocultar Detalhes";
      } else {
        detalhes.style.display = "none";
        botao.textContent = "Mostrar Detalhes";
      }
    });
  });
});
