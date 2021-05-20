
// hamta all data och printa all data
fetch("https://cat-fact.herokuapp.com/facts") // anropa URL
    .then((res) => res.json()               // gor om till JSON (data vi kan anvanda, har ar den en array)
    .then((data) => console.log(data)));      // printa ut i consolen.*/


// hamta all data, men bara printa varje objekt.text
fetch("https://cat-fact.herokuapp.com/facts") // anropa URL
    .then((res) => res.json()               // gor om till JSON (data vi kan anvanda, har ar den en array)
    .then((data) => data.forEach(fact => console.log(fact.text))));      // printa ut i consolen.