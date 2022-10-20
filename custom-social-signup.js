$ = window.jQuery;

/**default.js */
$(function () {
  function toggleSignIn(loginProvider) {
    if (!firebase.auth().currentUser) {
      var provider =
        loginProvider == "facebook"
          ? new firebase.auth.FacebookAuthProvider()
          : loginProvider == "Twitter"
          ? new firebase.auth.TwitterAuthProvider()
          : loginProvider == "Google"
          ? new firebase.auth.GoogleAuthProvider()
          : null;
      if (loginProvider == "Google") {
        provider.addScope("https://www.googleapis.com/auth/userinfo.email");
      }
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          axios
            .post("https://app.ntaskmanager.com/api/account/sociallogin", {
              provider: loginProvider,
              token: result.credential.accessToken,
              tokenSecret: result.credential.secret,
            })
            .then((response) => {
              if (response.data.isRegistered) {
                window.location.href =
                  "https://app.ntaskmanager.com/sociallogin?token=" +
                  response.data.data.access_token;
              } else {
                window.location.href =
                  "https://app.ntaskmanager.com/welcome/" +
                  response.data.url +
                  "&tempToken=" +
                  response.data.data.access_token;
              }
            })
            .catch((error) => {});
          var token = result.credential.accessToken;
          var user = result.user;
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          var email = error.email;
          var credential = error.credential;
          console.log(errorCode);
          if (errorCode == "auth/popup-blocked") {
            auth.signInWithRedirect(provider);
          }
          if (errorCode === "auth/account-exists-with-different-credential") {
            alert(
              "You have already signed up with a different auth provider for that email."
            );
          } else {
            console.error(error);
          }
        });
    } else {
      firebase.auth().signOut();
    }
  }

  function initApp() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
      }
    });
    var facebookExistCondition = setInterval(function () {
      if ($("#btnFacebookHeader").length) {
        console.log("Exists!");
        clearInterval(facebookExistCondition);
        var hfb = document.getElementById("btnFacebookHeader");
        if (hfb) {
          hfb.addEventListener(
            "click",
            function () {
              toggleSignIn("facebook");
            },
            false
          );
        }
      }
    }, 100);
    var googeExistCondition = setInterval(function () {
      if ($("#btnGoogleHeader").length) {
        console.log("Exists!");
        clearInterval(googeExistCondition);
        var hgl = document.getElementById("btnGoogleHeader");
        if (hgl) {
          hgl.addEventListener(
            "click",
            function () {
              toggleSignIn("Google");
            },
            false
          );
        }
      }
    }, 100);
    var twitterExistCondition = setInterval(function () {
      if ($("#btnTwitterHeader").length) {
        console.log("Exists!");
        clearInterval(twitterExistCondition);
        var htw = document.getElementById("btnTwitterHeader");
        if (htw) {
          htw.addEventListener(
            "click",
            function () {
              toggleSignIn("Twitter");
            },
            false
          );
        }
      }
    }, 100);
    var gle = document.getElementById("_btnGoogle");
    if (gle) {
      gle.addEventListener(
        "click",
        function () {
          toggleSignIn("Google");
        },
        false
      );
    }
  }

  function initApp1() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
      } else {
      }
    });

    var fb = document.getElementById("btnFacebook");
    if (fb) {
      fb.addEventListener(
        "click",
        function () {
          toggleSignIn("facebook");
        },
        false
      );
    }
    var gl = document.getElementById("btnGoogle");
    if (gl) {
      gl.addEventListener(
        "click",
        function () {
          toggleSignIn("Google");
        },
        false
      );
    }
    var tw = document.getElementById("btnTwitter");
    if (tw) {
      tw.addEventListener(
        "click",
        function () {
          toggleSignIn("Twitter");
        },
        false
      );
    }
  }

  var firebaseConfig = {
    apiKey: "AIzaSyAwnlnUeILfPIKJG2fUl9JGwhWXa_Dc1bo",
    authDomain: "ntask-ed738.firebaseapp.com",
    databaseURL: "https://ntask-ed738.firebaseio.com",
    projectId: "ntask-ed738",
    storageBucket: "ntask-ed738.appspot.com",
    messagingSenderId: "224589479402",
    appId: "1:224589479402:web:3bdb058b9694b300",
  };
  firebase.initializeApp(firebaseConfig);
  $(window).bind("scroll click touchstart", function () {
    if ($("#awesome").length == 0) {
      $("head").append(
        '<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" id="awesome"/>'
      );
    }
  });

  initApp();
  // initApp1();

  $(document).delegate(".bar_menu", "click", function (e) {
    $(".mobile_nav").addClass("oppenned"), e.stopPropagation();
  });
  $(".close").click(function (e) {
    $(".open").removeClass("oppenned"), e.stopPropagation();
    $(".mobile_nav").removeClass("oppenned"), e.stopPropagation();
  });
});