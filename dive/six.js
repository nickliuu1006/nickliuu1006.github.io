const firebaseConfig = {
    apiKey: "AIzaSyDGcfgILZZtkJaCa5lHJWHGDvQBPlK7j40",
    authDomain: "data-ab889.firebaseapp.com",
    databaseURL: "https://data-ab889-default-rtdb.firebaseio.com",
    projectId: "data-ab889",
    storageBucket: "data-ab889.appspot.com",
    messagingSenderId: "428544050540",
    appId: "1:428544050540:web:96ef0108b4223b81911f49",
    measurementId: "G-G1DV8Q46P6"
    };
    
    const app = firebase.initializeApp(firebaseConfig);
    
    
    const db = firebase.database();
    
    const diveLinker = new DiveLinker("six");
    setTimeout(function func(){
        if(diveLinker.checkComplete() == true){
            var x6 = diveLinker.getAttr("a1f50abef0504150acd711eec5e379d8")
            db.ref('TheStudents/nyNgsMSjqEaTjeG5Bv3xzOClGSv2').update({six:x6})
            .catch((error)=>{console.log(error)})
        }
        else{
          setTimeout(func, 1000);
        }
      }, 1000)