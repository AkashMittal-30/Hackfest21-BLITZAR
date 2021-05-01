const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

//sign in funciton using email
$("#signInBtn").click(function () {
  email = $("#signInUserEmail").val();
  password = $("#signInUserPassword").val();
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      alert("sign in successfull");
      console.log(user);
      location.assign(window.location.pathname+"/../home.html")
    })
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