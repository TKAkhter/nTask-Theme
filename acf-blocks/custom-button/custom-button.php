<?php 
	$random_number = rand();
	$get_url = get_field('link');
	$class_name = $block['className'] ? $block['className'] : '';
	$href = "javascript:void(0)";
	if($get_url) {
		$href = $get_url['url'] ? $get_url['url'] : "javascript:void(0)";
	}
?>

<div class="set-align">
	<a id="custom-button-<?php echo $random_number ?>" class="custom-button <?php echo $class_name; ?>" href="<?php echo $href; ?>"
		style="color:<?php echo get_field('color') ?>">
		<span>
			<?php echo get_field('text') ?>
		</span>
	</a>
	<svg style="display:inline-block;vertical-align:middle" viewBox="0 0 192 512" height="1em" width="1em"
		fill="<?php echo get_field('color') ?>" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z">
		</path>
	</svg>
</div>

<style>
	<?php echo '#custom-button-'.$random_number; ?> {
		text-decoration: none;
		font-family: 'Exo', sans-serif !important;
		font-weight: 500;
		font-size: 16px;
		display:inline-block;
		align-items: center;
		cursor: pointer;
	}
	<?php echo '#custom-button-'.$random_number.':after'; ?> {
		display:block;	
		content: '';
		border-bottom: solid 3px <?php echo get_field('color') ?>;
		transform: scaleX(0);  
		transition: transform 250ms ease-in-out;
	}
	<?php echo '#custom-button-'.$random_number.':hover:after'; ?> {
		transform: scaleX(1);
	}
	.custom-button-center .set-align {
		text-align: center;
	}
</style>