<style>
	.icon-list {
		color: #222;
		text-align: left;
		margin: 0;
		padding: 0;
		border: 0;
		/* font: inherit; */
		font-size: 16px;
		vertical-align: baseline;
		list-style: none;
		font-family: "Inter", sans-serif;
		justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		min-width: unset !important;
	}

	.icon-list li {
		list-style: none;
		margin: 0;
		border: 0;
		font: inherit;
		vertical-align: baseline;
		font-family: "Inter", sans-serif;
		font-weight: 400;
		color: #333;
		padding: 5px 0 5px 30px;
		background: url(../../../images/iconTick.svg) no-repeat;
		/* margin-top: 11px; */
		width: 100% !important;
		background-position: left 7px !important;
	}

</style>

<?php 
    // wp_enqueue_style('icon_lists',  get_template_directory_uri().'/acf-blocks/icon-list/icon-list.css'  );

    $rows = get_field('icon_list');
    $icon = get_field('icon');
    
    if( $rows ) {
        echo '<ul class="slides icon-list">';
            foreach( $rows as $row ) {
                echo '<li style="background: url('.$icon.') no-repeat">'.$row['text'].'</li>';
            }
        echo '</ul>';
    }
?>