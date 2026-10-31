// Logic dùng chung — Tiệm Skill Ứng Dụng AI (bản khung giao diện).
// Tài khoản, trạng thái mở khóa lưu trên trình duyệt (localStorage).
// Giai đoạn máy chủ thật sẽ thay phần này bằng tài khoản + thanh toán tự động.

const LS_USER = "nb_tiemskill_user";
const LS_UNLOCKED = "nb_tiemskill_unlocked";

function getUser() { try { return JSON.parse(localStorage.getItem(LS_USER) || "null"); } catch (e) { return null; } }
function setUser(u) { localStorage.setItem(LS_USER, JSON.stringify(u)); }
function logout() { localStorage.removeItem(LS_USER); location.href = "dang-nhap.html"; }
function isUnlocked() { return localStorage.getItem(LS_UNLOCKED) === "1"; }

function renderChrome() {
  const h = document.querySelector("[data-header]");
  if (h) {
    const u = getUser();
    h.innerHTML = `<div class="wrap">
      <a class="logo" href="index.html">Tiệm Skill <span>Ứng Dụng AI</span></a>
      <nav>
        <a href="index.html">Sàn Skill</a>
        <a href="tai-khoan.html">Tài khoản của tôi</a>
        <a href="${BRAND.zaloPersonal}" target="_blank" rel="noopener">💬 Hỏi nhanh qua Zalo</a>
        ${u ? `<span>👋 ${u.email}</span><a href="#" onclick="logout();return false;">Đăng xuất</a>`
            : `<a class="btn btn-small" href="dang-nhap.html">Đăng nhập / Đăng ký</a>`}
      </nav></div>`;
  }
  const f = document.querySelector("[data-footer]");
  if (f) {
    f.innerHTML = `<div class="wrap">
      <b style="color:#fff">Tiệm Skill Ứng Dụng AI — ${BRAND.owner}</b>
      <p style="margin:8px 0 0">Mỗi skill là một câu lệnh soạn sẵn — dán vào ChatGPT hoặc Gemini bạn đang có, kèm ảnh của bạn, là ra thứ đăng bán được ngay. Không cài gì, làm được cả trên điện thoại.</p>
      <div class="foot-links">
        <a href="${BRAND.zaloPersonal}" target="_blank" rel="noopener">Zalo cá nhân</a>
        <a href="${BRAND.zaloGroup}" target="_blank" rel="noopener">Nhóm Zalo</a>
        <a href="${BRAND.facebook}" target="_blank" rel="noopener">Facebook</a>
        <a href="${BRAND.youtube}" target="_blank" rel="noopener">YouTube</a>
        <a href="${BRAND.tiktok}" target="_blank" rel="noopener">TikTok</a>
      </div></div>`;
  }
}

function skillCard(s) {
  const open = isUnlocked();
  return `<div class="card"><a class="skill-link" href="skill.html?slug=${s.slug}">
    <h3>${s.name}</h3><span>${open ? "Mở →" : "🔒"}</span></a>
    <p>Sảnh ${s.hall} · ${hallById(s.hall).name} · ${fmt(PRICE_SINGLE)}</p></div>`;
}

// ---- Checkout: hộp thoại thanh toán chuyển khoản ----
function openCheckout(title, price) {
  const m = document.getElementById("checkout-modal");
  document.getElementById("co-title").textContent = title;
  document.getElementById("co-price").textContent = fmt(price);
  m.classList.add("open");
}
function closeCheckout() { document.getElementById("checkout-modal").classList.remove("open"); }

function checkoutModalHTML() {
  return `<div class="modal-bg" id="checkout-modal"><div class="modal">
    <h3 id="co-title">Thanh toán</h3>
    <p>Số tiền: <b id="co-price"></b></p>
    <div class="wait-box"><b>Thông tin chuyển khoản</b><br>
    Ngân hàng: Sacombank<br>
    Số tài khoản: 060241562975<br>
    Chủ tài khoản: Trương Thị Phương<br>
    Nội dung chuyển khoản: TIEMSKILL + số điện thoại của bạn<br>
    Chuyển khoản xong, bạn nhắn Zalo
    <a href="${BRAND.zaloPersonal}" target="_blank" rel="noopener"><b>0785568539</b></a>
    để nhận mã truy cập, rồi nhập mã ở trang Tài khoản để mở khóa skill ngay.</div>
    <div class="pill-row">
      <a class="btn" href="${BRAND.zaloPersonal}" target="_blank" rel="noopener">Đã chuyển khoản, nhắn Zalo nhận mã</a>
      <button class="btn btn-ghost" style="color:#1b2926;border-color:#cbd8c9" onclick="closeCheckout()">Đóng</button>
    </div></div></div>`;
}

document.addEventListener("DOMContentLoaded", renderChrome);
