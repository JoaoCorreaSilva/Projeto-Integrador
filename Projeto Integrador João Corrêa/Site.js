// Aguarde até que o documento HTML esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicialize o carrossel
    $('.carousel').carousel();
});

let cart = [];
let modalQt = 0;
let key = 0;

document.addEventListener('DOMContentLoaded', function() {
    const buyButtons = document.querySelectorAll('.buy-button');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartModal = document.getElementById('cart-modal');
  
    let cart = [];
  
    // Atualiza o carrinho
    function updateCart() {
      cartItems.innerHTML = '';
      let total = 0;
  
      cart.forEach(item => {
        const cartRow = document.createElement('tr');
        const itemName = document.createElement('td');
        const itemPrice = document.createElement('td');
  
        itemName.innerText = item.name;
        itemPrice.innerText = `R$ ${item.price.toFixed(2)}`;
  
        cartRow.appendChild(itemName);
        cartRow.appendChild(itemPrice);
  
        cartItems.appendChild(cartRow);
  
        total += item.price;
      });
  
      cartTotal.innerText = `R$ ${total.toFixed(2)}`;
    }
  
    // Adiciona um item ao carrinho
    function addToCart(name, price) {
      const item = {
        name: name,
        price: price
      };
  
      cart.push(item);
      updateCart();
    }
  
    // Evento de clique nos botões de compra
    buyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const price = parseFloat(this.getAttribute('data-price'));
        addToCart(name, price);
        cartModal.style.display = 'block';
      });
    });
  });
  window.addEventListener('DOMContentLoaded', function() {
    // Seletor para o botão de compra
    var botaoCompra = document.querySelector('buy-button');
  
    // Adicionar o ouvinte de evento de clique
    botaoCompra.addEventListener('click', function() {
      // Obter a quantidade do elemento de entrada
      var quantidadeElemento = document.querySelector('buy-button');
      var quantidade = parseInt(quantidadeElemento.value);
  
      // Fazer algo com a quantidade
      console.log('Quantidade:', quantidade);
    });
  });