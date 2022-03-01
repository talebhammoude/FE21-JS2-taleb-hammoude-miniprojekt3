// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCdAnlmX_mxn81UBIBOdlpZdiSmAjzmH10',
    authDomain: 'fe21-js2-801d6.firebaseapp.com',
    projectId: 'fe21-js2-801d6'
  });
  
  var db = firebase.firestore();






  class Product {
    constructor(namn, pris, lagersaldo) {

        this.namn=namn;
        this.pris=pris;
        this.pris=lagersaldo;
    }
  }



  function readFromDb() {

    db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            var addProduct = new Product(doc.data().namn, doc.data().pris, doc.data().lagersaldo);

            
        });
    });

  }

