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


/* PORTFOLIO SLIDER - Modern Revamped Version */
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
      desc: "Website company profile untuk Vivaci Living, menampilkan layanan dan portofolio mereka.",
      category: "Company Profile"
    },
    {
      title: "Yayasan Masjid Agung Ibnu Batutah",
      link: "https://masjidibnubatutah.id/",
      image: "assets/images/portfolio/ibnu-batutah.png",
      desc: "Website profil yayasan dengan struktur konten rapi, responsif, dan mudah dikelola.",
      category: "Non-Profit"
    },
    {
      title: "Handduk.co - E-commerce",
      link: "https://handduk.co/",
      image: "assets/images/portfolio/handduk.png",
      desc: "Toko online untuk produk handuk berkualitas dengan desain menarik dan navigasi mudah.",
      category: "E-Commerce"
    }
  ];

  let currentIndex = 0;
  let autoPlayInterval = null;
  let isAutoPlaying = true;
  const AUTO_PLAY_DELAY = 4500;

  // Render slides with enhanced markup
  slidesEl.innerHTML = items
    .map((item, idx) => {
      const thumbStyle = item.image 
        ? `background-image: url('${item.image}');` 
        : '';
      return `
        <article class="slide" role="listitem" data-index="${idx}">
          <div class="slide-inner">
            <div class="slide-category">${item.category}</div>
            <div class="slide-image" style="${thumbStyle}">
              <div class="slide-overlay"></div>
            </div>
            <div class="slide-content">
              <h3 class="slide-title">${item.title}</h3>
              <p class="slide-desc">${item.desc}</p>
              <a href="${item.link}" class="slide-link" target="_blank" rel="noopener">
                <span>Visit Site</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10m0 0L9 4m4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  // Render dots with progress indicators
  dotsEl.innerHTML = items
    .map((_, i) => `
      <button class="dot" type="button" aria-label="Go to slide ${i + 1}" data-dot="${i}">
        <span class="dot-progress"></span>
      </button>
    `)
    .join("");

  const slideNodes = Array.from(slidesEl.querySelectorAll(".slide"));
  const dotNodes = Array.from(dotsEl.querySelectorAll(".dot"));

  // Utility functions
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  
  function setActiveSlide(idx) {
    idx = clamp(idx, 0, items.length - 1);
    
    // Update slides
    slideNodes.forEach((node, i) => {
      node.classList.remove('active', 'prev', 'next');
      if (i === idx) {
        node.classList.add('active');
      } else if (i === idx - 1 || (idx === 0 && i === items.length - 1)) {
        node.classList.add('prev');
      } else if (i === idx + 1 || (idx === items.length - 1 && i === 0)) {
        node.classList.add('next');
      }
    });

    // Update dots
    dotNodes.forEach((dot, i) => {
      dot.classList.toggle('active', i === idx);
      const progress = dot.querySelector('.dot-progress');
      if (i === idx && isAutoPlaying) {
        progress.style.animation = `dotProgress ${AUTO_PLAY_DELAY}ms linear`;
      } else {
        progress.style.animation = 'none';
      }
    });

    // Update transform
    const offset = -idx * 100;
    slidesEl.style.transform = `translateX(${offset}%)`;
    
    currentIndex = idx;
  }

  function goToSlide(idx) {
    stopAutoPlay();
    setActiveSlide(idx);
    startAutoPlay();
  }

  function nextSlide() {
    const nextIdx = (currentIndex + 1) % items.length;
    setActiveSlide(nextIdx);
  }

  function prevSlide() {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    setActiveSlide(prevIdx);
  }

  // Auto-play functionality
  function startAutoPlay() {
    if (!isAutoPlaying) return;
    stopAutoPlay();
    autoPlayInterval = setInterval(nextSlide, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function pauseAutoPlay() {
    isAutoPlaying = false;
    stopAutoPlay();
  }

  function resumeAutoPlay() {
    isAutoPlaying = true;
    startAutoPlay();
  }

  // Event listeners - Arrows
  prevBtn?.addEventListener("click", () => {
    prevSlide();
    stopAutoPlay();
    setTimeout(startAutoPlay, 1000);
  });

  nextBtn?.addEventListener("click", () => {
    nextSlide();
    stopAutoPlay();
    setTimeout(startAutoPlay, 1000);
  });

  // Event listeners - Dots
  dotNodes.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.dot);
      goToSlide(idx);
    });
  });

  // Event listeners - Keyboard
  sliderRoot.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
      stopAutoPlay();
      setTimeout(startAutoPlay, 1000);
    }
    if (e.key === "ArrowRight") {
      nextSlide();
      stopAutoPlay();
      setTimeout(startAutoPlay, 1000);
    }
  });

  // Touch/Swipe support
  let touchStartX = 0;
  let touchEndX = 0;
  let isSwiping = false;

  slidesEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    isSwiping = true;
    pauseAutoPlay();
  }, { passive: true });

  slidesEl.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    touchEndX = e.changedTouches[0].screenX;
  }, { passive: true });

  slidesEl.addEventListener('touchend', () => {
    if (!isSwiping) return;
    isSwiping = false;
    
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    setTimeout(resumeAutoPlay, 1000);
  }, { passive: true });

  // Pause on hover
  sliderRoot.addEventListener('mouseenter', pauseAutoPlay);
  sliderRoot.addEventListener('mouseleave', resumeAutoPlay);

  // Pause on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Initialize
  setActiveSlide(0);
  startAutoPlay();

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setActiveSlide(currentIndex);
    }, 150);
  });
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

/* BLOG SECTION */
(function initBlogSection() {
  const grid = document.getElementById("blogGrid");
  const detail = document.getElementById("blogDetail");

  if (!grid || !detail) return;

  const modal = document.createElement("div");
  modal.className = "blog-modal";
  modal.setAttribute("aria-hidden", "true");
  modal.innerHTML = `
    <div class="blog-modal__backdrop" data-close></div>
    <div class="blog-modal__panel" role="dialog" aria-modal="true" aria-label="Artikel blog">
      <button class="blog-modal__close" type="button" aria-label="Tutup artikel">×</button>
    </div>
  `;
  const modalPanel = modal.querySelector(".blog-modal__panel");
  modalPanel?.appendChild(detail);
  document.body.appendChild(modal);

  const sources = [
    {
      file: "blog/launching-groovdev.md",
      fallbackMeta: {
        title: "Peluncuran GroovDev 2025",
        date: "2025-12-15",
        readTime: "4 min read",
        tags: ["process", "tech", "team"],
        excerpt: "Bagaimana kami membangun website cepat dengan sprint pendek dan QA rapi.",
        cover: "assets/images/portfolio/vivaci-living.png"
      }
    },
    {
      file: "blog/first-30-days.md",
      fallbackMeta: {
        title: "Checklist 30 Hari Pertama",
        date: "2025-12-10",
        readTime: "3 min read",
        tags: ["launch", "ops", "analytics"],
        excerpt: "Langkah praktis agar website baru langsung mengumpulkan lead.",
        cover: "assets/images/portfolio/handduk.png"
      }
    },
    {
      file: "blog/speed-seo-conversion.md",
      fallbackMeta: {
        title: "Kecepatan, SEO, dan Konversi",
        date: "2025-11-25",
        readTime: "4 min read",
        tags: ["seo", "performance", "conversion"],
        excerpt: "Optimasi ringan yang menaikkan trust dan klik CTA di situs UMKM.",
        cover: "assets/images/portfolio/ibnu-batutah.png"
      }
    }
  ];

  function parseFrontMatter(text) {
    const trimmed = text.trim();
    const match = trimmed.match(/^---\s*([\s\S]*?)---\s*([\s\S]*)$/);

    if (!match) {
      return { meta: {}, body: text };
    }

    const rawMeta = match[1].split(/\r?\n/);
    const meta = {};

    rawMeta.forEach((line) => {
      const [key, ...rest] = line.split(":");
      if (!key || rest.length === 0) return;
      const value = rest.join(":").trim();

      if (value.startsWith("[") && value.endsWith("]")) {
        meta[key.trim()] = value
          .slice(1, -1)
          .split(",")
          .map((v) => v.trim().replace(/^"|"$/g, ""))
          .filter(Boolean);
      } else {
        meta[key.trim()] = value.replace(/^"|"$/g, "");
      }
    });

    return { meta, body: match[2].trim() };
  }

  function markdownToHTML(md = "") {
    const lines = md.split(/\r?\n/);
    const html = [];
    let inList = false;

    const fmt = (text) => text
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/\*([^*]+)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

    lines.forEach((line) => {
      const trimmed = line.trim();

      if (!trimmed) {
        if (inList) return;
        html.push("");
        return;
      }

      const headingMatch = trimmed.match(/^(#{1,3})\s+(.*)$/);
      if (headingMatch) {
        if (inList) {
          html.push("</ul>");
          inList = false;
        }
        const level = headingMatch[1].length;
        html.push(`<h${level}>${fmt(headingMatch[2])}</h${level}>`);
        return;
      }

      const listMatch = trimmed.match(/^[-*]\s+(.*)$/);
      if (listMatch) {
        if (!inList) {
          html.push("<ul>");
          inList = true;
        }
        html.push(`<li>${fmt(listMatch[1])}</li>`);
        return;
      }

      if (inList) {
        html.push("</ul>");
        inList = false;
      }

      html.push(`<p>${fmt(trimmed)}</p>`);
    });

    if (inList) html.push("</ul>");

    return html.filter(Boolean).join("\n");
  }

  function renderDetail(post) {
    if (!post) {
      detail.innerHTML = '<p class="blog-empty">Belum ada artikel.</p>';
      return;
    }

    const meta = post.meta || {};
    const tags = Array.isArray(meta.tags) ? meta.tags : [];

    detail.innerHTML = `
      <div class="blog-meta">
        <span>${meta.date || ""}</span>
        ${meta.readTime ? `<span>• ${meta.readTime}</span>` : ""}
      </div>
      <h3>${meta.title || "Artikel"}</h3>
      <div class="blog-tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="blog-body">${markdownToHTML(post.body || post.content || "")}</div>
      <div class="blog-cta-inline">
        <span>Butuh bantuan bangun situs?</span>
        <button type="button" data-scroll="#contact">Hubungi GroovDev</button>
      </div>
    `;

    detail.querySelector("[data-scroll]")?.addEventListener("click", () => {
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    });
  }

  function openModal() {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
    modal.querySelector(".blog-modal__close")?.focus();
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
  }

  function renderGrid(posts) {
    grid.innerHTML = posts
      .map((post, idx) => {
        const meta = post.meta || {};
        const tags = Array.isArray(meta.tags) ? meta.tags : [];
        const coverStyle = meta.cover
          ? `style="background-image: linear-gradient(135deg, rgba(0,0,0,0.05), rgba(0,0,0,0.3)), url('${meta.cover}');"`
          : "";

        return `
          <article class="blog-card ${idx === 0 ? "active" : ""}" data-idx="${idx}" tabindex="0">
            <div class="blog-cover" ${coverStyle}></div>
            <div class="blog-card-body">
              <div class="blog-meta">
                <span>${meta.date || ""}</span>
                ${meta.readTime ? `<span>• ${meta.readTime}</span>` : ""}
              </div>
              <h3>${meta.title || "Artikel"}</h3>
              <p class="blog-excerpt">${meta.excerpt || "Baca insight terbaru dari GroovDev."}</p>
              <div class="blog-tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
              <button class="blog-read" type="button" data-idx="${idx}">Baca artikel</button>
            </div>
          </article>
        `;
      })
      .join("");

    function setActive(index, shouldScroll = true) {
      const selected = posts[index];
      if (!selected) return;

      grid.querySelectorAll(".blog-card").forEach((card) => card.classList.remove("active"));
      const activeCard = grid.querySelector(`[data-idx="${index}"]`);
      activeCard?.classList.add("active");

      renderDetail(selected);
      if (shouldScroll) openModal();
    }

    grid.querySelectorAll(".blog-card").forEach((card) => {
      const idx = Number(card.dataset.idx);

      card.addEventListener("click", () => setActive(idx));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setActive(idx);
        }
      });
      card.querySelector(".blog-read")?.addEventListener("click", (e) => {
        e.stopPropagation();
        setActive(idx);
      });
    });

    setActive(0, false);
  }

  function loadPost(source) {
    return fetch(source.file)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load blog");
        return res.text();
      })
      .then((text) => {
        const parsed = parseFrontMatter(text);
        return {
          ...source,
          meta: { ...source.fallbackMeta, ...(parsed.meta || {}) },
          body: parsed.body
        };
      })
      .catch(() => ({
        ...source,
        meta: source.fallbackMeta,
        body: source.fallbackBody || "Konten belum tersedia."
      }));
  }

  Promise.all(sources.map(loadPost))
    .then(renderGrid)
    .catch(() => {
      grid.innerHTML = "";
      detail.innerHTML = '<p class="blog-empty">Tidak dapat memuat artikel saat ini.</p>';
    });

  modal.addEventListener("click", (e) => {
    if (e.target?.matches("[data-close], .blog-modal__close")) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();

/* IG CAROUSEL */
/* INSTAGRAM CAROUSEL - Horizontal Single-Row Scrolling */
(function initIgCarousel() {
  const slidesEl = document.getElementById("igSlides");
  const dotsEl = document.getElementById("igDots");
  const carousel = document.getElementById("igCarousel");

  if (!slidesEl || !dotsEl || !carousel) return;

  const prevBtn = carousel.querySelector(".ig-arrow.prev");
  const nextBtn = carousel.querySelector(".ig-arrow.next");
  const slideNodes = Array.from(slidesEl.querySelectorAll(".ig-item"));
  
  const AUTO_PLAY_DELAY = 3500;
  const totalItems = slideNodes.length;
  
  let currentIndex = 0;
  let autoPlayInterval = null;
  let isAutoPlaying = true;
  let touchStartX = 0;
  let touchEndX = 0;

  // Render dots based on items (one dot per item)
  dotsEl.innerHTML = Array.from({ length: totalItems }, (_, i) => 
    `<button class="dot" type="button" aria-label="Go to item ${i + 1}" data-index="${i}">
      <span class="dot-progress"></span>
    </button>`
  ).join("");

  const dotNodes = Array.from(dotsEl.querySelectorAll(".dot"));

  function setActiveItem(index) {
    index = Math.max(0, Math.min(totalItems - 1, index));
    
    // Update slides visibility and animation
    slideNodes.forEach((node, idx) => {
      node.classList.remove('active', 'prev', 'next');
      
      if (idx === index) {
        node.classList.add('active');
        node.style.transitionDelay = '0ms';
      } else if (idx < index) {
        node.classList.add('prev');
        node.style.transitionDelay = '0ms';
      } else {
        node.classList.add('next');
        node.style.transitionDelay = '0ms';
      }
    });

    // Scroll within the carousel container only (avoid page auto-scroll)
    const activeItem = slideNodes[index];
    if (activeItem) {
      const itemLeft = activeItem.offsetLeft;
      const targetLeft = itemLeft - (slidesEl.clientWidth - activeItem.clientWidth) / 2;
      slidesEl.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }

    // Update dots
    dotNodes.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
      const progress = dot.querySelector('.dot-progress');
      if (i === index && isAutoPlaying) {
        progress.style.animation = `dotProgress ${AUTO_PLAY_DELAY}ms linear`;
      } else {
        progress.style.animation = 'none';
      }
    });

    // Update arrows (always available in continuous carousel)
    if (prevBtn) prevBtn.disabled = false;
    if (nextBtn) nextBtn.disabled = false;
    
    currentIndex = index;
  }

  function goToItem(index) {
    stopAutoPlay();
    setActiveItem(index);
    startAutoPlay();
  }

  function nextItem() {
    const next = (currentIndex + 1) % totalItems;
    setActiveItem(next);
  }

  function prevItem() {
    const prev = (currentIndex - 1 + totalItems) % totalItems;
    setActiveItem(prev);
  }

  // Auto-play functionality
  function startAutoPlay() {
    if (!isAutoPlaying) return;
    stopAutoPlay();
    autoPlayInterval = setInterval(nextItem, AUTO_PLAY_DELAY);
  }

  function stopAutoPlay() {
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function pauseAutoPlay() {
    isAutoPlaying = false;
    stopAutoPlay();
  }

  function resumeAutoPlay() {
    isAutoPlaying = true;
    startAutoPlay();
  }

  // Event listeners - Arrows
  prevBtn?.addEventListener("click", () => {
    prevItem();
    stopAutoPlay();
    setTimeout(startAutoPlay, 1000);
  });

  nextBtn?.addEventListener("click", () => {
    nextItem();
    stopAutoPlay();
    setTimeout(startAutoPlay, 1000);
  });

  // Event listeners - Dots
  dotNodes.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index);
      goToItem(index);
    });
  });

  // Event listeners - Keyboard
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevItem();
      stopAutoPlay();
      setTimeout(startAutoPlay, 1000);
    }
    if (e.key === "ArrowRight") {
      nextItem();
      stopAutoPlay();
      setTimeout(startAutoPlay, 1000);
    }
  });

  // Touch/Swipe support
  slidesEl.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    pauseAutoPlay();
  }, { passive: true });

  slidesEl.addEventListener('touchmove', (e) => {
    touchEndX = e.changedTouches[0].screenX;
  }, { passive: true });

  slidesEl.addEventListener('touchend', () => {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextItem();
      } else {
        prevItem();
      }
    }
    
    setTimeout(resumeAutoPlay, 1000);
  }, { passive: true });

  // Pause on hover
  carousel.addEventListener('mouseenter', pauseAutoPlay);
  carousel.addEventListener('mouseleave', resumeAutoPlay);

  // Pause on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  // Initialize
  setActiveItem(0);
  startAutoPlay();

  // Handle window resize
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      setActiveItem(currentIndex);
    }, 150);
  });
})();
