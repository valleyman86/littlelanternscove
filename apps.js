const APPS = [
  {
    name: "Lantern Logic",
    subtitle: "Pattern puzzles and matching adventures",
    ageBand: "Ages 5+",
    status: "Live now",
    appStoreUrl: "https://apps.apple.com/us/app/id0000000000"
  },
  {
    name: "Tiny Trail Numbers",
    subtitle: "Counting, sequencing, and number confidence",
    ageBand: "Ages 4+",
    status: "Coming soon",
    appStoreUrl: ""
  },
  {
    name: "Shape Harbor",
    subtitle: "Early geometry and visual reasoning",
    ageBand: "Ages 6+",
    status: "Coming soon",
    appStoreUrl: ""
  }
];

function createAppCard(app, index) {
  const card = document.createElement("article");
  card.className = "app-card";
  card.style.setProperty("--delay", `${index * 90}ms`);

  const title = document.createElement("h3");
  title.textContent = app.name;

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
  cta.textContent = app.appStoreUrl ? "View on App Store" : "App Store link coming soon";

  if (app.appStoreUrl) {
    cta.classList.add("button-primary");
    cta.href = app.appStoreUrl;
    cta.target = "_blank";
    cta.rel = "noreferrer";
  } else {
    cta.classList.add("button-disabled");
    cta.ariaDisabled = "true";
  }

  card.append(title, subtitle, meta, cta);
  return card;
}

const appGrid = document.getElementById("app-grid");
if (appGrid) {
  if (APPS.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "Add your apps in apps.js.";
    appGrid.appendChild(empty);
  } else {
    APPS.forEach((app, index) => appGrid.appendChild(createAppCard(app, index)));
  }
}

const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}
