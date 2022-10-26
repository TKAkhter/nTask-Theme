<?php 
	$random_number = rand();
    // echo '<pre>'.print_r(get_field('multi_text_gradient'),TRUE).'</pre>';
    // echo '<pre>'.print_r($block['className'],TRUE).'</pre>';
    $heading = get_field('heading');
    $heading_tag = $heading['heading_tag'] ? $heading['heading_tag'] : 'h2';
    $font_size = $heading['font_size'] ? $heading['font_size'] : '44';
    $font_align = $heading['align'] ? $heading['align'] : 'left';
    $classes = isset($block['className']) ? $block['className'] : $block['id'];
?>

<div class="multi-text-gradient multi-text-gradient-<?php echo $random_number.' '.$classes; ?>">
	<<?php echo $heading_tag; ?> style="margin:0;">
        <?php 
            $i = 0;
            // Loop through rows.
            while( have_rows('multi_text_gradient') ) : the_row();
                // Load sub field value.
                $colors = get_sub_field('color_gradients');
                    $colors_gradient = '';
                    if( $colors ) {
                        foreach( $colors as $color ) {
                            $colors_gradient .= ', '.$color['color_pick'].' '.$color['color_percent'].'%';
                        }
                    } ?>
                <span class='text-gradient-before'><?php echo get_sub_field('text_before'); ?></span>
                <span class='text-gradient' style='-webkit-background-clip: text !important;-webkit-text-fill-color: transparent;background: linear-gradient(<?php echo get_sub_field('angle'); ?>deg <?php echo $colors_gradient; ?>);' ><?php echo get_sub_field('text_gradient'); ?></span>
                <span class='text-gradient-after'><?php echo get_sub_field('text_after'); ?></span>
                <?php $i++;
            // End loop.
            endwhile;
        ?>
    </<?php $heading_tag ?>>
</div>

<style>
    <?php echo '.multi-text-gradient-'.$random_number.' '.$heading_tag; ?> {
        font-size: <?php echo $font_size; ?>px;
        font-weight: bold;
        text-align: <?php echo $font_align; ?>;
	}
    <?php echo '.multi-text-gradient-'.$random_number.' '.$heading_tag. ' *'; ?> {
        font-family: 'Exo', sans-serif;
    }
	@media (max-width: 767px) {
	    <?php echo '.multi-text-gradient-'.$random_number.' '.$heading_tag; ?> {
	        text-align: center;
	    }
	}
</style>