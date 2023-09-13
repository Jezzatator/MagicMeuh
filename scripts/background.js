// chrome.runtime.onInstalled.addListener(() => {
//   chrome.declarativeNetRequest.updateDynamicRules({
//     addRules: [
//       {
//         id: "cleanbrowsing-dns-rule",
//         priority: 1,
//         action: {
//           type: "modifyHeaders",
//           requestHeaders: [
//             { name: "Host", value: "185.228.168.168" } // IPv4
//           ]
//         },
//         condition: {
//           regexFilter: ".*"
//         }
//       }
//     ]
//   });
// });

chrome.runtime.onInstalled.addListener(() => {

  chrome.declarativeNetRequest.updateDynamicRules({
    addRules: [
      {
        id: "cleanbrowsing-dns-rule",
        priority: 1,
        action: {
          type: "modifyHeaders",
          requestHeaders: [
            { name: "Host", value: "185.228.168.168" } // IPv4
          ]
        },
        condition: {
          regexFilter: ".*"
        }
      }
    ]
  });

  chrome.storage.local.get(null, function (items) {

    if (Object.keys(items).length === 0) {


      const fetchInsutls = async () => {
        // Fetch pour récupérer le fichier JSON
        try {
          const response = await fetch("https://fr.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais&cmlimit=max&format=json");

          // Verifie si la réponse est OK - code HTTP 200
          if (!response.ok) {
            throw new Error("La requête a échoué avec un code HTTP ${response.status}");
          }

          const data = await response.json();

          // Verifie si le JSON est conforme à la structure attendue
          if (data.query && Array.isArray(data.query.categorymembers)) {
            const titleArray = data.query.categorymembers.map(member => member.title);
            console.log("titleArray :" + titleArray)

            // Stock le tableau dans le chrome storage avec la clef "Insultes"
            chrome.storage.local.set({ Insultes: titleArray }).then(() => {
              console.log("Value is set");
            });

          } else {
            console.error("le JSON ne contient pas la strucure attendu.");
          }
        } catch (error) {
          console.error("une erreur s\'est produite lors de la récupération du JSON :", error);
          return "";
        }
      }

      fetchInsutls()
    }
  })

});