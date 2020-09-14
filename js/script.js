window.addEventListener('load' , start);

let vermelho = document.querySelector('#vermelho');
let verde = document.querySelector('#verde');
let azul = document.querySelector('#azul');

let currentR = document.querySelector('#valorR');
let currentG = document.querySelector('#valorG');
let currentB = document.querySelector('#valorB');

let divCor = document.querySelector('#atualCor');


function start(){
	vermelho.addEventListener('input' , handleRangeInputs); //função que carrega os eventos assim que a página estiver carregada
	verde.addEventListener('input' , handleRangeInputs);
	azul.addEventListener('input' , handleRangeInputs);
}

function handleRangeInputs(){ //função para escutar o evento do input e marcar no input text
	currentR.value = vermelho.value;
	currentG.value = verde.value;   //variaveis para curret recebedo o valor atual do input range
	currentB.value = azul.value;
	alternandoCor(vermelho.value , verde.value , azul.value); //chamada da função alternando cor para atualizar o rgb na div
}

function alternandoCor(){ //função que receberá os valores da função rgb() e inserir na div
 
 function rgb(){
	let r = currentR.value;
	let g = currentG.value;  //função rgb(), esta cria as variaveis, recebe o valor atual dos inputs de valor text e retorna em valor String
	let b = currentB.value;

	let rgb = 'rgb(' + r + ', ' + g + ', ' + b + ')';
	return rgb;
	}
	
	divCor.style.backgroundColor = rgb(); //style.backgroundColor vai transformar os valores String da variavel rgb em uma escala de cores e retornar na div do documento
}









