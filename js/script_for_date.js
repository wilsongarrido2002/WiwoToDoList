//Inserindo data
const dataAtual = new Date()
const dia = String(dataAtual.getDate()).padStart(2, '0')
const dataFormatada = `${dia}`



//Array com os nomes dos dias da semana
const mes_ = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const indiceMes = dataAtual.getMonth()
const nomeDoMes = mes_[indiceMes]
document.getElementById('mes').textContent = nomeDoMes

//Array com os nomes dos dias da semana
const diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
//PEGA O DIA DA SEMANA (0 PARA DOMINGO, 1 PARA SEGUNDA, ECT)
const indiceDia = dataAtual.getDay();
//Obtem o nome do dia da semana
const nomeDoDia = diasDaSemana[indiceDia]

document.getElementById('dia-da-semana').textContent = nomeDoDia

document.getElementById('data-atual').textContent = dataFormatada;