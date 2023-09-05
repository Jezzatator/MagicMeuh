const fetchInsutls = async () => {
    // Fetch pour récupéré le fichier JSON
    try {
        const response = await fetch("https://fr.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais&cmlimit=max&format=json");

// Verifie si la réponse est OK - code HTTP 200
        if (!response.ok) {
            throw new Error("La requête a échoué avec un code HTTP ${response.status}");
        }

        const data = await response.json();

        if (data.query && Array.isArray(data.query.categorymembers)) {
            const titleArray = data.query.categorymembers.map(member => member.title);
            //console.log("titleArray :" + titleArray)
            localStorage.setItem('Insultes', JSON.stringify(titleArray));

        } else {
            console.error("le JSON ne contient pas la strucure attendu.");
        }
    } catch(error) {
        console.error("une erreur s\'est produite lors de la récupération du JSON :", error)
    }
}

const insultes = () => {
    if (!(localStorage.getItem("Insultes"))) {
        fetchInsutls()
        return insultes()
    } else {
        return JSON.parse(localStorage.getItem("Insultes"))
    }
}


console.log(insultes())


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
      //Foreache INSULT/INSULTS/insults/Insult/Insults
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