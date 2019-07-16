/*ESERCIZIO:
Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.*/


$(document).ready(function(){

  // cliccando sull'icona hamburger si apre il menù
  $(".header-right > a").click(function() {
    $(".hamburger-menu").show();
  });

  // cliccando sulla X si chiude il menù
  $(".close").click(function() {
    $(".hamburger-menu").hide();
  });

});
