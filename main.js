// Sparar URL till sidan vi vill anropa.
const URL = "https://cat-fact.herokuapp.com/facts";

function showFactsOnScreen(factArray) {
    // hamtar vi <ul> listan i varat HTML dokument
    const ulList = document.getElementById("fact-list");

    // loopar vi igenom "factArray", detta ar arrayen vi fick tillbaka fran
    // "https://cat-fact.herokuapp.com/facts".
    // Det ar en array med objekt.
    factArray.forEach(function(fact){ // jag vill i loopen att varje objekt ska kallas for "fact"

        // Jag skapar en <li> tagg
        const liTag = document.createElement("li");
        // Satter jag texten i <li> taggen till fact.text
        // (fact.text ar ett varde som finns pa varje objekt)
        liTag.innerText = fact.text;

        // Jag stoppar in <li> taggen
        // i min <ul> som jag hamtade tidigare.
        // Detta gors ju i en loop, darfor skapas ju flera <li> taggar.
        ulList.appendChild(liTag);
    });
}

// nar requesten till sidan ar fardig
function whenRequestFinished(response) {

    // ber vi webblasaren att ladda in datan,
    // genom att skicka med "showFactsOnScreen".
    response.json().then(showFactsOnScreen);
}

// anropet till sidan
fetch(URL).then(whenRequestFinished);