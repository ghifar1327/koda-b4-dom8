const container = document.querySelector(".container");
const search = document.getElementById("search");
container.setAttribute(
  "class",
  "grid grid-rows-10 grid-cols-2 gap-4 md:grid md:grid-rows-5 md:grid-cols-4 md:gap-3"
);
let characters = [];

async function main() {
  const req = await fetch("https://rickandmortyapi.com/api/character");
  const data = await req.json();
  characters = data.results;
  show(characters);
}

function show(list) {
  container.innerHTML = "";
  list.forEach((char) => {
    const card = document.createElement("div");
    card.setAttribute(
      "class",
      "border-2 border-black rounded-3xl flex flex-col items-center"
    );
    const name = document.createElement("div");
    name.setAttribute("class", "text-base text-center");
    const img = document.createElement("img");
    img.setAttribute("src", `${char.image}`);
    img.setAttribute("class", "rounded-3xl m-0");
    name.textContent = char.name;
    card.append(img, name);
    container.append(card);
  });
}
search.addEventListener("input", () => {
  const keyword = search.value.toLowerCase();
  const filtered = characters.filter((text) =>
    text.name.toLowerCase().includes(keyword)
  );
  show(filtered);
});

main();
