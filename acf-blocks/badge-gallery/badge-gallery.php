<?php 
    // echo '<pre>'.print_r(get_field('badge_gallery'),TRUE).'</pre>';
    $badge_gallery = get_field('badge_gallery');

    if( $badge_gallery ) {
        echo '<ul class="slides badge-gallery">';
            foreach( $badge_gallery as $badge ) {
                echo '<li class="badge-gallery-item">'.$badge['badge_code'].'</li>';
            }
        echo '</ul>';
    }
?>
