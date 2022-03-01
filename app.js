// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCdAnlmX_mxn81UBIBOdlpZdiSmAjzmH10',
    authDomain: 'fe21-js2-801d6.firebaseapp.com',
    projectId: 'fe21-js2-801d6'
  });
  
  var db = firebase.firestore();



  function readFromDb() {

    db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
        });
    });

  }


  readFromDb();

