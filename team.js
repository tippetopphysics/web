LIMGRAN = 750;

function rearrangeTeam(evt){
  var tab = document.getElementById("Equipo");

  var h = window.innerHeight - document.getElementsByClassName("tab")[0].offsetHeight;
  var w = window.innerWidth;
  membres = tab.getElementsByClassName("miembro");

  for(i=0; i<4; i++){
    padh = 12;
    padv = 6;

    if(w>LIMGRAN){
      membres[i].style.height=(h-2*padv)+"px";
      membres[i].style.width= (w/4-2*padh)+"px";

      membres[i].style.left = i*w/4 + "px";
    } else {
      membres[i].style.height=(h/2-2*padv)+"px";
      membres[i].style.width=(w/2-2*padh)+"px";

      if(i>=2){
        membres[i].style.bottom="0px";
      } else {
        membres[i].style.top = document.getElementsByClassName("tab")[0].offsetHeight+"px";
      }

      if((i%2)!=0){
        membres[i].style.left=membres[i].offsetWidth+"px";
      } else {
        membres[i].style.left = "0px";
      }
    }

    membres[i].style.padding=padv+"px "+padh+"px "+padv+"px "+padh+"px";
  }
}

rearrangeTeam();
