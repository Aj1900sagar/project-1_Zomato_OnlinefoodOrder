// ===== FOOD BOOKING SCRIPT =====
document.querySelectorAll('.book-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const popup = document.getElementById('bookingPopup');
    popup.style.display = 'flex';

    // Get food details
    const item = btn.getAttribute('data-item');
    const price = btn.getAttribute('data-price');
    const time = btn.getAttribute('data-time');
    const imgSrc = btn.parentElement.querySelector('img').src;

    // Fill popup
    document.getElementById('foodTitle').textContent = item;
    document.getElementById('foodPrice').textContent = price;
    document.getElementById('foodTime').textContent = time;
    document.getElementById('foodImg').src = imgSrc;
    document.getElementById('totalPrice').textContent = price;
    document.getElementById('quantity').value = 1;
  });
});

// Close popup
document.getElementById('closePopup').addEventListener('click', () => {
  document.getElementById('bookingPopup').style.display = 'none';
});

// Update total price
document.getElementById('quantity').addEventListener('input', (e) => {
  const qty = e.target.value;
  const price = parseInt(document.getElementById('foodPrice').textContent);
  document.getElementById('totalPrice').textContent = price * qty;
});

// Confirm order
document.getElementById('confirmOrder').addEventListener('click', () => {
  alert("✅ Your order has been placed successfully!\nThank you for ordering 🍽️");
  document.getElementById('bookingPopup').style.display = 'none';
});
