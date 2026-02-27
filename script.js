const getRandomInteger = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}
const randomInteger = getRandomInteger(0, 5)

const msgs = ["Aumentar o Valor Total de cada Pedido","Conquistar Mais Vendas","Transformar a Experiência de Compra ","Encantar e Fidelizar os Clientes","Maximizar os Resultados do meu negócio"];

const msgGrifada = document.getElementById("msgGrifada");
let msg = document.createElement("p");
msg.classList.add("grifado");
msg.textContent = msgs[randomInteger]
msgGrifada.appendChild(msg);

const listContainer = document.getElementById("list-container");
const inputBox = document.getElementById("input-box");

function addTask(){
    if(inputBox.value === ''){
        alert("Insira um valor!");
    }else{
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listContainer.appendChild(li);
        let excluir = document.createElement("span");
        excluir.textContent = "  x"
        li.appendChild(excluir);
    }
    inputBox.value = '';
    saveData();
    const randomInteger = getRandomInteger(0, 5)
    msg.textContent = msgs[randomInteger]
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();