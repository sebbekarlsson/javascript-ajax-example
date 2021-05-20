// Sparar URL till sidan vi vill anropa.
const URL = "https://cat-fact.herokuapp.com/facts";         // detta hander forst. (1)

function showFactsOnScreen(factArray) {                     // sedan defineras denna, men kors inte (2)
    // hamtar vi <ul> listan i varat HTML dokument
    const ulList = document.getElementById("fact-list");    // (7)

    // loopar vi igenom "factArray", detta ar arrayen vi fick tillbaka fran
    // "https://cat-fact.herokuapp.com/facts".
    // Det ar en array med objekt.

                                                            // (8)
    factArray.forEach(function(fact){ // jag vill i loopen att varje objekt ska kallas for "fact"   

        // Jag skapar en <li> tagg
        const liTag = document.createElement("li");         // (arrayens langd + 9)
        // Satter jag texten i <li> taggen till fact.text
        // (fact.text ar ett varde som finns pa varje objekt)
        liTag.innerText = fact.text;                        // (arrayens langd + 10)

        // Jag stoppar in <li> taggen
        // i min <ul> som jag hamtade tidigare.
        // Detta gors ju i en loop, darfor skapas ju flera <li> taggar.

        ulList.appendChild(liTag);                          // (arrayens langd + 11)
    });

    // Sista steget, nu ar hela programmet slut.            Hela programmet ar fardigt.
}

// nar requesten till sidan ar fardig
function whenRequestFinished(response) {                    // sedan defineras denna, men kors inte (3)

    // ber vi webblasaren att ladda in datan,
    // genom att skicka med "showFactsOnScreen".
    response.json().then(showFactsOnScreen);                // denna kallar pa showFactsOnScreen (6)
}

// anropet till sidan
fetch(URL).then(whenRequestFinished);                       // sedan kors denna (4)
                                                            // denna kallar pa whenRequestFinished (5)


// har ar koden fardig.