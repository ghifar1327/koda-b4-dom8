const container = document.querySelector(".container");
      const search = document.getElementById("search");
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
            const name = document.createElement("div");
            const img = document.createElement("img");
            img.setAttribute("src", `${char.image}`);
            name.textContent = char.name;
            card.append(img, name);
            container.append(card);
        });
      }
      search.addEventListener("input", () => {
        const keyword = search.value.toLowerCase();
        const filtered = characters.filter((c) =>
          c.name.toLowerCase().includes(keyword)
        );
        show(filtered);
      });

      main();