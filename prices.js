// Zeige Ladeanimation
document.querySelectorAll('span[id$="_price"]').forEach(span => {
    span.textContent = 'Wird geladen...';
});

// Hypixel API URL
const API_URL = 'https://api.hypixel.net/skyblock/auctions?page=0';

// Lokale Daten aus `localStorage` abrufen
const storedPrices = JSON.parse(localStorage.getItem('cheapestBins')) || {};

// Aktualisiere Preise aus lokal gespeicherten Daten
function updatePricesFromLocalStorage() {
    console.log("Lese gespeicherte Preise aus localStorage:", storedPrices);
    document.querySelectorAll('span[id$="_price"]').forEach(span => {
        const itemId = span.id.replace('_price', ''); // ID des Items aus der Span-ID extrahieren
        const price = storedPrices[itemId];
        if (price) {
            console.log(`Preis gefunden für ${itemId}: ${price} Coins`);
            span.textContent = `${price.toLocaleString()} Coins`; // Preis anzeigen
        } else {
            console.log(`Kein Preis verfügbar für ${itemId}`);
            span.textContent = 'Kein Preis verfügbar'; // Standardtext anzeigen
        }
    });
}

// Lade neue Daten von der API und speichere sie in `localStorage`
async function fetchAndUpdatePrices() {
    try {
        console.log("Sende Anfrage an Hypixel API:", API_URL);
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log("Antwort von Hypixel API erhalten:", data);

        if (data.success) {
            const cheapestBins = {};

            // Finde die günstigsten BIN-Auktionen
            data.auctions.forEach(auction => {
                if (auction.bin) {
                    const itemId = auction.item_id; // Hypixel Item-ID verwenden
                    if (!cheapestBins[itemId] || auction.starting_bid < cheapestBins[itemId]) {
                        cheapestBins[itemId] = auction.starting_bid;
                        console.log(`Neuer günstigster Preis für ${itemId}: ${auction.starting_bid} Coins`);
                    }
                }
            });

            console.log("Günstigste Preise für Items:", cheapestBins);

            // Speichere Preise in `localStorage`
            localStorage.setItem('cheapestBins', JSON.stringify(cheapestBins));

            // Aktualisiere die Preise in der HTML
            updatePricesFromLocalStorage();
        } else {
            console.error("API-Fehler:", data);
        }
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
        // Zeige "Kein Preis verfügbar" bei Fehlern
        document.querySelectorAll('span[id$="_price"]').forEach(span => {
            span.textContent = 'Kein Preis verfügbar';
        });
    }
}

// Preise aus dem Speicher anzeigen
updatePricesFromLocalStorage();

// Daten nur abrufen, wenn keine gespeicherten Daten vorhanden sind
if (Object.keys(storedPrices).length === 0) {
    fetchAndUpdatePrices();
}
