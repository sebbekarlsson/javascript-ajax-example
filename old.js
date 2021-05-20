const URL = "https://cat-fact.herokuapp.com/facts";

function showFactsOnScreen(factArray) {
    const ulList = document.getElementById("fact-list");

    factArray.forEach(function(fact){ // jag vill i loopen att varje objekt ska kallas for "fact"

        const liTag = document.createElement("li");
        liTag.innerText = fact.text;
        ulList.appendChild(liTag);
    });
}

/**
 * Varan egna fetch funktion
 * 
 * Denna tar in 2 argument:
 * 
 * 1. URL till sidan vi vill anropa
 * 2. en funktion som skall koras nar anropet ar klart
 */
function myFetch(url, whenDone) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        // har kollar vi om requesten gick bra.
        // Far vi tillbaka status koden "200" sa ar allt OK.
        if (this.readyState == 4 && this.status == 200) {
            var myArr = JSON.parse(this.responseText); // gor om till JSON eller Javascript data
            whenDone(myArr); // kalla pa funktionen som skall koras nar allt ar klart
        }
    };

    xmlhttp.open("GET", url, true); // bestam vart vi vill gora requesten
    xmlhttp.send(); // gor requesten
}

myFetch(URL, showFactsOnScreen);