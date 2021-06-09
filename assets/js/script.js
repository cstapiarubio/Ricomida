//tooltip section receta principal
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

//toggle texto de recetas
$( ".cards h5" ).click(function() {
  $( ".card-text" ).toggle();
});

//alerta del boton "enviar por correo"
$( "#correo" ).click(function() {
    alert("El correo fue enviado correctamente");
  });

  //cambiar color de titulo h4 en seccion de receta
  $( "h4" ).on( "dblclick", function() {
    $(this).css({'color':'red'});
  });

  //carousel

  $('.carousel').carousel()
