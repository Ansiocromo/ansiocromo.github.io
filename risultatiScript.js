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
    const userInfo1=document.getElementById('userInfo1');
    const userInfo2=document.getElementById('userInfo2');
    const logoutTxt=document.getElementById('logoutTxt');
    const logoutTxtM=document.getElementById('logoutTxtM');

    const etaRef = firebase.database().ref('eta/');

    var arrEta=[];

    var arrEtaSalute = [];
    var arrEtaLavoro = [];
    var arrEtaSocieta = [];
    var arrEtaIndividuale = [];

    var retriverEta = '';

    var arrEtaMediaSalute = [];
    var arrEtaMediaIndividuale = [];
    var arrEtaMediaLavoro = [];
    var arrEtaMediaSocieta = [];

    var Sa = [],
        In = [],
        La = [],
        So = [];

    var arrEtaSaluteGlob = [],
        arrEtaLavoroGlob = [],
        arrEtaSocietaGlob = [],
        arrEtaIndividualeGlob = [];

        getWidth();
          function getWidth() {
          if (self.innerWidth) {
            return self.innerWidth;
          }

          if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
          }

          if (document.body) {
            return document.body.clientWidth;
          }
        }
        if(getWidth()<900) {
          document.getElementById('profilePersonal-svg').setAttribute("viewBox", "300 0 800 800");
        }
    etaRef.on("value", function(snapshot) {
      arrEta=[];
      snapshot.forEach(childSnapshot => {
        arrEta.push(childSnapshot.key);
      });
      getEta();
      console.log(arrEta);
    });

    //REDIRECT A LOGIN
    if(localStorage.getItem('_dbCodice')===null) {
    window.location.href="login.html";
  }

    loadData();

  //CHECK IF ALREADY LOGGED
  function loadData() {
    var inputCode = localStorage.getItem('_dbCodice');
    inputCode = atob(inputCode);
    console.log(inputCode);

    userInfo1.innerHTML="";
    userInfo2.innerHTML="";
    var uinfoRef = firebase.database().ref('profiles/').child(inputCode);
    var userInfoArr=[];
    uinfoRef.on('value',snapshot => {
      snapshot.forEach(childSnapshot => {
        userInfoArr.push(childSnapshot.val());
      });

      fadeBlurIn();
      userInfo1.innerHTML=userInfoArr[3]+', '+userInfoArr[1]+' anni, '+userInfoArr[4];
      userInfo2.innerHTML=userInfoArr[3]+', '+userInfoArr[1]+' anni, '+userInfoArr[4];
      console.log(userInfoArr);

      Sa = userInfoArr[7],
      In = userInfoArr[5],
      La = userInfoArr[6],
      So = userInfoArr[8];

      eta = userInfoArr[1];
      getPunteggio();
      getGlobali();
    });
  }


  // getEta();
  function getEta() {
  for(i=0;i<arrEta.length;i++) {
    // console.log('OK');

    arrEtaSalute = [];
    arrEtaLavoro = [];
    arrEtaSocieta = [];
    arrEtaIndividuale = [];

  retriverEta = arrEta[i];
  var etaChildRef = firebase.database().ref('eta/').child(retriverEta);

  getFromDB(etaChildRef,'salute',arrEtaSalute);
  getFromDB(etaChildRef,'lavoro',arrEtaLavoro);
  getFromDB(etaChildRef,'societa',arrEtaSocieta);
  getFromDB(etaChildRef,'individuale',arrEtaIndividuale);

  //console.log(retriverEta+' anni > valori salute: '+arrEtaSalute);
  //console.log(retriverEta+' anni > valori lavoro: '+arrEtaLavoro);
  //console.log(retriverEta+' anni > valori società: '+arrEtaSocieta);
  //console.log(retriverEta+' anni > valori individuale: '+arrEtaIndividuale);

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


  }
  // console.log('età analizzate: '+arrEta+' anni');
  // console.log('- - - - -');
  // console.log('array salute medie: '+arrEtaMediaSalute);
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
//    console.log(arrEtaIndividualeGlob);
//    console.log(arrEtaSocietaGlob);
}


    //LOGOUT CLICK
    logoutTxt.addEventListener('click', e=> {
    //   //inserire qui le classi che vengono nascoste/mostrate
    //   //per tornare alla schermata di login
    firebase.auth().signOut();
    localStorage.removeItem('_dbCodice');
    window.location.href="login.html"
    });
    logoutTxtM.addEventListener('click', e=> {
    //   //inserire qui le classi che vengono nascoste/mostrate
    //   //per tornare alla schermata di login
    firebase.auth().signOut();
    localStorage.removeItem('_dbCodice');
    window.location.href="login.html"
    });

    function fadeBlurIn() {
      userInfo1.classList.remove('hideOpacity');
      userInfo1.classList.remove('blur');
      userInfo2.classList.remove('hideOpacity');
      userInfo2.classList.remove('blur');
      }

const arrowDown = document.getElementById('arrowDown');
const pageScroller = document.getElementById('pageScroller');
var scrollThreshold;

if(window.innerWidth>600) {scrollThreshold=500}
else{scrollThreshold=300};

window.addEventListener('scroll', function(e) {
  if(document.body.scrollTop >= scrollThreshold) {
    arrowDown.classList.add('hideOpacity');
    pageScroller.classList.add('zIndexBottom');
  }
  else {
    arrowDown.classList.remove('hideOpacity');
    pageScroller.classList.remove('zIndexBottom');
}
});

//Mobile Menu Navbar Open/Close
const navbarMenu = document.getElementById("navbarMenu");
const hamIcon = document.getElementById("hamIcon");
const closeIcon = document.getElementById("closeIcon");

var open=false;

function getFromDB(ref,ansia,arrAnsia) {
  ref.child(ansia).on('value', snapshot => {
    snapshot.forEach(childSnapshot => {
      childSnapshot.forEach(childSnapshot => {
        arrAnsia.push(childSnapshot.val());
        });
      });
    });
}

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
