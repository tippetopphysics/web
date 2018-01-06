function responsiveProjects(){
  var miwi = 400.0;
  var proyes = $(".tablement:first-child");

  //Càlcul de l'ample del div i del nº de columnes que hem de tenir
  var mag = proyes.css("margin-left");
  mag = Number(mag.slice(0,mag.length-2));

  var wid = $(".latabla").css("width");
  wid = Number(wid.slice(0,wid.length-2));

  var n = Math.round(wid/(miwi+2*mag));
  var w0 = wid/n - 2*mag;
  if (n<1){
    n = 1;
    w0 = miwi;
  }

  proyes = $(".tablement");
  $(".tablement").css("width",w0-10+"px");

  //Passem ara a calcular l'altura.
  for(var i=0; i<proyes.length; i=i+n){
    //obtenim els N divs de la fila
    var extremis = Math.min(i+n,proyes.length);
    var fila = proyes.slice(i,extremis);
    var maxis = 490;
    for(var j=0; j<fila.length; j++){
      var elem = fila.eq(j);
      if(elem.height()>maxis){
        maxis = elem.get(0).scrollHeight;
      }
    }
    for(var j=0; j<fila.length; j++){
      var elem = fila.eq(j);
      elem.css({"height": maxis + "px"});
    }
  }

  //Ja que estem, reposicionem l'engranatge del próximamente:
  var wid = $("#prox span").width();
  var h = $("#prox .desc").height();
  h = (maxis-h)/2;
  wid = (w0-wid)/2;
  $("#prox span").css({
    "margin-left": wid + "px",
    "margin-right": wid + "px"
  });

  $("#prox .desc").css({
    "margin-top": h + "px",
    "margin-bottom": h + "px"
  });
}

responsiveProjects();
