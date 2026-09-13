
const projects = [
  {
    title: "Sapaq Agency",
    url:   "sapaqagency.com",
    image: "./image/Screenshot 2026-06-03 114255.png",     
    desc:  "Designed a marketing agency website using WordPress and Elementor, focused on user experience and conversions. Showcases services and results clearly, with interactive pop-ups, a Sina-based content slider for case studies, and a Fluent Forms contact form for lead generation.",
    tags:  ["WordPress", "Elementor", "Interactive"]
  },
  {
    title: "Rabhan Agency",
    url:   "rabhanagency.com",
    image: "./image/Screenshot 2026-06-03 115105.png",
    desc:  "Designed and developed a dynamic website for Rabhan Agency using WordPress and Elementor. Features a custom profit calculator for instant earnings estimates, along with structured sections and tab-based navigation for a smooth, interactive user experience.",
    tags:  ["Dynamic", "Custom Calculator", "UX"]
  },
  {
    title: "Metals Engineering",
    url:   "metals-engineering.com",
    image: "./image/Screenshot 2026-06-03 120444.png",
    desc:  "Developed a modern service-based website for Metal Engineering (Saudi Engineering Company) using WordPress, featuring advanced Fluent Forms Pro for service requests and a smooth, user-friendly experience.",
    tags:  ["Corporate", "Forms Pro"]
  },
  {
    title: "Kashtah Waqanas",
    url:   "kashtahwaqanas.com",
    image: "./image/Screenshot 2026-06-03 120808.png",
    desc:  "Designed and developed a bilingual e-commerce website using WordPress with a clear product layout and Polylang for multilingual support, focusing on usability, responsiveness, and conversions.",
    tags:  ["E-Commerce", "WooCommerce", "Bilingual"]
  },
  {
    title: "Al Tayseer Metal",
    url:   "altayseermetal.com",
    image: "./image/Screenshot 2026-06-03 121136.png",
    desc:  "Designed a service-based website with an engaging layout, featuring a dynamic first banner created using Slider Revolution to enhance visual appeal and user interaction.",
    tags:  ["Service", "Slider Revolution"]
  },
  {
    title: "SenGar",
    url:   "sengar.sa",
    image: "./image/Screenshot 2026-06-03 121312.png",
    desc:  "Designed a bilingual service website for SenGar (Arabic & English) with a modern, user-friendly layout to present services clearly and enhance user engagement.",
    tags:  ["Bilingual", "Service"]
  },
  {
    title: "Rashat-atr",
    url:   "rashat-atr.com",
    image: "./image/Screenshot 2026-06-03 121527.png",
    desc:  "Designed and developed a WordPress e-commerce store specializing in perfumes, incense, and oud products. Built with a well-structured product catalog, intuitive navigation, and a responsive design to enhance the shopping experience and drive conversions.",
    tags:  ["E-Commerce", "WordPress", "Perfumes"]
  },
  {
  title: "Langistics",
  url: "langistics.sa",
  image: "./image/Screenshot 2026-06-03 121644.png",
  desc: "Developed a custom WordPress real estate website featuring a dynamic property management system, Elementor-integrated listings, a custom-designed project details page, and an interactive homepage powered by Slider Revolution for an engaging user experience.",
  tags: ["WordPress", "Real Estate", "Elementor"]
},
{
  title: "Shuwaish",
  url: "shuwaish.com",
  image: "./image/Screenshot 2026-06-03 121759.png",
  desc: "Developed a bilingual WordPress e-commerce platform with a structured product management system, multiple product categories, and a user-friendly shopping experience. Implemented responsive layouts, multilingual functionality, and optimized navigation to help customers easily browse products and complete purchases across different devices.",
  tags: ["WordPress", "E-Commerce", "Multilingual", "WooCommerce"]
},
{
  title: "Gift.store",
  url: "givt.store",
  image: "./image/WhatsApp Image 2026-08-02 at 10.59.06 AM.jpeg",
  desc: "Designed and developed a WordPress e-commerce store for personalized gifts and custom products. Implemented custom product personalization using YITH WooCommerce Product Add-ons & Extra Options, allowing customers to add their own text or requests before purchasing. Also customized the store to support the new Saudi Riyal currency symbol, delivering a localized shopping experience.",
  tags: ["WordPress", "E-Commerce", "YITH Product Add-ons", "WooCommerce"]
},
{
  title: "WorthFinding",
  url: "worthfinding-sa.com",
  image: "./image/ChatGPT Image Sep 13, 2026, 03_02_23 PM.png",
  desc: "Designed and developed a bilingual digital e-commerce store using WordPress and Elementor. The website features a clean and modern layout for showcasing digital books and products, with organized product collections, a smooth shopping experience, and responsive design across all devices. The store was also customized to support both English and Arabic, providing a seamless experience for a wider audience.",
  tags: ["WordPress", "Elementor", "WooCommerce", "E-Commerce", "Custom Development"]
},
{
  title: "Qasralomda",
  url: "qasralomda.com",
  image: "./image/WhatsApp Image 2026-09-13 at 3.44.45 PM.jpeg",
  desc: "Designed and developed a modern furniture and home decor e-commerce website using WordPress, Elementor, and WooCommerce. The site features an elegant and minimal layout tailored for luxury furniture, well-structured product categories, intuitive navigation, and a seamless, fully responsive shopping experience across all devices.",
  tags: ["WordPress", "Elementor", "WooCommerce", "E-Commerce", "Furniture", "Responsive Design"]
},
{
  title: "Ahmad-Ama",
  url: "ahmad-ama.com",
  image: "./image/WhatsApp Image 2026-09-13 at 3.44.45 PM (1).jpeg",
  desc: "Designed and custom-developed a luxurious e-commerce website for a premium perfume brand (AMA - Ahmad) using custom coding. The platform features an elegant, minimalist layout tailored for high-end fragrances, seamless product exploration, high performance, and an optimized responsive user experience across all devices.",
  tags: ["WordPress", "Elementor", "WooCommerce", "E-Commerce", "Perfume", "Responsive Design", "Custom Coding"]
}
 
];


/* ============================================================
   SVG ICONS
============================================================ */
const globeSVG = `<svg width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.4" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="10"/>
  <line x1="2" y1="12" x2="22" y2="12"/>
  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
</svg>`;

const extSVG = `<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
  <polyline points="15 3 21 3 21 9"/>
  <line x1="10" y1="14" x2="21" y2="3"/>
</svg>`;


/* ============================================================
   RENDER A SINGLE PROJECT CARD
   - لو المشروع عنده image: بيعرضها
   - لو مفيش image: بيعرض الأيقونة التلقائية
============================================================ */
function projectCard(p) {
  const tagsHtml  = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const thumbHtml = p.image
    ? `<img src="${encodeURI(p.image)}" alt="${p.title}" class="proj-thumb-img" onerror="this.replaceWith(document.createRange().createContextualFragment(globeSVG))" />`
    : globeSVG;

  return `
    <div class="proj-card">
      <div class="proj-thumb ${p.image ? 'has-img' : ''}">${thumbHtml}</div>
      <div class="proj-body">
        <h4>${p.title}</h4>
        <p>${p.desc}</p>
        <div class="proj-tags">${tagsHtml}</div>
        <a href="https://${p.url}" target="_blank" rel="noopener noreferrer" class="proj-link">
          ${p.url} ${extSVG}
        </a>
      </div>
    </div>`;
}


/* ============================================================
   RENDER GRIDS
   renderFeatured() → يعرض أول 3 مشاريع في index.html
   renderAll()      → يعرض كل المشاريع في projects.html
============================================================ */
function renderFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (grid) grid.innerHTML = projects.slice(0, 3).map(projectCard).join('');
}

function renderAll() {
  const grid = document.getElementById('allGrid');
  if (!grid) return;

  /* inject cards hidden first, then fade in staggered */
  grid.innerHTML = projects.map((p, i) => {
    const card = projectCard(p);
    return card.replace('<div class="proj-card">', `<div class="proj-card" style="opacity:0;transform:translateY(24px);transition:opacity .5s ease ${i * 80}ms,transform .5s ease ${i * 80}ms">`);
  }).join('');

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      grid.querySelectorAll('.proj-card').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    });
  });
}


/* ============================================================
   SCROLL REVEAL  (Intersection Observer)
============================================================ */
function initReveal() {
  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('on');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => obs.observe(el));
}


/* ============================================================
   PARALLAX HERO BG  (index.html only)
============================================================ */
function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    heroBg.style.transform = `translateY(${window.scrollY * 0.32}px)`;
  }, { passive: true });
}


/* ============================================================
   SMOOTH SCROLL TO SECTION  (index.html nav links)
============================================================ */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}


/* ============================================================
   SET CURRENT YEAR IN FOOTER
============================================================ */
function setYear() {
  const el = document.getElementById('yr');
  if (el) el.textContent = new Date().getFullYear();
}


/* ============================================================
   INIT ON DOM READY
============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setYear();
  renderFeatured();
  renderAll();
  initParallax();

  /* trigger hero items immediately */
  setTimeout(() => {
    document.querySelectorAll('#hero .reveal, #hero .reveal-left, #hero .reveal-right')
      .forEach(el => el.classList.add('on'));
    initReveal();
  }, 120);
});
