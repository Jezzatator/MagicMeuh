export const fetchInsutls = async () => {
    const response = await fetch("https://fr.wiktionary.org/w/api.php?action=query&list=categorymembers&cmtitle=Cat%C3%A9gorie:Insultes_en_fran%C3%A7ais&cmlimit=max&format=json");
    const responseDec = await response.json();
    const insults = responseDec.query.categorymembers
    return insults
}