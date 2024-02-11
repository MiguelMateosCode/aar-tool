var filtroSelect = document.getElementById("filtro");
var filas = document.querySelectorAll("table tr");

// Función para contar elementos por filtro
function contarElementosPorFiltro(filtro) {
  var count = 0;
  for (var i = 1; i < filas.length; i++) {
    var celda = filas[i].getElementsByTagName("td")[2];
    if (celda) {
      var texto = celda.textContent || celda.innerText;
      if (filtro === "" || texto === filtro) {
        count++;
      }
    }
  }
  return count;
}

// Actualizar opciones del filtro con conteo
function actualizarOpcionesFiltro() {
  var opciones = filtroSelect.getElementsByTagName("option");
  for (var i = 0; i < opciones.length; i++) {
    var filtro = opciones[i].value;
    var count = contarElementosPorFiltro(filtro);
    opciones[i].textContent =
      filtro === ""
        ? "All Issue type (" + count + ")"
        : filtro + " (" + count + ")";
  }
}

// Función para actualizar los números en las tarjetas
function actualizarNumerosTarjetas() {
  var violationsNumber = document.getElementById("violationsNumber");
  var needsreviewNumber = document.getElementById("needsreviewNumber");
  var recommendationNumber = document.getElementById("recommendationNumber");
  var allNumber = document.getElementById("allNumber");

  violationsNumber.textContent = contarElementosPorFiltro("Violation");
  needsreviewNumber.textContent = contarElementosPorFiltro("Needs review");
  recommendationNumber.textContent = contarElementosPorFiltro("Recommendation");
  allNumber.textContent = contarElementosPorFiltro("");
}

// Llenar el filtro inicialmente
actualizarOpcionesFiltro();

// Llenar los números de las tarjetas inicialmente
actualizarNumerosTarjetas();

// Función para aplicar el filtro
filtroSelect.addEventListener("change", function () {
  var filtro = this.value;
  var tabla = document.querySelector("table");

  for (var i = 1; i < filas.length; i++) {
    var celda = filas[i].getElementsByTagName("td")[2];
    if (celda) {
      var texto = celda.textContent || celda.innerText;
      if (filtro === "" || texto === filtro) {
        filas[i].style.display = "";
      } else {
        filas[i].style.display = "none";
      }
    }
  }

  // Actualizar los números en las tarjetas después de aplicar el filtro
  actualizarNumerosTarjetas();
});

//////////////
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.back-link').forEach(function(element) {
        element.addEventListener('click', function(event) {
            // Prevenir el comportamiento predeterminado para no navegar
            event.preventDefault();

            // Copiar el href del enlace al portapapeles
            var hrefToCopy = this.getAttribute('href');
            navigator.clipboard.writeText(hrefToCopy).then(function() {
                // Opcional: Mostrar alguna notificación de que el href fue copiado
                console.log('Href copiado al portapapeles: ' + hrefToCopy);
                
                // Cambiar temporalmente el texto y el ícono del enlace para indicar éxito
                element.innerHTML = '<i class="fas fa-check icon-check-success"></i> ¡Enlace copiado al portapapeles!';

                // Volver al estado original después de 2 segundos
                setTimeout(function() {
                    element.innerHTML = '<i class="far fa-copy text-black"></i> Copy to clipboard';
                }, 2000);
            }).catch(function(error) {
                console.error('Error al copiar el href: ', error);
            });
        });
    });
});
