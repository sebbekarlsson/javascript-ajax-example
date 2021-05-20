const setText = (text, el) => { el.innerText = text; return el; };

// hamta all data, men bara printa varje objekt.text
fetch("https://cat-fact.herokuapp.com/facts") // anropa URL
    .then((res) => res.json()               // gor om till JSON (data vi kan anvanda, har ar den en array)
    .then((data) => data.map(fact => setText(fact.text, document.createElement("li")))
    .forEach(el => document.getElementById("fact-list").appendChild(el))));      // printa ut i consolen.