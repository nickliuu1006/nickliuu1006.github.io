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
    
    const diveLinker = new DiveLinker("eight");
    var uid = "";
    firebase.auth().onAuthStateChanged(function(user) {
      if(user) {
      // 使用者已登入，可以取得資料
      var email = user.email;
      uid = user.uid;
      console.log(email, uid);
      } else {
          console.log("no");
    }
    });
    
    setTimeout(function func(){
        if(diveLinker.checkComplete() == true){
            var x8 = diveLinker.getAttr("704ca63c7de743debb350788551acdd7")
            db.ref('TheStudents/' + uid ).update({eight:x8})
            .catch((error)=>{console.log(error)})
        }
        else{
          setTimeout(func, 1000);
        }
      }, 1000)