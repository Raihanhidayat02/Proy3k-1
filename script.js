let cartCount = 0;
const cartCountDisplay = document.getElementById("cart-count");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartCountDisplay.innerText = cartCount;
    showToast("Produk ditambahkan ke keranjang!");
  });
});
