const main = () => {
  chrome.storage.local.get(['Insultes']).then((insultes) => {

    const insultesArray = insultes.Insultes

    // Creation table de hachage 
    const motRemplacement = {};

    for (let i = 0; i < insultesArray.length; i++) {
      motRemplacement[insultesArray[i]] = "MEUH";
    }

    console.log(motRemplacement)

    // Fonction pour remplacer un mot spécifique 

    // D'abord cherche les balises à exclures (ne comptient pas de textes visibles)
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

        // Exclus les balises avec du texte invisible
        if (isExcluded(elm)) {
          return
        }

        for (let i = 0; i < elm.childNodes.length; i++) {
          // Appel recursif de traverse (permet de vefifier dans les enfants s'il y a pas de balises a exclures)
          traverse(elm.childNodes[i]);
        }

      }

      // Si cela trouve une bonne balsie texte alors on fait le happy path
      if (elm.nodeType == Node.TEXT_NODE) {

        //Exclus les textes nodes composés seulement d'espaces blancs 
        if (elm.nodeValue.trim() == "") {
          return
        }

        // Sépare les mots du text 
        const motsDansTexte = elm.nodeValue.split(/[,. ]+/);

        // Parcourez les mots et remplacez-les s'ils sont dans la table de hachage
        for (let i = 0; i < motsDansTexte.length; i++) {
          const mot = motsDansTexte[i].toLowerCase();

          // Vérifiez si le mot est dans la table de hachage
          if (motRemplacement.hasOwnProperty(mot)) {
            motsDansTexte[i] = motRemplacement[mot]; // Remplacez le mot par "MEUH"
          }
        }

        // Rejoignez les mots pour obtenir le texte final
        elm.nodeValue = motsDansTexte.join(" ");
      }
    }



    traverse(document);

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = function (mutationsList, observer) {
      // Use traditional 'for loops' for IE 11
      for (const mutation of mutationsList) {
        traverse(mutation.target);

      }
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(document, config);
  })
  .catch
}

main()


