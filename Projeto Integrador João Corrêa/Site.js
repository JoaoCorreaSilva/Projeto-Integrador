// Aguarde ate que o documento HTML esteja totalmente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Inicialize o carrossel
    $('.carousel').carousel();
});

// Definicao dos itens disponiveis
var item1 = { name: "Body family", price: 58.90 };
var item2 = { name: "Body Pecuaria", price: 19.90 };
var item3 = { name: "Body FBI", price: 33.33 };
var item4 = { name: "Body Modao", price: 19.90 };
var item5 = { name: "Body baby timas", price: 1.99 };
var item6 = { name: "Baby youtuber", price: 29.90 };

// Funcao para adicionar item ao carrinho
function addItemToCart(item) {
    var cart = localStorage.getItem("cart");
    if (cart) {
        cart = JSON.parse(cart);
    } else {
        cart = [];
    }
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item adicionado ao carrinho!");
}