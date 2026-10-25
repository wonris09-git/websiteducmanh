// State Management
    let cart = [];

    // DOM Elements
    const openCartBtn = document.getElementById('open-cart-btn');
    const closeCartBtn = document.getElementById('close-cart-btn');
    const cartBackdrop = document.getElementById('cart-backdrop');
    const cartLines = document.getElementById('cart-lines');
    const cartCountBadge = document.getElementById('cart-count');
    const cartTotalPrice = document.getElementById('cart-total-price');
    const orderForm = document.getElementById('order-form');
    const filterButtons = document.querySelectorAll('.filter-chip');
    const menuCards = document.querySelectorAll('.menu-card');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    // Modal elements
    const orderModal = document.getElementById('order-modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalBtn = document.getElementById('close-modal-btn');

    // Cart Drawer Toggle Logic
    function openCart() {
      document.body.classList.add('cart-open');
    }

    function closeCart() {
      document.body.classList.remove('cart-open');
    }

    openCartBtn.addEventListener('click', openCart);
    closeCartBtn.addEventListener('click', closeCart);
    cartBackdrop.addEventListener('click', closeCart);

    // Toast Message Display
    function showToast(msg) {
      toastMessage.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 2500);
    }

    // Cart UI Update Logic
    function updateCartUI() {
      cartLines.innerHTML = '';

      if (cart.length === 0) {
        cartLines.innerHTML = '<p class="empty-cart-msg">Chưa có món nào. Đang chờ bạn chọn đó!</p>';
        cartCountBadge.textContent = '0';
        cartTotalPrice.textContent = '0K';
        return;
      }

      let totalQty = 0;
      let totalPrice = 0;

      cart.forEach(item => {
        totalQty += item.quantity;
        totalPrice += item.price * item.quantity;

        const cartItemEl = document.createElement('div');
        cartItemEl.className = 'cart-item';
        cartItemEl.innerHTML = `
          <div class="cart-item-info">
            <span class="cart-item-title">${item.name}</span>
            <span class="cart-item-price">${item.price}K</span>
          </div>
          <div class="cart-item-controls">
            <button type="button" class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
            <span class="qty-count">${item.quantity}</span>
            <button type="button" class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
          </div>
        `;
        cartLines.appendChild(cartItemEl);
      });

      cartCountBadge.textContent = totalQty;
      cartTotalPrice.textContent = totalPrice + 'K';
    }

    // Cart Operations
    function addToCart(id, name, price) {
      const existingItem = cart.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        cart.push({ id, name, price, quantity: 1 });
      }
      updateCartUI();
      showToast(`Đã thêm "${name}" vào giỏ!`);
    }

    function changeQty(id, delta) {
      const item = cart.find(item => item.id === id);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
          cart = cart.filter(i => i.id !== id);
        }
      }
      updateCartUI();
    }

    // Attach Add to Cart Event Listeners
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.dataset.id);
        const name = btn.dataset.name;
        const price = parseInt(btn.dataset.price);
        addToCart(id, name, price);
      });
    });

    // Menu Filter Logic
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.dataset.category;

        menuCards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
            card.classList.add('fade-in');
          } else {
            card.style.display = 'none';
            card.classList.remove('fade-in');
          }
        });
      });
    });

    // Form Checkout Submission Logic
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();

      if (cart.length === 0) {
        showToast('Giỏ hàng đang trống! Vui lòng chọn món trước.');
        return;
      }

      const name = document.getElementById('customer-name').value;
      const phone = document.getElementById('customer-phone').value;
      const address = document.getElementById('customer-address').value;

      const orderListHtml = cart.map(i => `<li><strong>${i.name}</strong> x${i.quantity} — ${i.price * i.quantity}K</li>`).join('');

      modalContent.innerHTML = `
        <p>Cảm ơn <strong>${name}</strong> đã đặt hàng tại CRAVO!</p>
        <div class="modal-body-section">
          <p><strong>Thông tin giao hàng:</strong></p>
          <p>• SĐT: ${phone}</p>
          <p>• Địa chỉ: ${address}</p>
        </div>
        <div class="modal-body-section">
          <p><strong>Danh sách món:</strong></p>
          <ul style="padding-left: 20px; margin-top: 4px;">
            ${orderListHtml}
          </ul>
          <p style="margin-top: 8px; font-weight: 700; color: var(--clr-orange);">TỔNG CỘNG: ${cartTotalPrice.textContent}</p>
        </div>
        <p style="margin-top: 12px; font-size: 0.9rem; color: var(--clr-muted);">Đơn hàng của bạn đang được chuyển đến nhà bếp để chuẩn bị ngay!</p>
      `;

      orderModal.classList.add('active');
      
      cart = [];
      updateCartUI();
      orderForm.reset();
      closeCart();
    });

    closeModalBtn.addEventListener('click', () => {
      orderModal.classList.remove('active');
    });