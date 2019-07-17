/*ESERCIZIO:
Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.*/


$(document).ready(function(){

  // // cliccando sull'icona hamburger si apre il menù
  // $(".header-right > a").click(function() {
  //   $(".hamburger-menu").show();
  //   // $(".hamburger-menu").addClass("active");
  // });
  //
  // // cliccando sulla X si chiude il menù
  // $(".close").click(function() {
  //   $(".hamburger-menu").hide();
  //   // $(".hamburger-menu").removeClass("active");
  // });


  // METODO ALTERNATIVO PER RESPONSIVE
  // cliccando sull'icona hamburger si apre il menù e quando allargo il browser
  // oltre un certo viewport il menù hamburger scompare automaticamente
  $(".header-right > a").click(function() {
    $(".hamburger-menu").addClass("active");
  });

  // cliccando sulla X si chiude il menù
  $(".close").click(function() {
    $(".hamburger-menu").removeClass("active");
  });

});
