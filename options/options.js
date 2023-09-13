document.addEventListener('DOMContentLoaded', function() {
    const blockInsultsCheckbox = document.getElementById('block-insults');

    // Chargement de l'état de l'option depuis le stockage
    chrome.storage.sync.get(['blockInsults'], function(result) {
        blockInsultsCheckbox.checked = result.blockInsults || false;
    });

    // Enregistrement de l'état de l'option lorsque la case à cocher change
    blockInsultsCheckbox.addEventListener('change', function() {
        const blockInsults = blockInsultsCheckbox.checked;

        // Stockage de l'état de l'option dans le stockage de l'extension
        chrome.storage.sync.set({ blockInsults }, function() {
            console.log('Blocage des insultes :', blockInsults);
        });
    });
});
chrome.storage.local.get(['Insultes', 'blockInsults'], function(data) {
    const insultesArray = data.Insultes;
    const blockInsults = data.blockInsults || false; // Récupérez l'état de l'option depuis le stockage

    if (blockInsults) {
        // Si l'option "Bloquer les insultes" est activée, appliquez le blocage des insultes
        const motRemplacement = {};

        // ... (le reste de votre code pour le blocage des insultes) ...
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const blockUrlsCheckbox = document.getElementById('block-urls');

    // Chargement de l'état de l'URL filter depuis le stockage
    chrome.storage.sync.get(['blockUrls'], function(result) {
        blockUrlsCheckbox.checked = result.blockUrls || false;
    });

    // Enregistrement de l'état de l'URL filter lorsque la case à cocher change
    blockUrlsCheckbox.addEventListener('change', function() {
        const blockUrls = blockUrlsCheckbox.checked;

        // Stockage de l'état de l'URL filter dans le stockage de l'extension
        chrome.storage.sync.set({ blockUrls }, function() {
            console.log('URL Filter activé :', blockUrls);
        });
    });
});



