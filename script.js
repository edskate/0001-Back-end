// Dados de compras
var compras = [
    { item: 'Banana', preco: 10.5 },
    { item: 'Maçã', preco: 1.75 },
    { item: 'Morango', preco: 22.25 },
    
  ];
  
  // Função para exibir as compras
  function exibirCompras() {
    var comprasDiv = document.getElementById('compras');
  
    // Limpar o conteúdo existente
    comprasDiv.innerHTML = '';
  
    // Percorrer as compras e exibir cada uma
    for (var i = 0; i < compras.length; i++) {
      var compra = compras[i];
  
      // Criar um elemento de parágrafo para cada compra
      var p = document.createElement('p');
      p.textContent = 'Item: ' + compra.item + ', Preço: $' + compra.preco;
  
      // Adicionar o parágrafo à div de compras
      comprasDiv.appendChild(p);
    }
  }
  
  // Chamar a função para exibir as compras quando a página carregar
  window.onload = exibirCompras;