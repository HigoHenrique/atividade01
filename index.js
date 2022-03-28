//INPUT
const input = document.getElementById("input");
const input2 = document.getElementById("input-2");
//Botões
const buttonFim = document.getElementById("btn");
const buttonInicio = document.getElementById("btn-2");
const buttonLimpar = document.getElementById("btn-3");
const exibirLista = document.getElementById("btn-5");
const deletarIndice = document.getElementById("btn-4");
const lista = document.getElementById("lista");

let vetor = [];

function inserirInicio(){
    let valor = parseInt(input.value);
    if(valor){
        vetor.unshift(valor);
        input.value = "";
        input.focus();
        Lista();
        
    }else{
        alert("Digite um Número!")
    }
}

function inserirFim(){
    let valor = parseInt(input.value);
    if(valor){ 
        vetor.push(valor);
        input.value = "";
        input.focus()
        Lista();
    }else{
        alert("Digite um Número!")
    }
}

function Limpar(){
    vetor = [];
    input.value = "";
    Lista();
}

function Lista(){
    lista.innerText = '';
    vetor.forEach(n=>{
        item = document.createElement('li')
        item.textContent = n
        lista.appendChild(item)
      })
}

function RemoverIndice(){
    let valorIndice = parseInt(input2.value);

    if(vetor[valorIndice]){
        vetor.splice(valorIndice,1);
        input2.value = "";
        input2.focus();
        Lista();
    }else{
        alert("Digite um Indice válido");
        input2.value = "";
    }
}

buttonFim.onclick = inserirFim;
buttonInicio.onclick = inserirInicio;
buttonLimpar.onclick = Limpar;
deletarIndice.onclick = RemoverIndice;