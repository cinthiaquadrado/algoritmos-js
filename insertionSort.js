//inserindo elementos na posicao correta com relacao ao que vem antes dele

const livros = require('./listaLivros');

function insertionSort(lista){
  
  for (let atual = 0; atual < lista.length; atual++) {
    let analise = atual; //movendo de item por item 
    while (analise > 0 && lista[analise].preco < lista[analise - 1).preco) {
      let itemAnalise = lista[analise];
      let itemAnterior = lista[analise - 1];
      
      lista[analise] = itemAnterior
      lista[analise - 1] = itemaAnalise
      
      analise-- //analisando e voltando ate o momento em que a condicao do while nao e mais verdadeira
    }
  }
  console.log(lista);
}

insertionSort(livros); //lista arrumada por valor
