 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDajeVzARkijIBYGudhnqI2Xvy93OjIt74",
    authDomain: "foodapp-39e77.firebaseapp.com",
    databaseURL: "https://foodapp-39e77.firebaseio.com",
    projectId: "foodapp-39e77",
    storageBucket: "foodapp-39e77.appspot.com",
    messagingSenderId: "188944854486"
  };
  firebase.initializeApp(config);

  // Get Elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');

  // Add login event
  btnLogin.addEventListener('click', e=> {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  console.log(auth.signInWithEmailAndPassword);
  promise.catch(e => console.log(e.message));
  });
  
  // Add signup event
   btnSignUp.addEventListener('click', e => {
    // Get email and pass
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    // Sign in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  });

  btnLogOut.addEventListener('click', e=> {
    firebase.auth().signOut();
  });


   // Add a realtime listener
   firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser) {
      console.log(firebaseUser);
      btnLogOut.classList.remove('hide');
    } else {
      console.log('not logged in');
      btnLogOut.classList.add('hide');
    }
   });


