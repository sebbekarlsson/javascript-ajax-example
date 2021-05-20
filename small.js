fetch("https://cat-fact.herokuapp.com/facts").then(() => response.json().then((factArray) => {
    const ulList = document.getElementById("fact-list");

    factArray.forEach((fact) => {
        const liTag = document.createElement("li");
        liTag.innerText = fact.text;
        ulList.appendChild(liTag);
    });
}));