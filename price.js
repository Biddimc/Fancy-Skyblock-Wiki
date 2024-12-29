(async function fetchCheapestBINs() {
    const loadingDiv = document.getElementById('loading');
    const pricesDiv = document.getElementById('prices');

    // Ladeindikator einblenden
    loadingDiv.style.display = 'block';

    // Versuche, Preise aus dem localStorage zu laden
    const storedPrices = JSON.parse(localStorage.getItem('cheapestBins')) || {};

    // Wenn Preise im localStorage existieren, diese anzeigen
    if (Object.keys(storedPrices).length > 0) {
        updatePrices(storedPrices);
    }

    try {
        const cheapestBins = {}; // Speichert die günstigste BIN für jedes Item

        // Daten von allen Seiten abrufen
        let page = 0;
        let totalPages = 1;

        while (page < totalPages) {
            const response = await fetch(`https://api.hypixel.net/skyblock/auctions?page=${page}`);
            const data = await response.json();

            totalPages = data.totalPages;

            // BIN-Auktionen filtern und die günstigste für jedes Item finden
            data.auctions
                .filter(auction => auction.bin === true) // Nur BIN-Auktionen
                .forEach(auction => {
                    const itemName = auction.item_name;

                    // Wenn das Item noch nicht vorhanden ist oder diese Auktion günstiger ist, aktualisiere den Eintrag
                    if (
                        !cheapestBins[itemName] ||
                        auction.starting_bid < cheapestBins[itemName].starting_bid
                    ) {
                        cheapestBins[itemName] = auction.starting_bid;
                    }
                });

            page++;
        }

        // Preise aktualisieren und speichern
        updatePrices(cheapestBins);
        localStorage.setItem('cheapestBins', JSON.stringify(cheapestBins));

    } catch (error) {
        alert('Fehler beim Abrufen der Daten.');
    } finally {
        // Ladeindikator ausblenden
        loadingDiv.style.display = 'none';
    }

    /**
     * Aktualisiert die Preise in den entsprechenden <span>-Elementen.
     * @param {Object} prices - Ein Objekt mit den günstigsten BIN-Preisen.
     */
    function updatePrices(prices) {
        Object.entries(prices).forEach(([itemName, price]) => {
            const sanitizedItemName = itemName.replace(/\s+/g, '_'); // Leerzeichen durch Unterstriche ersetzen
            const spanId = `${sanitizedItemName}_price`;

            const priceSpan = document.getElementById(spanId);
            if (priceSpan) {
                // Existierendes <span> aktualisieren
                priceSpan.textContent = `${price.toLocaleString()} Coins`;
            }
        });
    }
})();
