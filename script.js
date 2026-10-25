const ASSETS = {
  diamond: "assets/sprites/new assets/diamond.png",
  sword: "assets/sprites/new assets/diamond_sword.png",
  heart: "assets/sprites/new assets/heart.png",
  sign: "assets/sprites/wooden sign/wooden_sign.png"
};

// Keep the supplied filename intact. Change this one path if the music file changes.
const MUSIC_SOURCE = "assets/sprites/audio/C418 - Minecraft - Minecraft Volume Alpha - SMORT.mp3";
const MUSIC_SESSION_KEY = "samarth-portfolio-music";
const SITE_PAGES = new Set(["index.html", "about.html", "skills.html", "work.html", "contact.html"]);
let navigationToken = 0;

const SKILLS = [
  { name: "HTML", icon: "HT", status: "FOUNDATIONS", note: "Foundational knowledge", kind: "foundational" },
  { name: "CSS", icon: "CS", status: "FOUNDATIONS", note: "Foundational knowledge", kind: "foundational" },
  { name: "JavaScript", icon: "JS", status: "LEARNING", note: "Currently learning", kind: "learning" },
  { name: "MongoDB", icon: "DB", status: "FUNDAMENTALS", note: "Fundamentals", kind: "foundational" },
  { name: "Node.js", icon: "ND", status: "EDIT STATUS", note: "Learning status to be added", kind: "editable" },
  { name: "Python", icon: "PY", status: "FOUNDATIONS", note: "Foundational knowledge · Python programming internship completed in 2026", kind: "foundational" },
  { name: "GitHub", icon: "GH", status: "EDIT STATUS", note: "Learning status to be added", kind: "editable" },
  { name: "Java", icon: "JV", status: "FOUNDATIONS", note: "Foundational knowledge · Java mini-project practice", kind: "foundational" }
];

const MILESTONES = [
  { date: "APRIL–JUNE 2026", title: "Python Programming Intern", detail: "SkillInfyTech IT Solutions Pvt. Ltd." },
  { date: "AUGUST 2026–PRESENT", title: "Indigo Squad Member", detail: "Mood Indigo, IIT Bombay" },
  { date: "OCTOBER 2025", title: "Deloitte Australia Technology Job Simulation", detail: "Forage" },
  { date: "CURRENTLY ENROLLED", title: "CS50x: Introduction to Computer Science", detail: "Harvard University" }
];

const JAVA_PROGRAMS = [
  "Alarm", "Alarm Clock", "Banking Program", "Calculator", "Compound Interest Calculator",
  "Countdown Timer", "Hangman", "Mad Libs", "Music Player", "Number Guessing Game",
  "Quiz Game", "Roll Dice", "Rock Paper Scissors", "Shopping Program", "Slot Machine",
  "Temperature Converter", "Weight Converter"
];

const PROJECTS = [
  {
    id: "nawi", number: "01", title: "NAWI — Automated Test Report Generation", icon: ASSETS.sword,
    meta: "WEB APPLICATION",
    description: "An application for Non-Automatic Weighing Instruments (NAWI), focused on instrument registration, OIML R 76 test execution, structured test inputs, evidence capture, report review, and automated test-report generation.",
    technologies: ["React", "TypeScript", "Vite", "Node.js / Express", "MongoDB", "Mongoose"],
    repository: "https://github.com/samdubey583-pixel/Nawi-project"
  },
  {
    id: "bhujal", number: "02", title: "BHUJAL — Real-Time Groundwater Intelligence", icon: ASSETS.diamond,
    meta: "GROUNDWATER VISUALIZATION", status: "",
    description: "Bhujal is a groundwater-intelligence platform focused on using India-WRIS Digital Water Level Recorder data to visualize groundwater trends across monitoring stations. It aims to provide accessible insights into groundwater recharge, depletion, and water-resource management.",
    features: ["Groundwater station monitoring", "Water-level trend analysis", "Recharge and depletion analysis", "Station comparisons and visualizations", "Anomaly identification", "CSV reporting", "Storage-change calculations"],
    technologies: [],
    repository: ""
  },
  {
    id: "java", number: "03", title: "Java Mini Projects", icon: ASSETS.sword,
    meta: "JAVA · 17 PROGRAMS", status: "",
    description: "A collection of individual Java mini programs. Select a program to see a short summary.",
    technologies: ["Java"],
    repository: "https://github.com/samdubey583-pixel/Java-mini-projects",
    programs: JAVA_PROGRAMS
  }
];

const CONTACTS = [
  { label: "GITHUB", detail: "CODE & BUILDS", href: "https://github.com/samdubey583-pixel", external: true, delay: -700, duration: 5100, lift: 6, drift: -1 },
  { label: "LINKEDIN", detail: "LET'S CONNECT", href: "https://www.linkedin.com/in/samarth-dubey/", external: true, delay: -2100, duration: 5800, lift: 8, drift: 2 },
  { label: "EMAIL", detail: "samdubey583@gmail.com", href: "mailto:samdubey583@gmail.com", external: false, delay: -1400, duration: 5400, lift: 7, drift: -2 }
];

const floatConfigurations = new Map();
let activeFloatAnimations = new WeakMap();

initializePage();
initializeMusicPlayer();
initializeNavigation();

function initializePage() {
  const page = document.body.dataset.page;
  if (page === "home") renderHomeItems();
  if (page === "about") renderAbout();
  if (page === "skills") renderSkills();
  if (page === "work") renderWork();
  if (page === "contact") renderContact();
}

function renderHomeItems() {
  const layer = document.querySelector("#item-layer");
  const items = [
    { name: "heart-high-left", image: ASSETS.heart, left: "18%", top: "21%", height: "29px", angle: "-11deg", opacity: .76, duration: 3900, delay: -900, lift: 10, drift: 1, sway: 1.5, entrance: ".12s" },
    { name: "diamond-mid-left", image: ASSETS.diamond, left: "7%", top: "45%", height: "36px", angle: "8deg", opacity: .88, duration: 4600, delay: -2500, lift: 10, drift: -2, sway: 2, entrance: ".28s" },
    { name: "sword-low-left", image: ASSETS.sword, left: "21%", top: "73%", height: "42px", angle: "-22deg", opacity: .8, duration: 5000, delay: -1700, lift: 9, drift: 1, sway: 1.5, entrance: ".4s" },
    { name: "diamond-far-left", image: ASSETS.diamond, left: "5%", top: "83%", height: "20px", angle: "16deg", opacity: .61, duration: 4100, delay: -2900, lift: 9, drift: 1, sway: 1, entrance: ".34s" },
    { name: "heart-high-right", image: ASSETS.heart, left: "81%", top: "26%", height: "23px", angle: "12deg", opacity: .67, duration: 4400, delay: -2200, lift: 9, drift: -1, sway: 1, entrance: ".2s" },
    { name: "sword-mid-right", image: ASSETS.sword, left: "90%", top: "48%", height: "37px", angle: "25deg", opacity: .83, duration: 4200, delay: -1300, lift: 10, drift: -1, sway: 1.8, entrance: ".42s" },
    { name: "diamond-low-right", image: ASSETS.diamond, left: "78%", top: "76%", height: "38px", angle: "-9deg", opacity: .82, duration: 5200, delay: -3100, lift: 10, drift: 2, sway: 1.4, entrance: ".48s" },
    { name: "heart-far-right", image: ASSETS.heart, left: "93%", top: "83%", height: "19px", angle: "-17deg", opacity: .57, duration: 3800, delay: -3500, lift: 8, drift: -1, sway: 1, entrance: ".56s" }
  ];
  layer.innerHTML = items.map((item) => `
    <div class="item-sprite" data-item="${item.name}" style="--left:${item.left};--top:${item.top};--height:${item.height};--angle:${item.angle};--opacity:${item.opacity};--entrance:${item.entrance}">
      <img src="${escapeAttr(item.image)}" alt="" draggable="false">
    </div>`).join("");
  layer.querySelectorAll(".item-sprite").forEach((element) => {
    const item = items.find((entry) => entry.name === element.dataset.item);
    startFloating(element, item);
  });
}

function renderAbout() {
  startFloating(document.querySelector(".about-sign"), { duration: 5200, delay: -1100, lift: 7, drift: 0 });
}

function renderSkills() {
  const skills = document.querySelector("#skills-grid");
  skills.innerHTML = SKILLS.map((skill, index) => `
    <article class="skill-card" data-kind="${skill.kind}" style="--order:${index}">
      <div class="skill-top"><span class="skill-icon" aria-hidden="true"><img class="skill-heart" src="${escapeAttr(ASSETS.heart)}" alt=""><b>${escapeHTML(skill.icon)}</b></span></div>
      <h3>${escapeHTML(skill.name)}</h3><p>${escapeHTML(skill.note)}</p>
    </article>`).join("");
  document.querySelector("#milestone-list").innerHTML = MILESTONES.map((item, index) => `
    <article class="milestone" style="--order:${index}"><time>${escapeHTML(item.date)}</time><strong>${escapeHTML(item.title)}</strong><span>${escapeHTML(item.detail)}</span></article>`).join("");
}

function renderWork() {
  document.querySelector("#project-list").innerHTML = PROJECTS.map((project) => `
    <button class="project-trigger" type="button" data-project="${project.id}" aria-haspopup="dialog">
      <span class="project-icon" aria-hidden="true"><img src="${escapeAttr(project.icon)}" alt=""></span>
      <span class="project-name">${escapeHTML(project.title)}</span>
      <span class="project-meta">${escapeHTML(project.meta)}</span>
      <span class="project-arrow" aria-hidden="true">↗</span>
    </button>`).join("");
  const dialog = document.querySelector("#project-dialog");
  const dialogContent = document.querySelector("#dialog-content");
  const closeButton = document.querySelector(".dialog-close");
  let returnFocus = null;
  let closeTimer = null;

  function openProject(project, trigger) {
    clearTimeout(closeTimer);
    returnFocus = trigger;
    dialog.classList.remove("is-closing");
    dialogContent.innerHTML = makeProjectContent(project);
    dialog.showModal();
    closeButton.focus();
  }

  function closeProject() {
    if (!dialog.open || dialog.classList.contains("is-closing")) return;
    dialog.classList.add("is-closing");
    closeTimer = window.setTimeout(() => {
      dialog.close();
      dialog.classList.remove("is-closing");
    }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 150);
  }

  document.querySelectorAll(".project-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const project = PROJECTS.find((item) => item.id === trigger.dataset.project);
      if (project) openProject(project, trigger);
    });
  });

  dialog.addEventListener("click", (event) => { if (event.target === dialog) closeProject(); });
  dialog.addEventListener("cancel", (event) => { event.preventDefault(); closeProject(); });
  closeButton.addEventListener("click", closeProject);
  dialog.addEventListener("close", () => { if (returnFocus?.isConnected) returnFocus.focus(); });

  dialogContent.addEventListener("click", (event) => {
    const item = event.target.closest("[data-program-index]");
    if (!item) return;
    const program = JAVA_PROGRAMS[Number(item.dataset.programIndex)];
    dialogContent.querySelectorAll(".program-item").forEach((button) => button.setAttribute("aria-pressed", String(button === item)));
    dialogContent.querySelector(".program-detail").innerHTML = `<strong>${escapeHTML(program)}</strong><p>${escapeHTML(programSummary(program))}</p>`;
  });
}

function renderContact() {
  const signLayer = document.querySelector("#contact-signs");
  signLayer.innerHTML = CONTACTS.map((contact, index) => `
    <a class="contact-sign" href="${escapeAttr(contact.href)}" aria-label="${escapeAttr(`${contact.label}: ${contact.detail}`)}" data-contact-index="${index}" ${contact.external ? 'target="_blank" rel="noopener noreferrer"' : ""}>
      <span class="contact-sign-post" aria-hidden="true"></span>
      <span class="contact-sign-board"><strong>${escapeHTML(contact.label)}</strong><span>${escapeHTML(contact.detail)}</span></span>
    </a>`).join("");
  signLayer.querySelectorAll(".contact-sign").forEach((element) => {
    const contact = CONTACTS[Number(element.dataset.contactIndex)];
    startFloating(element, { duration: contact.duration, delay: contact.delay, lift: contact.lift, drift: contact.drift });
  });
}

function startFloating(element, options) {
  if (!element || floatConfigurations.has(element)) return;
  floatConfigurations.set(element, options);
  syncFloatingAnimation(element, options);
}

function syncFloatingAnimation(element, { duration, delay = 0, lift = 8, drift = 0, sway = 0 }) {
  const current = activeFloatAnimations.get(element);
  if (current || typeof element.animate !== "function") return;
  const animation = element.animate([
    { transform: `translate3d(0, 0, 0) rotate(${-sway}deg)` },
    { transform: `translate3d(${drift}px, -${lift}px, 0) rotate(${sway}deg)` },
    { transform: `translate3d(0, 0, 0) rotate(${-sway}deg)` }
  ], { duration, delay, iterations: Infinity, easing: "ease-in-out" });
  element.style.willChange = "transform";
  activeFloatAnimations.set(element, animation);
}

function clearPageAnimations() {
  floatConfigurations.forEach((_, element) => activeFloatAnimations.get(element)?.cancel());
  floatConfigurations.clear();
  activeFloatAnimations = new WeakMap();
}

function initializeMusicPlayer() {
  if (document.querySelector("#music-player")) return;
  const dock = document.createElement("div");
  dock.id = "music-player";
  dock.className = "music-player";
  dock.innerHTML = '<button class="music-toggle" id="music-toggle" type="button" aria-label="Play background music">PLAY MUSIC</button><span class="music-message" id="music-message" role="status" aria-live="polite"></span>';
  const audio = document.createElement("audio");
  audio.id = "background-music";
  audio.preload = "metadata";
  audio.loop = true;
  audio.src = MUSIC_SOURCE;
  dock.append(audio);
  document.body.append(dock);

  const button = dock.querySelector("#music-toggle");
  const message = dock.querySelector("#music-message");
  let stored = {};
  try { stored = JSON.parse(sessionStorage.getItem(MUSIC_SESSION_KEY) || "{}"); } catch { /* Start fresh if storage is unavailable. */ }
  if (!stored || typeof stored !== "object") stored = {};
  audio.muted = Boolean(stored.muted);
  audio.volume = Number.isFinite(stored.volume) ? Math.min(1, Math.max(0, stored.volume)) : 0.35;

  function saveMusicState() {
    try { sessionStorage.setItem(MUSIC_SESSION_KEY, JSON.stringify({ playing: !audio.paused && !audio.error, position: Number.isFinite(audio.currentTime) ? audio.currentTime : 0, muted: audio.muted, volume: audio.volume })); } catch { /* Playback still works without storage. */ }
  }
  function updateMusicButton() {
    const playing = !audio.paused && !audio.error;
    button.textContent = playing ? "PAUSE MUSIC" : "PLAY MUSIC";
    button.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
    button.setAttribute("aria-pressed", String(playing));
    dock.classList.toggle("is-playing", playing);
    saveMusicState();
  }
  async function playMusic() {
    message.textContent = "";
    try {
      await audio.play();
      updateMusicButton();
    } catch (error) {
      audio.pause();
      message.textContent = audio.error ? "Music file is unavailable." : "Press Play Music to start the track.";
      updateMusicButton();
    }
  }

  audio.addEventListener("loadedmetadata", () => {
    const position = Number(stored.position);
    if (Number.isFinite(position) && position > 0 && position < audio.duration) audio.currentTime = position;
    stored = {};
  }, { once: true });
  audio.addEventListener("play", updateMusicButton);
  audio.addEventListener("pause", updateMusicButton);
  audio.addEventListener("timeupdate", saveMusicState);
  audio.addEventListener("volumechange", saveMusicState);
  audio.addEventListener("error", () => { message.textContent = "Music file is unavailable."; updateMusicButton(); });
  button.addEventListener("click", () => { if (audio.paused) playMusic(); else audio.pause(); });
  window.addEventListener("pagehide", saveMusicState);
  updateMusicButton();
  if (stored.playing) audio.addEventListener("loadedmetadata", playMusic, { once: true });
}

function initializeNavigation() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || link.download || (link.target && link.target !== "_self")) return;
    const url = new URL(link.href, location.href);
    if (url.origin !== location.origin || !sitePageName(url.pathname)) return;
    event.preventDefault();
    navigateToPage(url, true);
  });
  window.addEventListener("popstate", () => navigateToPage(new URL(location.href), false));
}

function sitePageName(pathname) {
  const directory = new URL("./", location.href).pathname;
  if (!pathname.startsWith(directory)) return null;
  const name = pathname.slice(directory.length) || "index.html";
  return SITE_PAGES.has(name) ? name : null;
}

async function navigateToPage(url, addHistory) {
  const name = sitePageName(url.pathname);
  if (!name) return;
  const token = ++navigationToken;
  const currentName = document.body.dataset.page === "home" ? "index.html" : `${document.body.dataset.page}.html`;
  if (name === currentName && url.pathname === location.pathname && !url.hash) { window.scrollTo(0, 0); return; }
  try {
    const response = await fetch(url.href, { cache: "no-cache" });
    if (!response.ok) throw new Error(`Page request failed: ${response.status}`);
    const next = new DOMParser().parseFromString(await response.text(), "text/html");
    if (token !== navigationToken) return;
    const nextMain = next.querySelector("main");
    if (!nextMain || !next.body.dataset.page) throw new Error("Page content unavailable");
    clearPageAnimations();
    document.querySelector("#project-dialog")?.remove();
    document.querySelector("main").replaceWith(document.importNode(nextMain, true));
    const nextDialog = next.querySelector("#project-dialog");
    if (nextDialog) document.body.append(document.importNode(nextDialog, true));
    document.body.dataset.page = next.body.dataset.page;
    document.title = next.title;
    const description = next.querySelector('meta[name="description"]')?.content;
    if (description) document.querySelector('meta[name="description"]').content = description;
    document.querySelectorAll(".site-nav a").forEach((navLink) => {
      if (new URL(navLink.href).pathname === url.pathname) navLink.setAttribute("aria-current", "page");
      else navLink.removeAttribute("aria-current");
    });
    if (addHistory) history.pushState({ page: name }, "", url.href);
    initializePage();
    window.scrollTo(0, 0);
    const heading = document.querySelector("main h1");
    if (heading) { heading.tabIndex = -1; heading.focus({ preventScroll: true }); }
  } catch (error) {
    if (token === navigationToken) location.assign(url.href);
  }
}

function makeProjectContent(project) {
  const technologies = project.technologies?.length ? `
    <h3 class="dialog-subheading">Technologies</h3>
    <div class="tech-list">${project.technologies.map((technology) => `<span class="tech-tag">${escapeHTML(technology)}</span>`).join("")}</div>` : "";
  const features = project.features?.length ? `
    <h3 class="dialog-subheading">Focus areas</h3>
    <ul class="feature-list">${project.features.map((feature) => `<li>${escapeHTML(feature)}</li>`).join("")}</ul>` : "";
  const programs = project.programs ? `
    <div class="program-grid" role="group" aria-label="Java programs">${project.programs.map((program, index) => `
      <button class="program-item" type="button" data-program-index="${index}" aria-pressed="false"><img src="${escapeAttr(ASSETS.diamond)}" alt=""><span>${escapeHTML(program)}</span></button>`).join("")}</div>
    <div class="program-detail" aria-live="polite"><strong>Select a program</strong><p>Choose an entry to view a short summary.</p></div>` : "";
  const repository = project.repository ? `<a class="dialog-link" href="${escapeAttr(project.repository)}" target="_blank" rel="noopener noreferrer">OPEN REPOSITORY <span aria-hidden="true">↗</span></a>` : "";
  return `<p class="dialog-kicker">${project.number} / ${escapeHTML(project.meta)}</p>
    <h2 id="dialog-title">${escapeHTML(project.title)}</h2>
    <p class="dialog-description">${escapeHTML(project.description)}</p>${features}${programs}${technologies}${repository}`;
}

function programSummary(program) {
  const descriptions = {
    "Alarm": "A Java program centered on an alarm.", "Alarm Clock": "A Java program centered on an alarm clock.",
    "Banking Program": "A Java exercise focused on banking operations.", "Calculator": "A Java program for calculations.",
    "Compound Interest Calculator": "A Java program for compound-interest calculations.", "Countdown Timer": "A Java program centered on a countdown timer.",
    "Hangman": "A Java word-game exercise.", "Mad Libs": "A Java word-game exercise.", "Music Player": "A Java program centered on music playback.",
    "Number Guessing Game": "A Java number-guessing game exercise.", "Quiz Game": "A Java quiz-game exercise.", "Roll Dice": "A Java dice-rolling exercise.",
    "Rock Paper Scissors": "A Java implementation of Rock Paper Scissors.", "Shopping Program": "A Java program centered on a shopping flow.",
    "Slot Machine": "A Java slot-machine game exercise.", "Temperature Converter": "A Java temperature-conversion program.",
    "Weight Converter": "A Java weight-conversion program."
  };
  return descriptions[program] || "A small Java program.";
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function escapeAttr(value) { return escapeHTML(value); }
