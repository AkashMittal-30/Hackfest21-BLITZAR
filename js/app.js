var str1="";
const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
$("#signInBtn").click(function () {
  email = $("#signInUserEmail").val()
  password = $("#signInUserPassword").val()
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("sign in successfull")
      console.log(user);    // ...
      //.......................................................flagging code


      var temposeller = "test";
      
      // console.log(temposeller);
      var finder = document.getElementById("signInUserCity").value;
      console.log(finder);
      var docRef = db.collection("city").doc(finder);
      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Document data:", doc.data());

         
        
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch((error) => {
        console.log("Error getting document:", error);
      }).then(() => {
        var docRef = db.collection("city").doc(finder);
        docRef.get().then((doc) => {
          if (doc.exists) {
            console.log("Document data:", doc.data());
            // document.getElementById("name").innerHTML = "city is " + doc.data().city;
            const idmap = doc.data().sellerIdArray;
            for (var key in idmap) {
              console.log(idmap[key]);
              var docRef2 = db.collection("seller").doc(idmap[key]);

              docRef2.get().then((doc) => {
                if (doc.exists) {
                  console.log("Document data:", doc.data());
                  str1 += ` <div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title"> ${doc.data().name}</h5><h6>${doc.data().name + "  " + doc.data().name}</h6><hr><p class="card-text"> ${doc.data().name}</p><button onclick="editnote(${doc.data().name})" class="btn btn-primary" id="Editbtn">Edit<button><button onclick="deletenote(${doc.data().name})" class="btn btn-primary" id="Deletebtn">Delete<button></div></div> `;
                  console.log("ye chl gya")
                }
                else {
                  console.log("this one is not working", idmap[key]);
                  console.log("ye nhi chl rha h")
                }
              })
            }
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }).catch((error) => {
          console.log("Error getting document:", error);
        });
      });
      console.log("flag");
      //...........................................................................flagging out
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
})

//sign up function starts
$("#signUpBtn").click(function () {
  email = $("#signUpUserEmail").val()
  password = $("#signUpUserPassword").val()
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      // Signed in 
      var user = cred.user;
      console.log("User created Successfully")
      return db.collection('users').doc(cred.user.uid).set({
        name: $("#signUpUserName").val(),
      }).catch((error) => {

        var errorMessage = error.message;
        alert(errorMessage);
      });
    })
})
//sign up function ends
// var docRef = db.collection("foo").doc("bar");

// docRef.get().then((doc) => {
//     if (doc.exists) {
//         const emergencyContacts = doc.data().EmergencyContacts;
//         for (var key in emergencyContacts) {
//           console.log(emergencyContacts[key]);
//         }
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// });