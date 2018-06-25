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

var database=firebase.database();

const rootRef = database.ref('profiles/');

//DOM ELEMENTS
const accSubmit = document.getElementById('accSubmit');
const accTxt = document.getElementById('accTxt');

var user=firebase.auth().currentUser;

  if(user) {
    firebase.auth().signOut();
  }
  else{
    firebase.auth().signInAnonymously();
  };

//LOGIN CLICK ANONYMOUSLY
accSubmit.addEventListener('click', e=> {
  var inputCode = document.getElementById('accCode').value.toUpperCase();
  if(inputCode==="") {}
  else {
  document.getElementById('accSubmit').innerHTML="attendi..."
  // AnonymousLogin();
  //controllo codice
  rootRef.once('value', function(snapshot) {
    if (snapshot.hasChild(inputCode)) {
      accTxt.innerHTML="inserisci il codice presente sul tuo esame:"
      accTxt.style.color="rgb(80,80,80)";
      saveData(inputCode);
      console.log(inputCode);
      loadNextPage();

        //inserire qui le classi che vengono nascoste/mostrate
        //per andare alla schermata del profilo
    }
    else {
      accTxt.innerHTML="Esame non trovato";
      accTxt.style.color="rgb(255,80,90)";
      document.getElementById('accSubmit').innerHTML="Invia";
    }
  })};
});

//dbCodice PASSA ALLA PAGINA DEL PROFILO
function saveData(inputVar) {
  localStorage.removeItem('_dbCodice');
  inputVar = btoa(inputVar)
  localStorage.setItem('_dbCodice',inputVar);
  console.log(inputVar);
}

function loadNextPage() {
  window.location.href="risultati.html"
}

// function AnonymousLogin() {
// var user=firebase.auth().currentUser;
//
//   if(user) {
//     firebase.auth().signOut();
//   }
//   else{
//     firebase.auth().signInAnonymously();
//   };
// }
//ANONYMOUS USER AUTH LISTENER (DEBUGGING)
firebase.auth().onAuthStateChanged(firebaseUser => {
  console.log(firebaseUser);
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
    open=true;
  }
  else{
    navbarMenu.classList.add('closed');
    hamIcon.classList.remove('hideOpacity');
    closeIcon.classList.add('hideOpacity');
    open=false;
  }
}
