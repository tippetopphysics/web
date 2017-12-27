

// LLISTA DE PROJECTES I TAL
function ProjectElement(name,tipo,id,desc,extra,banner){
  this.name = name;
  this.tipo = tipo;
  this.id = id;
  this.desc = desc;
  this.extra = extra;
  this.banner = banner;

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
        var repro = $(this.extra.clico);
        res.append(repro);
        break;
      case "eitb":
        w = 70;
        h = (44/70.0)*w;
        res.css({"width": w +"vw","height": h +"vw"});
        var repro = $(this.extra.clico);
        res.append(repro);
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

    ildivo.append(ladesc);
    $(".latabla").append(ildivo);

    ildivo.click(function(){
      //Creem ara un div mazo gran
      var backdrop = $("<div class='backdrop'></div>");
      var cosika = proyo.doClicks();
      backdrop.append(cosika);

      backdrop.click(function(){
        $(this).hide(500,function(){
          $(this).remove();
        });
      });

      backdrop.children().on("click",function(event){
        event.evtStopPropagation();
      });
      $("BODY").append(backdrop);
      backdrop.show(500);
    })
  }
}

function loadProjects(pagina){
  var projectibus;
  switch (pagina) {
    case "tippetop":
        projectibus = [
          new ProjectElement("Errores, Eratóstenes y Viceversa",
          "youtube","uRQ01RiKJYA",
          "En pleno siglo XXI hay peña que todavía duda que la Tierra sea redonda. Eratóstenes lo calculó con una miaja de geometría hace 2000 años. Resumen: Eratóstenes es bastante puto amo. Además, hablamos sobre qué hacemos cuando hay errores a la hora de medir.",
          {"disp": "pano"}),
          new ProjectElement("ANTARES - Cazaneutrinos",
          "youtube","PFoUF4jl07s",
          "NEUTRINOS: ¿Qué son? ¿Por qué nos empeñamos en detectarlos? Este vídeo lo hicimos para el VI concurso de divulgación CPAN. No ganamos, pero ¿y lo bien que nos lo pasamos haciéndolo?",
          {"disp": "pano"}),
          new ProjectElement("<span class='fa fa-music'></span>Relatividad<span class='fa fa-music'></span>",
          "youtube","ffX3uFBphmE",
          "Aprovechamos el 100º aniversario de la confirmación experimental de la Relatividad General de Einstein para cantar un ratico a ritmo de La Oreja de Van Gogh, ¡y de paso explicar algo de cencia!",
          {"disp": "pano"}),
          new ProjectElement("Física de la Cocina",
          "youtube","VUlu2SgNYRI",
          "¿Cómo funciona una olla exprés? ¿Y una nevera? ¿Y un microondas? En nuestro último para el concurso ESTIC 2013/14 nos metemos en la cocina para investigar cómo funcionan esos aparatejos.",
          {"disp": "pano"}),
          new ProjectElement("Momento Lineal",
          "youtube","V44hpwIX8vk",
          "A todes nos hace mucha más gracia que nos atropelle una mosca que que nos atropelle un tren, pero ¿por qué? Pues por la conservación del momento lineal. Dedícale un momento a este vídeo y échale un vistazo.",
          {"disp": "pano"}),
          new ProjectElement("Efecto Doppler",
          "youtube","OxtH4o8KlcY",
          "¡Nuestro primer vídeo! ¡Mira que éramos jóveneees! Madre mía cómo pasa el tiempo. Te explicamos qué tienen que ver las ambulancias con la expansión del universo, y no, no es una pregunta retórica.",
          {"disp": "pano"})
        ];
      break;

      case "gastrofisica":
          projectibus = [
            new ProjectElement("La óptica de una clara de huevo",
            "youtube","PywBvGEIa8c",
            "La óptica mola un huevo, y los huevos hay que verlos para creerlos. En este vídeo de Gastrofísica, le echamos un vistazo a la óptica tras el punto de nieve, que no es poca.",
            {"disp": "pano"}),
            new ProjectElement("Baño María",
            "youtube","ushxfqlK3WQ",
            "¿Para qué sirve el baño María? ¿Cómo funciona? ¿Por qué se llama así? ¡Tantas preguntas y tan poco tiempo! Por suerte, las respondemos TODAS en menos de 4 minutos.",
            {"disp": "pano"}),
            new ProjectElement("Caramelo",
            "youtube","J2Vkv5GQXww",
            "¿A qué temperatura se funde el azúcar? ¿Cómo se forma el caramelo? Hay preguntas sobre este material tan delicioso que la ciencia aún es incapaz de responder. Por suerte, siempre nos lo podemos comer.",
            {"disp": "pano"})
          ];
        break;

        case "colabos":
            projectibus = [
              new ProjectElement("Órbita Laika 46: Sara Escudero - Orden",
              "tve","www.rtve.es/alacarta/videos/orbita-laika/orbita-laika-sara-escudero-orden/4361638/",
              "¡Nuestro Arcadi sale en un programa de Órbita Laika! ¡En la tele! Sólo cinco minutitos, ¡pero qué cinco minutitos!",
              {"disp": "pano",
              "clico": '<div style="width:100%;padding-top:64%;position:relative;border-bottom:1px solid #aaa;display:inline-block;background:none;"><iframe frameborder="0" src="http://www.rtve.es/drmn/embed/video/4361638" name="Programa 9: Sara Escudero - Orden" scrolling="no" style="width:100%;height:100%;position:absolute;left:0;top:0;overflow:hidden;" allowfullscreen></iframe> </div>'}),

              new ProjectElement("Órbita Laika - Science Truck con Sarah Nichols",
              "youtube","oXzUwhBpsG8",
              "La entrevista completa que le hizo la siempre espléndida Sarah Nichols a nuestro Arcadi en Órbita Laika. ¡20 minutos de CENCIA y tonterías!",
              {"disp": "pano"}),

              new ProjectElement("PIMPCIPIO INACTIVO - #homeopatia",
              "youtube","mlvj7C9f-Ls",
              "El MARAVILLOSO Y SEXI <a href='https://www.youtube.com/channel/UCd3RNj3Rb6hpVDbG_L9YZ3g' target='_blank'>El Físico Barbudo</a> ha creado esta MASTERPIS de trap homeopático, con el cameo de gente EXTUPENDA, incluyendo nuestro propio Arcadi.",
              {"disp": "pano"}),

              new ProjectElement("Scenio Bilbao 2017: Sesión Youtuber",
              "eitb","notengojajajaja",
              "Scenio Bilbao 2017 fue el primer gran evento de nuevos formatos divulgativos en español, y nuestro Arcadi fue a representar a Tippe Top participando en un par de actividades en la sesión youtuber. ¡A disfrutar!",
              {"disp": "pano",
                "clico": '<iframe style="width:100%;height:100%" scrolling="no" src="http://www.eitb.eus/es/get/multimedia/screenview/id/5086550/tipo/videos/" frameBorder="0" allowfullscreen></iframe>'}),

              new ProjectElement("¿Sabes más Física que un estudiante de MIR? feat. Psiqetal",
              "youtube","IuvYUPqAm5Q",
              "Tras el test al que Dani Orts (<a href='https://www.youtube.com/channel/UCbEAy9mnH2YReAHR0SLdJ0Q' target='_blank'>Psiquiatría et al.</a>) sometió a Arcadi en su canal, tocaba reciprocar, y sometimos a Dani a nuestro propio test físico para comprobar cuánto sabía de Física.",
              {"disp": "pano"}),

              new ProjectElement("¡Test Cruzado! ¿Cuánto sabe de Psiquiatría un Físico? ft. Arcadi",
              "youtube","XWJz3fDWyUg",
              "Nuestro Arcadi se somete a un test para comprobar cuánto sabe de Psiquiatría en el canal <a href='https://www.youtube.com/channel/UCbEAy9mnH2YReAHR0SLdJ0Q' target='_blank'>Psiquiatría et al.</a>, con <s>eróticos</s> sorprendentes resultados.",
              {"disp": "pano"})
            ];
          break;
    default:
      console.log("Never gonna give you uuupppp");
  }

  for(i in projectibus){
    projectibus[i].creaDiv();
  }
}
