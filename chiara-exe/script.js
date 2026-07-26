const CONFIG = {
  sitePassword: "liebe", // HIER das Passwort der Website ändern
  relationshipStart: "2025-01-01T00:00:00", // Euer Beziehungsdatum
  secretCode: "chiara",
  loveReasons: [
    "Weil dein Lächeln selbst meine schlechtesten Tage besser macht.",
    "Weil ich bei dir komplett ich selbst sein kann.",
    "Weil du wunderschön bist – innen und außen.",
    "Weil sich jeder normale Moment mit dir besonders anfühlt.",
    "Weil du mich zum Lachen bringst, selbst wenn mir gar nicht danach ist.",
    "Weil ich mich bei dir zuhause fühle.",
    "Weil ich mit dir noch tausend Erinnerungen sammeln möchte.",
    "Weil deine Art einfach einzigartig ist.",
    "Weil du mein Lieblingsmensch bist.",
    "Weil ich dich jeden Tag ein kleines bisschen mehr liebe."
  ],
  memories: [
    {
      chapter: "Kapitel 1",
      date: "Unser erstes Date",
      title: "Der Anfang von uns",
      text: "Der Moment, ab dem alles ein bisschen schöner wurde. Hier kannst du später aufschreiben, wo ihr wart und was diesen Tag besonders gemacht hat.",
      type: "video",
      image: "images/kiki.mov"
    },
    {
      chapter: "Kapitel 2",
      date: "Unser schönster Tag",
      title: "Ein Tag für immer",
      text: "Ein Tag, den ich sofort noch einmal erleben würde. Ersetze Text und Foto einfach durch eure echte Erinnerung.",
      type: "image",
      image: "images/memory-2.svg"
    },
    {
      chapter: "Kapitel 3",
      date: "Unser lustigster Moment",
      title: "Lachen bis der Bauch wehtut",
      text: "Weil wir zusammen selbst über den größten Quatsch lachen können und genau das liebe ich an uns.",
      type: "image",
      image: "images/memory-3.svg"
    },
    {
      chapter: "Kapitel 4",
      date: "Heute",
      title: "Unsere Geschichte geht weiter",
      text: "Und das Beste daran: Das hier ist erst der Anfang. Noch so viele Seiten warten darauf, von uns gefüllt zu werden. ❤️",
      type: "image",
      image: "images/memory-4.svg"
    }

    // VIDEO-BEISPIEL FÜR DAS TAGEBUCH:
    // ,{
    //   chapter: "Kapitel 5",
    //   date: "Unser Urlaub",
    //   title: "Ein Moment als Video",
    //   text: "Dieses Video erinnert mich immer an diesen wunderschönen Tag.",
    //   type: "video",
    //   video: "videos/urlaub.mp4",
    //   poster: "images/urlaub-vorschaubild.jpg"
    // }
  ],
  gallery: [
    { type: "image", image: "images/gallery-1.svg", caption: "Mein Lieblingsfoto von uns" },
    { type: "image", image: "images/gallery-2.svg", caption: "Ein unvergesslicher Moment" },
    { type: "image", image: "images/gallery-3.svg", caption: "Du und dein wunderschönes Lächeln" },
    { type: "image", image: "images/gallery-4.svg", caption: "Zusammen ist alles schöner" },
    { type: "image", image: "images/gallery-5.svg", caption: "Eine Erinnerung fürs Leben" },
    { type: "image", image: "images/gallery-6.svg", caption: "Mein Lieblingsmensch ❤️" }

    // VIDEO-BEISPIEL FÜR DIE GALERIE:
    // ,{
    //   type: "video",
    //   video: "videos/unser-video.mp4",
    //   poster: "images/video-vorschaubild.jpg",
    //   caption: "Eine wunderschöne Video-Erinnerung ❤️"
    // }
  ]
};

const bootMessages = ["System wird gestartet …", "Lade schönstes Mädchen der Welt …", "Suche nach meinem Lieblingsmenschen …", "Chiara erfolgreich gefunden ❤️", "Alle Liebesmodule bereit."];

const modalTemplates = {
  "love-letter": () => `
    <h2 id="modal-title">Mein Liebesbrief an dich 💌</h2>
    <p>Meine wunderschöne Chiara,</p>
    <p>manchmal kann ich gar nicht richtig in Worte fassen, wie wichtig du mir bist. Du machst mein Leben schöner, wärmer und einfach viel besonderer. Mit dir fühlen sich selbst kleine Momente wie Erinnerungen an, die ich niemals verlieren möchte.</p>
    <p>Ich liebe dein Lächeln, deine Art, deine Nähe und dieses Gefühl, dass ich bei dir einfach ich selbst sein kann. Danke, dass du an meiner Seite bist. Ich freue mich auf alles, was noch vor uns liegt – auf jedes Abenteuer, jeden gemütlichen Abend, jedes Lachen und jede Umarmung.</p>
    <p><strong>Ich liebe dich. Heute, morgen und an jedem Tag danach. ❤️</strong></p><p>Dein Chrisi</p>`,
  reasons: () => `<h2 id="modal-title">Warum ich dich liebe 💗</h2><p>Es gibt unendlich viele Gründe. Hier ist gerade einer davon:</p><div class="reason-box"><div id="reason-text" class="reason-text">${randomReason()}</div><button id="new-reason" class="primary-btn">Nächster Grund</button></div>`,
  memories: () => `<div class="journal-heading"><div><span class="eyebrow">Unsere Geschichte</span><h2 id="modal-title">Unser digitales Tagebuch 📖</h2><p>Wähle ein Kapitel oder blättere Seite für Seite durch unsere Erinnerungen.</p></div></div>
    <div class="journal-shell">
      <aside class="chapter-panel" aria-label="Kapitelübersicht">
        <span class="chapter-panel-title">Kapitel</span>
        <div id="chapter-list" class="chapter-list">${CONFIG.memories.map((memory, index) => `
          <button class="chapter-button${index === 0 ? " active" : ""}" data-chapter-index="${index}">
            <span>${escapeHtml(memory.chapter || `Kapitel ${index + 1}`)}</span>
            <small>${escapeHtml(memory.title)}</small>
          </button>`).join("")}</div>
      </aside>
      <section class="book-stage" aria-live="polite">
        <div class="book-ribbon">Chrisi &amp; Chiara</div>
        <article id="journal-page" class="journal-page"></article>
        <div class="book-controls">
          <button id="previous-page" class="book-button" type="button" aria-label="Vorheriges Kapitel">← <span>Zurück</span></button>
          <span id="page-indicator" class="page-indicator"></span>
          <button id="next-page" class="book-button" type="button" aria-label="Nächstes Kapitel"><span>Weiter</span> →</button>
        </div>
      </section>
    </div>`,
  gallery: () => `
    <h2 id="modal-title">Unsere Galerie 🎞️</h2>
    <p>Hier finden unsere schönsten Fotos und Videos ihren Platz.</p>
    <div class="gallery-grid">
      ${CONFIG.gallery.map(item => renderGalleryItem(item)).join("")}
    </div>`,
  future: () => `<h2 id="modal-title">Unsere Zukunft ✨</h2><p>Auf all das freue ich mich mit dir:</p><div class="future-list"><div class="future-item">🌍 Gemeinsam neue Orte entdecken</div><div class="future-item">🏡 Irgendwann unser eigenes Zuhause gestalten</div><div class="future-item">📸 Noch tausend gemeinsame Fotos machen</div><div class="future-item">🌙 Nächte, in denen wir viel zu lange reden</div><div class="future-item">❤️ Zusammen alt werden und trotzdem Quatsch machen</div></div>`,
  hug: () => `<h2 id="modal-title">Notfall-Kuscheln 🫂</h2><div class="hug-box"><div style="font-size:64px">🫂</div><h3>Virtuelle Umarmung wurde versendet!</h3><p>Empfängerin: Chiara<br>Lieferzeit: sofort<br>Haltbarkeit: für immer ❤️</p><button id="send-hug" class="primary-btn">Noch eine Umarmung</button></div>`,
  secret: () => `<h2 id="modal-title">Geheime Nachricht 🔒</h2><div class="secret-box"><p>Hinweis: Der Code ist der Name des schönsten Mädchens der Welt.</p><input id="secret-input" class="code-input" placeholder="Geheimcode eingeben" autocomplete="off"><button id="unlock-secret" class="primary-btn">Entsperren</button><div id="secret-result"></div></div>`,
  quiz: () => `<h2 id="modal-title">Mini-Quiz 🎮</h2><div class="quiz-box"><h3>Wer ist der süßeste Mensch auf dieser Website?</h3><button class="quiz-answer" data-correct="false">Chrisi</button><button class="quiz-answer" data-correct="true">Chiara</button><button class="quiz-answer" data-correct="false">Beide gleich</button><div id="quiz-result"></div></div>`
};

const passwordScreen = document.getElementById("password-screen");
const passwordForm = document.getElementById("password-form");
const passwordInput = document.getElementById("password-input");
const passwordError = document.getElementById("password-error");
const bootScreen = document.getElementById("boot-screen");
const desktop = document.getElementById("desktop");
const bootText = document.getElementById("boot-text");
const progressBar = document.getElementById("progress-bar");
const startBtn = document.getElementById("start-btn");
const modal = document.getElementById("modal");
const modalWindow = modal.querySelector(".modal-window");
const modalContent = document.getElementById("modal-content");
const toast = document.getElementById("toast");
const heartLayer = document.getElementById("heart-layer");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCaption = document.getElementById("lightbox-caption");

let activeModalType = null;
let activeMemoryIndex = 0;
let journalTouchStartX = 0;
let journalAnimating = false;

passwordForm.addEventListener("submit", event => {
  event.preventDefault();
  if (passwordInput.value === CONFIG.sitePassword) {
    passwordError.textContent = "";
    passwordScreen.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 350, fill: "forwards" });
    setTimeout(() => {
      passwordScreen.classList.add("hidden");
      bootScreen.classList.remove("hidden");
      startBootSequence();
    }, 330);
  } else {
    passwordError.textContent = "Das Passwort ist leider falsch ❤️";
    passwordInput.value = "";
    passwordInput.focus();
    passwordForm.classList.remove("shake");
    void passwordForm.offsetWidth;
    passwordForm.classList.add("shake");
  }
});

let bootStarted = false;
function startBootSequence() {
  if (bootStarted) return;
  bootStarted = true;
  let bootIndex = 0;
  const bootInterval = setInterval(() => {
    bootText.textContent = bootMessages[bootIndex];
    progressBar.style.width = `${((bootIndex + 1) / bootMessages.length) * 100}%`;
    bootIndex++;
    if (bootIndex >= bootMessages.length) {
      clearInterval(bootInterval);
      setTimeout(() => startBtn.classList.remove("hidden"), 350);
    }
  }, 700);
}

startBtn.addEventListener("click", () => {
  bootScreen.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 500, fill: "forwards" });
  setTimeout(() => { bootScreen.classList.add("hidden"); desktop.classList.remove("hidden"); heartRain(18); }, 480);
});

document.querySelectorAll("[data-open]").forEach(btn => btn.addEventListener("click", () => openModal(btn.dataset.open)));
document.querySelectorAll("[data-close]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => {
  if (event.key === "Escape") { closeModal(); closeLightbox(); }
  if (activeModalType === "memories" && !modal.classList.contains("hidden")) {
    if (event.key === "ArrowLeft") changeJournalPage(activeMemoryIndex - 1, "previous");
    if (event.key === "ArrowRight") changeJournalPage(activeMemoryIndex + 1, "next");
  }
});
document.getElementById("heart-rain-btn").addEventListener("click", () => heartRain(35));
document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", event => { if (event.target === lightbox) closeLightbox(); });

function openModal(type) {
  if (!modalTemplates[type]) return;
  activeModalType = type;
  activeMemoryIndex = 0;
  modalContent.innerHTML = modalTemplates[type]();
  modalWindow.classList.toggle("journal-modal", type === "memories");
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  bindModalEvents(type);
  bindLightboxButtons();
}

function closeModal() {
  pauseAllVideos(modal);
  modal.classList.add("hidden");
  modalWindow.classList.remove("journal-modal");
  document.body.classList.remove("modal-open");
  activeModalType = null;
}

function renderGalleryItem(item) {
  const caption = escapeHtml(item.caption || "Unsere Erinnerung");

  if (item.type === "video" || item.video) {
    const videoSource = escapeHtml(item.video || "");
    const poster = item.poster ? ` poster="${escapeHtml(item.poster)}"` : "";
    const mimeType = getVideoMimeType(videoSource);
    const typeAttribute = mimeType ? ` type="${mimeType}"` : "";

    return `
      <article class="gallery-item gallery-video-item">
        <video controls playsinline preload="metadata"${poster} aria-label="${caption}">
          <source src="${videoSource}"${typeAttribute}>
          Dein Browser unterstützt dieses Video leider nicht.
        </video>
        <span>${caption}</span>
      </article>`;
  }

  const imageSource = escapeHtml(item.image || "");
  return `
    <button class="gallery-item" type="button" data-lightbox-src="${imageSource}" data-lightbox-caption="${caption}">
      <img src="${imageSource}" alt="${caption}" loading="lazy">
      <span>${caption}</span>
    </button>`;
}

function renderJournalMedia(memory) {
  const title = escapeHtml(memory.title || "Unsere Erinnerung");

  if (memory.type === "video" || memory.video) {
    const videoSource = escapeHtml(memory.video || "");
    const poster = memory.poster ? ` poster="${escapeHtml(memory.poster)}"` : "";
    const mimeType = getVideoMimeType(videoSource);
    const typeAttribute = mimeType ? ` type="${mimeType}"` : "";

    return `
      <div class="journal-photo journal-video">
        <video controls playsinline preload="metadata"${poster} aria-label="${title}">
          <source src="${videoSource}"${typeAttribute}>
          Dein Browser unterstützt dieses Video leider nicht.
        </video>
        <span>Video abspielen ❤️</span>
      </div>`;
  }

  const imageSource = escapeHtml(memory.image || "");
  return `
    <button class="journal-photo" type="button" data-lightbox-src="${imageSource}" data-lightbox-caption="${title}">
      <img src="${imageSource}" alt="${title}" loading="eager">
      <span>Foto öffnen</span>
    </button>`;
}

function getVideoMimeType(source) {
  const cleanSource = source.split("?")[0].split("#")[0].toLowerCase();
  if (cleanSource.endsWith(".mp4") || cleanSource.endsWith(".m4v")) return "video/mp4";
  if (cleanSource.endsWith(".webm")) return "video/webm";
  if (cleanSource.endsWith(".ogv") || cleanSource.endsWith(".ogg")) return "video/ogg";
  if (cleanSource.endsWith(".mov")) return "video/quicktime";
  return "";
}

function pauseAllVideos(container = document) {
  container.querySelectorAll("video").forEach(video => video.pause());
}

function bindLightboxButtons() {
  document.querySelectorAll("[data-lightbox-src]").forEach(button => {
    button.onclick = () => openLightbox(button.dataset.lightboxSrc, button.dataset.lightboxCaption || "");
  });
}

function openLightbox(source, caption) {
  lightboxImage.src = source;
  lightboxCaption.textContent = caption;
  lightbox.classList.remove("hidden");
}

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightboxImage.src = "";
}

function bindModalEvents(type) {
  if (type === "memories") setupJournal();
  if (type === "reasons") document.getElementById("new-reason").addEventListener("click", () => { document.getElementById("reason-text").textContent = randomReason(); heartRain(8); });
  if (type === "hug") document.getElementById("send-hug").addEventListener("click", () => { showToast("Noch eine Umarmung an Chiara gesendet 🫂❤️"); heartRain(20); });
  if (type === "secret") {
    document.getElementById("unlock-secret").addEventListener("click", unlockSecret);
    document.getElementById("secret-input").addEventListener("keydown", event => { if (event.key === "Enter") unlockSecret(); });
  }
  if (type === "quiz") document.querySelectorAll(".quiz-answer").forEach(btn => btn.addEventListener("click", () => {
    const result = document.getElementById("quiz-result");
    if (btn.dataset.correct === "true") { result.innerHTML = "<p><strong>Richtig! Natürlich Chiara ❤️</strong></p>"; heartRain(24); }
    else result.innerHTML = "<p>Fast! Die richtige Antwort ist natürlich Chiara 😌</p>";
  }));
}

function setupJournal() {
  document.querySelectorAll("[data-chapter-index]").forEach(button => {
    button.addEventListener("click", () => {
      const targetIndex = Number(button.dataset.chapterIndex);
      const direction = targetIndex >= activeMemoryIndex ? "next" : "previous";
      changeJournalPage(targetIndex, direction);
    });
  });
  document.getElementById("previous-page").addEventListener("click", () => changeJournalPage(activeMemoryIndex - 1, "previous"));
  document.getElementById("next-page").addEventListener("click", () => changeJournalPage(activeMemoryIndex + 1, "next"));

  const page = document.getElementById("journal-page");
  page.addEventListener("touchstart", event => {
    if (event.target.closest("video")) {
      journalTouchStartX = null;
      return;
    }
    journalTouchStartX = event.changedTouches[0].clientX;
  }, { passive: true });
  page.addEventListener("touchend", event => {
    if (journalTouchStartX === null || event.target.closest("video")) return;
    const distance = event.changedTouches[0].clientX - journalTouchStartX;
    if (Math.abs(distance) < 48) return;
    changeJournalPage(activeMemoryIndex + (distance < 0 ? 1 : -1), distance < 0 ? "next" : "previous");
  }, { passive: true });

  renderJournalPage();
}

async function changeJournalPage(targetIndex, direction) {
  if (journalAnimating || targetIndex < 0 || targetIndex >= CONFIG.memories.length || targetIndex === activeMemoryIndex) return;
  const page = document.getElementById("journal-page");
  if (!page) return;

  journalAnimating = true;
  pauseAllVideos(page);
  const turn = direction === "next" ? -18 : 18;
  const shift = direction === "next" ? -10 : 10;

  try {
    await page.animate([
      { transform: "rotateY(0deg) translateX(0)", opacity: 1 },
      { transform: `rotateY(${turn}deg) translateX(${shift}px)`, opacity: 0.08 }
    ], { duration: 220, easing: "ease-in", fill: "forwards" }).finished;

    activeMemoryIndex = targetIndex;
    renderJournalPage();

    await page.animate([
      { transform: `rotateY(${-turn}deg) translateX(${-shift}px)`, opacity: 0.08 },
      { transform: "rotateY(0deg) translateX(0)", opacity: 1 }
    ], { duration: 230, easing: "ease-out", fill: "forwards" }).finished;
  } catch (error) {
    activeMemoryIndex = targetIndex;
    renderJournalPage();
  } finally {
    page.style.transform = "";
    page.style.opacity = "";
    journalAnimating = false;
  }
}

function renderJournalPage() {
  const memory = CONFIG.memories[activeMemoryIndex];
  const page = document.getElementById("journal-page");
  if (!memory || !page) return;
  pauseAllVideos(page);
  page.innerHTML = `
    <div class="page-number">${String(activeMemoryIndex + 1).padStart(2, "0")}</div>
    ${renderJournalMedia(memory)}
    <div class="journal-copy">
      <span class="memory-chapter">${escapeHtml(memory.chapter || `Kapitel ${activeMemoryIndex + 1}`)}</span>
      <span class="memory-date">${escapeHtml(memory.date)}</span>
      <h3>${escapeHtml(memory.title)}</h3>
      <p>${escapeHtml(memory.text)}</p>
      <div class="journal-signature">Unsere Erinnerung ❤️</div>
    </div>`;

  document.querySelectorAll("[data-chapter-index]").forEach((button, index) => button.classList.toggle("active", index === activeMemoryIndex));
  document.getElementById("page-indicator").textContent = `Seite ${activeMemoryIndex + 1} von ${CONFIG.memories.length}`;
  document.getElementById("previous-page").disabled = activeMemoryIndex === 0;
  document.getElementById("next-page").disabled = activeMemoryIndex === CONFIG.memories.length - 1;
  bindLightboxButtons();

  const activeChapter = document.querySelector(`[data-chapter-index="${activeMemoryIndex}"]`);
  if (activeChapter) activeChapter.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
}

function unlockSecret() {
  const input = document.getElementById("secret-input").value.trim().toLowerCase();
  const result = document.getElementById("secret-result");
  if (input === CONFIG.secretCode.toLowerCase()) { result.innerHTML = "<p><strong>Geheimnachricht:</strong><br>Ganz egal, wie dein Tag war: Du bist geliebt, du bist wunderschön und du bist niemals allein. Ich bin immer für dich da. ❤️</p>"; heartRain(25); }
  else result.innerHTML = "<p>Der Code war leider falsch. Kleiner Tipp: sechs Buchstaben und wunderschön 😉</p>";
}

function randomReason() { return CONFIG.loveReasons[Math.floor(Math.random() * CONFIG.loveReasons.length)]; }
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, char => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", "'":"&#39;", '"':"&quot;" }[char])); }

function updateCounter() {
  const start = new Date(CONFIG.relationshipStart), now = new Date(), diff = now - start;
  if (Number.isNaN(diff) || diff < 0) { document.getElementById("relationship-counter").textContent = "Unser Datum fehlt noch ❤️"; return; }
  const days = Math.floor(diff / 86400000), hours = Math.floor((diff % 86400000) / 3600000), minutes = Math.floor((diff % 3600000) / 60000);
  document.getElementById("relationship-counter").textContent = `${days} Tage, ${hours} Std. und ${minutes} Min. mit dir ❤️`;
}

setInterval(updateCounter, 30000);
updateCounter();

function showToast(message) {
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2600);
}

function heartRain(amount = 20) {
  const hearts = ["❤", "♥", "💕", "❣"];
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${18 + Math.random() * 24}px`;
    heart.style.animationDuration = `${2.6 + Math.random() * 2.7}s`;
    heart.style.animationDelay = `${Math.random() * .7}s`;
    heartLayer.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }
}
