/* Moteur du site — tu n'as normalement pas besoin de modifier ce fichier.
   Tout le contenu se change dans data.js */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const CAT = { montage: "Montage", shorts: "Short", ia: "Vidéo IA" };
  const GRADS = [
    "radial-gradient(circle at 30% 30%, #d6b13a, transparent 55%), radial-gradient(circle at 75% 70%, #7a1414, transparent 55%), #121317",
    "radial-gradient(circle at 70% 25%, #8d9bb3, transparent 50%), radial-gradient(circle at 20% 80%, #d6b13a, transparent 55%), #0f1014",
    "radial-gradient(circle at 25% 70%, #2a3550, transparent 50%), radial-gradient(circle at 80% 30%, #d6b13a, transparent 55%), #0e0f12",
    "radial-gradient(circle at 60% 60%, #7a1414, transparent 50%), radial-gradient(circle at 20% 20%, #8d9bb3, transparent 55%), #101114",
  ];

  /* ---------- Textes simples ---------- */
  document.querySelectorAll("[data-bind]").forEach(el => { el.textContent = SITE[el.dataset.bind] || ""; });
  document.title = `${SITE.nom} — ${SITE.metier}`;
  if (SITE.slogan) document.querySelectorAll(".js-slogan").forEach(el => el.textContent = SITE.slogan);
  $("#year").textContent = new Date().getFullYear();

  // Titre : *mot* -> italique doré, animé mot par mot
  $("#heroTitle").innerHTML = SITE.titre.split(/\s+/).map((w, i) => {
    const it = /^\*.*\*[.,!?]*$/.test(w);
    const clean = esc(w.replace(/\*/g, ""));
    return `<span class="w"><span style="transition-delay:${0.1 + i * 0.07}s">${it ? `<em>${clean}</em>` : clean}</span></span>`;
  }).join(" ");

  // Statut
  if (!SITE.disponible) { $("#status").classList.add("is-busy"); $("#statusTxt").textContent = "Complet"; }

  // Fond showreel
  if (SITE.showreelFond) {
    $("#heroBg").insertAdjacentHTML("afterbegin", `<video src="${esc(SITE.showreelFond)}" autoplay muted loop playsinline></video>`);
  }

  // Outils (bandeau)
  const tools = OUTILS.map(t => `<span>${esc(t)}</span>`).join("");
  $("#marquee").innerHTML = tools + tools;

  // Chiffres
  $("#stats").innerHTML = SITE.chiffres.map(c => `<div class="stat reveal"><div class="stat__v">${esc(c.valeur)}</div><div class="stat__l">${esc(c.label)}</div></div>`).join("");

  // Services
  $("#servicesList").innerHTML = SERVICES.map((s, i) => `
    <div class="service reveal">
      <span class="service__n">0${i + 1}</span>
      <h3 class="service__t">${esc(s.titre)}</h3>
      <p class="service__d">${esc(s.texte)}</p>
    </div>`).join("");

  // Équipe
  if (typeof EQUIPE === "undefined" || !EQUIPE.length) { $("#equipe").remove(); document.querySelector('a[href="#equipe"]')?.remove(); }
  else $("#team").innerHTML = EQUIPE.map((e, i) => `
    <figure class="member reveal" style="transition-delay:${i * 0.1}s">
      <div class="member__img"><img src="${esc(e.photo)}" alt="${esc(e.nom)}" loading="lazy"><span class="member__n">0${i + 1}</span></div>
      <figcaption><h3 class="member__name">${esc(e.nom)}</h3><p class="member__role">${esc(e.role)}</p></figcaption>
    </figure>`).join("");

  // Avis
  if (!TEMOIGNAGES.length) { $("#avis").remove(); document.querySelector('a[href="#avis"]')?.remove(); }
  else $("#quotes").innerHTML = TEMOIGNAGES.map(t => `
    <figure class="quote reveal">
      <p>${esc(t.texte)}</p>
      <figcaption class="quote__who">
        <span class="quote__av">${esc(t.nom.charAt(0))}</span>
        <span><span class="quote__n">${esc(t.nom)}</span><br><span class="quote__r">${esc(t.role)}</span></span>
      </figcaption>
    </figure>`).join("");

  // Contact
  $("#mailLink").href = `mailto:${SITE.email}`;
  $("#mailLink").textContent = SITE.email;
  $("#waLink").href = `https://wa.me/${SITE.whatsapp}`;
  $("#socials").innerHTML = SITE.reseaux.map(r => `<a href="${esc(r.lien)}" target="_blank" rel="noopener">${esc(r.nom)} ↗</a>`).join("");

  /* ---------- Vidéos : détection YouTube / Vimeo / MP4 ---------- */
  function parse(url = "") {
    let m;
    if ((m = url.match(/(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/))) return { type: "yt", id: m[1] };
    if ((m = url.match(/vimeo\.com\/(?:video\/)?(\d+)/))) return { type: "vimeo", id: m[1] };
    if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return { type: "file", src: url };
    if (url) return { type: "link", src: url };
    return { type: "none" };
  }
  function thumb(p) {
    if (p.miniature) return p.miniature;
    const v = parse(p.video);
    if (v.type === "yt") return `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`;
    return "";
  }

  /* ---------- Grille de projets ---------- */
  const grid = $("#grid");
  grid.innerHTML = PROJETS.map((p, i) => {
    const t = thumb(p);
    const vertical = p.format === "vertical";
    const media = t
      ? `<img src="${esc(t)}" alt="${esc(p.titre)}" loading="lazy">`
      : `<div class="ph" style="--g:${GRADS[i % GRADS.length]}"><b>${esc(p.titre)}</b></div>`;
    const preview = p.apercu ? `<video src="${esc(p.apercu)}" muted loop playsinline preload="none"></video>` : "";
    return `
      <article class="card ${vertical ? "card--vertical" : ""}" data-cat="${esc(p.categorie)}" data-i="${i}" tabindex="0">
        <div class="card__media">
          ${media}${preview}
          <span class="card__tag">${CAT[p.categorie] || esc(p.categorie)}</span>
          <span class="card__dur">${vertical ? "9:16" : "16:9"}</span>
        </div>
        <div class="card__info">
          <div><h3 class="card__title">${esc(p.titre)}</h3><p class="card__client">${esc(p.client)}</p></div>
          <span class="card__year">${esc(p.annee)}</span>
        </div>
      </article>`;
  }).join("");

  // Compteurs des filtres
  ["tous", "montage", "shorts", "ia"].forEach(c => {
    const n = c === "tous" ? PROJETS.length : PROJETS.filter(p => p.categorie === c).length;
    $(`#c-${c}`).textContent = String(n).padStart(2, "0");
    if (!n) document.querySelector(`.filter[data-f="${c}"]`).remove();
  });

  // Filtres
  $("#filters").addEventListener("click", e => {
    const b = e.target.closest(".filter"); if (!b) return;
    document.querySelectorAll(".filter").forEach(f => f.classList.toggle("is-active", f === b));
    const f = b.dataset.f;
    grid.querySelectorAll(".card").forEach(c => {
      const show = f === "tous" || c.dataset.cat === f;
      c.classList.toggle("is-hidden", !show);
      if (show) { c.classList.remove("is-in"); requestAnimationFrame(() => requestAnimationFrame(() => c.classList.add("is-in"))); }
    });
  });

  // Aperçu au survol
  grid.querySelectorAll(".card").forEach(c => {
    const v = c.querySelector("video");
    if (!v) return;
    c.addEventListener("mouseenter", () => v.play().catch(() => {}));
    c.addEventListener("mouseleave", () => { v.pause(); v.currentTime = 0; });
  });

  /* ---------- Lecteur ---------- */
  const modal = $("#modal"), player = $("#player");
  function open(p) {
    const v = parse(p.video);
    player.classList.toggle("is-vertical", p.format === "vertical");
    if (v.type === "yt") player.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${v.id}?autoplay=1&rel=0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    else if (v.type === "vimeo") player.innerHTML = `<iframe src="https://player.vimeo.com/video/${v.id}?autoplay=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    else if (v.type === "file") player.innerHTML = `<video src="${esc(v.src)}" controls autoplay playsinline></video>`;
    else if (v.type === "link") player.innerHTML = `<div class="modal__empty"><strong>Voir la vidéo</strong><a class="btn btn--light" href="${esc(v.src)}" target="_blank" rel="noopener">Ouvrir ↗</a></div>`;
    else player.innerHTML = `<div class="modal__empty"><strong>Bientôt en ligne</strong><span>Ajoute le lien de cette vidéo dans data.js</span></div>`;
    $("#modalInfo").innerHTML = p.titre ? `<h3>${esc(p.titre)}</h3><p>${esc(p.client ? p.client + " — " : "")}${esc(p.description || "")}</p>` : "";
    modal.classList.add("is-open"); modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close() {
    modal.classList.remove("is-open"); modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { player.innerHTML = ""; }, 400);
  }
  grid.addEventListener("click", e => { const c = e.target.closest(".card"); if (c) open(PROJETS[c.dataset.i]); });
  grid.addEventListener("keydown", e => { if (e.key === "Enter") { const c = e.target.closest(".card"); if (c) open(PROJETS[c.dataset.i]); } });
  $("#reelBtn").addEventListener("click", () => open({ titre: "Showreel " + new Date().getFullYear(), client: SITE.nom, video: SITE.showreel, format: SITE.showreelFormat || "horizontal" }));
  $("#modalClose").addEventListener("click", close);
  modal.addEventListener("click", e => { if (e.target === modal) close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  /* ---------- Curseur "Lire" ---------- */
  const cur = $("#cursor");
  document.addEventListener("mousemove", e => { cur.style.left = e.clientX + "px"; cur.style.top = e.clientY + "px"; });
  grid.addEventListener("mouseover", e => cur.classList.toggle("is-on", !!e.target.closest(".card")));
  grid.addEventListener("mouseleave", () => cur.classList.remove("is-on"));

  /* ---------- Nav au scroll ---------- */
  const nav = $("#nav");
  addEventListener("scroll", () => nav.classList.toggle("is-scrolled", scrollY > 40), { passive: true });

  /* ---------- Apparitions ---------- */
  const io = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
  }), { threshold: 0.12 });
  document.querySelectorAll(".reveal, .card").forEach((el, i) => {
    if (el.classList.contains("card")) el.style.transitionDelay = (i % 4) * 0.08 + "s";
    io.observe(el);
  });

  /* ---------- Timecode ---------- */
  const tc = f => [Math.floor(f / 90000), Math.floor(f / 1500) % 60, Math.floor(f / 25) % 60, f % 25].map(n => String(n).padStart(2, "0")).join(":");
  let frame = 0;
  const heroTc = $("#heroTc");
  setInterval(() => { frame++; heroTc.textContent = tc(frame); }, 40);

  /* ---------- Loader ---------- */
  const lt = $("#loaderTc"); let lf = 0;
  const li = setInterval(() => { lf += 7; lt.textContent = tc(lf); }, 16);
  const done = () => {
    clearInterval(li);
    $("#loader").classList.add("is-done");
    document.body.classList.add("is-loaded");
    document.querySelectorAll(".hero .reveal").forEach(el => el.classList.add("is-in"));
  };
  addEventListener("load", () => setTimeout(done, 1300));
  setTimeout(done, 3500); // sécurité
})();
