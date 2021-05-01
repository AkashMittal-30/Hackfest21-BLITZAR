var temposeller = "test";
var str1 = "";
// var finder = document.getElementById("signInUserCity").value;
var finder = "jaipur";
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
            // str1 += ` <div class="card" style="width: 18rem;"><div class="card-body"><h5 class="card-title"> ${doc.data().name}</h5><h6>${doc.data().name + "  " + doc.data().name}</h6><hr><p class="card-text"> ${doc.data().name}</p><button onclick="editnote(${doc.data().name})" class="btn btn-primary" id="Editbtn">Edit<button><button onclick="deletenote(${doc.data().name})" class="btn btn-primary" id="Deletebtn">Delete<button></div></div> `;
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
})
.catch ((error) => {
  console.log(error.Message);
});


































































// var temposeller = "test";
// function submit(){

//     var finder=document.getElementById("signInUserCity");
// var docRef = db.collection("city").doc(finder);
// docRef.get().then((doc) => {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//         temposeller = doc.data().seller1;
//         console.log(temposeller);
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch((error) => {
//     console.log("Error getting document:", error);
// }).then(() => {
//     var docRef = db.collection("seller").doc(temposeller);
//     docRef.get().then((doc) => {
//         if (doc.exists) {
//             console.log("Document data:", doc.data().city);
//             document.getElementById("name").innerHTML = "city is " + doc.data().city;
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch((error) => {
//         console.log("Error getting document:", error);
//     });
// });
// console.log("flag");
// }
// //