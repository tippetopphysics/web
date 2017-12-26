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

  proyes = $(".tablement");
  $(".tablement").css("width",w0-10+"px");

  //Passem ara a calcular l'altura.
  for(var i=0; i<proyes.length; i=i+n){
    //obtenim els N divs de la fila
    var extremis = Math.min(i+n,proyes.length);
    var fila = proyes.slice(i,extremis);
    var maxis = 0;
    for(var j=0; j<fila.length; j++){
      var elem = fila.eq(j);
      if(elem.height()>maxis){
        maxis = elem.height();
      }
    }
    for(var j=0; j<fila.length; j++){
      var elem = fila.eq(j);
      elem.css({"height": maxis + "px"});
    }
  }
}

responsiveProjects();
