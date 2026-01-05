/* MOBILE NAV */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger?.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close menu when a link is clicked
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

/* SMOOTH SCROLL */
document.querySelectorAll("[data-scroll]").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.scroll)?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* SERVICES DATA */
const services = [
  {
    title: "Website Development",
    image: "assets/images/service1.png",
    price: "Rp. 1,9 juta,-",
    desc: "We help businesses establish their dream website:",
    features: [
      "One-page website",
      "Company profile",
      "Portfolio website",
      "Landing page",
      "E-commerce website"
    ]
  },
  {
    title: "Website Improvement",
    image: "assets/images/service2.png",
    price: "Rp. 750 ribu,-",
    desc: "Improve UX, speed, and conversions.",
    features: ["UI/UX refresh", "Fix responsiveness", "CTA optimization"]
  },
  {
    title: "SEO & Performance Optimization",
    image: "assets/images/service3.png",
    price: "Rp. 1,2 juta,-",
    desc: "Boost your website's visibility and speed.",
    features: ["On-page SEO", "Performance tuning", "Analytics setup"]
  },
  {
    title: "Graphic Design & Content",
    image: "assets/images/service4.png",
    price: "Rp. 1 juta,-",
    desc: "Enhance your website with professional graphics and content.",
    features: ["Custom graphics", "Content creation", "Branding materials"]
  }
];

const grid = document.getElementById("servicesGrid");
const detail = document.getElementById("serviceDetail");
let openIndex = 0;

function getServiceDetailHTML(s) {
  return `
      <div class="service-detail-inner">
        <div class="service-detail-header">
          <p class="nunito-sans-regular-mono" style="font-size: 18px;">${s.desc}</p>
          <strong class="text-orange" style="font-size: 20px;display: flex; align-items: center;">
            <img src="assets/images/price-tag-icon.png" width=24 height=24 alt="" aria-hidden="true" style="width:24px; height:24px; vertical-align: middle; margin-right: 6px;">
            Mulai dari ${s.price}
          </strong>
        </div>
        <div class="service-detail-features">
          <ul>${s.features.map(f => `<li>${f}</li>`).join("")}</ul>
        </div>
      </div>
    `;
}

services.forEach((s, i) => {
  const card = document.createElement("div");
  card.className = "service-card";
  if (i === 0) card.classList.add("active");

  card.innerHTML = `
    <h3>${s.title}</h3>
    ${s.image ? `<img src="${s.image}" alt="${s.title}" class="service-img">` : ""}
  `;

  card.onclick = () => {
    if (openIndex === i) {
      const inner = detail.querySelector(".service-detail-inner");
      if (inner) {
        inner.classList.add("closing");
        inner.addEventListener(
          "animationend",
          () => {
            if (detail.contains(inner)) {
              detail.innerHTML = "";
              openIndex = null;
              document.querySelectorAll(".service-card").forEach((c) => c.classList.remove("active"));
            }
          },
          { once: true }
        );
      } else {
        detail.innerHTML = "";
        openIndex = null;
        document.querySelectorAll(".service-card").forEach((c) => c.classList.remove("active"));
      }
      return;
    }

    document.querySelectorAll(".service-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    openIndex = i;
    detail.innerHTML = getServiceDetailHTML(s);

    // Scroll to detail so user notices it
    detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
  };

  grid.appendChild(card);
});

if (services.length > 0) {
  detail.innerHTML = getServiceDetailHTML(services[0]);
}

/* CONTACT FORM */
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert("Terima kasih! Form berhasil dikirim.");
  e.target.reset();
});


/* PORTFOLIO SLIDER (center + peek + dots + arrows + swipe) */
(function initPortfolioSlider() {
  const slidesEl = document.getElementById("slides");
  const dotsEl = document.getElementById("sliderDots");
  const sliderRoot = document.getElementById("slider");

  if (!slidesEl || !dotsEl || !sliderRoot) return;

  const prevBtn = sliderRoot.querySelector(".slider-arrow.prev");
  const nextBtn = sliderRoot.querySelector(".slider-arrow.next");

  const items = [
    {
      title: "Vivaci Living - Company Profile",
      link: "https://vivaci-living.com/",
      image: "assets/images/portfolio/vivaci-living.png",
      desc: "Website company profile untuk Vivaci Living, menampilkan layanan dan portofolio mereka."
    },
    {
      title: "Yayasan Masjid Agung Ibnu Batutah",
      link: "https://masjidibnubatutah.id/",
      image: "assets/images/portfolio/ibnu-batutah.png",
      desc: "Website profil yayasan dengan struktur konten rapi, responsif, dan mudah dikelola."
    },
    {
      title: "Handduk.co - E-commerce",
      link: "https://handduk.co/",
      image: "assets/images/portfolio/handduk.png",
      desc: "Toko online untuk produk handuk berkualitas dengan desain menarik dan navigasi mudah."
    }
  ];

  // Render slides
  slidesEl.innerHTML = items
    .map(
      (it, idx) => {
        const thumbStyle = it.image 
          ? `background-image: url('${it.image}'); background-size: cover; background-position: center;` 
          : '';
        return `
      <article class="slide" role="listitem" data-index="${idx}">
        <h3>${it.title}</h3>
        <div class="thumb" aria-hidden="true" style="${thumbStyle}"></div>
        <a href="${it.link}" target="_blank" rel="noopener">visit site</a>
        <p>${it.desc}</p>
      </article>
    `})
    .join("");

  // Render dots
  dotsEl.innerHTML = items
    .map((_, i) => `<button class="dot" type="button" aria-label="Go to slide ${i + 1}" data-dot="${i}"></button>`)
    .join("");

  const slideNodes = Array.from(slidesEl.querySelectorAll(".slide"));
  const dotNodes = Array.from(dotsEl.querySelectorAll(".dot"));

  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

  function getClosestIndex() {
    // pilih slide dengan jarak offsetLeft paling dekat terhadap scrollLeft + center area
    const scrollLeft = slidesEl.scrollLeft;
    const center = scrollLeft + slidesEl.clientWidth / 2;

    let bestIdx = 0;
    let bestDist = Infinity;

    slideNodes.forEach((node, idx) => {
      const nodeCenter = node.offsetLeft + node.clientWidth / 2;
      const dist = Math.abs(nodeCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    return bestIdx;
  }

  function setActiveDot(idx) {
    dotNodes.forEach((d, i) => d.classList.toggle("active", i === idx));
  }

  function scrollToIndex(idx) {
    idx = clamp(idx, 0, slideNodes.length - 1);
    const node = slideNodes[idx];
    if (!node) return;

    // scroll so that slide is centered (works well with scroll-snap)
    const targetLeft = node.offsetLeft - (slidesEl.clientWidth - node.clientWidth) / 2;
    slidesEl.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActiveDot(idx);
    currentIndex = idx;
  }

  // Dots click
  dotNodes.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.dot);
      scrollToIndex(idx);
    });
  });

  // Arrows
  let currentIndex = 0;

  prevBtn?.addEventListener("click", () => scrollToIndex(currentIndex - 1));
  nextBtn?.addEventListener("click", () => scrollToIndex(currentIndex + 1));

  // Update dot on scroll (swipe)
  let raf = null;
  slidesEl.addEventListener("scroll", () => {
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const idx = getClosestIndex();
      currentIndex = idx;
      setActiveDot(idx);
    });
  });

  // Keyboard support (optional nice)
  sliderRoot.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") scrollToIndex(currentIndex - 1);
    if (e.key === "ArrowRight") scrollToIndex(currentIndex + 1);
  });

  // Init
  setActiveDot(0);
  // sedikit delay biar layout settle sebelum snap
  setTimeout(() => scrollToIndex(0), 50);
})();


/* SCROLL REVEAL (no library) */
(function initScrollReveal() {
  // Elements to reveal:
  // - Sections (big blocks)
  // - Cards/grids (smaller blocks)
  const targets = [
    ...document.querySelectorAll(".section"),
    ...document.querySelectorAll(".about-card"),
    ...document.querySelectorAll(".service-card"),
    ...document.querySelectorAll(".slide"),
    ...document.querySelectorAll(".cta-box"),
    ...document.querySelectorAll(".contact-info"),
    ...document.querySelectorAll(".contact-form"),
    ...document.querySelectorAll(".ig-item"),
    ...document.querySelectorAll(".footer-box")
  ];

  // Add base class
  targets.forEach((el) => el.classList.add("reveal"));

  // If reduced motion, just show
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  // Optional: add stagger delays to groups (cards/grids)
  function applyStagger(nodeList, step = 70, cap = 350) {
    nodeList.forEach((el, i) => {
      const d = Math.min(i * step, cap);
      el.style.setProperty("--delay", `${d}ms`);
      el.setAttribute("data-delay", "1");
    });
  }

  applyStagger(document.querySelectorAll(".about-card"), 80, 320);
  applyStagger(document.querySelectorAll(".service-card"), 80, 320);
  applyStagger(document.querySelectorAll(".ig-item"), 60, 300);

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target); // reveal once (clean)
        }
      });
    },
    {
      root: null,
      threshold: 0.12,
      rootMargin: "0px 0px -10% 0px" // reveal a bit before fully visible
    }
  );

  targets.forEach((el) => io.observe(el));
})();

/* LANGUAGE TOGGLE */
const langOptions = document.querySelectorAll(".lang-option");

langOptions.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all
    langOptions.forEach(b => b.classList.remove("active"));
    // Add active class to clicked
    btn.classList.add("active");
    
    const lang = btn.dataset.lang;
    // console.log("Language switched to:", lang);
    // TODO: Implement translation logic here
  });
});
