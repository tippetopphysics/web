/* COLORS DE LA PENYA I TAL */
var penya = ["mimi","jojo","andrea","arcadi","patri"];
for(i in penya){
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

/* JA QUE ESTEM, fem que les descripcions tinguen totes la mateixa mida */
var tutti = $(".miembro .desc");
var maxis = 0;
for(i=0; i<tutti.length; i++){
  var desco = tutti.eq(i);
  var siz = desco.css("height");
  siz = parseInt(siz.slice(0,siz.length-2));

  if (siz > maxis){
    maxis = siz;
  }
}

for(i in tutti){
  tutti.eq(i).css("height",maxis.toString()+"px");
}

/* clicks */
$("#members").click(function(e){
  console.log(e.target);
});
