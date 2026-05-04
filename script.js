const portfolioData = {
  name: 'Behruzbek Shokirov',
  title: 'Futuristic Product Designer & Frontend Engineer',
  intro: 'I am an open-minded and motivated individual who enjoys learning, creating, and growing in different areas of life.',
  typingPhrases: [
    'Design systems that feel sophisticated.',
    'Interfaces with motion-led polish.',
    'Products built for delight and usability.',
    'Stories told through elevated digital experiences.'
  ],
  profileImage: 'assets/3.jpg',
  about: 'I am a motivated and curious individual with a strong passion for technology, creativity, and continuous learning. I enjoy exploring new ideas, building projects, and improving my skills every day. My main interest is in web development, design, and problem-solving, and I am always excited to learn new tools and technologies.\n\nMy long-term goal is to become a professional software engineer. I am working step by step to build a strong foundation in programming and develop real-world projects that improve my experience and skills.\n\nI believe that discipline, consistency, and creativity are the key factors for success. Because of this, I always try to challenge myself, turn ideas into real projects, and learn from every experience. I also enjoy working both individually and in a team, where I can share ideas and grow together with others.\n\nMy aim is to become a skilled software engineer who creates useful, efficient, and impactful digital solutions for real problems.',
  skills: [
    { title: 'UI / UX Design', level: 92 },
    { title: 'Interactive Prototyping', level: 88 },
    { title: 'HTML, CSS, JavaScript', level: 94 },
    { title: 'Motion & Animation', level: 90 },
    { title: 'Design Systems', level: 86 },
    { title: 'Brand Identity', level: 84 }
  ],
  projects: [
    {
      title: 'Helio Workspace',
      description: 'A productivity platform with elegant micro-interactions, adaptive visuals, and modern team workflows.',
      link: '#contact',
      variant: 1
    },
    {
      title: 'Aether Commerce',
      description: 'Reimagined checkout journeys with premium motion and trust-building interface details.',
      link: '#contact',
      variant: 2
    },
    {
      title: 'Nova Branding',
      description: 'A fresh brand system and website design for a future-forward software studio.',
      link: '#contact',
      variant: 3
    },
    {
      title: 'Pulse Analytics',
      description: 'Dashboard interactions with refined visual hierarchy, charts, and immersive data storytelling.',
      link: '#contact',
      variant: 4
    }
  ],
  interests: [
    { title: 'Product Innovation', description: 'Designing utilities and platforms with purpose and precision.', icon: '💡' },
    { title: 'Motion Systems', description: 'Crafting smooth animated experiences that feel intuitive.', icon: '🚀' },
    { title: 'Future Interfaces', description: 'Exploring new ways people interact with digital products.', icon: '🪐' }
  ],
  achievements: [
    { date: '2025', title: 'Launch of Aether Commerce', description: 'Led the design and front-end execution for a premium commerce product.' },
    { date: '2024', title: 'Design System Build', description: 'Built a reusable component system powering eight digital experiences.' },
    { date: '2023', title: 'Global Advisory', description: 'Partnered with startups on launch strategies and brand positioning.' },
    { date: '2022', title: 'Startup Accelerator', description: 'Selected as a design partner for a product-led growth accelerator.' }
  ],
  certifications: [
    {
      title: 'Mathematics Proficiency',
      issuer: 'Republic of Uzbekistan',
      date: '2026',
      image: 'assets/certificates/1.jpg',
      details: 'Score: 55.94 | Percentage: 86.06% | Grade: B'
    },
    {
      title: 'English Language Proficiency',
      issuer: 'Agency for Assessment of Knowledge and Competencies',
      level: 'B2',
      date: '2025 - 2027',
      image: 'assets/certificates/2.jpg',
      details: 'Listening: 56 | Reading: 48 | Writing: 53 | Speaking: 47 | Overall: 51'
    }
  ],
  contactEmail: 'mr.senyor21@gmail.com',

  location: 'Uzbekistan - Fergana - Quva',
  socialLinks: [
    { label: 'LinkedIn', url: 'https://linkedin.com', icon: 'in' },
    { label: 'Twitter', url: 'https://twitter.com', icon: 'tw' },
    { label: 'Dribbble', url: 'https://dribbble.com', icon: 'db' }
  ]
};

const elements = {
  heroName: document.getElementById('heroName'),
  heroIntro: document.getElementById('heroIntro'),
  aboutBio: document.getElementById('aboutBio'),
  skillsGrid: document.getElementById('skillsGrid'),
  interestsGrid: document.getElementById('interestsGrid'),
  timeline: document.getElementById('timeline'),
  certificationsGrid: document.getElementById('certificationsGrid'),
  profilePhoto: document.getElementById('profilePhoto'),
  contactEmail: document.getElementById('contactEmail'),

  contactLocation: document.getElementById('contactLocation'),
  socialLinks: document.getElementById('socialLinks'),
  footerYear: document.getElementById('footerYear'),
  footerName: document.getElementById('footerName'),
  themeToggle: document.getElementById('themeToggle'),
  typingText: document.getElementById('typingText'),
  loader: document.getElementById('loader'),
  contactForm: document.getElementById('contactForm')
};

function populateContent() {
  elements.heroName.textContent = portfolioData.name;
  elements.heroIntro.textContent = portfolioData.intro;
  elements.aboutBio.textContent = portfolioData.about;
  elements.profilePhoto.src = portfolioData.profileImage;
  elements.profilePhoto.alt = portfolioData.name;
  elements.contactEmail.textContent = portfolioData.contactEmail;
  elements.contactEmail.href = `mailto:${portfolioData.contactEmail}`;
  elements.contactLocation.textContent = portfolioData.location;
  elements.footerYear.textContent = new Date().getFullYear();
  elements.footerName.textContent = portfolioData.name;

  portfolioData.skills.forEach((skill) => {
    const card = document.createElement('article');
    card.className = 'skill-card';
    card.innerHTML = `
      <h3>${skill.title}</h3>
      <div class="progress-row">
        <div class="progress-label"><span>${skill.title}</span><span>${skill.level}%</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: ${skill.level}%"></div></div>
      </div>
    `;
    elements.skillsGrid.append(card);
  });

  portfolioData.interests.forEach((interest) => {
    const card = document.createElement('article');
    card.className = 'interest-card reveal';
    card.innerHTML = `
      <div class="interest-icon"><span>${interest.icon}</span></div>
      <div>
        <h3>${interest.title}</h3>
        <p>${interest.description}</p>
      </div>
    `;
    elements.interestsGrid.append(card);
  });

  portfolioData.achievements.forEach((item) => {
    const entry = document.createElement('article');
    entry.className = 'timeline-item reveal';
    entry.innerHTML = `
      <time>${item.date}</time>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    elements.timeline.append(entry);
  });

  portfolioData.certifications.forEach((cert) => {
    const card = document.createElement('article');
    card.className = 'certification-card reveal';
    card.innerHTML = `
      <div class="cert-image-wrap">
        <img src="${cert.image}" alt="${cert.title}" loading="lazy">
        <span class="cert-overlay"></span>
      </div>
      <div class="cert-content">
        <h3>${cert.title}</h3>
        <p class="cert-issuer">${cert.issuer}</p>
        ${cert.level ? `<p class="cert-level">Level: <strong>${cert.level}</strong></p>` : ''}
        <p class="cert-date">${cert.date}</p>
        <p class="cert-details">${cert.details}</p>
      </div>
    `;
    elements.certificationsGrid.append(card);
  });

  portfolioData.socialLinks.forEach((social) => {
    const link = document.createElement('a');
    link.className = 'social-link';
    link.href = social.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.innerHTML = `<strong>${social.icon}</strong><span>${social.label}</span>`;
    elements.socialLinks.append(link);
  });
}

function typeLoop() {
  const phrases = portfolioData.typingPhrases;
  let phraseIndex = 0;
  let letterIndex = 0;
  let typing = true;
  let currentPhrase = phrases[phraseIndex];

  function updateType() {
    if (typing) {
      elements.typingText.textContent = currentPhrase.slice(0, letterIndex + 1);
      letterIndex += 1;
      if (letterIndex === currentPhrase.length) {
        typing = false;
        setTimeout(updateType, 1600);
        return;
      }
    } else {
      elements.typingText.textContent = currentPhrase.slice(0, letterIndex - 1);
      letterIndex -= 1;
      if (letterIndex === 0) {
        typing = true;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        currentPhrase = phrases[phraseIndex];
      }
    }
    setTimeout(updateType, typing ? 80 : 40);
  }

  updateType();
}

function animateOnScroll() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealElements.forEach((el) => observer.observe(el));
}

function toggleTheme() {
  const isLight = document.body.classList.toggle('light-mode');
  elements.themeToggle.querySelector('.theme-icon').textContent = isLight ? '🌙' : '☀️';
  localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
}

function applyStoredTheme() {
  const stored = localStorage.getItem('portfolio-theme');
  if (stored === 'light') {
    document.body.classList.add('light-mode');
    elements.themeToggle.querySelector('.theme-icon').textContent = '🌙';
  }
}

function initParallax() {
  const hero = document.querySelector('.hero-section');
  window.addEventListener('scroll', () => {
    const offset = window.scrollY * 0.08;
    hero.style.backgroundPosition = `center ${offset}px`;
  });
}

function setupLoader() {
  window.addEventListener('load', () => {
    elements.loader.classList.add('loaded');
    setTimeout(() => {
      elements.loader.style.opacity = '0';
      elements.loader.style.pointerEvents = 'none';
    }, 400);
  });
}

function setupContactForm() {
  elements.contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = elements.contactForm.querySelector('button');
    submitButton.textContent = 'Sent ✓';
    submitButton.disabled = true;
    setTimeout(() => {
      submitButton.textContent = 'Send message';
      submitButton.disabled = false;
      elements.contactForm.reset();
    }, 1800);
  });
}

function init() {
  populateContent();
  applyStoredTheme();
  animateOnScroll();
  typeLoop();
  initParallax();
  setupLoader();
  setupContactForm();
  elements.themeToggle.addEventListener('click', toggleTheme);
}

init();
