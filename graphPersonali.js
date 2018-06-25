
var timerAnimazione,
    r = 180
    t = 0
    mSa = 0,
    mIn = 0,
    mLa = 0,
    mSo = 0;

function getPunteggio() {
// chackServerReady=setInterval(function() { //Controlla ogni sec se il server ha dato i valori numerici

// clearInterval(chackServerReady);   //Disattiva Timer Risposta Database

  //Disegna (animandoli cosi che vada anche uni browser meno fortunati) i cerchi solo quando sono numeri:
  disCircle = setInterval(function() {

          if (((Sa/10)*r) > mSa) {document.getElementById('circleSa').setAttribute("r", mSa); mSa++};
          if (((In/10)*r) > mIn) {document.getElementById('circleIn').setAttribute("r", mIn); mIn++};
          if (((La/10)*r) > mLa) {document.getElementById('circleLa').setAttribute("r", mLa); mLa++};
          if (((So/10)*r) > mSo) {document.getElementById('circleSo').setAttribute("r", mSo); mSo++};


      if ((mSa==((Sa/10)*r))&&(mIn==((In/10)*r))&&(mLa==((La/10)*r))&&(mSo==((So/10)*r))) {clearInterval(disCircle)} //pulisci il timer quando tutti hanno raggiunto la grandezza definitiva
    },10) //velocità di crecità
//Posiziona la Linea e il Testo Sa:
  var x1 = 913.15+((Sa/10)*r*Math.cos(0.785398)),
      y1 = 280.7+((Sa/10)*r*Math.sin(0.785398)),
      x2 = 300+913.15+((Sa/10)*r*Math.cos(0.785398)),
      y2 = y1;


  document.getElementById('circleSaLine').setAttribute("x1", x1-1);
  document.getElementById('circleSaLine').setAttribute("y1", y1);
  document.getElementById('circleSaLine').setAttribute("x2", x2);
  document.getElementById('circleSaLine').setAttribute("y2", y2);

  document.getElementById('circleSaText').setAttribute("transform","translate("+(x1+200)+" "+(y1-5)+")")
  document.getElementById('circleSaTextValori').setAttribute("transform","translate("+(x1+308)+" "+(y1+15)+")")
  document.getElementById('circleSaTextVal').innerHTML = Sa;


  //Posiziona la Linea e il Testo In:
    var x1 = 486.7-((In/10)*r*Math.cos(-0.785398)),
        y1 = 519.3-((In/10)*r*Math.sin(-0.785398)),
        x2 = -300+486.7-((In/10)*r*Math.cos(-0.785398)),
        y2 = y1;


    document.getElementById('circleInLine').setAttribute("x1", x1+1);
    document.getElementById('circleInLine').setAttribute("y1", y1);
    document.getElementById('circleInLine').setAttribute("x2", x2);
    document.getElementById('circleInLine').setAttribute("y2", y2);

    document.getElementById('circleInText').setAttribute("transform","translate("+(x1-150)+" "+(y1-5)+")")
    document.getElementById('circleInTextValori').setAttribute("transform","translate("+(x1-355)+" "+(y1+15)+")")

    document.getElementById('circleInTextVal').innerHTML = In;
    document.getElementById('circleInTextVal').setAttribute("transform","translate("+(50)+" "+(0)+")")


  //Posiziona la Linea e il Testo La:
    var x1 = 626.15-((La/10)*r*Math.cos(-0.785398)),
        y1 = 280.7-((La/10)*r*Math.sin(-0.785398)),
        x2 = -300+626.15-((La/10)*r*Math.cos(-0.785398)),
        y2 = y1;


    document.getElementById('circleLaLine').setAttribute("x1", x1+2);
    document.getElementById('circleLaLine').setAttribute("y1", y1);
    document.getElementById('circleLaLine').setAttribute("x2", x2);
    document.getElementById('circleLaLine').setAttribute("y2", y2);

    document.getElementById('circleLaText').setAttribute("transform","translate("+(x1-200)+" "+(y1-5)+")")
    document.getElementById('circleLaTextValori').setAttribute("transform","translate("+(x1-355)+" "+(y1+15)+")")

    document.getElementById('circleLaTextVal').innerHTML = La;
    document.getElementById('circleLaTextVal').setAttribute("transform","translate("+(50)+" "+(0)+")")


//Posiziona la Linea e il Testo So:
  var x1 = 773.7+((So/10)*r*Math.cos(0.785398)),
      y1 = 519.3+((So/10)*r*Math.sin(0.785398)),
      x2 = 300+773.7+((So/10)*r*Math.cos(0.785398)),
      y2 = y1;

  document.getElementById('circleSoLine').setAttribute("x1", x1-1);
  document.getElementById('circleSoLine').setAttribute("y1", y1);
  document.getElementById('circleSoLine').setAttribute("x2", x2);
  document.getElementById('circleSoLine').setAttribute("y2", y2);

  document.getElementById('circleSoText').setAttribute("transform","translate("+(x1+180)+" "+(y1-5)+")")
  document.getElementById('circleSoTextValori').setAttribute("transform","translate("+(x1+308)+" "+(y1+15)+")")
  document.getElementById('circleSoTextVal').innerHTML = So;


}
// }, 1000); //Controlla ogni 1sec


//Funzioni Evidenzia Testo:
function popSaPers() {
  if (0==0) {
    document.getElementById('SaText').classList.remove("circleOpacity");
    document.getElementById('circleIn').classList.add("circleGray");
    document.getElementById('circleLa').classList.add("circleGray");
    document.getElementById('circleSo').classList.add("circleGray");
  }
}

function popInPers() {
  if (((In/10)*r) <= mIn) {
    document.getElementById('InText').classList.remove("circleOpacity");
    document.getElementById('circleSa').classList.add("circleGray");
    document.getElementById('circleLa').classList.add("circleGray");
    document.getElementById('circleSo').classList.add("circleGray");
  }
}

function popLaPers() {
  if (((La/10)*r) <= mLa) {
    document.getElementById('LaText').classList.remove("circleOpacity");
    document.getElementById('circleSa').classList.add("circleGray");
    document.getElementById('circleIn').classList.add("circleGray");
    document.getElementById('circleSo').classList.add("circleGray");
  }
}

function popSoPers() {
  if (((So/10)*r) <= mSo) {
    document.getElementById('SoText').classList.remove("circleOpacity");
    document.getElementById('circleSa').classList.add("circleGray");
    document.getElementById('circleIn').classList.add("circleGray");
    document.getElementById('circleLa').classList.add("circleGray");
  }
}



function popAllPers()  {
  document.getElementById('circleSa').classList.remove("circleGray");
  document.getElementById('circleIn').classList.remove("circleGray");
  document.getElementById('circleLa').classList.remove("circleGray");
  document.getElementById('circleSo').classList.remove("circleGray");

  document.getElementById('SaText').classList.add("circleOpacity");
  document.getElementById('InText').classList.add("circleOpacity");
  document.getElementById('LaText').classList.add("circleOpacity");
  document.getElementById('SoText').classList.add("circleOpacity");
}
