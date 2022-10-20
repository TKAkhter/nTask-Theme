<?php 
    // wp_enqueue_style('social_buttons',  get_template_directory_uri().'/acf-blocks/social-buttons/social-buttons.css');
    $rows = get_field('buttons');
?>

<style>
	.home_head_social {
		display: flex;
		/* flex-wrap: wrap; */
		align-items: center;
		padding-top: 17px;
		padding-bottom: 20px;
		width: 100%;
	}

	.social-buttons {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		margin: 0 0 0 10px;
		padding: 0;
	}

	.social-buttons li {
		text-align: center;
		line-height: 32px;
		background: #fff;
		border: 1px solid #DBDBDB;
		cursor: pointer;
		/* padding: 5px 18px; */
		padding: 10px;
		min-width: 40px;
		box-sizing: border-box;
		box-shadow: 0px 2px 6px -5px rgb(0 0 0 / 71%);
		border-radius: 4px;
		margin: 5px;
		list-style: none;
	}

	.social-buttons li:hover {
		background-color: #eee;
	}

	.social-buttons li a {
		font-size: 13px;
		/* margin-left: 10px; */
		font-family: "Exo", sans-serif !important;
		font-weight: 500;
		color: #222222;
		text-decoration: none;
	}

	.social-buttons li img {
		margin: 0px;
		height: 15px;
		width: auto;
		cursor: pointer;
	}

	.home_head_social span {
		color: #000000;
		font-size: 15px;
		white-space: nowrap;
	}

	@media (max-width: 767px) {
		.home_head_social {
			flex-direction: column;
			justify-content: center;
		}

		.social-buttons {
			justify-content: center;
			margin: 10px;
		}
	}

</style>

<div class="home_head_social ">
	<span class="interRegular">Or sign up using:</span> <?php
    if( $rows ) {
        ?> <ul class="slides social-buttons"> <?php
            foreach( $rows as $row ): ?>
		<li id="btn<?php echo $row['button_text'] ?>Header">
			<div class="btn_social_signup">
				<img width="20" height="20" src="<?php echo $row['icon'] ?>" alt="<?php echo $row['button_text'] ?> signup"
					title="Signup with <?php echo $row['button_text'] ?>">
				<a
					href="<?php echo $row['button_link'] ? $row['button_text'] : "#" ?>"></a>
			</div>
		</li>
		<?php endforeach; ?>
	</ul>
	<?php
    } ?>
</div>