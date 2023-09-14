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
    const blockURLSCheckbox = document.getElementById('block-urls');

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


// document.addEventListener('DOMContentLoaded', function() {
//     const blockUrlsCheckbox = document.getElementById('block-urls');

//     // Chargement de l'état de l'URL filter depuis le stockage
//     chrome.storage.sync.get(['blockUrls'], function(result) {
//         blockUrlsCheckbox.checked = result.blockUrls || false;

//     });

//     // Enregistrement de l'état de l'URL filter lorsque la case à cocher change
//     blockUrlsCheckbox.addEventListener('change', function() {
//         const blockUrls = blockUrlsCheckbox.checked;

//         // Stockage de l'état de l'URL filter dans le stockage de l'extension
//         chrome.storage.sync.set({ blockUrls }, function() {
//             console.log('URL Filter activé :', blockUrls);
//         });
//     });
// });


//     blockUrls.addEventListener('change', function() {
//         const blockUrls = blockURlsCheckbox.checked;
//     chrome.storage.sync.get(['block-urls'], function(result) {
//         blockInsultsCheckbox.checked = result.blockInsults || false;
//         async function getjson(){
//             const reponse = await fetch("http://127.0.0.1:5500/manifest.json")
//             const data = await Response.json()
//             const objJson = JSON.parse(data) ;
//             console.log(objJson[ "declarative_net_request" ]["rule_resources" ])

//         }
//     });
// })


// document.addEventListener('DOMContentLoaded', function() {
//     const paymentRulesCheckbox = document.getElementById('payment-rules-checkbox');
//     const rsRulesCheckbox = document.getElementById('rs-rules-checkbox');

//     // Chargement de l'état des règles depuis le stockage
//     chrome.storage.sync.get(['ruleset_Payment', 'ruleset_RS'], function(result) {
//         paymentRulesCheckbox.checked = result.ruleset_Payment || false;
//         rsRulesCheckbox.checked = result.ruleset_RS || false;
//     });

//     // Enregistrement de l'état des règles lorsque les cases à cocher changent
//     paymentRulesCheckbox.addEventListener('change', function() {
//         const paymentRules = paymentRulesCheckbox.checked;

//         // Stockage de l'état des règles dans le stockage de l'extension
//         chrome.storage.sync.set({ ruleset_Payment: paymentRules }, function() {
//             console.log('Règles de paiement activées :', paymentRules);
//         });
//     });

//     rsRulesCheckbox.addEventListener('change', function() {
//         const rsRules = rsRulesCheckbox.checked;

//         // Stockage de l'état des règles dans le stockage de l'extension
//         chrome.storage.sync.set({ ruleset_RS: rsRules }, function() {
//             console.log('Règles RS activées :', rsRules);
//         });
//     });
// });

// Activer declarative_net_request
// document.getElementById("activateFacebookBlock").addEventListener("click", function() {
//     chrome.runtime.sendMessage({ action: "activateFacebookBlock" });
//   });
  
//   document.getElementById("deactivateFacebookBlock").addEventListener("click", function() {
//     chrome.runtime.sendMessage({ action: "deactivateFacebookBlock" });
//   });
  
  









