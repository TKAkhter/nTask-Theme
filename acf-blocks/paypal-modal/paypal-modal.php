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
  <div class="modal">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2>Hello, I am a modal!</h2>
      <p>Click in the top-right button to close the modal, os just click outside the modal. You can add even a
        shortcode!
      </p>
      <div id="paypal-button-container-<?php echo $random_number;?>"></div>
    </div>
  </div>
</div>

<script src="https://www.paypal.com/sdk/js?client-id=AS-3LBm0Z8WxHiZuc55Iailc9MsDrC1GRyimTkMxOZMSGzhIas__nfewPxZN71e5DxTsXP70KtXFIwgj&currency=USD" data-namespace = "<?php echo $paypal_sdk;?>"></script>
<!-- Set up a container element for the button -->

<script>
  var payload = {
    "amount": <?php echo $tier[get_field('tier_tag')]; ?>
  }
  console.log("🚀 ~ file: paypal-modal.php ~ line 33 ~ payload", payload);
  
  <?php echo $paypal_sdk; ?>.Buttons({
    // Sets up the transaction when a payment button is clicked
    createOrder: function (data, actions) {
      return fetch("<?php echo $payment_gateway; ?>/api/payments/paypal/orders", {
          method: "post",
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
          // use the "body" param to optionally pass additional order information
          // like product ids or amount
        })
        .then((response) => response.json())
        .then((order) => order.id);
    },
    // Finalize the transaction after payer approval
    onApprove: function (data, actions) {
      return fetch(`<?php echo $payment_gateway; ?>/api/payments/paypal/orders/${data.orderID}/<?php echo get_field('tier_tag'); ?>/capture`, {
          method: "post",
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then((response) => response.json())
        .then((orderData) => {
          // Successful capture! For dev/demo purposes:
          console.log(
            "Capture result",
            orderData,
            JSON.stringify(orderData, null, 2)
          );
          var transaction =
            orderData.purchase_units[0].payments.captures[0];
          // alert(
          //   "Transaction " +
          //   transaction.status +
          //   ": " +
          //   transaction.id +
          //   "\n\nSee console for all available details"
          // );
          // When ready to go live, remove the alert and show a success message within this page. For example:
          // var element = document.getElementById('paypal-button-container');
          // element.innerHTML = '<h3>Thank you for your payment!</h3>';
          // Or go to another URL:  actions.redirect('thank_you.html');
        });
    },
  })
  .render("#paypal-button-container-<?php echo $random_number;?>");
</script>

<script>
  $(function () {
    $ = window.jQuery;
    $('<?php echo get_field("target_button");?>').click(function (e) {
      e.preventDefault();
      console.log(e);
      console.log($(".paypal-modal-<?php echo $random_number;?> .trigger"));
      $(".paypal-modal-<?php echo $random_number;?> .trigger").trigger("click");
      payload = {
        "amount": <?php echo $tier[get_field('tier_tag')]; ?>
      }
      console.log("🚀 ~ file: paypal-modal.php ~ line 98 ~ payload", payload);
    });
  });
</script>
