const APPS = [
  {
    name: "Baby Bracket",
    iconSrc: "assets/apps/baby-bracket-icon-320.png",
    mediaTheme: "baby-board",
    mediaLayout: "babyBracketBoard",
    mediaItems: [
      {
        tone: "girl",
        label: "Baby Girl",
        iconSrc: "assets/apps/baby-bracket-girl.png"
      },
      {
        tone: "neutral",
        label: "Baby (Unisex)",
        iconSrc: "assets/apps/baby-bracket-neutral.png"
      },
      {
        tone: "boy",
        label: "Baby Boy",
        iconSrc: "assets/apps/baby-bracket-boy.png"
      }
    ],
    subtitle: "A baby name app with a single bracket and four name choices per match.",
    ageBand: "Expecting Parents",
    status: "Coming soon",
    appStoreUrl: "",
    note: "Pick one name each round and move your favorites forward to the final decision."
  },
  {
    name: "Cave Dweller",
    iconSrc: "assets/apps/cave-dweller-icon.png",
    mediaSrc: "assets/apps/cave-dweller-background.png",
    mediaAlt: "Cave Dweller cave background",
    mediaFit: "cover",
    mediaPosition: "50% 30%",
    mediaTheme: "cave",
    mediaOverlaySrc: "assets/apps/cave-dweller-title.png",
    mediaOverlayAlt: "Cave Dweller logo",
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
  if (app.mediaTheme) {
    media.classList.add(`app-media-${app.mediaTheme}`);
  }
  if (app.mediaPosition) {
    media.style.setProperty("--media-position", app.mediaPosition);
  }

  if (app.mediaLayout === "babyBracketBoard" && Array.isArray(app.mediaItems)) {
    const board = document.createElement("div");
    board.className = "baby-board";
    app.mediaItems.forEach((item) => {
      const lane = document.createElement("div");
      lane.className = `baby-lane baby-lane-${item.tone || "default"}`;

      const laneIcon = document.createElement("img");
      laneIcon.className = "baby-lane-icon";
      if (item.tone === "neutral") {
        laneIcon.classList.add("baby-lane-icon-neutral");
      }
      laneIcon.src = item.iconSrc;
      laneIcon.alt = "";
      laneIcon.loading = "lazy";
      laneIcon.decoding = "async";

      const laneLabel = document.createElement("p");
      laneLabel.className = "baby-lane-label";
      laneLabel.textContent = item.label;

      lane.append(laneIcon, laneLabel);
      board.appendChild(lane);
    });
    media.appendChild(board);
  } else if (app.mediaSrc) {
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
  if (app.mediaOverlaySrc) {
    const mediaOverlay = document.createElement("img");
    mediaOverlay.className = "app-media-overlay";
    mediaOverlay.src = app.mediaOverlaySrc;
    mediaOverlay.alt = app.mediaOverlayAlt || "";
    mediaOverlay.loading = "lazy";
    mediaOverlay.decoding = "async";
    media.appendChild(mediaOverlay);
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
