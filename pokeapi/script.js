function buscar() {
  var texto = document.getElementById("searchInput").value;
  var caja = document.getElementById("result");

  if (texto === "") {
    caja.innerHTML =
      '<div class="col-12 text-center"><p class="text-danger">Escribe un nombre</p></div>';
    return;
  }

  caja.innerHTML = '<div class="col-12 text-center"><p>Buscando...</p></div>';

  fetch("https://pokeapi.co/api/v2/pokemon/" + texto)
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      var contenido = "";

      contenido = contenido + '<div class="col-12 col-md-6">';
      contenido = contenido + '<div class="card text-center h-100">';
      contenido = contenido + '<div class="card-body">';
      contenido =
        contenido +
        '<img src="' +
        datos.sprites.front_default +
        '" width="150">';
      contenido = contenido + "<h3>" + datos.name + "</h3>";
      contenido = contenido + "<p><b>ID:</b> " + datos.id + "</p>";
      contenido =
        contenido + "<p><b>Tipo:</b> " + datos.types[0].type.name + "</p>";
      contenido =
        contenido + "<p><b>HP:</b> " + datos.stats[0].base_stat + "</p>";
      contenido =
        contenido + "<p><b>Ataque:</b> " + datos.stats[1].base_stat + "</p>";
      contenido =
        contenido + "<p><b>Defensa:</b> " + datos.stats[2].base_stat + "</p>";
      contenido =
        contenido + "<p><b>Velocidad:</b> " + datos.stats[5].base_stat + "</p>";
      contenido =
        contenido + "<p><b>Altura:</b> " + datos.height / 10 + " m</p>";
      contenido =
        contenido + "<p><b>Peso:</b> " + datos.weight / 10 + " kg</p>";
      contenido = contenido + "</div></div></div>";

      caja.innerHTML = contenido;
    })
    .catch(function () {
      caja.innerHTML =
        '<div class="col-12 text-center"><p class="text-danger">No encontrado</p></div>';
    });
}

document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      buscar();
    }
  });
