# CRAVO Website Source Code

- **Website gốc:** https://splendorous-starship-594965.netlify.app/
- **Thời gian trích xuất:** 2026-10-26
- **Trích xuất & đóng gói bởi:** Antigravity AI

---

## 📁 Cấu trúc thư mục

```text
cravo-website/
├── index.html            # Phiên bản chuẩn đã tách module (CSS, JS, hình ảnh offline)
├── original_index.html   # File gốc 100% tải trực tiếp từ Netlify
├── standalone.html       # Phiên bản Single-Page đầy đủ (đã kèm ảnh cục bộ)
├── favicon.ico           # Favicon của website
├── css/
│   └── style.css         # Toàn bộ CSS phong cách Neo-Brutalist / Modern Streetwear
├── js/
│   └── script.js         # Toàn bộ mã JavaScript (Giỏ hàng, Lọc món, Modal đặt hàng, Toast)
├── images/               # Thư mục chứa toàn bộ hình ảnh độ phân giải cao offline
│   ├── hero-burger.jpg
│   ├── menu-smash-burger.jpg
│   ├── menu-chicken.jpg
│   ├── menu-loaded-fries.jpg
│   ├── menu-matcha-cloud.jpg
│   ├── menu-double-trouble.jpg
│   ├── menu-strawberry-shake.jpg
│   ├── story-burger-grill.jpg
│   └── favicon.ico
└── README.md             # Tài liệu hướng dẫn sử dụng này
```

---

## 🚀 Hướng dẫn mở và sử dụng

1. **Xem trực tiếp trên máy (Offline hoàn toàn):**
   - Click đúp vào file `index.html` (hoặc chuột phải chọn Open with Chrome / Edge / Firefox) để mở trang web.
   - Toàn bộ tính năng giỏ hàng, đặt món, bộ lọc món ăn và hoạt ảnh đều chạy mượt mà ngay trên máy tính mà không cần kết nối internet.

2. **Chỉnh sửa / Phát triển tiếp:**
   - Để sửa giao diện, màu sắc, font: Chỉnh sửa file `css/style.css`.
   - Để thêm/sửa món ăn, đổi text: Chỉnh sửa file `index.html`.
   - Để đổi logic giỏ hàng, thông báo: Chỉnh sửa file `js/script.js`.
   - Để đổi hình ảnh: Chỉ cần thay thế các file ảnh trong thư mục `images/`.

3. **Deploy lên mạng:**
   - Kéo thả toàn bộ thư mục `cravo-website` lên [Netlify Drop](https://app.netlify.com/drop), Vercel, hoặc GitHub Pages để có một website hoạt động công khai ngay lập tức.
