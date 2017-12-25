function responsiveNavbar() {
  //posicionar logo
  var h = $("#navul .gente a")[0].getBoundingClientRect().height;
  var pa = $("#navul li a").css("padding-top");
  //afegir logo
  $("#logo-ph").attr("src","imgs/logotippetop.png");
  pa = Number(pa.slice(0,pa.length-2));

  var x = 4;
  $("#logo-ph").css({"height": h-pa + "px",
    "margin-top": -x + "px"});
  $("#logo-ph").parent().css({"padding-top": pa/2.0+x + "px",
    "padding-bottom": pa/2.0-x + "px"});

  //posicionar la resta de la pàgina
  h = $("#navul")[0].getBoundingClientRect().height;
  $("#cont").css({"top": h-2*pa + "px"});
}
