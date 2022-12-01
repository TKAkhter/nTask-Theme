<?php
  $random_number = rand();
  $paypal_sdk = "paypal_sdk".$random_number;
  $tier = array(
    'Lifetime_Tier_2022_1'=> 49.00,
    'Lifetime_Tier_2022_2'=> 99.00,
    'Lifetime_Tier_2022_3'=> 149.00,
    'Lifetime_Tier_2022_4'=> 249.00,
    'Lifetime_Tier_2022_5'=> 499.00
  );
  $payment_gateway =  'https://payment.ntaskmanager.com';
  $client_id = 'AQJT9MZ6AuSk7RMmaYSuKboaVyUnNWpzdNK0-mJ81nev65-w4w5_pSRAvXnHU-1b1OvKJcG_xO4IqiEl';
  $tier_dev = array(
    'price_1LuDdWAkv0ZzzVHbIW4G5Xwo'=> 49.00,
    'price_1LuDduAkv0ZzzVHbkdRpBuGD'=> 99.00,
    'price_1LuDeDAkv0ZzzVHbGZV4jOhn'=> 149.00,
    'price_1LuDecAkv0ZzzVHbgcHv4sb6'=> 249.00
  );
  $payment_gateway_dev = 'https://payments.naxxa.io';
  $client_id_dev = 'AS-3LBm0Z8WxHiZuc55Iailc9MsDrC1GRyimTkMxOZMSGzhIas__nfewPxZN71e5DxTsXP70KtXFIwgj';
 //echo '<pre>'.print_r(get_field('tier_tag'),TRUE).'</pre>';
?>

<div class="paypal-modal paypal-modal-<?php echo $random_number;?>">
  <button class="btn trigger d-none">Click here</button>
  <div class="modal modal-order">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <form name="PaypalForm" class="register-paypal paypal-form <?php echo $paypal_sdk; ?>">
        <h3>Let's set up your nTask account!</h3>
        <p>Enter the details you wish to use with your new nTask Lifetime account.</p>
        <p>If you're already using a trial or free account, enter the details for that account.</p>
        <div>
          <label for="firstName">First name</label><br>
          <input type="text" id="firstName" name="firstName" required Placeholder="John"><br>
        </div>
        <div>
          <label for="lastName">Last name</label><br>
          <input type="text" id="lastName" name="lastName" required Placeholder="Doe"><br>
        </div>
        <div>
          <label for="email">Email</label><br>
          <input type="email" id="email" name="email" required placeholder="john@doe@test.com"><br>
        </div>
        <div>
          <button type="submit" class="submit" value="Submit">Submit</button>
        </div>
      </form>
      <div style="display: none;" class="payment-method <?php echo $paypal_sdk; ?>">
        <h3>How would you like to pay?</h3>
        <p>Choose your preferred payment method.</p>
        <div id="paypal-button-container-<?php echo $random_number;?>"></div>
      </div>

    </div>
  </div>
  <div class="modal modal-success modal-success-<?php echo $random_number; ?>">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="tick">
        <img src="<?php echo get_theme_file_uri();?>/acf-blocks/paypal-modal/assets/tick-icon.svg">
      </div>
      <h3>Transaction Successful</h3>
      <p>Please check your email to complete the Signup.<br>
      Check your Spam or Junk folder if you don't see the email in your Inbox.<br>
      If you already have an nTask account, you just need to login.</p>
    </div>
  </div>
  <div class="modal modal-fail modal-fail-<?php echo $random_number; ?>">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="cross">
        <img src="<?php echo get_theme_file_uri();?>/acf-blocks/paypal-modal/assets/cross-icon.svg">
      </div>
      <h3>Transaction Unsuccessful</h3>
      <p>Need assistance? Talk to us via the live chat or send us an email at <a href="mailto:support@ntaskmanager.com">support@ntaskmanager.com</a></p>
    </div>
  </div>
</div>

<script src="https://www.paypal.com/sdk/js?client-id=<?php echo $client_id; ?>&currency=USD" data-namespace = "<?php echo $paypal_sdk;?>"></script>

<script>
  var userData;
  $(".paypal-form.<?php echo $paypal_sdk; ?>").submit(function (e) {
    e.preventDefault();
    userData = {
      firstName: $(".<?php echo $paypal_sdk; ?> #firstName").val(),
      lastName: $(".<?php echo $paypal_sdk; ?> #lastName").val(),
      email: $(".<?php echo $paypal_sdk; ?> #email").val(),
    };
    $(".<?php echo $paypal_sdk; ?> #firstName").val("");
    $(".<?php echo $paypal_sdk; ?> #lastName").val("");
    $(".<?php echo $paypal_sdk; ?> #email").val("");
    $(".paypal-form.<?php echo $paypal_sdk; ?>").hide("slow", function() {
      $(".payment-method.<?php echo $paypal_sdk; ?>").show("slow");
    })
  });

  var payload = {
    "amount": <?php echo $tier[get_field('tier_tag')] ? $tier[get_field('tier_tag')] : 0; ?>
  }
  var plan =  "<?php echo get_field('tier_tag'); ?>";
  var modalSuccess = document.querySelector(".modal-success-<?php echo $random_number; ?>");
  var modalFail = document.querySelector(".modal-fail-<?php echo $random_number; ?>");
  var closeSuccess = document.querySelector(".modal-success-<?php echo $random_number; ?> .close-button");
  var closeFail = document.querySelector(".modal-fail-<?php echo $random_number; ?> .close-button");

  <?php echo $paypal_sdk; ?>.Buttons({
    createOrder: function (data, actions) {
      return fetch("<?php echo $payment_gateway; ?>/api/payments/paypal/orders", {
          method: "post",
          body: JSON.stringify({
            "amount": localStorage.getItem("amount")}
          ),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((order) => order.id);
    },
    onApprove: function (data, actions) {
      return fetch(`<?php echo $payment_gateway; ?>/api/payments/paypal/orders/${data.orderID}/${localStorage.getItem("plan")}/capture`, {
          method: "post",
          body: JSON.stringify(userData),
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
      localStorage.setItem("amount","<?php echo $tier[get_field('tier_tag')] ?>");
      localStorage.setItem("plan","<?php echo get_field('tier_tag'); ?>");
      payload = {
        "amount": <?php echo $tier[get_field('tier_tag')]; ?>
      }
      plan = "<?php echo get_field('tier_tag'); ?>";
    });
  });
</script>