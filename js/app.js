import promptSync from "prompt-sync";
const prompt = promptSync();

let harina = "500 gr de harina";
let sal = "una pizca de sal";
let levadura = "1gr levadura";
let agua = "200gr de agua";
let aceite = "100gr de aceite";
let masa = "masa";
let tomate = "tomate";
let queso = "queso mozarella";
let quesoAzul = "queso cabrales";
let jamon = "jamon";
let berenjena = "berenjena";

const pizzas = {
  vegetal: [tomate, queso, berenjena, quesoAzul],
  jamon: [tomate, queso, jamon],
};

function app() {
  const pedirPizza = prompt("Elige tu pizza (vegetal o jamon) ").toLowerCase();

  if (!pizzas[pedirPizza]) {
    console.log(`No existe la pizza ${pedirPizza}.`);
    return;
  }

  let listaIngredientes = pizzas[pedirPizza];

  console.log(`Pizza ${pedirPizza} en preparación`);
  pesarMasa(harina + ",", sal + ",", levadura + ",", agua + ",", aceite);
  añadirlevadurayagua();
  añadirSal();
  crearMasa();
  estirarMasa();
  cortarMasa();
  reposarMasa();
  calentarMasa();
  anadirIngredientes(listaIngredientes);
  hornear();
  enfriar();
  cortar();
  entregarPizza();

  function pesarMasa(ing1, ing2, ing3, ing4, ing5) {
    console.log("Pesar los:", ing1, ing2, ing3, ing4, ing5);
  }

  function añadirlevadurayagua() {
    console.log(
      "Se añade:" + agua + ",",
      levadura,
      "y se remueve para activar la levadura"
    );
  }
  function añadirSal() {
    console.log("Se juntan los ingredientes solidos:" + harina + ",", sal);
  }
  function crearMasa() {
    console.log(
      "Se juntan todos los ingredientes:",
      harina,
      agua,
      levadura,
      aceite,
      sal
    );
  }
  function estirarMasa() {
    console.log("Se amasan  los ingredientes");
  }
  function cortarMasa() {
    console.log("Se pesa la masa", masa, "y se corta en partes iguales");
  }
  function reposarMasa() {
    console.log("Se deja que fermente");
  }
  function calentarMasa() {
    console.log("Se calienta en el horno");
  }

  function anadirIngredientes(listaIngredientes) {
    for (let x = 0; x < listaIngredientes.length; x++) {
      console.log("Poner " + listaIngredientes[x]);
    }
  }
  function hornear() {
    console.log("Se mete la pizza en el horno");
  }

  function enfriar() {
    console.log("Se deja enfriar la pizza");
  }

  function cortar() {
    console.log("Se corta la pizza ");
  }

  function entregarPizza() {
    console.log("Se entrega al cliente");
  }
}

app();
