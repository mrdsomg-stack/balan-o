const analises = {
  sede: {
    "2024-01": "Janeiro/2024: Resultado positivo, liquidez em alta.",
    "2024-02": "Fevereiro/2024: Queda no ativo circulante, atenção aos fornecedores.",
    "2025-01": "Janeiro/2025: Endividamento controlado, PL crescente."
  },
  emserh: {
    "2024-01": "Janeiro/2024: Superávit no exercício, receitas acima da previsão.",
    "2024-02": "Fevereiro/2024: Déficit causado por aumento de despesas administrativas.",
    "2025-01": "Janeiro/2025: Custos hospitalares em alta, margem reduzida."
  }
};

function mostrarAnalise(cc) {
  const ano = document.getElementById("ano").value;
  const mes = document.getElementById("mes").value;
  const chave = `${ano}-${mes}`;
  const resultado = document.getElementById("resultado");

  if (analises[cc] && analises[cc][chave]) {
    resultado.innerHTML = `<h2>Análise</h2><p>${analises[cc][chave]}</p>`;
  } else {
    resultado.innerHTML = "<p><em>Nenhuma análise encontrada para este período.</em></p>";
  }
}
