const URL = "https://cat-fact.herokuapp.com/facts";

function showFactsOnScreen(factArray) {
    const ulList = document.getElementById("fact-list");

    factArray.forEach(function(fact){

        const liTag = document.createElement("li");
        liTag.innerText = fact.text;

        ulList.appendChild(liTag);
    });
}


function whenRequestFinished(response) {
    response.json().then(showFactsOnScreen);
}


fetch(URL).then(whenRequestFinished);