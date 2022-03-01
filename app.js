// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCdAnlmX_mxn81UBIBOdlpZdiSmAjzmH10',
    authDomain: 'fe21-js2-801d6.firebaseapp.com',
    projectId: 'fe21-js2-801d6'
  });
  
  var db = firebase.firestore();



  function addProductToDb() {

    db.collection("products").add({
        first: "Ada",
        last: "Lovelace",
        born: 1815
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });

  }

