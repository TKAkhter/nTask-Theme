$(function () {
  $ = window.jQuery;

  var modalSuccess = document.querySelector(".modal-success");
  var modalFail = document.querySelector(".modal-fail");
  var closeSuccess = document.querySelector(".modal-success .close-button");
  var closeFail = document.querySelector(".modal-fail .close-button");
  var columns = document.querySelectorAll(".wp-block-kadence-column");
  var redirectUrl = "https://www.ntaskmanager.com/";
  const liveDomain = "https://payment.ntaskmanager.com";
  const devDomain = "https://payments.naxxa.io";

  $(".rgister-redeem-code").submit(function (e) {
    e.preventDefault();
    let data = {
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      email: $("#email").val(),
      code: $("#code").val(),
    };
    $.ajax({
      url: liveDomain + "/api/payments/common/giveaway",
      contentType: "application/json",
      data: JSON.stringify(data),
      type: "POST",
      success: function (data) {
        toggleModal();
        modalSuccess.classList.toggle("show-modal");
      },
      error: function (err) {
        console.log("err=>", err);
        toggleModal();
        modalFail.classList.toggle("show-modal");
      },
    });
  });

  function toggleModal() {
    columns.forEach((item) => {
      item.classList.toggle("modal-hide-content");
    });
    document
      .querySelector(".wp-block-template-part")
      .classList.toggle("modal-hide-content");
  }

  closeSuccess.addEventListener("click", function () {
    modalSuccess.classList.toggle("show-modal");
    toggleModal();
    window.location.href = redirectUrl;
  });

  closeFail.addEventListener("click", function () {
    modalFail.classList.toggle("show-modal");
    toggleModal();
  });
});
