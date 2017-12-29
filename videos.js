// LLISTA DE PROJECTES I TAL
function ProjectElement(proyectus){
  this.name = proyectus.name;
  this.tipo = proyectus.tipo;
  this.id = proyectus.id;
  this.desc = proyectus.desc;
  this.extra = proyectus.extra;
  this.banner = proyectus.banner;

  //Crea el div per a quan es clica en el div de la web
  this.doClicks = function() {
    var res, w, h;
    res = $("<div id='inda'></div>");
    var wid = $(window).width();
    var hei = $(window).height();

    switch (this.tipo) {
      //si és un video de youtube, posem un reproductor de YT
      case "youtube":
        w = 80;
        h = (9/16.0)*w;
        var repro = $('<iframe></iframe>');
        repro.attr({
          "width": "100%",
          "height": "100%",
          "src": "https://www.youtube.com/embed/" + this.id +"?playsinline=1",
          "frameborder": "0",
          "allowfullscreen": "true",
        });

        res.css({"width": w +"vw","height": h +"vw"});

        res.append(repro);
        break;

      case "tve":
        w = 70;
        h = (9/16.0)*w;
        res.css({"width": w +"vw","height": h +"vw"});
        var daddy = $("<div style='width:100%;padding-top:64%;position:relative;border-bottom:1px solid #aaa;display:inline-block;background:none;'></div>");
        var repro = $('<iframe></iframe>');
        repro.attr({
          "id": this.tipo,
          "name": this.name,
          "scrolling": "no",
          "allowfullscreen": "true",
          "src": "util/redirect.html?where="+"http://www.rtve.es/drmn/embed/video/"+ this.id,
          "frameborder": "0"
        });

        daddy.append(repro);
        console.log(daddy);
        res.append(daddy);
        break;

      case "eitb":
        w = 70;
        h = (44/70.0)*w;
        res.css({"width": w +"vw","height": h +"vw"});
        var repro = $('<iframe></iframe>');
        repro.attr({
          "id": this.tipo,
          "width": "100%",
          "height": "100%",
          "scrolling": "no",
          "frameBorder": "0",
          "allowfullscreen": "true",
          "src": "util/redirect.html?"+"where=http://www.eitb.eus/es/get/multimedia/screenview/id/"+ this.id + "/tipo/videos/"
        });
        res.append(repro);
        break;

      case "prensa":
        w = 80;
        h = (9/16.0)*w;

        res.css({"width": w +"vw","height": h +"vw",
          "background-color": "white", "overflow": "hidden",
           "padding-top": "10px", "padding-bottom": "10px",
           "padding-left": "10px","padding-right": "10px"});

        res.attr("class","artikel");

        //TRANSCRIPCIÓ
          var transcript = $("<div id='transcript'></div>");
          //afegim titular, subtítol, autor i data
          transcript.append("<h1>"+this.extra.titular+"</h1>");
          transcript.append("<h2>"+this.extra.subtitulo+"</h2>");
          transcript.append("<h3>"+this.extra.rubrica+"</h3>");
          transcript.append("<h4>"+this.extra.fecha+"</h4>");

          //text complet
          var textus = this.extra.texto.split("\n");
          var imagos = this.extra.imatges.length;
          var elems = 0;
          for(i in textus){
            if(i == elems*textus.length/imagos){
              var nuimg = $("<div class='transcimg'></div>");
              nuimg.append("<img src='" + this.extra.imatges[elems]+"'>");
              nuimg.append("<p>"+this.extra.peus[elems]+"</p>");
              elems++;
              transcript.append(nuimg);
            }
            transcript.append("<p>"+textus[i]+"</p>");
          }

        //TEXT COMPLET
        if(this.extra.showtype != "mono"){
          var original = $("<div id='original' style='display: none'></div>");
          var lector;
          switch (this.extra.alternate) {
            case "pdf":
              lector = $("<object></object>");
              lector.attr({
                "width": "100%",
                "height": "100%",
                "type": "application/pdf",
                "data" : this.id
              });
              lector.append("<p>¡Hola! Parece que no se puede mostrar el PDF original. ¿Has considerado leer la transcripción?");
              break;
            default:
              lector = $("<p> Holaaaaa </p>");
          }

          original.append(lector);
        }

        switch (this.extra.showtype) {
          case "dual":
            //afegim el mecanisme de toggle
            var warnung = $("<div id='warnung'></div>");
            warnung.append("<h1>Estás leyendo una transcripción</h1>");
            var opti = $("<h2 id='transc'>Haz clic aquí para ver el artículo original</h2>");

            opti.click(function(e){
              var target = $(event.target);
              var divid = target.attr("id");
              switch (divid) {
                case "transc":
                  $("#warnung h1").html("Estás viendo el artículo original");
                  $("#warnung h2").html("Haz clic aquí para leer una transcripción.");
                  $("#transc").attr("id","origin");
                  $("#transcript").hide();
                  $("#original").show();
                  break;
                case "origin":
                  $("#warnung h1").html("Estás leyendo una transcripción");
                  $("#warnung h2").html("Haz clic aquí para ver el artículo original.");
                  $("#origin").attr("id","transc");
                  $("#transcript").show();
                  $("#original").hide();
                  break;
                default:
                  console.log("¡Hola! Soy el gestor transcripción-original. Algo ha ido muuuuy muy mal.");
              }
            });

            warnung.append(opti);
            res.append(warnung);

            transcript.css({
              "margin-left": "10px",
              "margin-right": "10px",
              "box-shadow": "box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5)"
            });

            res.append(original);
          default:
            res.append(transcript);
        }
        break;
      default:
        res.css({"background-color": "white","padding-left": "2vw",
          "padding-right": "2vw","padding-top": "2vw","padding-bottom": "2vw",});
        res.append("<p style='text-align: center; margin: auto'>Pa ke kieres saber eso jaja salu2.</p>");

        w = 30;
        h = 10;

        res.css({"width": w +"vw","height": h +"vh"});
    }

    var medio = $("<div id='medio'></div>");
    medio.append(res);
    return medio;
  }

  //Crea el div per a la web
  this.creaDiv = function() {
    var proyo = this;
    var ildivo = $("<div class='tablement'></div>");
    var baneo;
    //per al banner, si el ProjectElement és un vídeo de youtube, farem un embed del vídeo a no ser que s'aporte una imatge nova
    if(this.banner === undefined){
      //haurem de vore què fem si no ens dónen imatge
      switch(this.tipo){
        case "youtube":
          baneo = $("<img class='projban'>");
          baneo.attr({
            "src": "http://i3.ytimg.com/vi/"+this.id+"/maxresdefault.jpg",
            "width": "100%"
          });
          break;
        default:
          baneo = $("<img class='projban'>");
          baneo.attr({"src": "imgs/placeholder.png",
          "width": "100%"});
      }
    } else {
      baneo = $("<img class='projban'>");
      baneo.attr("src",this.banner);
    }
    ildivo.append(baneo);

    //i ara, a per la descripció
    var ladesc = $("<div class='desc'></div>");
    ladesc.append("<h2>"+this.name+"</h2>");
    ladesc.append("<p>"+this.desc+"</p>");

    var barra = $("<div class='deco'></div>");

    ildivo.append(ladesc);
    ildivo.append(barra);
    $(".latabla").append(ildivo);

    ildivo.click(function(){
      //Creem ara un div mazo gran
      var fondo = $("<div class='fondukus'></div>");
      var backdrop = $("<div class='backdrop'></div>");
      var cosika = proyo.doClicks();
      backdrop.append(cosika);

      backdrop.click(function(e){
        var target = $(e.target);
        var papis = target.parents();
        var hideme = true;
        for(i in papis){
          if(papis.eq(i).attr("id")=="inda"){
            hideme = false;
          }
        }
        if(hideme){
          $(this).hide(500,function(){
            $(this).remove();
          });
        }
      });
      $("BODY").append(backdrop);
      backdrop.show(500);
    })
  }
}

function loadProjects(pagina){
  $.getJSON("proyectos/"+pagina+".json", function(data){
    for(i in data){
      var ele = new ProjectElement(data[i]);
      ele.creaDiv();
    }
    responsiveProjects();
  });
}
