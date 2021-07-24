let comida = "";
let valor_comida;
let bebida = "";
let valor_bebida;
let sobremesa = "";
let valor_sobremesa;

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

function AtualizaPedido(categoria, item, valor) {
  valor = valor.toString().replace(",", ".");
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
    document
      .querySelector(".botao-fechar-pedido")
      .classList.add("botao-ativado");
    document.querySelector(".botao-fechar-pedido").innerHTML = "Fechar Pedido!";
  }
}

function ConfirmaPedido() {
  if (comida !== "" && bebida !== "" && sobremesa !== "") {
    let valor_total = valor_comida + valor_bebida + valor_sobremesa;
    valor_total = valor_total.toFixed(2);
    let mensagem =
      "Olá, gostaria de fazer o pedido: \n" +
      comida +
      "\n" +
      bebida +
      "\n" +
      sobremesa +
      "\n" +
      "Total: R$ " +
      valor_total;
    mensagem =
      "https://wa.me/5548991235293/?text=" + encodeURIComponent(mensagem);
    window.open(mensagem);
  }
}
