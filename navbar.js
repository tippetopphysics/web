function responsiveNavbar() {
  var h = $("#navul").css("height");
  var pa = $("li a").css("padding-top");
  $("#cont").css({top: h});
  $("#logo-ph").attr("src","imgs/logotippetop.png");

  //treballar amb valors numèrics
  h = h.slice(0,h.length-2);

  pa = pa.slice(0,pa.length-2)/2;
  $("#logo-ph").css({"height": (h-2*pa) + "px"});
  pa = pa-4;
  $("li a[href='index.html']").css({"padding-top": pa+3+"px",
  "padding-bottom": pa+"px"});
}
