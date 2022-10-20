<style>
    .registerForm {
        background-color: #EEEEEE;
        padding-left: 20px;
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    button.register {
        text-align: center;
        font-size: 16px;
        letter-spacing: 0;
        width: 166px;
        border-radius: 10px;
        outline: none;
        display: block;
        padding: 15px 20px;
        color: #ffffff;
    }

    .register#_signup_email {
        -webkit-text-size-adjust: 100%;
        vertical-align: baseline;
        line-height: normal;
        color: #222;
        font-weight: 400;
        background: transparent 0% 0% no-repeat padding-box;
        border: 0;
        border-radius: 4px;
        font-size: 14px;
        padding-left: 15px;
        padding-right: 15px;
        width: 270px;
        height: 48px;
        display: inline-block;
        flex: 2;
        margin-right: 10px;
    }

    .get_start {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 560px;
        margin: 0 auto;
    }

    .get_start button {
        flex: 1;
    }

    @media (max-width: 768px) {

        .register#_signup_email {
            margin-left: 10px;
            padding: 0;
        }

        .registerForm {
            margin: 0 auto;
        }
    }
</style>

<div class='block-search'>
    <form name="signupForm" class="registerForm get_start">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.4762 0.109863C19.7696 0.109863 22.253 2.79703 22.253 6.36046V13.153C22.253 14.9768 21.6082 16.6245 20.4362 17.7935C19.3849 18.8409 18.021 19.3957 16.492 19.3957H6.7472C5.22115 19.3957 3.85828 18.8419 2.80596 17.7935C1.63398 16.6245 0.989136 14.9768 0.989136 13.153V6.36046C0.989136 2.79703 3.47256 0.109863 6.766 0.109863H16.4762ZM16.4762 1.59339H6.766C4.27861 1.59339 2.47266 3.59813 2.47266 6.36046V13.153C2.47266 14.5802 2.96322 15.855 3.85333 16.7422C4.62081 17.5087 5.62269 17.9122 6.75017 17.9122H16.4762C16.4782 17.9102 16.4861 17.9122 16.492 17.9122C17.6205 17.9122 18.6214 17.5087 19.3888 16.7422C20.28 15.855 20.7695 14.5802 20.7695 13.153V6.36046C20.7695 3.59813 18.9636 1.59339 16.4762 1.59339ZM18.0349 6.17136C18.293 6.48884 18.2445 6.95566 17.9271 7.21478L13.5319 10.7871C12.976 11.2282 12.3114 11.4488 11.6478 11.4488C10.9861 11.4488 10.3265 11.2302 9.77459 10.793L5.33884 7.21676C5.01939 6.95961 4.96994 6.49181 5.22609 6.17334C5.48423 5.85587 5.95104 5.80543 6.26951 6.06158L10.7013 9.63392C11.2581 10.075 12.0424 10.075 12.6032 9.62996L16.9905 6.06356C17.3089 5.80345 17.7758 5.8529 18.0349 6.17136Z"
                fill="#4D4D4D" />
        </svg>
        <input type="email" name="email_required" class="interRegular input register email_input" id="_signup_email"
            required placeholder="<?php echo get_field('register_form')['place_holder'] ?>">

        <div class="g-recaptcha" data-sitekey="6LcYwkwUAAAAAEWwT82GohbCwPpT4HnlmbgxZ3wR">
        </div>
        <button type="submit"
            style="border: 1px solid <?php echo get_field('register_form')['button_color'] ?>;background-color: <?php echo get_field('register_form')['button_color'] ?>;"
            role="button" class="exoRegular sign-up-button register signup_cta" id="_signup_submit">
            <?php echo get_field('register_form')['button_text'] ?>
            <i class="d-none fa fa-spinner fa-spin"></i>
        </button>
    </form>
    <div class="email-msg-alert"></div>
</div>