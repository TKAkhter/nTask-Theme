<?php 
    // wp_enqueue_style('social_icons_list',  get_template_directory_uri().'/acf-blocks/social-icons-list/social-icons-list.css'  );

    $rows = get_field('social_icons_list');

    if( $rows ) {
        echo '<div class="footer_social footer_social_web">
                <ul class="slides social-icons-list">';
                foreach( $rows as $row ) {
                    echo '<li><a rel="noreferrer" href="'.$row['link'].'" target="_blank" hreflang="en">
                        <img width="32" height="32" src="'.$row['icon'].'" alt="Social Icon"></a></li>';
                }
        echo '</ul></div>';
    }
?>
