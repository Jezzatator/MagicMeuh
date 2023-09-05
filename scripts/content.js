// lis et modifie le contenue d'une page

const page = document.querySelectorAll("h1, h2, h3, h4, p, li, td, caption, span, a, ol, ul, i, b")

if (page) {
    for (let i=0; i < page.length; i++) {
        //Pour charque insulte dans list_insultes 
        //if (page[i].innerHTML.includes(insulte)) {
        //    page[i].innerHTML = page[i].innerHTML.replace(insulte, "meuuuh")
        //}

        //Pour charque insulte dans list_insultes 
        // changer insulte en Insulte
        //if (page[i].innerHTML.includes(Insulte)) {
        //    page[i].innerHTML = page[i].innerHTML.replace(Insulte, "meuuuh")
        //}

        //Pour charque insulte dans list_insultes 
        // changer insulte en INSULTE
        //if (page[i].innerHTML.includes(INSULTE)) {
        //    page[i].innerHTML = page[i].innerHTML.replace(INSULTE, "meuuuh")
        //}

        //inclure plurieul
        //si entre ou joint à un caractère , " " ' 


        if (page[i].innerHTML.includes("connard")) {
            page[i].innerHTML = page[i].innerHTML.replace("connard", "meuuuh")
        }
        if (page[i].innerHTML.includes("Connard")) {
            page[i].innerHTML = page[i].innerHTML.replace("Connard", "meuuuh")
        }
        if (page[i].innerHTML.includes("CONNARD")) {
            page[i].innerHTML = page[i].innerHTML.replace("CONNARD", "meuuuh")
        }
        if (page[i].innerHTML.includes("conard")) {
            page[i].innerHTML = page[i].innerHTML.replace("conard", "meuuuh")
        }
        if (page[i].innerHTML.includes("con")) {
            page[i].innerHTML = page[i].innerHTML.replace(/\bcon\b/g, "meuuuh")
        }
    }
}