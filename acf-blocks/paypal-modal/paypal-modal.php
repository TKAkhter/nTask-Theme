<?php
  $tier = array(
    'price_1LuDdWAkv0ZzzVHbIW4G5Xwo'=> 49.00,
    'price_1LuDduAkv0ZzzVHbkdRpBuGD'=> 99.00,
    'price_1LuDeDAkv0ZzzVHbGZV4jOhn'=> 149.00,
    'price_1LuDecAkv0ZzzVHbgcHv4sb6'=> 249.00
  );
 $random_number = rand();
 $paypal_sdk = "paypal_sdk".$random_number;
 $payment_gateway = 'https://payments.naxxa.io';
//  echo '<pre>'.print_r(get_field('tier_tag'),TRUE).'</pre>';
?>

<div class="paypal-modal paypal-modal-<?php echo $random_number;?>">
  <button class="btn trigger d-none">Click here</button>
  <div class="modal modal-order">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Hello, I am a modal!</h2>
      <p>Click in the top-right button to close the modal, os just click outside the modal. You can add even a
        shortcode!
      </p>
      <div id="paypal-button-container-<?php echo $random_number;?>"></div>
    </div>
  </div>
  <div class="modal modal-success modal-success-<?php echo $random_number; ?>">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="tick">
        <img src="<?php echo get_theme_file_uri();?>/acf-blocks/paypal-modal/assets/tick-icon.svg">
      </div>
      <h3>Transaction Successful</h3>
      <p>please check your email to complete the signup.<br>Check your spam / junk folder if you don't see the email in your inbox.<br>If you already have an account please login</p>
    </div>
  </div>
  <div class="modal modal-fail modal-fail-<?php echo $random_number; ?>">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="cross">
        <img src="<?php echo get_theme_file_uri();?>/acf-blocks/paypal-modal/assets/cross-icon.svg">
      </div>
      <h3>Transaction Unsuccessful</h3>
      <p>Something went Wrong. Please try again later</p>
    </div>
  </div>
</div>

<script src="https://www.paypal.com/sdk/js?client-id=AS-3LBm0Z8WxHiZuc55Iailc9MsDrC1GRyimTkMxOZMSGzhIas__nfewPxZN71e5DxTsXP70KtXFIwgj&currency=USD" data-namespace = "<?php echo $paypal_sdk;?>"></script>

<script>
  var payload = {
    "amount": <?php echo $tier[get_field('tier_tag')]; ?>
  }

  var modalSuccess = document.querySelector(".modal-success-<?php echo $random_number; ?>");
  var modalFail = document.querySelector(".modal-fail-<?php echo $random_number; ?>");
  var closeSuccess = document.querySelector(".modal-success-<?php echo $random_number; ?> .close-button");
  var closeFail = document.querySelector(".modal-fail-<?php echo $random_number; ?> .close-button");

  <?php echo $paypal_sdk; ?>.Buttons({
    createOrder: function (data, actions) {
      return fetch("<?php echo $payment_gateway; ?>/api/payments/paypal/orders", {
          method: "post",
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((order) => order.id);
    },
    onApprove: function (data, actions) {
      return fetch(`<?php echo $payment_gateway; ?>/api/payments/paypal/orders/${data.orderID}/<?php echo get_field('tier_tag'); ?>/capture`, {
          method: "post",
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((orderData) => {
          // console.log(
          //   "Capture result",
          //   orderData,
          //   JSON.stringify(orderData, null, 2)
          // );
          modalSuccess.classList.toggle("show-modal");
          closeSuccess.addEventListener("click", event => {
            modalSuccess.classList.remove("show-modal");
          });
          window.addEventListener("click", event => {
            if (event.target === modalSuccess) {
              modalSuccess.classList.remove("show-modal");
            }
          });
          var transaction = orderData.purchase_units[0].payments.captures[0];
        })
        .catch((error) => {
          modalFail.classList.toggle("show-modal");
          closeFail.addEventListener("click", event => {
            modalFail.classList.remove("show-modal");
          });
          window.addEventListener("click", event => {
            if (event.target === modalFail) {
              modalFail.classList.remove("show-modal");
            }
          });
        });
    },
    onError: function (err) {
      modalFail.classList.toggle("show-modal");
      closeFail.addEventListener("click", event => {
        modalFail.classList.remove("show-modal");
      });
      modalFail.addEventListener("click", event => {
        modalFail.classList.remove("show-modal");
      });
    }
  })
  .render("#paypal-button-container-<?php echo $random_number;?>");
</script>

<script>
  $(function () {
    $ = window.jQuery;
    $('<?php echo get_field("target_button");?>').click(function (e) {
      e.preventDefault();
      $(".paypal-modal-<?php echo $random_number;?> .trigger").trigger("click");
      payload = {
        "amount": <?php echo $tier[get_field('tier_tag')]; ?>
      }
    });
  });
</script>
