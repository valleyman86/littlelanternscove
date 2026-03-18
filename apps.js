const APPS = [
  {
    name: "Cave Dweller",
    emoji: "🪨",
    subtitle: "A puzzle-solving cave adventure built around logic and discovery.",
    ageBand: "Puzzle Game",
    status: "Released",
    appStoreUrl: "https://apps.apple.com/us/search?term=Cave%20Dweller",
    buttonText: "Search on App Store",
    note: "Official direct App Store listing link will be added here."
  },
  {
    name: "Baby Bracket",
    emoji: "🏆",
    subtitle: "A parent-friendly bracket builder for leagues and family events.",
    ageBand: "Parents",
    status: "Live now",
    appStoreUrl: "https://apps.apple.com/us/app/bracket-baby/id6758258444",
    buttonText: "View on App Store",
    note: "Listed on the App Store as Bracket Baby."
  }
];

function createAppCard(app, index) {
  const card = document.createElement("article");
  card.className = "app-card";
  card.style.setProperty("--delay", `${index * 90}ms`);

  const title = document.createElement("h3");
  title.textContent = app.name;
  const titleRow = document.createElement("div");
  titleRow.className = "app-title-row";

  const icon = document.createElement("span");
  icon.className = "app-icon";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = app.emoji || "🏮";
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

  const note = document.createElement("p");
  note.className = "app-note";
  note.textContent = app.note || "";

  card.append(titleRow, subtitle, meta, note, cta);
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
