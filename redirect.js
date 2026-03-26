function getToday() {
  const today = new Date();
  const dayOfWeek = today.getDay();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    today.setDate(dayOfWeek === 0 ? today.getDate() - 2 : today.getDate() - 1);
  }

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = String(today.getFullYear());
  return `${year}-${month}-${day}`;
}

const date = getToday();
const urlBase = "https://www.diariooficial.rs.gov.br/resultado";
const urlParams = new URLSearchParams({
  tipoDiario: "DOE",
  entidade: "CENTRO DE TECNOLOGIA DA INFORMAÇÃO E COMUNICAÇÃO DO ESTADO DO RGS",
  dataIni: date,
  dataFim: date,
  forceFilter: "true",
});

window.location.replace(`${urlBase}?${urlParams.toString()}`);
