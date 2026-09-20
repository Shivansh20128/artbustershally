const artworks = [
  {id:1,title:"Golden Hour",medium:"Acrylic",size:"24 × 36 in",year:"2026",status:"Available",image:"images/artworks/art-01.svg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. A study in warm colour, light and quiet movement."},
  {id:2,title:"Blue Reverie",medium:"Oil",size:"30 × 40 in",year:"2026",status:"Available",image:"images/artworks/art-02.svg",description:"A fictional artwork description for now. Replace this with the story, inspiration and details behind the actual painting."},
  {id:3,title:"Quiet Lines",medium:"Sketch",size:"12 × 16 in",year:"2025",status:"Sold",image:"images/artworks/art-03.svg",description:"A study in line and form. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:4,title:"After Rain",medium:"Mixed Media",size:"24 × 24 in",year:"2026",status:"Available",image:"images/artworks/art-04.svg",description:"Texture, layered marks and a little bit of chaos. Replace this placeholder description with the real story."},
  {id:5,title:"Terracotta Dreams",medium:"Acrylic",size:"18 × 24 in",year:"2025",status:"Available",image:"images/artworks/art-05.svg",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. A warm, earthy composition."},
  {id:6,title:"The Blue Room",medium:"Oil",size:"24 × 30 in",year:"2025",status:"Sold",image:"images/artworks/art-06.svg",description:"A fictional oil painting entry. Add the actual details when the portfolio is ready."},
  {id:7,title:"No. 07",medium:"Sketch",size:"9 × 12 in",year:"2026",status:"Available",image:"images/artworks/art-07.svg",description:"A small pencil study exploring gesture, shadow and negative space."},
  {id:8,title:"Bloom",medium:"Mixed Media",size:"20 × 30 in",year:"2026",status:"Available",image:"images/artworks/art-08.svg",description:"An expressive mixed-media piece. Lorem ipsum dolor sit amet, consectetur adipiscing elit."},
  {id:9,title:"Sunlit Fields",medium:"Acrylic",size:"30 × 30 in",year:"2025",status:"Available",image:"images/artworks/art-09.svg",description:"A colourful landscape-inspired placeholder artwork. Replace with the real artwork information."}
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("artModal");

function renderGallery(filter = "all") {
  if (!gallery) return;
  const items = filter === "all" ? artworks : artworks.filter(a => a.medium === filter);
  gallery.innerHTML = items.map(a => `
    <article class="art-card" tabindex="0" data-id="${a.id}" aria-label="View ${a.title}">
      <img src="${a.image}" alt="${a.title} — ${a.medium}" loading="lazy">
      <div class="art-overlay">
        <h3>${a.title}</h3>
        <p>${a.medium} · ${a.size}</p>
      </div>
    </article>
  `).join("");
}

function openArtwork(id) {
  const a = artworks.find(x => x.id === Number(id));
  if (!a || !modal) return;
  document.getElementById("modalImage").src = a.image;
  document.getElementById("modalImage").alt = a.title;
  document.getElementById("modalMedium").textContent = a.medium;
  document.getElementById("modalTitle").textContent = a.title;
  document.getElementById("modalDescription").textContent = a.description;
  document.getElementById("modalSize").textContent = a.size;
  document.getElementById("modalYear").textContent = a.year;
  document.getElementById("modalStatus").textContent = a.status;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

document.addEventListener("click", e => {
  const card = e.target.closest(".art-card");
  if (card) openArtwork(card.dataset.id);
  if (e.target.matches(".modal") || e.target.matches(".modal-close")) closeModal();
  const filter = e.target.closest(".filter");
  if (filter) {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    document.querySelectorAll(`.filter[data-filter="${CSS.escape(filter.dataset.filter)}"]`).forEach(b => b.classList.add("active"));
    renderGallery(filter.dataset.filter);
  }
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
  if ((e.key === "Enter" || e.key === " ") && e.target.matches(".art-card")) {
    e.preventDefault();
    openArtwork(e.target.dataset.id);
  }
});

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav?.classList.remove("open")));

document.getElementById("year")?.append(new Date().getFullYear());
renderGallery();
