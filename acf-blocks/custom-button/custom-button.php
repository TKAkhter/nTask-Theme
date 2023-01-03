<?php 
	$random_number = rand();
	$get_url = get_field('link');
	// echo '<pre>'.print_r(get_field('link') ,TRUE).'</pre>';
	if($get_url) {
		$href = $get_url['url'] ? 'href="'.$get_url['url'].'"' : 'href="javascript:void(0)"';
	}
?>

<div class="set-align">
	<a id="custom-button-<?php echo $random_number ?>" class="custom-button" <?php echo $href; ?>
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
	<!-- <svg xmlns="http://www.w3.org/2000/svg" width="12.138" height="10.621" viewBox="0 0 12.138 10.621">
 		<path id="arrow" d="M4.759,11.069h9L11,14.376a.76.76,0,1,0,1.168.971h0L15.963,10.8a.869.869,0,0,0,.068-.114c0-.038.038-.061.053-.1a.729.729,0,0,0,0-.546c0-.038-.038-.061-.053-.1a.869.869,0,0,0-.068-.114L12.17,5.273A.76.76,0,0,0,11,6.243l0,0,2.754,3.307h-9a.759.759,0,1,0,0,1.517Z" transform="translate(-4 -5)" fill="<?php echo get_field('color') ?>"/>
	</svg> -->
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