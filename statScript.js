// Initialize Firebase
const config = {
  apiKey: "AIzaSyDVlqcpSJetA6pmC7GdlSGQKcF_dwXEhCw",
  authDomain: "ansiocromo-db.firebaseapp.com",
  databaseURL: "https://ansiocromo-db.firebaseio.com",
  projectId: "ansiocromo-db",
  storageBucket: "",
  messagingSenderId: "930213473689"
};
firebase.initializeApp(config);

var user=firebase.auth().currentUser;

  if(user) {
    firebase.auth().signOut();
  }
  else{
    firebase.auth().signInAnonymously();
    // console.log('OK');
  };

const rootRef = firebase.database().ref('profiles/');
const totRef = firebase.database().ref('totals/');
const etaRef = firebase.database().ref('eta/');
const genereRef = firebase.database().ref('genere/');
const numPers = document.getElementById('numPers');

var n=0;
var arrCodice=[];
var arrEta=[];
var arrGenere=[];
var arrTotals=[];
var mediaGenereArr=[];
var mediaGenerePercArr=[];
// var dbCodice;
// var saluteArr = [];
// var lavoroArr = [];
// var societaArr = [];
// var individualeArr = [];

var Sa = [],
    In = [],
    La = [],
    So = [];

var arrEtaSalute = [];
var arrEtaLavoro = [];
var arrEtaSocieta = [];
var arrEtaIndividuale = [];

var arrEtaMediaSalute = [];
var arrEtaMediaIndividuale = [];
var arrEtaMediaLavoro = [];
var arrEtaMediaSocieta = [];

var arrGenereMediaSalute = [];
var arrGenereMediaIndividuale = [];
var arrGenereMediaLavoro = [];
var arrGenereMediaSocieta = [];

var arrEtaSaluteGlob = [],
    arrEtaLavoroGlob = [],
    arrEtaSocietaGlob = [],
    arrEtaIndividualeGlob = [];

var arrGenereSalute = [];
var arrGenereLavoro = [];
var arrGenereSocieta = [];
var arrGenereIndividuale = [];

var retriverEta = '';
var retriverGenere = '';

var genereSum=0,
    saluteGenereMediaR=0,
    lavoroGenereMediaR=0,
    individualeGenereMediaR=0,
    societaGenereMediaR=0,
    saluteGenerePerc=0,
    lavoroGenerePerc=0,
    individualeGenerePerc=0,
    societaGenerePerc=0,
    saluteTotPerc=0,
    lavoroTotPerc=0,
    individualeTotPerc=0,
    societaTotPerc=0,
    totPercArr=[];

var user=firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    // console.log('already logged in');
    getEta()
    getGenere();
    getTotals();

  }
  else{
    firebase.auth().signInAnonymously();
  };
  // console.log(user);
});

function fadeBlurIn() {
  numPers.classList.remove('hideOpacity');
  numPers.classList.remove('blur');
  }

  function getEta() {

    etaRef.on("value", function(snapshot) {
      arrEta=[];
      snapshot.forEach(childSnapshot => {
        arrEta.push(childSnapshot.key);
      });

      // console.log(arrEta);

      for(i=0;i<arrEta.length;i++) {

        arrEtaSalute = [];
        arrEtaLavoro = [];
        arrEtaSocieta = [];
        arrEtaIndividuale = [];

      retriverEta = arrEta[i];
      var etaChildRef = firebase.database().ref('eta/').child(retriverEta);
      // etaChildRef.child('salute').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrEtaSalute.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(etaChildRef,'salute',arrEtaSalute);
      // etaChildRef.child('lavoro').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrEtaLavoro.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(etaChildRef,'lavoro',arrEtaLavoro);
      // etaChildRef.child('societa').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrEtaSocieta.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(etaChildRef,'societa',arrEtaSocieta);
      // etaChildRef.child('individuale').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrEtaIndividuale.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(etaChildRef,'individuale',arrEtaIndividuale);

      var saluteAdd = arrEtaSalute.reduce(add, 0);
      var saluteMedia = saluteAdd/arrEtaSalute.length;
      arrEtaMediaSalute.push(saluteMedia);

      // console.log('addizione salute: '+saluteAdd);
      // console.log('media salute: '+saluteMedia);
      // console.log('- - - - -');

      var individualeAdd = arrEtaIndividuale.reduce(add, 0);
      var individualeMedia = individualeAdd/arrEtaIndividuale.length;
      arrEtaMediaIndividuale.push(individualeMedia);

      var lavoroAdd = arrEtaLavoro.reduce(add, 0);
      var lavoroMedia = lavoroAdd/arrEtaLavoro.length;
      arrEtaMediaLavoro.push(lavoroMedia);

      var societaAdd = arrEtaSocieta.reduce(add, 0);
      var societaMedia = societaAdd/arrEtaSocieta.length;
      arrEtaMediaSocieta.push(societaMedia);

        // console.log(retriverEta+' anni > valori salute: '+arrEtaSalute);
        // console.log(retriverEta+' anni > valori lavoro: '+arrEtaLavoro);
        // console.log(retriverEta+' anni > valori società: '+arrEtaSocieta);
        // console.log(retriverEta+' anni > valori individuale: '+arrEtaIndividuale);
        // console.log('- - - - -');
      }
      // console.log('età analizzate: '+arrEta+' anni');
      // console.log('- - - - -');

      for (i=12,s=0;i<=100;i++) {
        if (arrEta[s]==i) {arrEtaSaluteGlob.push(arrEtaMediaSalute[s]);s++}
        else {arrEtaSaluteGlob.push(0)}
      }

      for (i=12,s=0;i<=100;i++) {
        if (arrEta[s]==i) {arrEtaIndividualeGlob.push(arrEtaMediaIndividuale[s]);s++}
        else {arrEtaIndividualeGlob.push(0)}
      }

      for (i=12,s=0;i<=100;i++) {
        if (arrEta[s]==i) {arrEtaLavoroGlob.push(arrEtaMediaLavoro[s]);s++}
        else {arrEtaLavoroGlob.push(0)}
      }

      for (i=12,s=0;i<=100;i++) {
        if (arrEta[s]==i) {arrEtaSocietaGlob.push(arrEtaMediaSocieta[s]);s++}
        else {arrEtaSocietaGlob.push(0)}
      }
    //  console.log(arrEtaSaluteGlob);
    //  console.log(arrEtaLavoroGlob);
    //  console.log(arrEtaIndividualeGlob);
    //  console.log(arrEtaSocietaGlob);


    getGlobali();
    });
  }


  function getGenere() {
    genereRef.on("value", function(snapshot) {
      mediaGenereArr=[];
      mediaGenerePerc=[];
      arrGenere=[];
      snapshot.forEach(childSnapshot => {
        arrGenere.push(childSnapshot.key);
      });
      // console.log(arrGenere);
      for(i=0;i<arrGenere.length;i++) {

        arrGenereSalute = [];
        arrGenereLavoro = [];
        arrGenereSocieta = [];
        arrGenereIndividuale = [];

      retriverGenere = arrGenere[i];
      var genereChildRef = firebase.database().ref('genere/').child(retriverGenere);
      // genereChildRef.child('salute').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrGenereSalute.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(genereChildRef,'salute',arrGenereSalute);
      // genereChildRef.child('lavoro').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrGenereLavoro.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(genereChildRef,'lavoro',arrGenereLavoro);
      // genereChildRef.child('societa').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrGenereSocieta.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(genereChildRef,'societa',arrGenereSocieta);
      // genereChildRef.child('individuale').on('value', snapshot => {
      //   snapshot.forEach(childSnapshot => {
      //     childSnapshot.forEach(childSnapshot => {
      //       arrGenereIndividuale.push(childSnapshot.val());
      //       });
      //     });
      //   });
      getFromDB(genereChildRef,'individuale',arrGenereIndividuale);


      var saluteGenereAdd = arrGenereSalute.reduce(add, 0);
      var saluteGenereMedia = saluteGenereAdd/arrGenereSalute.length;
      arrGenereMediaSalute.push(saluteGenereMedia);

      console.log('addizione salute: '+saluteGenereAdd);
      console.log('media salute: '+saluteGenereMedia);
      console.log('- - - - -');

      var individualeGenereAdd = arrGenereIndividuale.reduce(add, 0);
      var individualeGenereMedia = individualeGenereAdd/arrGenereIndividuale.length;
      arrGenereMediaIndividuale.push(individualeGenereMedia);

      var lavoroGenereAdd = arrGenereLavoro.reduce(add, 0);
      var lavoroGenereMedia = lavoroGenereAdd/arrGenereLavoro.length;
      arrGenereMediaLavoro.push(lavoroGenereMedia);

      var societaGenereAdd = arrGenereSocieta.reduce(add, 0);
      var societaGenereMedia = societaGenereAdd/arrGenereSocieta.length;
      arrGenereMediaSocieta.push(societaGenereMedia);


      saluteGenereMediaR=Math.round(saluteGenereMedia*10)/10,
      lavoroGenereMediaR=Math.round(lavoroGenereMedia*10)/10,
      individualeGenereMediaR=Math.round(individualeGenereMedia*10)/10,
      societaGenereMediaR=Math.round(societaGenereMedia*10)/10;
      genereSum=saluteGenereMediaR+lavoroGenereMediaR+individualeGenereMediaR+societaGenereMediaR;

      //singoloVal*100/(tutti i val);
      saluteGenerePerc=saluteGenereMediaR*100/genereSum;
      lavoroGenerePerc=lavoroGenereMediaR*100/genereSum;
      individualeGenerePerc=individualeGenereMediaR*100/genereSum;
      societaGenerePerc=societaGenereMediaR*100/genereSum;

      mediaGenereArr.push(
        saluteGenereMediaR,
        lavoroGenereMediaR,
        individualeGenereMediaR,
        societaGenereMediaR,
      );

      mediaGenerePercArr.push(
        saluteGenerePerc/100,
        lavoroGenerePerc/100,
        individualeGenerePerc/100,
        societaGenerePerc/100,
      )
        console.log(mediaGenereArr);
        console.log(mediaGenerePercArr);
        console.log(retriverGenere+' > valori salute: '+arrGenereSalute);
        console.log(retriverGenere+' > valori lavoro: '+arrGenereLavoro);
        console.log(retriverGenere+' > valori società: '+arrGenereSocieta);
        console.log(retriverGenere+' > valori individuale: '+arrGenereIndividuale);
        console.log('- - - - -');

      }
      console.log(mediaGenereArr[4]);
      drawPieGenere(mediaGenerePercArr[4],mediaGenerePercArr[5],mediaGenerePercArr[6],mediaGenerePercArr[7],mediaGenerePercArr[0],mediaGenerePercArr[1],mediaGenerePercArr[2],mediaGenerePercArr[3]) //mSa,mLa,mIn,mSo,fSa,fLa,fIn,fSo
      drawBarsGenere(mediaGenereArr[4],mediaGenereArr[0],mediaGenereArr[5],mediaGenereArr[1],mediaGenereArr[6],mediaGenereArr[2],mediaGenereArr[7],mediaGenereArr[3]) //mSa,fSa,mLa,fLa,mIn,fIn,mSo,fSo
    });
  }

  function getTotals() {
    totRef.on("value", function(snapshot) {
      arrTotals=[];
      totPercArr=[];
      snapshot.forEach(childSnapshot => {
        arrTotals.push(childSnapshot.val());
      });
      fadeBlurIn();
      numPers.innerHTML=arrTotals[3];

      //singoloVal*100/(tutti i val);
      saluteTotPerc=arrTotals[4]*100/arrTotals[0];
      lavoroTotPerc=arrTotals[2]*100/arrTotals[0];
      individualeTotPerc=arrTotals[1]*100/arrTotals[0];
      societaTotPerc=arrTotals[5]*100/arrTotals[0];

      totPercArr.push(saluteTotPerc/100,lavoroTotPerc/100,individualeTotPerc/100,societaTotPerc/100);
      drawPieTotale(totPercArr[0],totPercArr[1],totPercArr[2],totPercArr[3])

      console.log(totPercArr);
      console.log(arrTotals);
      console.log('salute totale: '+arrTotals[4]);
      console.log('individuale totale: '+arrTotals[1]);
      console.log('lavoro totale: '+arrTotals[2]);
      console.log('società totale: '+arrTotals[5]);
      console.log('- - - - -');
      console.log('ansie totali: '+arrTotals[0]);
      console.log('partecipanti totali: '+arrTotals[3]);
      console.log('- - - - -');
    });
  }

  function getFromDB(ref,ansia,arrAnsia) {
    ref.child(ansia).on('value', snapshot => {
      snapshot.forEach(childSnapshot => {
        childSnapshot.forEach(childSnapshot => {
          arrAnsia.push(childSnapshot.val());
          });
        });
      });
  }
//end-firebase

const arrowDownLine = document.getElementById('arrowDown-line');
const arrowUpLine = document.getElementById('arrowUp-line');
var scrollThreshold;

if(window.innerWidth>600) {scrollThreshold=1000}
else{scrollThreshold=300};

window.addEventListener('scroll', function(e) {
  if(document.body.scrollTop >= scrollThreshold) {
    arrowDownLine.classList.add('hideOpacity');
    arrowUpLine.classList.remove('hideOpacity');
    document.getElementById('pageScroller').href="#top";
  }
  else {
    arrowDownLine.classList.remove('hideOpacity')
    arrowUpLine.classList.add('hideOpacity');
    document.getElementById('pageScroller').href="#bottom";
  }
});

//Mobile Menu Navbar Open/Close
const navbarMenu = document.getElementById("navbarMenu");
const hamIcon = document.getElementById("hamIcon");
const closeIcon = document.getElementById("closeIcon");

var open=false;

function toggleNavbar() {

  if(open==false) {
    navbarMenu.classList.remove('closed');
    hamIcon.classList.add('hideOpacity');
    closeIcon.classList.remove('hideOpacity');
    arrowDown.classList.add('hideDisplay');
    open=true;
  }
  else{
    navbarMenu.classList.add('closed');
    hamIcon.classList.remove('hideOpacity');
    closeIcon.classList.add('hideOpacity');
    arrowDown.classList.remove('hideDisplay');
    open=false;
  }
}

function add(a, b) {
    return a + b;
}
