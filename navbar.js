function responsiveNavbar() {
  //afegir logo
  $("#logo-ph").attr("src","imgs/logotippetop.png");

  //posicionar logo
  var h = $("#navul .gente a")[0].getBoundingClientRect().height;
  var pa = $("#navul li a").css("padding-top");
  pa = Number(pa.slice(0,pa.length-2));
  $("#logo-ph").offset().top = 0;

  $("#logo-ph").css({"height": h-pa + "px"});
  $("#logo-ph").parent().css({"padding-top": pa/2.0+2 + "px",
    "padding-bottom": pa/2.0-2 + "px"});

  //posicionar la resta de la pàgina
  h = $("#navul")[0].getBoundingClientRect().height;
  $("#cont").css({"top": h-2*pa + "px"});
}
