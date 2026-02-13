// ---------- Your moments ----------
const moments = [
  {
    id: "began",
    title: "Where it all began",
    date: "",
    description: "From the first touch\nI felt I’d love you very much",
    lat: -33.91778190244929,
    lng: 18.42715680599213,
    zoom: 15,
    photo: null
  },
  {
    id: "candyfloss",
    title: "Cloud of Candy Floss",
    date: "",
    description:
      "You hid your gaze\nI licked your spoon\nI thought,\n“I want to hear your laugh for the rest of my days.”",
    lat: -33.9207028,
    lng: 18.4182373,
    zoom: 15,
    photo: null
  },
  {
    id: "bones",
    title: "Bones and All",
    date: "",
    description:
      "We held hands\nYou switched sides\nFrom this moment, I saw everything through your eyes",
    lat: -33.9299879,
    lng: 18.4123034,
    zoom: 15,
    photo: null
  },
  {
    id: "bigbae",
    title: "Big Bae Beach",
    date: "",
    description: "An afternoon dip\nWith your teeth on my lower lip",
    lat: -33.79064737796311,
    lng: 18.454484939575213,
    zoom: 13,
    photo: null
  },
  {
    id: "mykonos",
    title: "Club Mykonos",
    date: "",
    description:
      "You carried me on your back\nHalfway to drunk\nAll in the name of love",
    lat: -33.0473712,
    lng: 18.0427373,
    zoom: 13,
    photo: null
  },
  {
    id: "whales",
    title: "Whales & Winding Roads",
    date: "",
    description: "Our underwear by the outdoor shower\nI saw my future in the mirror",
    lat: -34.409755454228154,
    lng: 19.165363311767567,
    zoom: 12,
    photo: null
  },
  {
    id: "wilderness",
    title: "Somewhere in The Wilderness",
    date: "",
    description:
      "Our first road trip\nRiding horses together\nWrapped up in the web of each other\nLike the spider in the shower",
    lat: -33.95138191714209,
    lng: 22.651062011718754,
    zoom: 11,
    photo: null
  },
  {
    id: "trees",
    title: "Love in the Trees",
    date: "",
    description: "Shaking the treehouse\nSilence of pleasure\nYour heart in my hands",
    lat: -34.061239922383756,
    lng: 23.280143737792987,
    zoom: 12,
    photo: null
  },
  {
    id: "arabella",
    title: "Paradise in Arabella",
    date: "",
    description: "Love in the lake,\nOn the tennis court,\nIn the KFC of Somali excellence",
    lat: -34.3176658,
    lng: 19.1343637,
    zoom: 13,
    photo: null
  },
  {
    id: "middleeast",
    title: "Heat in the Middle East",
    date: "",
    description:
      "Loving you in the desert\nis anything but dry\nKissing you in secret\nAnything for that smile",
    lat: 25.0724183,
    lng: 55.136047,
    zoom: 11,
    photo: null
  },
  {
    id: "summerrain",
    title: "Summer Rain",
    date: "",
    description:
      "In the beach bathrooms\nOn the shore, then it rains\nLaughter and sand between our lips",
    lat: -34.1369724,
    lng: 18.4342254,
    zoom: 13,
    photo: null
  },
  {
    id: "labyrinth",
    title: "Love is a Labyrinth",
    date: "",
    description: "Take a walk with me\nOr should I meet you at our spot?",
    lat: -33.9045962,
    lng: 18.4012912,
    zoom: 15,
    photo: null
  },
  {
    id: "fifteentothirteen",
    title: "Fifteen to Thirteen",
    date: "",
    description:
      "I want to love you on every floor\nFrom one-three-one-one\nAll the way down to the basement door",
    lat: -33.9216029,
    lng: 18.4341034,
    zoom: 16,
    photo: null
  },
  {
    id: "dock",
    title: "What’s Up, Dock?",
    date: "",
    description:
      "Seeing my future with you\nMoving forward in time\nWhere I lay in bed with you\nAnd care only that you’re mine",
    lat: -33.91273660179619,
    lng: 18.421754837036136,
    zoom: 15,
    photo: null
  },

  // Special pin (click -> zoom out -> Milky Way overlay)
  {
    id: "next",
    type: "next",
    title: "Next chapter",
    description: "From here… anywhere.",
    // Place this pin wherever you like:
    lat: -33.9186,
    lng: 18.4232
  }
];
// -------------------------------

// Tiles (CARTO)
const cartoPositron = L.tileLayer(
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
  {
    subdomains: "abcd",
    maxZoom: 20,
    attribution: "&copy; OpenStreetMap contributors &copy; CARTO"
  }
);

// Map init
const map = L.map("map", {
  worldCopyJump: true,
  zoomControl: true,
  layers: [cartoPositron]
});

// Bounds to all normal moments (so Fit moments works nicely)
const normalMoments = moments.filter(m => m.type !== "next");
const bounds = L.latLngBounds(normalMoments.map(m => [m.lat, m.lng]));
map.fitBounds(bounds.pad(0.25), { animate: true });

// Fit button
document.getElementById("fitBtn").addEventListener("click", () => {
  map.fitBounds(bounds.pad(0.25), { animate: true, duration: 1.2 });
});

// Heart-pin SVG (marker icon)
function heartPinSVG(isNext) {
  return `
  <div class="heart-pin ${isNext ? "is-next" : ""}">
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id="y2kGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ff2bb3"/>
          <stop offset="55%" stop-color="#ff4d3d"/>
          <stop offset="100%" stop-color="#b48cff"/>
        </linearGradient>
      </defs>

      <!-- pin -->
      <path class="pin-fill pin-stroke"
        d="M32 2c-11.6 0-21 9.2-21 20.6C11 39.5 32 62 32 62s21-22.5 21-39.4C53 11.2 43.6 2 32 2z"/>
      <!-- heart -->
      <path class="heart-fill"
        d="M32 23.5c-2.7-4.7-9.6-4.7-12.3 0-2 3.4-.8 7.6 2.1 10.2l10.2 9.1 10.2-9.1c2.9-2.6 4.1-6.8 2.1-10.2-2.7-4.7-9.6-4.7-12.3 0z"/>
    </svg>
  </div>`;
}

function makeDivIcon(isNext = false) {
  return L.divIcon({
    html: heartPinSVG(isNext),
    className: "",
    iconSize: [46, 46],
    iconAnchor: [23, 46],
    popupAnchor: [0, -44]
  });
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatLines(text) {
  const safe = escapeHTML(text ?? "");
  return safe
    .split("\n")
    .map(line => `<span class="line">${line}</span>`)
    .join("");
}

function popupHTML(m) {
  const title = escapeHTML(m.title ?? "");
  const date = escapeHTML(m.date ?? "");
  const desc = formatLines(m.description ?? "");
  const photo = m.photo
    ? `<img class="popup-photo" src="${m.photo}" alt="${title} photo" loading="lazy" />`
    : "";

  return `
    <div class="popup">
      <div class="popup-title">${title}</div>
      ${date ? `<div class="popup-date">${date}</div>` : ""}
      <div class="popup-desc">${desc}</div>
      ${photo}
    </div>
  `;
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

// Add markers
moments.forEach(m => {
  const isNext = m.type === "next";

  const marker = L.marker([m.lat, m.lng], {
    icon: makeDivIcon(isNext),
    riseOnHover: true
  }).addTo(map);

  if (isNext) {
    marker.on("click", () => triggerNextChapter(m));
  } else {
    marker.bindPopup(popupHTML(m), { closeButton: false, maxWidth: 340 });

    marker.on("click", () => {
      const targetZoom = clamp(m.zoom ?? 13, 2, 18);
      map.flyTo([m.lat, m.lng], targetZoom, { duration: 1.2 });
      setTimeout(() => marker.openPopup(), 650);
    });
  }
});

// ---------- Next chapter: zoom out -> romantic Milky Way overlay ----------
const spaceOverlay = document.getElementById("spaceOverlay");
const spaceText = document.getElementById("spaceText");
const returnBtn = document.getElementById("returnBtn");

let lastView = null;
let stars = null;

function triggerNextChapter(m) {
  lastView = { center: map.getCenter(), zoom: map.getZoom() };
  map.closePopup();

  // Zoom out to a world view (Earth-ish)
  map.flyTo([0, 0], 2, { duration: 2.0 });

  map.once("moveend", () => {
    showSpace(m.description || "From here… anywhere.");
  });
}

function showSpace(text) {
  spaceText.textContent = text;
  spaceOverlay.classList.remove("is-hidden");
  spaceOverlay.setAttribute("aria-hidden", "false");
  startStarfield();
}

function hideSpace() {
  stopStarfield();
  spaceOverlay.classList.add("is-hidden");
  spaceOverlay.setAttribute("aria-hidden", "true");

  if (lastView) {
    map.flyTo(lastView.center, lastView.zoom, { duration: 1.6 });
  }
}

returnBtn.addEventListener("click", hideSpace);

// Starfield canvas (soft romantic Milky Way)
function startStarfield() {
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const state = { w: 0, h: 0, stars: [], raf: 0, t: 0 };

  function resize() {
    state.w = canvas.width = Math.floor(window.innerWidth * devicePixelRatio);
    state.h = canvas.height = Math.floor(window.innerHeight * devicePixelRatio);

    const count = prefersReduced ? 180 : 520;
    state.stars = new Array(count).fill(0).map(() => ({
      x: Math.random() * state.w,
      y: Math.random() * state.h,
      z: Math.random(),
      r: Math.random() * 1.7 + 0.25
    }));
  }

  function draw() {
    state.t += 0.005;

    ctx.clearRect(0, 0, state.w, state.h);
    ctx.fillStyle = "rgba(6,5,12,1)";
    ctx.fillRect(0, 0, state.w, state.h);

    const grad = ctx.createLinearGradient(0, state.h * 0.18, state.w, state.h * 0.82);
    grad.addColorStop(0.0, "rgba(255,150,190,0.09)");
    grad.addColorStop(0.48, "rgba(180,160,255,0.13)");
    grad.addColorStop(1.0, "rgba(255,255,255,0.06)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, state.w, state.h);

    const g2 = ctx.createRadialGradient(state.w*0.35, state.h*0.35, 0, state.w*0.35, state.h*0.35, state.w*0.55);
    g2.addColorStop(0, "rgba(255,43,179,0.09)");
    g2.addColorStop(1, "rgba(255,43,179,0)");
    ctx.fillStyle = g2;
    ctx.fillRect(0, 0, state.w, state.h);

    const g3 = ctx.createRadialGradient(state.w*0.70, state.h*0.45, 0, state.w*0.70, state.h*0.45, state.w*0.60);
    g3.addColorStop(0, "rgba(255,77,61,0.07)");
    g3.addColorStop(1, "rgba(255,77,61,0)");
    ctx.fillStyle = g3;
    ctx.fillRect(0, 0, state.w, state.h);

    const drift = prefersReduced ? 0 : Math.sin(state.t) * 0.35;
    for (const s of state.stars) {
      const twinkle = prefersReduced ? 0.85 : 0.62 + 0.38 * Math.sin(state.t * 3 + s.x * 0.002);
      ctx.globalAlpha = twinkle;

      const px = s.x + drift * (1 - s.z) * 48;
      const py = s.y + drift * (1 - s.z) * 28;

      ctx.fillStyle = "rgba(255,255,255,0.95)";
      ctx.beginPath();
      ctx.arc(px, py, s.r * (0.75 + (1 - s.z)), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;

    state.raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();

  stars = {
    stop: () => {
      cancelAnimationFrame(state.raf);
      window.removeEventListener("resize", resize);
    }
  };
}

function stopStarfield() {
  if (stars) {
    stars.stop();
    stars = null;
  }
}
// ------------------------------------------------------------------
