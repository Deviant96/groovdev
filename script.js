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

/* BLOG SECTION */
(function initBlogSection() {
  const grid = document.getElementById("blogGrid");
  const detail = document.getElementById("blogDetail");

  if (!grid || !detail) return;

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
      
      if (shouldScroll) {
        detail.scrollIntoView({ behavior: "smooth", block: "start" });
      }
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
})();

/* IG CAROUSEL */
(function initIgCarousel() {
  const slidesEl = document.getElementById("igSlides");
  const dotsEl = document.getElementById("igDots");
  const carousel = document.getElementById("igCarousel");

  if (!slidesEl || !dotsEl || !carousel) return;

  const prevBtn = carousel.querySelector(".ig-arrow.prev");
  const nextBtn = carousel.querySelector(".ig-arrow.next");

  const slideNodes = Array.from(slidesEl.querySelectorAll(".ig-item"));
  const clamp = (n, min, max) => Math.max(min, Math.min(max, n));
  const autoplayDelay = 3000;

  // Render dots
  dotsEl.innerHTML = slideNodes
    .map((_, i) => `<button class="dot" type="button" aria-label="Go to post ${i + 1}" data-dot="${i}"></button>`)
    .join("");

  const dotNodes = Array.from(dotsEl.querySelectorAll(".dot"));

  function getClosestIndex() {
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

  function updateArrowStates() {
    if (prevBtn) prevBtn.disabled = currentIndex === 0;
    if (nextBtn) nextBtn.disabled = currentIndex === slideNodes.length - 1;
  }

  function scrollToIndex(idx, fromAutoplay = false) {
    idx = clamp(idx, 0, slideNodes.length - 1);
    const node = slideNodes[idx];
    if (!node) return;

    const targetLeft = node.offsetLeft - (slidesEl.clientWidth - node.clientWidth) / 2;
    slidesEl.scrollTo({ left: targetLeft, behavior: "smooth" });
    setActiveDot(idx);
    currentIndex = idx;
    updateArrowStates();
    if (!fromAutoplay) userInteracting = true;
  }

  // Dots click
  dotNodes.forEach((dot) => {
    dot.addEventListener("click", () => {
      const idx = Number(dot.dataset.dot);
      scrollToIndex(idx);
      scheduleAutoplay();
    });
  });

  // Arrows
  let currentIndex = 0;
  let autoplayTimer = null;
  let scrollIdleTimer = null;
  let isDragging = false;
  let startX = 0;
  let startScrollLeft = 0;
  let userInteracting = false;

  prevBtn?.addEventListener("click", () => {
    scrollToIndex(currentIndex - 1);
    scheduleAutoplay();
  });
  nextBtn?.addEventListener("click", () => {
    scrollToIndex(currentIndex + 1);
    scheduleAutoplay();
  });

  // Update dot on scroll (swipe/drag)
  let raf = null;
  slidesEl.addEventListener("scroll", () => {
    if (raf) cancelAnimationFrame(raf);
    if (autoplayTimer) stopAutoplay();
    if (scrollIdleTimer) clearTimeout(scrollIdleTimer);

    raf = requestAnimationFrame(() => {
      const idx = getClosestIndex();
      currentIndex = idx;
      setActiveDot(idx);
      updateArrowStates();
    });

    scrollIdleTimer = setTimeout(() => {
      userInteracting = false;
      scheduleAutoplay();
    }, 800);
  });

  // Keyboard support
  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      scrollToIndex(currentIndex - 1);
      scheduleAutoplay();
    }
    if (e.key === "ArrowRight") {
      scrollToIndex(currentIndex + 1);
      scheduleAutoplay();
    }
  });

  function stopAutoplay() {
    if (autoplayTimer) clearTimeout(autoplayTimer);
    autoplayTimer = null;
  }

  function startAutoplay() {
    stopAutoplay();
    autoplayTimer = setTimeout(() => {
      if (isDragging || userInteracting) {
        startAutoplay();
        return;
      }
      const nextIdx = (currentIndex + 1) % slideNodes.length;
      scrollToIndex(nextIdx, true);
      startAutoplay();
    }, autoplayDelay);
  }

  function scheduleAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  // Drag to scroll
  function onDragStart(clientX) {
    isDragging = true;
    slidesEl.classList.add("dragging");
    startX = clientX;
    startScrollLeft = slidesEl.scrollLeft;
    stopAutoplay();
  }

  function onDragMove(clientX) {
    if (!isDragging) return;
    const walk = (startX - clientX) * 1.5;
    slidesEl.scrollLeft = startScrollLeft + walk;
  }

  function onDragEnd() {
    if (!isDragging) return;
    isDragging = false;
    slidesEl.classList.remove("dragging");
    userInteracting = false;
    scheduleAutoplay();
  }

  slidesEl.addEventListener("mousedown", (e) => {
    e.preventDefault();
    userInteracting = true;
    onDragStart(e.pageX);
  });
  slidesEl.addEventListener("mousemove", (e) => {
    e.preventDefault();
    onDragMove(e.pageX);
  });
  window.addEventListener("mouseup", () => onDragEnd());

  slidesEl.addEventListener("touchstart", (e) => {
    userInteracting = true;
    const touch = e.touches[0];
    onDragStart(touch.pageX);
  }, { passive: true });
  slidesEl.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    onDragMove(touch.pageX);
  }, { passive: true });
  slidesEl.addEventListener("touchend", () => onDragEnd());

  carousel.addEventListener("mouseenter", () => {
    userInteracting = true;
    stopAutoplay();
  });

  carousel.addEventListener("mouseleave", () => {
    userInteracting = false;
    scheduleAutoplay();
  });

  // Init
  setActiveDot(0);
  updateArrowStates();
  setTimeout(() => scrollToIndex(0), 50);
  startAutoplay();
})();
