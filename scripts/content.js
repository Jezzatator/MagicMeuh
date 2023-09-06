// const fetchInsutls = async () => {
//     // Fetch pour récupéré le fichier JSON
//     try {
//         const response = await fetch("https://fr.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais&cmlimit=max&format=json", {
//           mode: "no-cors"
//         });

//     // Verifie si la réponse est OK - code HTTP 200
//         if (!response.ok) {
//             throw new Error("La requête a échoué avec un code HTTP ${response.status}");
//         }

//         const data = await response.json();

//         if (data.query && Array.isArray(data.query.categorymembers)) {
//             const titleArray = data.query.categorymembers.map(member => member.title);
//             //console.log("titleArray :" + titleArray)
//             localStorage.setItem('Insultes', JSON.stringify(titleArray));

//         } else {
//             console.error("le JSON ne contient pas la strucure attendu.");
//         }
//     } catch(error) {
//         console.error("une erreur s\'est produite lors de la récupération du JSON :", error);
//         return ""; 
//     }
// }

// const insultes = () => {
//     if (!(localStorage.getItem("Insultes"))) {
//       fetchInsutls()
//         return insultes()
//     } else {
//         return JSON.parse(localStorage.getItem("Insultes"))
//     }
//   }


const insultes = ['abruti', 'aller chier dans sa caisse', 'aller niquer sa mère', 'aller se faire enculer', 'aller se faire endauffer', 'aller se faire foutre', 'aller se faire mettre', 'allez vous faire foutre', 'andouille', 'anglo-fou', 'appareilleuse', 'Arabe', 'assimilé', 'assimilée', 'astèque', 'avorton', 'bachi-bouzouk', 'baleine', 'bande d’abrutis', 'baraki', 'bâtard', 'baudet', 'beauf', 'bellicole', 'bête', 'bête à pleurer', 'bête comme ses pieds', 'bête comme un camion', 'bête comme un chou', 'bête comme un cochon', 'bête comme un cygne', 'bête comme une oie', 'biatch', 'bibi', 'bic', 'bicot', 'bicotte', 'bique', 'bite', 'bitembois', 'Bitembois', 'bolos', 'bordille', 'boucaque', 'boudin', 'bouègre', 'bouffi', 'bouffon', 'bouffonne', 'bougnoul', 'bougnoule', 'Bougnoulie', 'bougnoulisation', 'bougnouliser', 'bougre', 'boukak', 'boulet', 'bounioul', 'bounioule', 'bourdille', 'bourrer', 'bourricot', 'bovo', 'branleur', 'bridé', 'bridée', 'brigand', 'brise-burnes', 'bulot', 'cacou', 'cafre', 'cageot', 'caldoche', 'carcavel', 'casse-bonbon', 'casse-couille', 'casse-couilles', 'cave', 'chagasse', 'charlot de vogue', 'charogne', 'chauffard', 'chauffeur', 'chauffeuse', 'chbeb', 'cheveux bleus', 'chiabrena', 'chien de chrétien', 'chiennasse', 'chienne', 'chier', 'chieur', 'chieuse', 'chinetoc', 'chinetoque', 'Chinetoque', 'chintok', 'chleuh', 'chnoque', 'choucroutard']

// console.log(insultes()[i])
console.log(insultes)


// Fonction pour remplacer un mot spécifique 

// D'abord cherche les balises à exclures
function isExcluded(elm) {
    if (elm.tagName == "STYLE") {
      return true;
    }
    if (elm.tagName == "SCRIPT") {
      return true;
    }
    if (elm.tagName == "NOSCRIPT") {
      return true;
    }
    if (elm.tagName == "IFRAME") {
      return true;
    }
    if (elm.tagName == "OBJECT") {
      return true;
    }
    return false
  }
  
  function traverse(elm) {
    if (elm.nodeType == Node.ELEMENT_NODE || elm.nodeType == Node.DOCUMENT_NODE) {
  
      // exclude elements with invisible text nodes
      if (isExcluded(elm)) {
        return
      }
  
      for (var i=0; i < elm.childNodes.length; i++) {
        // recursively call to traverse
        traverse(elm.childNodes[i]);
      }
  
    }
  
    //Si cela trouve une bonne balsie texte alors on fait le happy path
    if (elm.nodeType == Node.TEXT_NODE) {
  
      // exclude text node consisting of only spaces
      if (elm.nodeValue.trim() == "") {
        return
      }
  
//ici le code pour remplacer les mots

      //Foreach insult 
      
      elm.nodeValue = elm.nodeValue.replace(/\bcon\b/g, "MEUH");

    }
  }
  
  traverse(document);

  // Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        traverse(mutation.target);
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(document, config);