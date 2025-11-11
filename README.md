# Dosti Tiffins Website

A beautifully themed website for Dosti Tiffins, featuring vibrant branding and a South Indian tiffin menu. Built with React and Vite.

---

## ✨ Features

- Modern hero section with themed logo and "Pure Ghee" badge
- Responsive navigation with smooth scroll ("roll down" effect) to each section
- About and Menu sections with grid layouts and custom color palette
- Item cards display centered item names & prices
- Footer and contact sections styled for local business needs

---

## 🚀 Getting Started

### 1. Clone the repo (or download the files)

git clone <your-repo-url>
cd dosti-tiffins


### 2. Install dependencies

npm install


### 3. Run the development server

npm run dev


Open your browser at the URL shown (usually http://localhost:5173).

---

## 🖼️ Assets

- Place all menu images and hero logo inside the `public/images/` folder.
- Place the navbar logo at `public/logo.png`.

---

## 📁 Project Structure

dosti-tiffins/
│
├── public/
│   ├── favicon.ico
│   ├── logo.png                 # Navbar/Hero logo
│   ├── images/                  # All menu item and hero images (e.g., masala-dosa.jpg, idli.jpg, etc.)
│
├── src/
│   ├── assets/
│   │   └── images/              # (Optional) If you want to import images in JS
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.module.css
│   │   ├── Hero.jsx
│   │   ├── Hero.module.css
│   │   ├── About.jsx
│   │   ├── About.module.css
│   │   ├── Menu.jsx
│   │   ├── Menu.module.css
│   │   ├── MenuCard.jsx         # Card for individual menu items
│   │   ├── MenuCard.module.css
│   │   ├── Contact.jsx
│   │   ├── Contact.module.css
│   │   ├── Footer.jsx
│   │   ├── Footer.module.css
│   ├── App.jsx                  # Main app file
│   ├── App.module.css           # Global app-wide styles or layout
│   ├── main.jsx                 # App entry point
│   ├── index.css                # Global styles, theme variables
│
├── package.json
├── vite.config.js
├── README.md
└── .gitignore


---

## 📝 Customizing

- Edit `src/components/Menu.jsx` for menu items.
- Update contact/address details in `Contact.jsx`.

---

## 📦 Build for Production

npm run build

The output will be in the `dist/` folder.

---

## 🖥️ Deploy

Easily deploy on platforms like Vercel, Netlify, or GitHub Pages.

---

## License

MIT

---

Crafted with ❤️ for Dosti Tiffins
