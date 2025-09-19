// Função principal: salvar e carregar análises no navegador
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("analiseForm");
  if (!form) return; // Se não for página de análise, não faz nada

  // Descobre se está em SEDE ou EMSERH (pelo título da página)
  const centro = document.title.includes("SEDE") ? "SEDE" : "EMSERH";

  const anoInput = document.getElementById("ano");
  const mesInput = document.getElementById("mes");
  const textoInput = document.getElementById("texto");
  const resultadoDiv = document.getElementById("resultado");

  // Carregar análise salva quando ano/mês mudam
  function carregarAnalise() {
    const ano = anoInput.value;
    const mes = mesInput.value;
    if (!ano || !mes) return;

    const chave = `${centro}_${ano}_${mes}`;
    const analise = localStorage.getItem(chave);

    textoInput.value = analise || "";
    resultadoDiv.textContent = analise ? analise : "Nenhuma análise salva.";
  }

  anoInput.addEventListener("change", carregarAnalise);
  mesInput.addEventListener("change", carregarAnalise);

  // Salvar análise no localStorage
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ano = anoInput.value;
    const mes = mesInput.value;
    const texto = textoInput.value;

    const chave = `${centro}_${ano}_${mes}`;
    localStorage.setItem(chave, texto);

    resultadoDiv.textContent = texto || "Nenhuma análise salva.";
    alert("Análise salva com sucesso!");
  });
});
