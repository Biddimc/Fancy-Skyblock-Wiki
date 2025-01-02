const canvas = document.getElementById("mapCanvas");
const ctx = canvas.getContext("2d");
const tooltip = document.getElementById("tooltip");

// Canvas-Größe
canvas.width = 800;
canvas.height = 600;

// Kartenbilder
const hubImage = new Image();
const farmhouseImage = new Image();
hubImage.src = "hub.png"; // Hauptkarte
farmhouseImage.src = "farmhouse.png"; // Zoomed Map

// Modus: "Hub" oder "Farmhouse"
let currentMode = "Hub";

// Klickbare Regionen
const hubRegions = [
    { x: 400, y: 300, radius: 50, label: "Hub - Region 1", nextMap: "Farmhouse" },
    { x: 200, y: 150, radius: 30, label: "Hub - Region 2", nextMap: "Farmhouse" },
    { x: 600, y: 400, radius: 40, label: "Hub - Region 3", nextMap: "Farmhouse" },
];

const farmhouseRegions = [
    { x: 150, y: 200, radius: 40, label: "Farmhouse - Detailpunkt A", nextMap: "Hub" },
    { x: 500, y: 300, radius: 50, label: "Farmhouse - Detailpunkt B", nextMap: "Hub" },
    { x: 350, y: 400, radius: 30, label: "Farmhouse - Detailpunkt C", nextMap: "Hub" },
];

// Aktive Regionen basierend auf Modus
function getActiveRegions() {
    return currentMode === "Hub" ? hubRegions : farmhouseRegions;
}

// Hauptkarte zeichnen
hubImage.onload = () => {
    drawHub();
};

function drawHub() {
    currentMode = "Hub";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(hubImage, 0, 0, canvas.width, canvas.height);
}

// Zoom-Karte zeichnen
function drawFarmhouse() {
    currentMode = "Farmhouse";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    farmhouseImage.onload = () => {
        ctx.drawImage(farmhouseImage, 0, 0, canvas.width, canvas.height);
    };
    ctx.drawImage(farmhouseImage, 0, 0, canvas.width, canvas.height);
}

// Funktion: Prüfen, ob Maus in einer Region ist
function getHoveredRegion(x, y) {
    const regions = getActiveRegions();
    return regions.find(region => {
        const distance = Math.sqrt((x - region.x) ** 2 + (y - region.y) ** 2);
        return distance <= region.radius;
    });
}

// Mausbewegung-Event (Hover-Effekt)
canvas.addEventListener("mousemove", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const hoveredRegion = getHoveredRegion(mouseX, mouseY);
    if (hoveredRegion) {
        tooltip.textContent = hoveredRegion.label;
        tooltip.style.left = `${event.clientX + 10}px`;
        tooltip.style.top = `${event.clientY + 10}px`;
        tooltip.classList.remove("hidden");
    } else {
        tooltip.classList.add("hidden");
    }
});

// Klick-Event (Aktionen)
canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const clickedRegion = getHoveredRegion(mouseX, mouseY);
    if (clickedRegion) {
        // Wechsel zur nächsten Karte basierend auf der Region
        if (clickedRegion.nextMap === "Farmhouse") {
            drawFarmhouse(); // Wechsle zur Farmhouse-Karte
        } else if (clickedRegion.nextMap === "Hub") {
            drawHub(); // Wechsle zur Hub-Karte
        }
    }
});
