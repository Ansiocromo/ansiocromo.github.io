

var a = [0,1,2,3,4,5,6,7,8,9,10],

    p = 10, //metà passo tra due età
    s = 44, //Altezza tra valori

    SaC = [],
    InC = [],
    LaC = [],
    SoC = [],

    eta = [],

    SaCurv = [], //array codice per generare la curva bezier in svg
    InCurv = [], //array codice per generare la curva bezier in svg
    LaCurv = [], //array codice per generare la curva bezier in svg
    SoCurv = []; //array codice per generare la curva bezier in svg


    first = true;
    block = false;


// //Prende randomicamente i valori della array a (per far le prove)
//  for (var i=0;i<89;i++) {
//    Sa.push(Math.floor(Math.random()*a.length))
//    In.push(Math.floor(Math.random()*a.length))
//    La.push(Math.floor(Math.random()*a.length))
//    So.push(Math.floor(Math.random()*a.length))
//  }

// console.log(arrEtaSaluteGlob)


// drawGraphGlob=setInterval(function() {chackServerReadyGlob()},1000)


// function chackServerReadyGlob() {
function getGlobali() {
  var p = 10, //metà passo tra due età
      s = 44; //Altezza tra valori

//crea la array SaCurv con dentro tutte le specifche per costruire la curva di bezier
for (var i=0;i<89;i++) {
  if (i==0) {SaCurv.push('M '+35.7+' '+ (492-(arrEtaSaluteGlob[i]*s)) +' C '+(p+35.7)+' '+ (492-(arrEtaSaluteGlob[i]*s)) +', '+ (p+35.7) +' '+ (492-(arrEtaSaluteGlob[i+1]*s)) +', '+((2*p)+35.7)+' '+(492-(arrEtaSaluteGlob[i+1]*s)))}
  else {SaCurv.push(' C '+(i*(2*p)+p+35.7)+' '+ (492-(arrEtaSaluteGlob[i]*s)) +', '+ (i*(2*p)+p+35.7) +' '+ (492-(arrEtaSaluteGlob[i+1]*s)) +', '+(i*(2*p)+(2*p)+35.7)+' '+(492-(arrEtaSaluteGlob[i+1]*s)))}
}

for (var i=0;i<89;i++) {
  if (i==0) {InCurv.push('M '+35.7+' '+ (492-(arrEtaIndividualeGlob[i]*s)) +' C '+(p+35.7)+' '+ (492-(arrEtaIndividualeGlob[i]*s)) +', '+ (p+35.7) +' '+ (492-(arrEtaIndividualeGlob[i+1]*s)) +', '+((2*p)+35.7)+' '+(492-(arrEtaIndividualeGlob[i+1]*s)))}
  else {InCurv.push(' C '+(i*(2*p)+p+35.7)+' '+ (492-(arrEtaIndividualeGlob[i]*s)) +', '+ (i*(2*p)+p+35.7) +' '+ (492-(arrEtaIndividualeGlob[i+1]*s)) +', '+(i*(2*p)+(2*p)+35.7)+' '+(492-(arrEtaIndividualeGlob[i+1]*s)))}
}

for (var i=0;i<89;i++) {
  if (i==0) {LaCurv.push('M '+35.7+' '+ (492-(arrEtaLavoroGlob[i]*s)) +' C '+(p+35.7)+' '+ (492-(arrEtaLavoroGlob[i]*s)) +', '+ (p+35.7) +' '+ (492-(arrEtaLavoroGlob[i+1]*s)) +', '+((2*p)+35.7)+' '+(492-(arrEtaLavoroGlob[i+1]*s)))}
  else {LaCurv.push(' C '+(i*(2*p)+p+35.7)+' '+ (492-(arrEtaLavoroGlob[i]*s)) +', '+ (i*(2*p)+p+35.7) +' '+ (492-(arrEtaLavoroGlob[i+1]*s)) +', '+(i*(2*p)+(2*p)+35.7)+' '+(492-(arrEtaLavoroGlob[i+1]*s)))}
}

for (var i=0;i<89;i++) {
  if (i==0) {SoCurv.push('M '+35.7+' '+ (492-(arrEtaSocietaGlob[i]*s)) +' C '+(p+35.7)+' '+ (492-(arrEtaSocietaGlob[i]*s)) +', '+ (p+35.7) +' '+ (492-(arrEtaSocietaGlob[i+1]*s)) +', '+((2*p)+35.7)+' '+(492-(arrEtaSocietaGlob[i+1]*s)))}
  else {SoCurv.push(' C '+(i*(2*p)+p+35.7)+' '+ (492-(arrEtaSocietaGlob[i]*s)) +', '+ (i*(2*p)+p+35.7) +' '+ (492-(arrEtaSocietaGlob[i+1]*s)) +', '+(i*(2*p)+(2*p)+35.7)+' '+(492-(arrEtaSocietaGlob[i+1]*s)))}
}

//aggiusta la array in modo che sia compatibile da più browser
SaCurv.pop();
InCurv.pop();
LaCurv.pop();
SoCurv.pop();

SaCurv = SaCurv.join('');
InCurv = InCurv.join('');
LaCurv = LaCurv.join('');
SoCurv = SoCurv.join('');

// console.log(SaCurv);

//disegna i grafici (appena si apre la pagina)
createAgeDisplay();
createGraphSa();
createGraphSo();
createGraphIn();
createGraphLa();

// clearInterval(drawGraphGlob);
}
// }


//crea le cureve all'interno del tag svg sotto l'id graph.
function createGraphSa() { document.getElementById('graph').outerHTML += '<path class="graphSa" d="'+SaCurv+' V 570  H 35.7  Z" stroke-width="1" fill="url(#gradSa)" onclick="toch()" onmouseenter="popGraphSa()" onmouseout="popAll()"/>'; }
function createGraphIn() { document.getElementById('graph').outerHTML += '<path class="graphIn" d="'+InCurv+' V 570  H 35.7  Z" stroke-width="1" fill="url(#gradIn)" onclick="toch()" onmouseenter="popGraphIn()" onmouseout="popAll()"/>';  }
function createGraphLa() { document.getElementById('graph').outerHTML += '<path class="graphLa" d="'+LaCurv+' V 570  H 35.7  Z" stroke-width="1" fill="url(#gradLa)" onclick="toch()" onmouseenter="popGraphLa()" onmouseout="popAll()"/>'; }
function createGraphSo() { document.getElementById('graph').outerHTML += '<path class="graphSo" d="'+SoCurv+' V 570  H 35.7  Z" stroke-width="1" fill="url(#gradSo)" onclick="toch()" onmouseenter="popGraphSo()" onmouseout="popAll()"/>';  }

//crea le cureve "gemelle ma con il colore grigio"
function createGraphSaGray() { document.getElementById('graph').outerHTML += '<path class="graphSaGray" d="'+SaCurv+'  V 570  H 35.7  Z" stroke-width="1" fill="rgb(239, 247, 249)" />'; }
function createGraphInGray() { document.getElementById('graph').outerHTML += '<path class="graphInGray" d="'+InCurv+'  V 570  H 35.7  Z" stroke-width="1" fill="rgb(239, 247, 249)" />';  }
function createGraphLaGray() { document.getElementById('graph').outerHTML += '<path class="graphLaGray" d="'+LaCurv+'  V 570  H 35.7  Z" stroke-width="1" fill="rgb(239, 247, 249)" />'; }
function createGraphSoGray() { document.getElementById('graph').outerHTML += '<path class="graphSoGray" d="'+SoCurv+'  V 570  H 35.7  Z" stroke-width="1" fill="rgb(239, 247, 249)" />';  }

//Puliscie (cancella) le curve dal svg
function clearGraphs() {
  if (document.getElementsByClassName('graphSa').length > 0) {document.getElementsByClassName('graphSa')[0].parentNode.removeChild(document.getElementsByClassName('graphSa')[0]);}
  if (document.getElementsByClassName('graphIn').length > 0) {document.getElementsByClassName('graphIn')[0].parentNode.removeChild(document.getElementsByClassName('graphIn')[0]);}
  if (document.getElementsByClassName('graphLa').length > 0) {document.getElementsByClassName('graphLa')[0].parentNode.removeChild(document.getElementsByClassName('graphLa')[0]);}
  if (document.getElementsByClassName('graphSo').length > 0) {document.getElementsByClassName('graphSo')[0].parentNode.removeChild(document.getElementsByClassName('graphSo')[0]);}


  if (document.getElementsByClassName('graphSaGray').length > 0) {document.getElementsByClassName('graphSaGray')[0].parentNode.removeChild(document.getElementsByClassName('graphSaGray')[0]);}
  if (document.getElementsByClassName('graphInGray').length > 0) {document.getElementsByClassName('graphInGray')[0].parentNode.removeChild(document.getElementsByClassName('graphInGray')[0]);}
  if (document.getElementsByClassName('graphLaGray').length > 0) {document.getElementsByClassName('graphLaGray')[0].parentNode.removeChild(document.getElementsByClassName('graphLaGray')[0]);}
  if (document.getElementsByClassName('graphSoGray').length > 0) {document.getElementsByClassName('graphSoGray')[0].parentNode.removeChild(document.getElementsByClassName('graphSoGray')[0]);}

}

//Crea è sposta l'indicatore età:
function createAgeDisplay() {

    document.getElementById('graph').outerHTML += '<circle id="axisPointSa" onclick="toch()" onmouseenter="popGraphSa()" onmouseout="popAll()" cx="'+(35.7+((p*2)*(eta-12)))+'" cy="'+(492-(Sa*44))+'" r="6" stroke="#808080" fill="#E6E6E6" />';
    document.getElementById('graph').outerHTML += '<circle id="axisPointIn" onclick="toch()" onmouseenter="popGraphIn()" onmouseout="popAll()" cx="'+(35.7+((p*2)*(eta-12)))+'" cy="'+(492-(In*44))+'" r="6" stroke="#808080" fill="#E6E6E6" />';
    document.getElementById('graph').outerHTML += '<circle id="axisPointLa" onclick="toch()" onmouseenter="popGraphLa()" onmouseout="popAll()" cx="'+(35.7+((p*2)*(eta-12)))+'" cy="'+(492-(La*44))+'" r="6" stroke="#808080" fill="#E6E6E6" />';
    document.getElementById('graph').outerHTML += '<circle id="axisPointSo" onclick="toch()" onmouseenter="popGraphSo()" onmouseout="popAll()"  cx="'+(35.7+((p*2)*(eta-12)))+'" cy="'+(492-(So*44))+'" r="6" stroke="#808080" fill="#E6E6E6" />';

    document.getElementById('graph').outerHTML += '<line x1="'+(35.7+((p*2)*(eta-12)))+'" y1="544" x2="'+(35.7+((p*2)*(eta-12)))+'" y2="36" style="stroke:#808080; stroke-width:2.5" />';
    document.getElementById('graph').outerHTML += '<circle cx="'+(35.7+((p*2)*(eta-12)))+'" cy="32" r="5.4" fill="#808080" />';
    if (eta==100) {document.getElementById('graph').outerHTML += '<text transform="matrix(1 0 0 1 '+(-74.3+((p*2)*(eta-12)))+' 36)" opacity="0.55" fill="#333333" font-family="GT-America-Bold" font-size="18px">le tue ansie</text>';}
    else {document.getElementById('graph').outerHTML += '<text transform="matrix(1 0 0 1 '+(50.7+((p*2)*(eta-12)))+' 32)" opacity="0.55" fill="#333333" font-family="GT-America-Bold" font-size="18px">le tue ansie</text>';}
}


function toch() {block = !block; console.log()}

//funzione che viene chiamata quando il mouse va sopra al grafico coripondente, (porta il grafico in primo piano e fa divenrare grigi gli altri)
function popGraphSa() {
  if (first==true) {
  clearGraphs()

  document.getElementById("axisPointSa").setAttribute("stroke-width",2)
  document.getElementById("axisPointSa").setAttribute("r",9)
  document.getElementById("axisPointSa").style = "fill-opacity:1;"
  document.getElementById("axisPointSa").style = "stroke-opacity:1;"
  document.getElementById("axisPointSa").setAttribute("stroke","#EF0A56")
  document.getElementById("axisPointSa").style = "fill:#F784AA;"

  document.getElementById("circleSelecSa").setAttribute("fill","#EF0A56")
  document.getElementById("circleSelecSa").setAttribute("stroke","#EF0A56")
  document.getElementById("circleSelecSa").setAttribute("opacity","1")
  document.getElementById("textSelecSa").setAttribute("fill","#EF0A56")
  document.getElementById("textSelecSa").setAttribute("opacity","1")

  createGraphSa()
  createGraphSoGray()
  createGraphInGray()
  createGraphLaGray()

  first=false
  }
}

function popGraphIn() {
  if (first==true) {
  clearGraphs()

  document.getElementById("axisPointIn").setAttribute("stroke-width",2)
  document.getElementById("axisPointIn").setAttribute("r",9)
  document.getElementById("axisPointIn").style = "fill-opacity:1;"
  document.getElementById("axisPointIn").style = "stroke-opacity:1;"
  document.getElementById("axisPointIn").setAttribute("stroke","#00CCCC")
  document.getElementById("axisPointIn").style = "fill:#7FE5E5;"

  document.getElementById("circleSelecIn").setAttribute("fill","#00CCCC")
  document.getElementById("circleSelecIn").setAttribute("stroke","#00CCCC")
  document.getElementById("circleSelecIn").setAttribute("opacity","1")
  document.getElementById("textSelecIn").setAttribute("fill","#00CCCC")
  document.getElementById("textSelecIn").setAttribute("opacity","1")

  createGraphIn()
  createGraphSoGray()
  createGraphLaGray()
  createGraphSaGray()
  first=false
  }
}

function popGraphLa() {
  if (first==true) {
  clearGraphs()

  document.getElementById("axisPointLa").setAttribute("stroke-width",2)
  document.getElementById("axisPointLa").setAttribute("r",9)
  document.getElementById("axisPointLa").style = "fill-opacity:1;"
  document.getElementById("axisPointLa").style = "stroke-opacity:1;"
  document.getElementById("axisPointLa").setAttribute("stroke","#6600CC")
  document.getElementById("axisPointLa").style = "fill:#B27FE5;"

  document.getElementById("circleSelecLa").setAttribute("fill","#6600CC")
  document.getElementById("circleSelecLa").setAttribute("stroke","#6600CC")
  document.getElementById("circleSelecLa").setAttribute("opacity","1")
  document.getElementById("textSelecLa").setAttribute("fill","#6600CC")
  document.getElementById("textSelecLa").setAttribute("fill","#6600CC")


  createGraphLa()
  createGraphInGray()
  createGraphSoGray()
  createGraphSaGray()
  first=false
  }
}

function popGraphSo() {
  if (first==true) {
  clearGraphs()

  document.getElementById("axisPointSo").setAttribute("stroke-width",2)
  document.getElementById("axisPointSo").setAttribute("r",9)
  document.getElementById("axisPointSo").style = "fill-opacity:1;"
  document.getElementById("axisPointSo").style = "stroke-opacity:1;"
  document.getElementById("axisPointSo").setAttribute("stroke","#1051E2")
  document.getElementById("axisPointSo").style = "fill:#87A8F0;"

  document.getElementById("circleSelecSo").setAttribute("fill","#1051E2")
  document.getElementById("circleSelecSo").setAttribute("stroke","#1051E2")
  document.getElementById("circleSelecSo").setAttribute("opacity","1")
  document.getElementById("textSelecSo").setAttribute("fill","#1051E2")
  document.getElementById("textSelecSo").setAttribute("opacity","1")

  createGraphSo()
  createGraphInGray()
  createGraphLaGray()
  createGraphSaGray()
  first=false
  }
}

//funzione che viene chiamata quando il mouse esce da un grfico (e non ne entra in un altro) che "ricolora" tutti i grafici.
function popAll() {
  if (block==false) {
  clearGraphs()

  createGraphSo()
  createGraphIn()
  createGraphLa()
  createGraphSa()
  first=true

  document.getElementById("axisPointSa").setAttribute("stroke-width",1)
  document.getElementById("axisPointSa").setAttribute("r",6)
  document.getElementById("axisPointSa").setAttribute("stroke","#808080")
  document.getElementById("axisPointSa").style = "fill-opacity:1;"
  document.getElementById("axisPointSa").style = "stroke-opacity:1;"
  document.getElementById("axisPointSa").style = "fill:#E6E6E6;"

  document.getElementById("circleSelecSa").setAttribute("fill","none")
  document.getElementById("circleSelecSa").setAttribute("stroke","#808080")
  document.getElementById("circleSelecSa").setAttribute("opacity","0.55")
  document.getElementById("textSelecSa").setAttribute("fill","#333333")
  document.getElementById("textSelecSa").setAttribute("opacity","0.55")


  document.getElementById("axisPointIn").setAttribute("stroke-width",1)
  document.getElementById("axisPointIn").setAttribute("r",6)
  document.getElementById("axisPointIn").setAttribute("stroke","#808080")
  document.getElementById("axisPointIn").style = "fill-opacity:1;"
  document.getElementById("axisPointIn").style = "stroke-opacity:1;"
  document.getElementById("axisPointIn").style = "fill:#E6E6E6;"

  document.getElementById("circleSelecIn").setAttribute("fill","none")
  document.getElementById("circleSelecIn").setAttribute("stroke","#808080")
  document.getElementById("circleSelecIn").setAttribute("opacity","0.55")
  document.getElementById("textSelecIn").setAttribute("fill","#333333")
  document.getElementById("textSelecIn").setAttribute("opacity","0.55")


  document.getElementById("axisPointLa").setAttribute("stroke-width",1)
  document.getElementById("axisPointLa").setAttribute("r",6)
  document.getElementById("axisPointLa").setAttribute("stroke","#808080")
  document.getElementById("axisPointLa").style = "fill-opacity:1;"
  document.getElementById("axisPointLa").style = "stroke-opacity:1;"
  document.getElementById("axisPointLa").style = "fill:#E6E6E6;"

  document.getElementById("circleSelecLa").setAttribute("fill","none")
  document.getElementById("circleSelecLa").setAttribute("stroke","#808080")
  document.getElementById("circleSelecLa").setAttribute("opacity","0.55")
  document.getElementById("textSelecLa").setAttribute("fill","#333333")
  document.getElementById("textSelecLa").setAttribute("opacity","0.55")


  document.getElementById("axisPointSo").setAttribute("stroke-width",1)
  document.getElementById("axisPointSo").setAttribute("r",6)
  document.getElementById("axisPointSo").setAttribute("stroke","#808080")
  document.getElementById("axisPointSo").style = "fill-opacity:1;"
  document.getElementById("axisPointSo").style = "stroke-opacity:1;"
  document.getElementById("axisPointSo").style = "fill:#E6E6E6;"

  document.getElementById("circleSelecSo").setAttribute("fill","none")
  document.getElementById("circleSelecSo").setAttribute("stroke","#808080")
  document.getElementById("circleSelecSo").setAttribute("opacity","0.55")
  document.getElementById("textSelecSo").setAttribute("fill","#333333")
  document.getElementById("textSelecSo").setAttribute("opacity","0.55")

  }
}

// //Scala a seconda della grandezza dello schermo:
// document.getElementById("svgProfileGlobal").style.transform = "scale("+(window.innerWidth/1950)+")";
// document.getElementsByTagName("BODY")[0].onresize = function() {document.getElementById("svgProfileGlobal").style.transform = "scale("+(window.innerWidth/1950)+")";};
