const TRANSLATION_STORAGE_KEY = "groovdev-language";
const defaultLang = "id";

const translations = {
  id: {
    page_title: "GroovDev - Wujudkan",
    nav_about: "Tentang",
    nav_services: "Layanan",
    nav_portfolio: "Portofolio",
    nav_blog: "Blog",
    nav_contact: "Kontak",
    hero_small: "make it happen",
    hero_desc: "your groovy web developer",
    about_title: "Pembuat website yang handal ada di sini untuk anda",
    about_sub1: "siapa groovdev",
    about_desc1: "Kami adalah web developer & designer independen berbasis di Jakarta, Indonesia. Misi kami adalah untuk membantu membangun eksistensi digital bagi bisnis dan UMKM lokal.",
    about_sub2: "Kenapa memilih Groovdev",
    about_desc2: "Di GroovDev kami berkomitmen memberikan pelayanan menyeluruh untuk solusi digital business anda. Tim kami yang kompeten dan berpengalaman dibidangnya dapat membantu anda dengan cepat dengan harga yang terjangkau.",
    about_card1_title: "Berpengalaman",
    about_card1_desc: "Kami siap membantu anda dengan pengalaman kami membangun website untuk berbagai jenis bisnis, UMKM, lembaga yayasan, maupun kebutuhan untuk personal branding anda.",
    about_card2_title: "Terpadu",
    about_card2_desc: "Kami menawarkan berbagai layanan seputar kebutuhan digital. Semua proyek dirancang secara profesional dan anda akan dipandu dari awal hingga siap online dan berkembang.",
    about_card3_title: "Terjangkau",
    about_card3_desc: "Website berkualitas dan teroptimasi bisa anda dapatkan dengan harga terjangkau. Berbagai fitur dan fungsi yang flexible dapat disesuaikan dengan kebutuhan dan budget bisnis anda.",
    services_title: "Urusan Dunia Digital<br />Semua bisa GroovDev Tangani",
    services_subtitle: "layanan kami",
    portfolio_title: "Portofolio Kami",
    portfolio_visit: "Kunjungi Situs",
    cta_text: "Website keren bukan pilihan, tapi kebutuhan",
    cta_heading: "Sekarang kamu bisa punya website profesional yang keren mulai dari 1,9 juta! *",
    cta_button: "Hubungi Kami",
    blog_title: "Blog & Insight",
    blog_subtitle: "cerita dan tips dari tim GroovDev",
    blog_lede: "Ringkasan singkat dari proyek, playbook, dan checklist yang kami pakai sehari-hari untuk membantu bisnis go-digital.",
    blog_loading: "Memuat",
    blog_placeholder_meta: "• artikel",
    blog_loading_title: "Memuat artikel...",
    blog_loading_desc: "Sedang mengambil konten terbaru dari tim GroovDev.",
    blog_modal_label: "Artikel blog",
    blog_close_aria: "Tutup artikel",
    blog_empty: "Belum ada artikel.",
    blog_generic_title: "Artikel",
    blog_latest_excerpt: "Baca insight terbaru dari GroovDev.",
    blog_read: "Baca artikel",
    blog_cta_label: "Butuh bantuan bangun situs?",
    blog_cta_button: "Hubungi GroovDev",
    blog_content_unavailable: "Konten belum tersedia.",
    blog_load_error: "Tidak dapat memuat artikel saat ini.",
    instagram_title: "Follow instagram kami",
    contact_title: "Kontak Kami",
    contact_intro: "Ingin berdiskusi lebih lanjut tentang kebutuhan website anda? Silakan hubungi kami melalui informasi di bawah atau isi formulir kontak yang tersedia.",
    contact_phone: "Telepon",
    contact_email: "Email",
    contact_address: "Alamat",
    contact_consultation_title: "Konsultasi Online Gratis",
    contact_hours_label: "Jam Kerja",
    contact_hours_days: "Senin - Jumat",
    contact_hours_time: "09.00 - 17.00 WIB",
    form_name_label: "Nama",
    form_name_placeholder: "Nama Lengkap",
    form_email_label: "Email",
    form_email_placeholder: "email@anda.com",
    form_phone_label: "Telepon",
    form_phone_placeholder: "0812...",
    form_message_label: "Pesan",
    form_message_placeholder: "Tulis pesan anda disini...",
    form_submit: "Kirim Form",
    form_success: "Terima kasih! Form berhasil dikirim.",
    footer_slogan: "wujudkan dengan GroovDev - web developer groovy Anda",
    footer_copyright: "Copyright © 2025 GroovDev Indonesia | Hak Cipta Dilindungi | Kebijakan Privasi",
    footer_build: "Build by GroovDev",
    wa_float_label: "Chat WhatsApp"
  },
  en: {
    page_title: "GroovDev - Make it happen",
    nav_about: "About",
    nav_services: "Services",
    nav_portfolio: "Portfolio",
    nav_blog: "Blog",
    nav_contact: "Contact",
    hero_small: "make it happen",
    hero_desc: "your groovy web developer",
    about_title: "Reliable website builder is here for you",
    about_sub1: "who is groovdev",
    about_desc1: "We are an independent web developer & designer based in Jakarta, Indonesia. Our mission is to help build a digital presence for local businesses and SMEs.",
    about_sub2: "Why choose Groovdev",
    about_desc2: "At GroovDev we are committed to providing comprehensive service for your digital business solutions. Our competent and experienced team can assist you quickly with affordable prices.",
    about_card1_title: "Experienced",
    about_card1_desc: "We are ready to assist you with our experience building websites for various types of businesses, SMEs, foundations, and even your personal branding needs.",
    about_card2_title: "Integrated",
    about_card2_desc: "We offer a range of services around digital needs. All projects are professionally designed and you will be guided from start to online and growing.",
    about_card3_title: "Affordable",
    about_card3_desc: "Quality and optimized websites can be obtained at affordable prices. Various flexible features and functions can be tailored to your business needs and budget.",
    services_title: "All Digital Matters<br />Can Be Handled by GroovDev",
    services_subtitle: "our services",
    portfolio_title: "Our Portfolio",
    portfolio_visit: "Visit Site",
    cta_text: "A cool website is not a choice, but a necessity",
    cta_heading: "Now you can have a cool professional website starting from 1.9 million! *",
    cta_button: "Contact Us",
    blog_title: "Blog & Insight",
    blog_subtitle: "stories and tips from the GroovDev team",
    blog_lede: "A brief summary of projects, playbooks, and checklists we use daily to help businesses go digital.",
    blog_loading: "Loading",
    blog_placeholder_meta: "• article",
    blog_loading_title: "Loading articles...",
    blog_loading_desc: "Fetching the latest content from the GroovDev team.",
    blog_modal_label: "Blog article",
    blog_close_aria: "Close article",
    blog_empty: "No articles available yet.",
    blog_generic_title: "Article",
    blog_latest_excerpt: "Read the latest insight from GroovDev.",
    blog_read: "Read article",
    blog_cta_label: "Need help building your site?",
    blog_cta_button: "Contact GroovDev",
    blog_content_unavailable: "Content is not available yet.",
    blog_load_error: "Unable to load articles right now.",
    instagram_title: "Follow our Instagram",
    contact_title: "Contact Us",
    contact_intro: "Want to discuss your website needs further? Please contact us through the information below or fill out the available contact form.",
    contact_phone: "Phone",
    contact_email: "Email",
    contact_address: "Address",
    contact_consultation_title: "Free Online Consultation",
    contact_hours_label: "Working Hours",
    contact_hours_days: "Monday - Friday",
    contact_hours_time: "09.00 - 17.00 WIB",
    form_name_label: "Name",
    form_name_placeholder: "Full Name",
    form_email_label: "Email",
    form_email_placeholder: "you@example.com",
    form_phone_label: "Phone",
    form_phone_placeholder: "0812...",
    form_message_label: "Message",
    form_message_placeholder: "Write your message here...",
    form_submit: "Send Form",
    form_success: "Thank you! Your form has been sent.",
    footer_slogan: "make it happen with GroovDev - your groovy web developer",
    footer_copyright: "Copyright © 2025 GroovDev Indonesia | All Rights Reserved | Privacy Policy",
    footer_build: "Built by GroovDev",
    wa_float_label: "Chat on WhatsApp"
  }
};

const currentLang = (() => {
  try {
    const stored = localStorage.getItem(TRANSLATION_STORAGE_KEY);
    return stored && translations[stored] ? stored : defaultLang;
  } catch {
    return defaultLang;
  }
})();

function t(key) {
  return translations[currentLang]?.[key] ?? translations[defaultLang]?.[key] ?? key;
}

function syncLanguageButtons() {
  document.querySelectorAll(".lang-option").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === currentLang);
  });
}

function applyStaticTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t("page_title");

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const value = t(node.dataset.i18n);
    if (typeof value !== "string") return;

    if (value.includes("<")) {
      node.innerHTML = value;
      return;
    }

    node.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.setAttribute("placeholder", t(node.dataset.i18nPlaceholder));
  });
}

const serviceDefinitions = [
  {
    image: "assets/images/service1.png",
    price: "Rp. 1,9 juta,-",
    title: {
      id: "Pembuatan Website",
      en: "Website Development"
    },
    desc: {
      id: "Kami membantu bisnis membangun website impian mereka:",
      en: "We help businesses establish their dream website:"
    },
    features: {
      id: [
        "Website satu halaman",
        "Profil perusahaan",
        "Website portofolio",
        "Halaman arahan",
        "Website e-commerce"
      ],
      en: [
        "One-page website",
        "Company profile",
        "Portfolio website",
        "Landing page",
        "E-commerce website"
      ]
    }
  },
  {
    image: "assets/images/service2.png",
    price: "Rp. 750 ribu,-",
    title: {
      id: "Perbaikan Website",
      en: "Website Improvement"
    },
    desc: {
      id: "Tingkatkan UX, kecepatan, dan konversi.",
      en: "Improve UX, speed, and conversions."
    },
    features: {
      id: ["Penyegaran UI/UX", "Perbaikan responsivitas", "Optimasi CTA"],
      en: ["UI/UX refresh", "Fix responsiveness", "CTA optimization"]
    }
  },
  {
    image: "assets/images/service3.png",
    price: "Rp. 1,2 juta,-",
    title: {
      id: "Optimasi SEO & Performa",
      en: "SEO & Performance Optimization"
    },
    desc: {
      id: "Tingkatkan visibilitas dan kecepatan website Anda.",
      en: "Boost your website's visibility and speed."
    },
    features: {
      id: ["SEO on-page", "Penyetelan performa", "Pengaturan analitik"],
      en: ["On-page SEO", "Performance tuning", "Analytics setup"]
    }
  },
  {
    image: "assets/images/service4.png",
    price: "Rp. 1 juta,-",
    title: {
      id: "Desain Grafis & Konten",
      en: "Graphic Design & Content"
    },
    desc: {
      id: "Tingkatkan website Anda dengan grafis dan konten profesional.",
      en: "Enhance your website with professional graphics and content."
    },
    features: {
      id: ["Grafis kustom", "Pembuatan konten", "Materi branding"],
      en: ["Custom graphics", "Content creation", "Branding materials"]
    }
  }
];

function getLocalizedValue(value) {
  if (Array.isArray(value)) return value;
  if (value && typeof value === "object") {
    return value[currentLang] ?? value[defaultLang];
  }
  return value;
}

function localizeReadTime(value = "") {
  if (!value) return value;
  if (currentLang === "id") {
    return value.replace(/min read/gi, "menit baca");
  }
  return value.replace(/menit baca/gi, "min read");
}

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

const grid = document.getElementById("servicesGrid");
const detail = document.getElementById("serviceDetail");
let openIndex = 0;

function getServices() {
  return serviceDefinitions.map((service) => ({
    ...service,
    title: getLocalizedValue(service.title),
    desc: getLocalizedValue(service.desc),
    features: getLocalizedValue(service.features)
  }));
}

function getServiceDetailHTML(s) {
  return `
      <div class="service-detail-inner">
        <div class="service-detail-header">
          <p class="nunito-sans-regular-mono" style="font-size: 18px;">${s.desc}</p>
        </div>
        <div class="service-detail-features">
          <ul>${s.features.map(f => `<li>${f}</li>`).join("")}</ul>
        </div>
      </div>
    `;
}

function renderServices() {
  if (!grid || !detail) return;

  const services = getServices();
  const activeIndex = typeof openIndex === "number" ? openIndex : 0;

  grid.innerHTML = "";

  services.forEach((service, index) => {
    const card = document.createElement("div");
    card.className = "service-card";
    if (activeIndex === index) card.classList.add("active");

    card.innerHTML = `
      <h3>${service.title}</h3>
      ${service.image ? `<img src="${service.image}" alt="${service.title}" class="service-img">` : ""}
    `;

    card.onclick = () => {
      if (openIndex === index) {
        const inner = detail.querySelector(".service-detail-inner");
        if (inner) {
          inner.classList.add("closing");
          inner.addEventListener(
            "animationend",
            () => {
              if (detail.contains(inner)) {
                detail.innerHTML = "";
                openIndex = null;
                document.querySelectorAll(".service-card").forEach((item) => item.classList.remove("active"));
              }
            },
            { once: true }
          );
        } else {
          detail.innerHTML = "";
          openIndex = null;
          document.querySelectorAll(".service-card").forEach((item) => item.classList.remove("active"));
        }
        return;
      }

      document.querySelectorAll(".service-card").forEach((item) => item.classList.remove("active"));
      card.classList.add("active");

      openIndex = index;
      detail.innerHTML = getServiceDetailHTML(service);
      detail.scrollIntoView({ behavior: "smooth", block: "nearest" });
    };

    grid.appendChild(card);
  });

  if (services.length > 0 && typeof openIndex === "number") {
    detail.innerHTML = getServiceDetailHTML(services[activeIndex]);
  }
}

applyStaticTranslations();
syncLanguageButtons();
renderServices();

/* CONTACT FORM */
document.getElementById("contactForm")?.addEventListener("submit", e => {
  e.preventDefault();
  alert(t("form_success"));
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
      desc: getLocalizedValue({
        id: "Website company profile untuk Vivaci Living, menampilkan layanan dan portofolio mereka.",
        en: "Company profile website for Vivaci Living, showcasing their services and portfolio."
      }),
      category: getLocalizedValue({
        id: "Profil Perusahaan",
        en: "Company Profile"
      })
    },
    {
      title: "Victory Consulting Indonesia - Company Profile & Booking",
      link: "https://victoryindonesia.com/",
      image: "assets/images/portfolio/victory-consulting.jpg",
      desc: getLocalizedValue({
        id: "Website company profile dan sistem booking untuk Victory Consulting Indonesia.",
        en: "Company profile website and booking system for Victory Consulting Indonesia."
      }),
      category: getLocalizedValue({
        id: "Profil Perusahaan",
        en: "Company Profile"
      })
    },
    {
      title: "Yayasan Masjid Agung Ibnu Batutah",
      link: "https://masjidibnubatutah.id/",
      image: "assets/images/portfolio/ibnu-batutah.png",
      desc: getLocalizedValue({
        id: "Website profil yayasan dengan struktur konten rapi, responsif, dan mudah dikelola.",
        en: "Foundation profile website with neat content structure, responsive, and easy to manage."
      }),
      category: getLocalizedValue({
        id: "Yayasan",
        en: "Non-Profit"
      })
    },
    {
      title: "Handduk.co - E-commerce",
      link: "https://handduk.co/",
      image: "assets/images/portfolio/handduk.png",
      desc: getLocalizedValue({
        id: "Toko online untuk produk handuk berkualitas dengan desain menarik dan navigasi mudah.",
        en: "Online store for quality towel products with attractive design and easy navigation."
      }),
      category: getLocalizedValue({
        id: "E-Commerce",
        en: "E-Commerce"
      })
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
                <span>${t("portfolio_visit")}</span>
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
      <button class="dot" type="button" aria-label="${currentLang === "id" ? `Ke slide ${i + 1}` : `Go to slide ${i + 1}`}" data-dot="${i}">
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
    const lang = btn.dataset.lang;
    if (!translations[lang] || lang === currentLang) return;

    try {
      localStorage.setItem(TRANSLATION_STORAGE_KEY, lang);
    } catch {
      // Ignore storage errors and keep fallback language behavior.
    }

    window.location.reload();
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
    <div class="blog-modal__panel" role="dialog" aria-modal="true" aria-label="${t("blog_modal_label")}">
      <button class="blog-modal__close" type="button" aria-label="${t("blog_close_aria")}">×</button>
    </div>
  `;
  const modalPanel = modal.querySelector(".blog-modal__panel");
  modalPanel?.appendChild(detail);
  document.body.appendChild(modal);

  const sources = [
    {
      file: "blog/launching-groovdev.md",
      localizedMeta: {
        id: {
          title: "Peluncuran GroovDev 2025: Cara Kami Membuat Website Cepat dan Groovy",
          excerpt: "Belajar dari puluhan proyek, kami merangkum pendekatan GroovDev untuk merilis website yang solid dan siap scale.",
          readTime: "4 menit baca"
        },
        en: {
          title: "GroovDev Launch 2025: How We Build Fast and Groovy Websites",
          excerpt: "Learn how GroovDev ships solid websites with short sprints and tidy QA.",
          readTime: "4 min read"
        }
      },
      fallbackMeta: {
        date: "2025-12-15",
        readTime: "4 min read",
        tags: ["process", "tech", "team"],
        cover: "assets/images/portfolio/vivaci-living.png"
      }
    },
    {
      file: "blog/first-30-days.md",
      localizedMeta: {
        id: {
          title: "Checklist 30 Hari Pertama Website Baru",
          excerpt: "Panduan ringan agar website baru langsung menghasilkan data dan prospek.",
          readTime: "3 menit baca"
        },
        en: {
          title: "Checklist for the First 30 Days of a New Website",
          excerpt: "A lightweight guide so a new website starts generating data and leads immediately.",
          readTime: "3 min read"
        }
      },
      fallbackMeta: {
        date: "2025-12-10",
        readTime: "3 min read",
        tags: ["launch", "ops", "analytics"],
        cover: "assets/images/portfolio/handduk.png"
      }
    },
    {
      file: "blog/speed-seo-conversion.md",
      localizedMeta: {
        id: {
          title: "Kecepatan, SEO, dan Konversi",
          excerpt: "Optimasi ringan yang menaikkan trust dan klik CTA di situs UMKM.",
          readTime: "4 menit baca"
        },
        en: {
          title: "Speed, SEO, and Conversion",
          excerpt: "Lightweight optimizations that increase trust and CTA clicks on SME websites.",
          readTime: "4 min read"
        }
      },
      fallbackMeta: {
        date: "2025-11-25",
        readTime: "4 min read",
        tags: ["seo", "performance", "conversion"],
        cover: "assets/images/portfolio/ibnu-batutah.png"
      }
    }
  ];

  function getPostMeta(post) {
    const baseMeta = post.meta || {};
    const localizedMeta = post.localizedMeta?.[currentLang] || {};

    return {
      ...baseMeta,
      ...localizedMeta,
      readTime: localizeReadTime(localizedMeta.readTime || baseMeta.readTime || "")
    };
  }

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
      detail.innerHTML = `<p class="blog-empty">${t("blog_empty")}</p>`;
      return;
    }

    const meta = getPostMeta(post);
    const tags = Array.isArray(meta.tags) ? meta.tags : [];

    detail.innerHTML = `
      <div class="blog-meta">
        <span>${meta.date || ""}</span>
        ${meta.readTime ? `<span>• ${meta.readTime}</span>` : ""}
      </div>
      <h3>${meta.title || t("blog_generic_title")}</h3>
      <div class="blog-tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
      <div class="blog-body">${markdownToHTML(post.body || post.content || "")}</div>
      <div class="blog-cta-inline">
        <span>${t("blog_cta_label")}</span>
        <button type="button" data-scroll="#contact">${t("blog_cta_button")}</button>
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
        const meta = getPostMeta(post);
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
              <h3>${meta.title || t("blog_generic_title")}</h3>
              <p class="blog-excerpt">${meta.excerpt || t("blog_latest_excerpt")}</p>
              <div class="blog-tags">${tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
              <button class="blog-read" type="button" data-idx="${idx}">${t("blog_read")}</button>
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
          localizedMeta: source.localizedMeta,
          body: parsed.body
        };
      })
      .catch(() => ({
        ...source,
        meta: source.fallbackMeta,
        localizedMeta: source.localizedMeta,
        body: source.fallbackBody || t("blog_content_unavailable")
      }));
  }

  Promise.all(sources.map(loadPost))
    .then(renderGrid)
    .catch(() => {
      grid.innerHTML = "";
      detail.innerHTML = `<p class="blog-empty">${t("blog_load_error")}</p>`;
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
