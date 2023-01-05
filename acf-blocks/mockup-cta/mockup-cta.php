<?php

// echo '<pre>'.print_r(get_field('background_color'),TRUE).'</pre>';

?>

<div class="mockup-cta">
    <div class="row <?php echo get_field('mode'); ?>">
        <div class="col text-section" style="background-color: <?php echo get_field('background_color'); ?>;">
            <p class="heading"><?php echo get_field('heading'); ?></p>
            <p class="description"><?php echo get_field('description'); ?></p>
            <div class="button-section">
                <a class="button" style="background-color: <?php echo get_field('button_color'); ?>;" href="javascript:void(0)"><?php echo get_field('button_text'); ?></a>
            </div>
        </div>
        <div class="col">
            <img src="<?php echo get_field('mockup_image'); ?>" alt="">
        </div>
    </div>
</div>