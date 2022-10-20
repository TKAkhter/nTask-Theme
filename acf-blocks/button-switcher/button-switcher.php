<?php

$option_1 = get_field('option_1');
$option_2 = get_field('option_2');

?>

<div class="switch-container">
	<div class="switch-button">
		<input class="switch-button-checkbox" type="checkbox"></input>
		<label class="switch-button-label" for="">
			<span class="switch-button-label-span"><?php echo $option_1; ?></span>
		</label>
	</div>
</div>


<style>
	.switch-container {
        width: 100%;
        text-align: -webkit-right;
		align-self: flex-end;
	}

	.switch-button {
		box-sizing: border-box;
		padding: 0;
		background: rgba(0, 204, 143, 0.56);
		border-radius: 25px;
		overflow: hidden;
		width: 240px;
		text-align: center;
		font-size: 18px;
		letter-spacing: 1px;
		border: 1.5px solid #00CC90;
		color: #ffffff;
		position: relative;
		padding-right: 120px;
		position: relative;
	}

	.switch-button:before {
		content: "<?php echo $option_2; ?>";
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 120px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		pointer-events: none;
	}

	.switch-button-checkbox {
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 2;
	}

	.switch-button-checkbox:checked+.switch-button-label:before {
		transform: translateX(120px);
		transition: transform 300ms linear;
	}

	.switch-button-checkbox+.switch-button-label {
		position: relative;
		padding: 10px 0;
		display: block;
		user-select: none;
		pointer-events: none;
	}

	.switch-button-checkbox+.switch-button-label:before {
		content: "";
		background: #00CC90;
		color: #fff;
		height: 100%;
		width: 100%;
		position: absolute;
		left: 0;
		top: 0;
		border-radius: 25px;
		transform: translateX(0);
		transition: transform 300ms;
	}

	.switch-button-checkbox+.switch-button-label .switch-button-label-span {
		position: relative;
	}

</style>