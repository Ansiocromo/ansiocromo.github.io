
function drawPieGenere(mSa,mLa,mIn,mSo,fSa,fLa,fIn,fSo) {
  var r = document.getElementById("circle.f.Sa").getAttribute("r");

  document.getElementById("circle.m.Sa").setAttribute("stroke-dasharray",((2*Math.PI*r)*mSa)+" "+((2*Math.PI*r)*(1-mSa)));
  document.getElementById("circle.m.Sa").setAttribute("stroke-dashoffset", (2*Math.PI*r*0.25));

  document.getElementById("circle.m.In").setAttribute("stroke-dasharray",((2*Math.PI*r)*mLa)+" "+((2*Math.PI*r)*(1-mLa)));
  document.getElementById("circle.m.In").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-((2*Math.PI*r)*mSa)));

  document.getElementById("circle.m.La").setAttribute("stroke-dasharray",((2*Math.PI*r)*mIn)+" "+((2*Math.PI*r)*(1-mIn)));
  document.getElementById("circle.m.La").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-(((2*Math.PI*r)*mSa)+((2*Math.PI*r)*mLa))));

  document.getElementById("circle.m.So").setAttribute("stroke-dasharray",((2*Math.PI*r)*mSo)+" "+((2*Math.PI*r)*(1-mSo)));
  document.getElementById("circle.m.So").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-(((2*Math.PI*r)*mSa)+((2*Math.PI*r)*mLa)+((2*Math.PI*r)*mIn))));



  document.getElementById("circle.f.Sa").setAttribute("stroke-dasharray",((2*Math.PI*r)*fSa)+" "+((2*Math.PI*r)*(1-fSa)));
  document.getElementById("circle.f.Sa").setAttribute("stroke-dashoffset", (2*Math.PI*r*0.25));

  document.getElementById("circle.f.In").setAttribute("stroke-dasharray",((2*Math.PI*r)*fLa)+" "+((2*Math.PI*r)*(1-fLa)));
  document.getElementById("circle.f.In").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-((2*Math.PI*r)*fSa)));

  document.getElementById("circle.f.La").setAttribute("stroke-dasharray",((2*Math.PI*r)*fIn)+" "+((2*Math.PI*r)*(1-fIn)));
  document.getElementById("circle.f.La").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-(((2*Math.PI*r)*fSa)+((2*Math.PI*r)*fLa))));

  document.getElementById("circle.f.So").setAttribute("stroke-dasharray",((2*Math.PI*r)*fSo)+" "+((2*Math.PI*r)*(1-fSo)));
  document.getElementById("circle.f.So").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-(((2*Math.PI*r)*fSa)+((2*Math.PI*r)*fLa)+((2*Math.PI*r)*fIn))));


  document.getElementById("text.%.Sa.m").innerHTML=Math.round(mSa*100);
  document.getElementById("text.%.La.m").innerHTML=Math.round(mLa*100);
  document.getElementById("text.%.In.m").innerHTML=Math.round(mIn*100);
  document.getElementById("text.%.So.m").innerHTML=Math.round(mSo*100);


  document.getElementById("text.%.Sa.f").innerHTML=Math.round(fSa*100);
  document.getElementById("text.%.La.f").innerHTML=Math.round(fLa*100);
  document.getElementById("text.%.In.f").innerHTML=Math.round(fIn*100);
  document.getElementById("text.%.So.f").innerHTML=Math.round(fSo*100);


}

function drawBarsGenere(mSa,fSa,mLa,fLa,mIn,fIn,mSo,fSo) {
  document.getElementById("m.Sa").setAttribute("width",(mSa*412)/10);
  document.getElementById("f.Sa").setAttribute("width",(fSa*412)/10);

  document.getElementById("m.La").setAttribute("width",(mLa*412)/10);
  document.getElementById("f.La").setAttribute("width",(fLa*412)/10);

  document.getElementById("m.In").setAttribute("width",(mIn*412)/10);
  document.getElementById("f.In").setAttribute("width",(fIn*412)/10);

  document.getElementById("m.So").setAttribute("width",(mSo*412)/10);
  document.getElementById("f.So").setAttribute("width",(fSo*412)/10);


  document.getElementById("m.Sa.text").innerHTML=mSa;
  document.getElementById("f.Sa.text").innerHTML=fSa;

  document.getElementById("m.La.text").innerHTML=mLa;
  document.getElementById("f.La.text").innerHTML=fLa;

  document.getElementById("m.In.text").innerHTML=mIn;
  document.getElementById("f.In.text").innerHTML=fIn;

  document.getElementById("m.So.text").innerHTML=mSo;
  document.getElementById("f.So.text").innerHTML=fSo;


}


function drawPieTotale(SaTOT,LaTOT,InTOT,SoTOT) {
  var r = document.getElementById("SaTOT").getAttribute("r");

  document.getElementById("SaTOT").setAttribute("stroke-dasharray",((2*Math.PI*r)*SaTOT)+" "+((2*Math.PI*r)*(1-SaTOT)));
  document.getElementById("SaTOT").setAttribute("stroke-dashoffset", (2*Math.PI*r*0.25));

  document.getElementById("LaTOT").setAttribute("stroke-dasharray",((2*Math.PI*r)*LaTOT)+" "+((2*Math.PI*r)*(1-LaTOT)));
  document.getElementById("LaTOT").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-((2*Math.PI*r)*SaTOT)));

  document.getElementById("InTOT").setAttribute("stroke-dasharray",((2*Math.PI*r)*InTOT)+" "+((2*Math.PI*r)*(1-InTOT)));
  document.getElementById("InTOT").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-(((2*Math.PI*r)*SaTOT)+((2*Math.PI*r)*LaTOT))));

  document.getElementById("SoTOT").setAttribute("stroke-dasharray",((2*Math.PI*r)*SoTOT)+" "+((2*Math.PI*r)*(1-SoTOT)));
  document.getElementById("SoTOT").setAttribute("stroke-dashoffset", ((2*Math.PI*r*0.25)-(((2*Math.PI*r)*SaTOT)+((2*Math.PI*r)*LaTOT)+((2*Math.PI*r)*InTOT))));


  document.getElementById("SaTOT.Text").innerHTML=Math.round(SaTOT*100);
  document.getElementById("LaTOT.Text").innerHTML=Math.round(LaTOT*100);
  document.getElementById("InTOT.Text").innerHTML=Math.round(InTOT*100);
  document.getElementById("SoTOT.Text").innerHTML=Math.round(SoTOT*100);

}
