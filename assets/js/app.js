define(['jquery'], function ($) {
  let characters = [];

  $(".container").attr(
    "class",
    "container grid grid-rows-10 grid-cols-2 gap-4 md:grid md:grid-rows-5 md:grid-cols-4 md:gap-3"
  );

  function main() {
    $.getJSON("https://rickandmortyapi.com/api/character", function (data) {
      characters = data.results;
      show(characters);
    });
  }

  function show(list) {
    $(".container").empty();
    $.each(list, function (_, char) {
      const $card = $("<div>")
        .addClass("border-2 border-black rounded-3xl flex flex-col items-center");
      const $name = $("<div>")
        .addClass("text-base text-center")
        .text(char.name);
      const $img = $("<img>")
        .attr("src", char.image)
        .addClass("rounded-3xl m-0");
      $card.append($img, $name);
      $(".container").append($card);
    });
  }

  $("#search").on("input", function () {
    const keyword = $(this).val().toLowerCase();
    const filtered = $.grep(characters, function (c) {
      return c.name.toLowerCase().indexOf(keyword) !== -1;
    });
    show(filtered);
  });

return  {main}
});
