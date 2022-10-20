$(function () {
    $ = window.jQuery;
    
    $(".registerForm").submit(function (e) {
      var userName = "";
      //Trim Email input values before submitting form data
      userName = $(e.target[0]).val().trim();
      $(e.target[1]).children().removeClass("d-none");
      $(e.target[0]).val("");
      $(e.target[0]).val(userName);
      $("#loadDiv").show();
      var anyErrorFound = _validateSignupFormControls(userName);
      if (anyErrorFound) {
        e.preventDefault(); // If the method returns it will never get to the e.preventdefault at the end of this method. And hence the form will submit. Which is not the goal here.
        return;
      } else {
        $("#loadDiv").show(); // We need to start showing the loader as soon as the submit request starts.
      }
      partnerStackSignUp(userName);
      _sendSignUpRequest(userName);
      e.preventDefault();
    });
    $("#_registerPopupForm").submit(function (e) {
      var userName = "";
      //Trim Email input values before submitting form data
      userName = $("#_signup_popup_email").val().trim();
      $("#_signup_submit .fa-spinner").removeClass("d-none");
      $("#_signup_popup_email").val("");
      $("#_signup_popup_email").val(userName);
      $("#loadDiv").show();
      var anyErrorFound = _validateSignupFormControls(userName);
      if (anyErrorFound) {
        e.preventDefault(); // If the method returns it will never get to the e.preventdefault at the end of this method. And hence the form will submit. Which is not the goal here.
        return;
      } else {
        $("#loadDiv").show(); // We need to start showing the loader as soon as the submit request starts.
      }
      partnerStackSignUp(userName);
      _sendSignUpRequest(userName);
      e.preventDefault();
    });
    
    $("#_signup_email").focus(function () {
      $("#email-msg").addClass("visual-hidden");
      $(".email-msg-alert").empty();
      $(".email-msg-alert").css({
        border: "none",
        padding: "0",
        "margin-bottom": "0",
      });
    });
    
    $("#signup_promo_close, .signup_mask-layout-4").click(function () {
      $(".signup_mask-layout-4").addClass("signup_hideClass"),
        $("#_signup_email").val(""),
        $("body").css("overflow-y", "visible");
      $(".email-msg-alert").empty();
      $(".email-msg-alert").css({
        border: "none",
        padding: "0",
        "margin-bottom": "0",
      });
    });
    
    $(".promo_signup_btn a").click(function () {
      $(".promo_signup").css("display", "none");
    });
    
    $(".signup_mask-layout-4, .promo_close, #signup_promo_close").click(
      function () {
        $(".promo_signup").css("display", "none"),
          $(".promo_signup").addClass("hideClass"),
          $('#_signup_popup_email').val('')
          $("body").css("overflow-y", "visible");
      }
    );
    
    $(".sign-up-link").click(function () {
      var url = window.location.href;
      var getplan = $(this).attr("aria-label");
      if (getplan) {
        localStorage.setItem("plan", getplan);
      } else {
        localStorage.setItem("plan", 'businesstrial');
      }
      $(".promo_signup").removeClass("signup_hideClass");
      $(".promo_signup").css("display", "block");
      $(".signup_mask-layout-4").removeClass("signup_hideClass");
      $("body").css("overflow-y", "hidden");
      $("#registerPopupeMail").val("");
      $("#registerPopupeMail").focus();
    });
    
    $("#get_started_btn").click(function () {
      var e = $("#get_started_email").val();
      $(".sign-up-link").trigger("click");
      $("#_signup_email").val(e);
    });
    
    $(document).keydown(function (e) {
      if (e.keyCode == 27) {
        $(".signup_mask-layout-4").addClass("signup_hideClass");
        $(".promo_signup").css("display", "none"),
          $(".promo_signup").addClass("hideClass"),
          $("body").css("overflow-y", "visible");
        $(".email-msg-alert").empty();
        $(".email-msg-alert").css({
          border: "none",
          padding: "0",
          "margin-bottom": "0",
        });
      }
    });
    
    function _validateEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    }
    
    function _sendSignUpRequest(username) {
      var liveDomain = "https://app.ntaskmanager.com/";
      var WebsiteDomain = window.location.host + "/";
      // var WebsiteDomain = "https://www.ntaskmanager.com/";
      var plan = localStorage.getItem("plan") || "businesstrial";
    
      var apiCall = "api/account/register";
      var userName = username;
      var loginCampaign = window.location.pathname;
    
      // $('#hiddenEmail').val(userName);
      var messsage = "";
      var utmSource = null;
      var url = window.location.href;
      var regex = new RegExp("[?&]utm_source(=([^&#]*)|&|#|$)");
      var results = regex.exec(url);
      if (results) {
        if (results[2]) {
          utmSource = decodeURIComponent(results[2].replace(/\+/g, " "));
        }
      }
      if (_validateEmail(userName)) {
        $(".email-msg-alert").empty();
        if (plan == "businesstrial") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "businesstrial_from_website",
          });
        } else if (plan == "free") {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "free_from_website",
          });
        } else {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            event: "premiumtrial_from_website",
          });
        }
    
        $.ajax({
          url: liveDomain + "api/account/ValidateUserEmailWithDetail",
          data: {
            email: userName,
            plan: plan,
          },
          crossDomain: !0,
          type: "GET",
          success: function (data) {
            var url = window.location.href;
            ga("create", "UA-96014584-1", "auto");
            ga("send", "event", {
              eventCategory: "Website Signup",
              eventAction: "register",
              eventLabel: "Register User",
            });
            window.location = "/verify-email";
          },
          error: function (data) {
            $("#_signup_submit .fa-spinner").addClass("d-none");
            var res = data.responseJSON.message;
            $(".email-msg-alert").html(
              "<div class='alert alert-danger alert-dismissable'>" + res + "</div>"
            );
            $(".email-msg-alert").css({
              border: "2px solid red",
              padding: "18px",
              "margin-bottom": "5px",
            });
            $("#loadDiv").hide(); // Now that the submit request has returned we should hide the loader again.
          },
        });
      } else {
        $("#_signup_submit .fa-spinner").addClass("d-none");
        $(".email-msg-alert").html(
          "<div class='alert alert-danger alert-dismissable'>The email address entered is invalid.</div>"
        );
        $(".email-msg-alert").css({
          border: "2px solid red",
          padding: "18px",
          "margin-bottom": "5px",
        });
        $("#loadDiv").hide(); // Now that the submit request has returned we should hide the loader again.
      }
    }
    
    function _validateSignupFormControls(email) {
      var anyErrorFound = !1;
      if (email == undefined || email.trim() == "" || email == null) {
        $("#email-msg").addClass("visual-hidden");
        anyErrorFound = !0;
        $("#loadDiv").hide();
      } else {
        $("#email-msg").addClass("visual-hidden");
      }
      return anyErrorFound;
    }
    
    function partnerStackSignUp(userName) {
      // 1. Populate the growsumo.data object
      growsumo.data.name = userName;
    
      growsumo.data.email = userName;
      // In this case, email is how I uniquely identify my customers
      growsumo.data.customer_key = userName;
    
      // Register the signup with PartnerStack
      growsumo.createSignup();
    }
});