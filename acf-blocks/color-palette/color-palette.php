<?php 
	$random_number = rand();

    $rows = get_field('color_palette');
    $text_color = get_field('text_color');
    if( $rows ) {
        echo '<div class="tints-layout-'.$random_number.'">';
            foreach( $rows as $row ) {
                echo '<div class="tints-style tints-color-'.$row['text'].'" style="background: '.$row['color'].'">
                        <label style="color: '.$text_color.'" >'.$row['text'].'</label>
                    </div>';
            }
        echo '</div>';
    }
?>

<style>
	<?php echo '.tints-layout-'.$random_number; ?> {
		display: flex;
	}
	<?php echo '.tints-layout-'.$random_number.' .tints-style'; ?> {
        width: 40px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
	}
	<?php echo '.tints-layout-'.$random_number.' .tints-style:first-child'; ?> {
        border-radius: 4px 0 0 4px;
	}
    <?php echo '.tints-layout-'.$random_number.' .tints-style:last-child'; ?> {
        border-radius: 0 4px 4px 0;
	}
    <?php echo '.tints-layout-'.$random_number.' .tints-style label'; ?> {
        font-size: 12px;
        color: #171717;
        font-family: "Exo", sans-serif;
        font-weight: 500;
	}
</style>