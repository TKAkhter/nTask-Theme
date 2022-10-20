<?php 
	$random_number = rand();
?>

<div class="custom-text-gradient custom-text-gradient-<?php echo $random_number; ?>">
	<h2 style="margin:0;">
        <?php echo get_field('text_before'); ?>
        <span><?php echo get_field('text_gradient'); ?></span>
        <?php echo get_field('text_after'); ?>
    </h2>
</div>

<?php $colors = get_field('color_gradients');
    $colors_gradient = '';
    if( $colors ) {
        foreach( $colors as $color ) {
            $colors_gradient .= ', '.$color['color_pick'].' '.$color['color_percent'].'%';
        }
    }
?>

<style>
    <?php echo '.custom-text-gradient-'.$random_number.' h2'; ?> {
        font-size: 52px;
        font-weight: bold;
        font-family: 'Exo', sans-serif;
	}
	<?php echo '.custom-text-gradient-'.$random_number.' span'; ?> {
        background: linear-gradient(<?php echo get_field('angle'); ?>deg <?php echo $colors_gradient; ?>);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
	}
	@media (max-width: 767px) {
	    <?php echo '.custom-text-gradient-'.$random_number.' h2'; ?> {
	        text-align: center;
	    }
	}
</style>