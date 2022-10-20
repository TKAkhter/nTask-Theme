<?php 
    $random_number = rand();
    //echo '<pre>'.print_r(get_field('heading'),TRUE).'</pre>';
    $heading = get_field('heading');
    $cta_type = get_field('cta_type');
    $cta_type = $cta_type ? $cta_type : 'desktop';
    $heading_tag = $heading['heading_tag'] ? $heading['heading_tag'] : 'h2';
    $font_size = $heading['font_size'] ? $heading['font_size'] : '44';
    $font_align = $heading['align'] ? $heading['align'] : 'left';
?>

<div class="wp-block-kadence-rowlayout alignwide <?php echo $cta_type; ?>">
    <div id="kt-layout-id_1011ca-06" class="kt-row-layout-inner kt-layout-id_1011ca-06">
        <div
            class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-middle kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
            <div class="wp-block-kadence-column inner-column-1 kadence-column_680b7a-5e">
                <div class="kt-inside-inner-col">
                    <div class="wp-block-kadence-rowlayout alignnone">
                        <div id="kt-layout-id_1fb2ab-32" class="kt-row-layout-inner kt-layout-id_1fb2ab-32">
                            <div
                                class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                <div class="wp-block-kadence-column inner-column-1 kadence-column_45c0ff-70">
                                    <div class="kt-inside-inner-col">
                                        <div class="wp-block-kadence-rowlayout alignwide social-signup-cta">
                                            <div id="kt-layout-id_4762c7-a8"
                                                class="kt-row-layout-inner kt-row-has-bg kt-layout-id_4762c7-89">
                                                <div
                                                    class="kt-row-column-wrap kt-has-2-columns kt-gutter-default kt-v-gutter-default kt-row-valign-middle kt-row-layout-equal kt-tab-layout-row kt-m-colapse-left-to-right kt-mobile-layout-row  kt-custom-first-width-45  kt-custom-second-width-55">
                                                    <div
                                                        class="wp-block-kadence-column inner-column-1 kadence-column_f38174-fd overflow-hidden">
                                                        <div class="kt-inside-inner-col">
                                                            <div
                                                                class="custom-text-gradient custom-text-gradient-<?php echo $random_number; ?>">
                                                                <<?php echo $heading_tag; ?> style="margin:0;">
                                                                    <?php 
                                                                    $i = 0;
                                                                    // Loop through rows.
                                                                    while( have_rows('multi_text_gradient') ):
                                                                        the_row();
                                                                        // Load sub field value.
                                                                        $colors = get_sub_field('color_gradients');
                                                                        $colors_gradient = '';
                                                                        if( $colors ) {
                                                                            foreach( $colors as $color ) {
                                                                                $colors_gradient .= ', '.$color['color_pick'].' '.$color['color_percent'].'%';
                                                                            }
                                                                        } ?>
                                                                        <?php echo get_sub_field('text_before'); ?>
                                                                        <span
                                                                            style='background: linear-gradient(<?php echo get_sub_field('angle'); ?>deg <?php echo $colors_gradient; ?>);'>
                                                                            <?php echo get_sub_field('text_gradient'); ?>
                                                                        </span>
                                                                        <?php echo get_sub_field('text_after');
                                                                        $i++;
                                                                        // End loop.
                                                                    endwhile; ?>
                                                                </<?php $heading_tag ?>>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="wp-block-kadence-column inner-column-2 kadence-column_839d3a-32 tab-align-center">
                                                        <div class="kt-inside-inner-col">
                                                            <div class="block-search">
                                                                <form name="signupForm"
                                                                    class="get_start registerForm">
                                                                    <input type="email" name="email_required"
                                                                        class="interRegular input register email_input"
                                                                        id="_signup_email" required=""
                                                                        placeholder="Enter your email address">

                                                                    <div class="g-recaptcha"
                                                                        data-sitekey="6LcYwkwUAAAAAEWwT82GohbCwPpT4HnlmbgxZ3wR">
                                                                    </div>
                                                                    <button type="submit"
                                                                        style="background-color: #00CC90;" role="button"
                                                                        class="exoRegular sign-up-button register signup_cta"
                                                                        id="_signup_submit">
                                                                        <?php echo get_field('button_text') ?> <i
                                                                            class="d-none fa fa-spinner fa-spin"></i>
                                                                    </button>
                                                                </form>
                                                                <div class="email-msg-alert"></div>
                                                            </div>
                                                            <p class="kt-adv-heading_9ccf0d-af wp-block-kadence-advancedheading"
                                                                data-kb-block="kb-adv-heading_9ccf0d-af"><strong>*100%
                                                                    free to get started. No credit card
                                                                    required.</strong></p>
                                                            <div class="home_head_social ">
                                                                <span class="interRegular">Or sign up using:</span>
                                                                <ul class="slides social-buttons">
                                                                    <li id="btnFacebookHeader">
                                                                        <div class="btn_social_signup">
                                                                            <img width="20" height="20"
                                                                                src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconFacebook.svg"
                                                                                alt="Facebook signup"
                                                                                title="Signup with Facebook"
                                                                                data-lazy-src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconFacebook.svg"
                                                                                data-ll-status="loaded"
                                                                                class="entered lazyloaded"><noscript><img
                                                                                    width="20" height="20"
                                                                                    src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconFacebook.svg"
                                                                                    alt="Facebook signup"
                                                                                    title="Signup with Facebook"></noscript>
                                                                            <a href="javascript:void(0)"></a>
                                                                        </div>
                                                                    </li>
                                                                    <li id="btnGoogleHeader">
                                                                        <div class="btn_social_signup">
                                                                            <img width="20" height="20"
                                                                                src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconGoogle.svg"
                                                                                alt="Google signup"
                                                                                title="Signup with Google"
                                                                                data-lazy-src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconGoogle.svg"
                                                                                data-ll-status="loaded"
                                                                                class="entered lazyloaded"><noscript><img
                                                                                    width="20" height="20"
                                                                                    src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconGoogle.svg"
                                                                                    alt="Google signup"
                                                                                    title="Signup with Google"></noscript>
                                                                            <a href="javascript:void(0)"></a>
                                                                        </div>
                                                                    </li>
                                                                    <li id="btnTwitterHeader">
                                                                        <div class="btn_social_signup">
                                                                            <img width="20" height="20"
                                                                                src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconTwitter.svg"
                                                                                alt="Twitter signup"
                                                                                title="Signup with Twitter"
                                                                                data-lazy-src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconTwitter.svg"
                                                                                data-ll-status="loaded"
                                                                                class="entered lazyloaded"><noscript><img
                                                                                    width="20" height="20"
                                                                                    src="<?php echo site_url(); ?>/wp-content/uploads/2022/01/iconTwitter.svg"
                                                                                    alt="Twitter signup"
                                                                                    title="Signup with Twitter"></noscript>
                                                                            <a href="javascript:void(0)"></a>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="wp-block-kadence-rowlayout alignnone">
                        <div id="kt-layout-id_fddf69-95"
                            class="kt-row-layout-inner kt-row-has-bg kt-layout-id_fddf69-95">
                            <div
                                class="kt-row-column-wrap kt-has-1-columns kt-gutter-default kt-v-gutter-default kt-row-valign-top kt-row-layout-equal kt-tab-layout-inherit kt-m-colapse-left-to-right kt-mobile-layout-row">
                                <div class="wp-block-kadence-column inner-column-1 kadence-column_cdd18f-f3">
                                    <div class="kt-inside-inner-col">
                                        <div class="wp-block-kadence-spacer aligncenter kt-block-spacer-_d90d8b-ec">
                                            <div class="kt-block-spacer kt-block-spacer-halign-center"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* Custom Text Gradient */
<?php echo '.custom-text-gradient-'.$random_number.' '.$heading_tag;?> {
    font-size: <?php echo $font_size;
    ?>px;
    font-weight: bold;
    font-family: 'Exo', sans-serif;
    text-align: <?php echo $font_align;
    ?>;
}

<?php echo '.custom-text-gradient-'.$random_number.' span';?> {
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent;
}

@media (max-width: 767px) {
    <?php echo '.custom-text-gradient-'.$random_number.' '.$heading_tag;?> {
        text-align: center;
    }
}
</style>