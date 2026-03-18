const APPS = [
  {
    name: "Baby Bracket",
    iconSrc: "assets/apps/baby-bracket-icon-320.png",
    mediaSrc: "assets/apps/baby-bracket-screen-420.png",
    mediaAlt: "Baby Bracket app preview screen",
    mediaFit: "contain",
    subtitle: "A parent-friendly bracket builder for leagues and family events.",
    ageBand: "Parents",
    status: "Coming soon",
    appStoreUrl: "",
    note: "Launching soon on the App Store."
  },
  {
    name: "Cave Dweller",
    iconSrc: "assets/apps/cave-dweller-icon.png",
    mediaSrc: "assets/apps/cave-dweller-title.png",
    mediaAlt: "Cave Dweller title art",
    mediaFit: "contain",
    subtitle: "A puzzle-solving cave adventure built around logic and discovery.",
    ageBand: "Puzzle Game",
    status: "Coming soon",
    appStoreUrl: "",
    note: "Launching soon on the App Store."
  }
];

function createAppCard(app, index) {
  const card = document.createElement("article");
  card.className = "app-card";
  card.style.setProperty("--delay", `${index * 90}ms`);

  const media = document.createElement("div");
  media.className = "app-media";
  if (app.mediaSrc) {
    const mediaImage = document.createElement("img");
    mediaImage.className = "app-media-image";
    if (app.mediaFit === "contain") {
      mediaImage.classList.add("app-media-contain");
    }
    mediaImage.src = app.mediaSrc;
    mediaImage.alt = app.mediaAlt || `${app.name} preview`;
    mediaImage.loading = "lazy";
    mediaImage.decoding = "async";
    media.appendChild(mediaImage);
  }

  const title = document.createElement("h3");
  title.textContent = app.name;
  const titleRow = document.createElement("div");
  titleRow.className = "app-title-row";

  const icon = document.createElement("span");
  icon.className = "app-icon";
  icon.setAttribute("aria-hidden", "true");
  if (app.iconSrc) {
    const iconImage = document.createElement("img");
    iconImage.src = app.iconSrc;
    iconImage.alt = "";
    iconImage.className = "app-icon-image";
    iconImage.loading = "lazy";
    iconImage.decoding = "async";
    icon.appendChild(iconImage);
  } else {
    icon.textContent = app.emoji || "🏮";
  }
  titleRow.append(icon, title);

  const subtitle = document.createElement("p");
  subtitle.className = "app-subtitle";
  subtitle.textContent = app.subtitle;

  const meta = document.createElement("p");
  meta.className = "app-meta";
  const agePill = document.createElement("span");
  agePill.className = "pill";
  agePill.textContent = app.ageBand;
  const statusPill = document.createElement("span");
  statusPill.className = "pill";
  statusPill.textContent = app.status;
  meta.append(agePill, document.createTextNode(" "), statusPill);

  const cta = document.createElement(app.appStoreUrl ? "a" : "span");
  cta.className = "button";
  cta.textContent = app.buttonText || (app.appStoreUrl ? "View on App Store" : "App Store link coming soon");

  if (app.appStoreUrl) {
    cta.classList.add("button-primary");
    cta.href = app.appStoreUrl;
    cta.target = "_blank";
    cta.rel = "noreferrer";
  } else {
    cta.classList.add("button-disabled");
    cta.ariaDisabled = "true";
  }

  card.append(media, titleRow, subtitle, meta);
  if (app.note) {
    const note = document.createElement("p");
    note.className = "app-note";
    note.textContent = app.note;
    card.appendChild(note);
  }
  card.appendChild(cta);
  return card;
}

const appGrid = document.getElementById("app-grid");
if (appGrid) {
  if (APPS.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "New titles are on the way.";
    appGrid.appendChild(empty);
  } else {
    APPS.forEach((app, index) => appGrid.appendChild(createAppCard(app, index)));
  }
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
