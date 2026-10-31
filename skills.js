// Dữ liệu Tiệm Skill Ứng Dụng AI — Nàng Ba MMO
// 31 tên skill lấy theo trang mẫu. Nội dung câu lệnh từng skill: Ba sẽ gửi sau,
// khung chi tiết đã chừa sẵn vị trí (trường "content" để trống = hiển thị hộp chờ).

const BRAND = {
  name: "Tiệm Skill Ứng Dụng AI",
  owner: "Nàng Ba MMO",
  zaloPersonal: "https://zalo.me/0785568539",
  zaloGroup: "https://zalo.me/g/dkeercivchvkddpj1avo",
  facebook: "https://www.facebook.com/nangbammo1/",
  youtube: "https://www.youtube.com/@nangbammo",
  tiktok: "https://www.tiktok.com/@nangbammo?_r=1&_t=ZS-9AR4fLL90Uc",
  // Địa chỉ MCP của tiệm (bản chính thức sẽ gắn sau khi deploy tên miền riêng)
  mcpUrl: "https://tiem-skill-ung-dung-ai.vercel.app/api/mcp",
  demoUnlockCode: "TIEMSKILL"
};

const PRICE_SINGLE = 135000;      // 1 skill lẻ (theo giá mẫu $5)
const PRICE_COMBO10 = 1039000;    // Combo 10 skill (theo giá mẫu $39)
const PRICE_BUNDLE = 3868000;     // Gói toàn bộ 31 skill (giá mẫu $145 — Ba chốt lại sau)

const HALLS = [
  { id: "I",   name: "Skill Hình Ảnh Thương Hiệu Cá Nhân",
    desc: "Tám việc làm ảnh hay phải thuê người khác — giờ tự làm, ngay trên máy hoặc ngay trong AI bạn đang dùng." },
  { id: "II",  name: "Skill Edit Video Bán Hàng",
    desc: "8 kiểu edit dựng sẵn — đưa video vào, AI tự cắt, tự dựng, tự xuất file hoàn chỉnh." },
  { id: "III", name: "Skill Subagent & Tự Động Hóa",
    desc: "Để AI tự chạy việc lặp lại — từ cắt dựng tự động tới trợ lý nghiên cứu và chăm sóc, bạn chỉ việc duyệt và đăng." },
  { id: "IV",  name: "Skill Trang Bán Hàng & Dịch Vụ",
    desc: "Tải nguyên một trang bán hàng ĐANG CHẠY THẬT về máy, thay nội dung của bạn, đưa lên mạng — không dựng từ con số không." },
  { id: "V",   name: "Skill VIP Video & Đa Kênh",
    desc: "Skill nâng cao cho video và kênh nội dung — từ edit, SEO YouTube đến tự động hoá đăng đa kênh." }
];

// hall: I | II | III | IV | V
const SKILLS = [
  { slug: "thuong-hieu-ca-nhan-text-overlay", name: "Thương hiệu cá nhân & Text Overlay", hall: "I", content: "" },
  { slug: "poster-san-pham", name: "Poster sản phẩm", hall: "I", content: "" },
  { slug: "xoa-nen-anh", name: "Xóa nền ảnh", hall: "I", content: "" },
  { slug: "xoa-logo-vat-the", name: "Xóa logo, vật thể", hall: "I", content: "" },
  { slug: "chinh-sua-anh", name: "Chỉnh sửa ảnh", hall: "I", content: "" },
  { slug: "tang-chat-luong-4k", name: "Tăng chất lượng 4k", hall: "I", content: "" },
  { slug: "multishot", name: "Multishot", hall: "I", content: "" },
  { slug: "hoan-doi-nhan-vat", name: "Hoán đổi nhân vật", hall: "I", content: "" },
  { slug: "edit-video-noi-chuyen-tu-dong", name: "Edit video nói chuyện tự động", hall: "II", content: "" },
  { slug: "video-noi-chuyen-hieu-ung-cao-cap", name: "Video nói chuyện hiệu ứng cao cấp", hall: "II", content: "" },
  { slug: "video-huong-dan-toi-gian-cho-coach", name: "Video hướng dẫn tối giản cho coach", hall: "II", content: "" },
  { slug: "video-talking-head-kieu-infographic", name: "Video talking-head kiểu infographic", hall: "II", content: "" },
  { slug: "cat-video-dai-thanh-nhieu-short", name: "Cắt video dài thành nhiều short", hall: "II", content: "" },
  { slug: "cat-podcast-2-nguoi-thanh-short", name: "Cắt podcast 2 người thành short", hall: "II", content: "" },
  { slug: "ghep-nhieu-clip-theo-nhac-trend", name: "Ghép nhiều clip theo nhạc trend", hall: "II", content: "" },
  { slug: "ai-tu-cat-highlight-theo-nhac", name: "AI tự cắt highlight theo nhạc", hall: "II", content: "" },
  { slug: "edit-video-zoom-tu-dong", name: "Edit video Zoom tự động", hall: "III", content: "" },
  { slug: "tao-video-tu-dong-voi-google-flow", name: "Tạo video tự động với Google Flow", hall: "III", content: "" },
  { slug: "subagent-cham-soc", name: "Subagent chăm sóc", hall: "III", content: "" },
  { slug: "subagent-nghien-cuu", name: "Subagent nghiên cứu", hall: "III", content: "" },
  { slug: "subagent-seo-kenh-youtube", name: "Subagent SEO kênh YouTube", hall: "III", content: "" },
  { slug: "trang-ban-workshop-su-kien", name: "Trang bán workshop & sự kiện", hall: "IV", content: "" },
  { slug: "trang-san-dich-vu-theo-ho-so", name: "Trang sàn dịch vụ theo hồ sơ", hall: "IV", content: "" },
  { slug: "trang-ban-san-pham-so-dong-gia", name: "Trang bán sản phẩm số đồng giá", hall: "IV", content: "" },
  { slug: "trang-ung-dung-cho-khach-dung-thu", name: "Trang ứng dụng cho khách dùng thử", hall: "IV", content: "" },
  { slug: "teardown-kenh-doi-thu", name: "Teardown kênh đối thủ", hall: "V", content: "" },
  { slug: "bo-45-slide-mau-dung-san", name: "Bộ 45 slide mẫu dựng sẵn", hall: "V", content: "" },
  { slug: "viet-va-dang-bai-facebook-dung-giong-kenh", name: "Viết và đăng bài Facebook đúng giọng kênh", hall: "V", content: "" },
  { slug: "tao-video-viral", name: "Tạo video viral", hall: "V", content: "" },
  { slug: "slide-thuyet-trinh-tu-dong", name: "Slide thuyết trình tự động", hall: "V", content: "" },
  { slug: "xay-kenh-facebook-tu-dong", name: "Xây kênh Facebook tự động", hall: "V", content: "" }
];

function fmt(n) { return n.toLocaleString("vi-VN") + " ₫"; }
function hallById(id) { return HALLS.find(h => h.id === id); }
function skillBySlug(slug) { return SKILLS.find(s => s.slug === slug); }
