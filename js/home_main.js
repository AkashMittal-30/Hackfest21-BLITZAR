


































































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