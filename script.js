// Simple JS for responsive nav, dynamic year and project cards
document.addEventListener('DOMContentLoaded', () => {
  // nav toggle for mobile
  const nav = document.querySelector('.site-nav');
  const toggle = document.getElementById('nav-toggle');
  toggle && toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Projects data - edit this array to add/remove projects
  const projects = [
    {
      title: "School Management Web App",
      desc: "Full-stack app to manage school records.<br> Features: CRUD, search, responsive UI, deployed on Vercel.",
      tech: "Next.js • Node.js • MySQL",
      live: "https://schools-app-7npp.vercel.app",
      repo: "https://github.com/Geethika4427/SchoolsApp.git"
    },
    {
      title: "Weather Monitoring Dashboard",
      desc: "Real-time dashboard using OpenWeatherMap API (MERN stack) with visualizations and alerts.",
      tech: "MongoDB • Express • React • Node.js",
      live: "",
      repo: "https://github.com/Geethika4427/WeatherMonitoring.git"
    },
    {
      title: "Automated BBC News Poster",
      desc: "Backend automation that summarizes BBC captions (Hugging Face) and posts to X (Twitter).",
      tech: "Node.js • Express • Hugging Face API • Twitter API • Docker",
      live: "",
      repo: "https://github.com/Geethika4427/Backend-Dev-Assignment.git"
    },
    {
      title: "E-Commerce Platform (FabFashion)",
      desc: "E-commerce web app with product, cart, checkout and JWT-based authentication.",
      tech: "React • Spring Boot • MySQL",
      live: "",
      repo: "https://github.com/Geethika4427/Project1.git"
    }
  ];

  const grid = document.getElementById('projects-grid');
  projects.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <h3>${p.title}</h3>
      <p class="muted">${p.desc}</p>
      <p style="margin-top:10px"><strong>Tech:</strong> ${p.tech}</p>
      <p style="margin-top:12px">
        ${p.live ? `<a href="${p.live}" target="_blank">Live</a> • ` : ''}
        <a href="${p.repo}" target="_blank">Code</a>
      </p>
    `;
    grid.appendChild(el);
  });
});

// contact form handler (simple mailto fallback)
// For production, integrate with an email service (EmailJS / Netlify Forms / backend)
function handleContact(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value.trim());
  const email = encodeURIComponent(f.email.value.trim());
  const message = encodeURIComponent(f.message.value.trim());
  const subject = encodeURIComponent('Portfolio message from ' + (f.name.value || 'Website visitor'));
  // mailto fallback
  const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  window.location = `mailto:vgeethika26@gmail.com?subject=${subject}&body=${body}`;
}