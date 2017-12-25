/* SCROLLBAR */

$("#members").mCustomScrollbar({
  scrollbarPosition: "outside",
  scrollInertia: 250,
  mouseWheel: {enable: true},
  contentTouchScroll: 0,
  documentTouchScroll: true,
  scrollButtons: {
    enable: true,
    scrollType: "stepped",
    scrollAmount: 300
  },
  keyboard: {
    enable: true,
    scrollType: "stepped",
    scrollAmount: 300
  }
});

/* COLORS DE LA PENYA I TAL */
var penya = ["mimi","jojo","andrea","arcadi","patri"];
for(var i=0; i<penya.length; i++){
  var st = penya[i];
  $("#"+st).css({
    "background-color": "var(--"+st+"-bg)"
  });

  $("#"+st+" h1").css({
    "color": "var(--"+st+"-text1)"
  });

  $("#"+st+" h2, #"+st+" h2 a").css({
    "color": "var(--"+st+"-text2)"
  });

  $("#"+st+" .desc").css({
    "background-color": "var(--"+st+"-bg2)"
  });

  $("#"+st+" .desc p").css({
    "color": "var(--"+st+"-text3)"
  });
}
