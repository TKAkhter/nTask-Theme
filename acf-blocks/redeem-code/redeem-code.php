<div class='block-redeem-code'>
  <form name="signupForm" class="rgister-redeem-code redeem-code-form">
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
      <label for="code">Code</label><br>
      <input type="text" id="code" name="code" required placeholder="XXXX-XXXX-XXXX-XXXX"><br>
    </div>
    <div>
      <button type="submit" class="submit" value="Submit">Submit</button>
    </div>
  </form>
  <div class="modal modal-success">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="tick">
        <img src="<?php echo get_theme_file_uri();?>/acf-blocks/paypal-modal/assets/tick-icon.svg">
      </div>
      <h3>Transaction Successful</h3>
      <p>Please check your email to complete the signup process.<br>Check your Spam/Junk folder if you don't see the
        email in your inbox.<br>If you already have an account, please login.</p>
    </div>
  </div>
  <div class="modal modal-fail">
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <div class="cross">
        <img src="<?php echo get_theme_file_uri();?>/acf-blocks/paypal-modal/assets/cross-icon.svg">
      </div>
      <h3>Transaction Unsuccessful</h3>
      <p>Need assistance? Talk to us via the live chat or send us an email at <a
          href="mailto:support@ntaskmanager.com">support@ntaskmanager.com</a></p>
    </div>
  </div>
</div>