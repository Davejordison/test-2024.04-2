import data from "./data.js";

const root = document.querySelector("#root");

function main() {
  const section = document.createElement("section");

  const flatList = document.createElement("div");
  flatList.className = "flat-list";

  const block = document.createElement("div");
  block.className = "flat-list__title";

  const h1 = document.createElement("h1");
  h1.innerText = "Clean Code Principles";

  root.append(section);
  section.append(flatList);
  flatList.append(block);
  block.append(h1);

  for (const el of data) {
    let card = document.createElement("div");
    card.className = "card";

    let cardTitle = document.createElement("div");
    cardTitle.className = "card__title";
    cardTitle.textContent = el.title;

    let cardBody = document.createElement("div");
    cardBody.className = "card__body";
    cardBody.textContent = el.description;

    card.append(cardTitle, cardBody);
    //cardBody.append(cardTitle);
    root.append(card);
  }
}
//root.append(main);
//console.log(data);

main();
