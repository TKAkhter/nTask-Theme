<?php

$rows = get_field('price_dropdown');
$price_text = get_field('price_text');

// echo '<pre>'.print_r($rows,TRUE).'</pre>';

if( $rows ) {
    echo '<div class="price-dropdown">';
    echo '<label for="team-size-label" style="color:#161717;font-size:18px;margin-right:20px;">'.$price_text.'</label>
            <select class="team-size" id="team-size">';
    foreach( $rows as $row ) {
		$value = str_split($row['options'], "2");
        echo '<option value="'.trim($value[0]).'">'.$row['options'].'</option>';
    }
    echo    '</select>
        </div>';
}

?>

<style>
	.price-dropdown label {
		color: #161717;
		font-size: 18px;
		margin-right: 20px;
	}

	select.team-size {

		/* styling */
		width: 200px;
		background-color: white;
		border-radius: 4px;
		display: inline-block;
		font: inherit;
		line-height: 1.5em;
		padding: 0.25em 3.5em 0.25em 0.5em;
		border: 1px solid #707070;

		/* reset */

		margin: 0;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		-webkit-appearance: none;
		-moz-appearance: none;
	}

	select.team-size {
		background-image:
			linear-gradient(45deg, transparent 50%, gray 50%),
			linear-gradient(135deg, gray 50%, transparent 50%),
			linear-gradient(to right, #ccc, #ccc);
		/* background-position: 95% 50%;
		background-size: 25px 15px; */
		/* background-image: url('<?php echo get_template_directory_uri(); ?>/assets/extras/chevron-down.svg'); */
		background-position:
			calc(100% - 20px) calc(1em + 0px),
			calc(100% - 15px) calc(1em + 0px),
			calc(100% - 2.3em) 0.3em;
		background-size:
			5px 5px,
			5px 5px,
			1px 1.5em;
		background-repeat: no-repeat;
	}

	select.team-size:focus {
		background-image:
			linear-gradient(45deg, #00CC90 50%, transparent 50%),
			linear-gradient(135deg, transparent 50%, #00CC90 50%),
			linear-gradient(to right, #ccc, #ccc);
		background-position:
			calc(100% - 15px) 1em,
			calc(100% - 20px) 1em,
			calc(100% - 2.5em) 0.5em;
		background-size:
			5px 5px,
			5px 5px,
			1px 1.5em;
		background-repeat: no-repeat;
		border-color: #00CC90;
		outline: 0;
	}

	select.team-size option:checked,
	select.team-size option:hover {
		background: #00CC90;
		color: #ffffff;
	}

</style>
