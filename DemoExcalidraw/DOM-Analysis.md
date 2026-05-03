# Phân tích DOM Portfolio - Nhật Huy

> Tư duy "chia để trị" — từ lớn tới nhỏ nhất

---

## 🌳 Cấp 1 — Toàn trang

```
<html>
  └── <body>
        └── <main>         ← page.tsx, bọc tất cả
```

---

## 🌿 Cấp 2 — Các section lớn

```
<main>
  ├── <nav>                    ← Navbar
  ├── <section id="hero">      ← Hero
  ├── <section id="about">     ← About
  ├── <section id="skills">    ← Skills
  ├── <section id="projects">  ← Projects
  ├── <section id="experience">← Experience
  ├── <section id="contact">   ← Contact
  └── <footer>                 ← Footer
```

---

## 🍃 Cấp 3 — Bên trong từng section

### Navbar
```
<nav>
  └── <div> (max-width container)
        ├── <div> Logo (NH + tên)
        ├── <ul>  Menu links
        │     └── <li> × 5 (About, Skills, Projects, Experience, Resume)
        └── <a>   Nút Contact Me
```

### Hero
```
<section id="hero">
  └── <div> (container)
        ├── <span>  Badge "Welcome to my Portfolio"
        ├── <h1>    Tiêu đề lớn
        ├── <p>     Mô tả ngắn
        └── <div>   2 nút CTA
              ├── <a> Contact Me →
              └── <a> View Projects
```

### About
```
<section id="about">
  └── <div> (container, flex row)
        ├── <div>  Avatar (ô vuông NH)
        └── <div>  Nội dung
              ├── <span> Label "About Me"
              ├── <h2>   Tiêu đề
              ├── <p>    Đoạn giới thiệu 1
              └── <p>    Đoạn giới thiệu 2
```

### Skills
```
<section id="skills">
  └── <div> (container)
        ├── <div> Header
        │     ├── <span> Label "Skills"
        │     ├── <h2>   Tiêu đề
        │     └── <p>    Mô tả
        └── <div> Grid các skill card
              └── <div> × 7 (mỗi skill 1 card)
                    ├── <span> Tên skill
                    └── <span> Level (Familiar / Learning)
```

### Projects
```
<section id="projects">
  └── <div> (container)
        ├── <div> Header
        │     ├── <span> Label "Projects"
        │     ├── <h2>   Tiêu đề
        │     └── <p>    Mô tả
        └── <div> Empty state (khung dashed)
              ├── <div>  Icon 🚧
              ├── <h3>   Tiêu đề
              ├── <p>    Mô tả
              └── <a>    Nút GitHub
```

### Experience
```
<section id="experience">
  └── <div> (container)
        ├── <div> Header
        │     ├── <span> Label "Experience"
        │     └── <h2>   Tiêu đề
        └── <div> Danh sách cards
              ├── <div> Card Học vấn
              │     ├── <span> Label + Năm
              │     ├── <h3>   Tên trường
              │     └── <p>    Ngành học
              ├── <div> Card Chứng chỉ
              │     ├── <span> Label + Trạng thái
              │     ├── <h3>   Tên chứng chỉ
              │     └── <p>    Mô tả
              └── <div> Card Tình nguyện
                    ├── <span> Label + Năm
                    ├── <h3>   Tên CLB
                    └── <p>    Mô tả
```

### Contact
```
<section id="contact">
  └── <div> (container, căn giữa)
        ├── <div> Header
        │     ├── <span> Label "Contact"
        │     ├── <h2>   Tiêu đề
        │     └── <p>    Mô tả
        └── <div> 2 nút liên hệ
              ├── <a>  📧 Email
              └── <a>  📘 Facebook
```

### Footer
```
<footer>
  └── <div> (container, căn giữa)
        ├── <div>  Logo NH
        ├── <div>  Social links
        │     └── <a> × 4 (GitHub, Facebook, Instagram, Zalo)
        └── <p>    © 2026 Nhật Huy. All rights reserved.
```

---

## 💡 Quy luật chung

Mọi section đều theo pattern giống nhau:

```
<section>
  └── <div> container (max-width + căn giữa)
        ├── Phần tiêu đề (header)
        └── Phần nội dung (content)
```

---

## 🧠 Tư duy "Chia để trị"

| Cấp | Thẻ | Vai trò |
|-----|-----|---------|
| 1 | `<html>`, `<body>`, `<main>` | Khung toàn trang |
| 2 | `<nav>`, `<section>`, `<footer>` | Các khu vực lớn |
| 3 | `<div>` container | Giới hạn max-width, căn giữa |
| 4 | `<div>` header / content | Chia đôi tiêu đề và nội dung |
| 5 | `<h1>`, `<h2>`, `<h3>`, `<p>`, `<span>`, `<a>` | Nội dung thật sự |

> **Nguyên tắc:** Càng đi sâu, thẻ càng nhỏ và càng cụ thể hơn.
