let comida = "";
let valor_comida;
let bebida = "";
let valor_bebida;
let sobremesa = "";
let valor_sobremesa;
let valor_total;
/*Função chamada no momento em que um item é selecionado. Recebe o item e a cadegoria do mesmo.*/
function Selecionar(item, categoria) {
  let lista = document.querySelector("." + categoria);
  if (document.querySelector("." + categoria + ".selecionado")) {
    document
      .querySelector("." + categoria + ".selecionado")
      .classList.remove("selecionado");
    lista
      .querySelector(".botao-selecao.botao-selecionado")
      .classList.remove("botao-selecionado");
  }
  item.classList.add("selecionado");
  item.querySelector(".botao-selecao").classList.add("botao-selecionado");
  let nome_item = item.querySelector("h1").innerHTML;
  let valor = item.querySelector(".valor").innerHTML;
  AtualizaPedido(categoria, nome_item, valor);
}
/*Funcão que atualiza os itens do pedido sempre que um deles é selecionado*/
function AtualizaPedido(categoria, item, valor) {
  valor = valor.toString().replace(",", ".");
  document.querySelector(".confirmacao." + categoria + " .item").innerHTML =
    item;
  document.querySelector(".confirmacao." + categoria + " .preco").innerHTML =
    "R$ " + valor;
  if (categoria === "comidas") {
    comida = "- Prato: " + item;
    valor_comida = Number(valor);
  }
  if (categoria === "bebidas") {
    bebida = "- Bebida: " + item;
    valor_bebida = Number(valor);
  }
  if (categoria === "sobremesas") {
    sobremesa = "- Sobremesa: " + item;
    valor_sobremesa = Number(valor);
  }
  if (comida !== "" && bebida !== "" && sobremesa !== "") {
    valor_total = valor_comida + valor_bebida + valor_sobremesa;
    valor_total = valor_total.toFixed(2);
    document.querySelector(".confirmacao.preco-total .preco").innerHTML =
      "R$ " + valor_total;
    document
      .querySelector(".botao.fechar-pedido")
      .classList.add("botao-ativado");
    document.querySelector(".botao.fechar-pedido").innerHTML = "Fechar Pedido!";
  }
}
/*Função que abre o popup de confirmação dos dados do pedido*/
function AbrePopUp() {
  if (comida !== "" && bebida !== "" && sobremesa !== "") {
    document
      .querySelector(".tela-cinza.escondido")
      .classList.remove("escondido");
    document
      .querySelector(".pop-up-confirmacao.escondido")
      .classList.remove("escondido");
  }
}
/*Função que fecha o popup caso o usuario clique em cancelar */
function FechaPopUp() {
  document.querySelector(".tela-cinza").classList.add("escondido");
  document.querySelector(".pop-up-confirmacao").classList.add("escondido");
}
/*Função chamada ao confirmar o pedido, solicita o nome e endereço e envia os dados para o whatstapp*/
function ConfirmaPedido() {
  let nome = prompt("Informe seu nome: ");
  let endereco = prompt("Informe seu endereço: ");
  let mensagem =
    "Olá, gostaria de fazer o pedido: \n" +
    comida +
    "\n" +
    bebida +
    "\n" +
    sobremesa +
    "\n" +
    "Total: R$ " +
    valor_total +
    "\n\n" +
    "Nome: " +
    nome +
    "\n" +
    "Endereço: " +
    endereco;
  mensagem =
    "https://wa.me/5548991235293/?text=" + encodeURIComponent(mensagem);
  window.open(mensagem);
}
