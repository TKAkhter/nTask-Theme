<?php 
    // wp_enqueue_style('social_buttons',  get_template_directory_uri().'/acf-blocks/social-buttons/social-buttons.css');
    $image_gallery = get_field('image_gallery');
    $full_star = get_theme_file_uri().'/acf-blocks/badge-rating/assets/star-full.svg';
    $half_star =  get_theme_file_uri().'/acf-blocks/badge-rating/assets/star-half.svg';
    $image_count = count($image_gallery);
    $border_class = 'br-1';
    $i = 0;
    // echo '<pre>'.print_r(get_field('image_gallery'),TRUE).'</pre>';
?>

<style>
    .badge-rating {
        margin-top: 30px;
    }

    .badge-rating .row {
        display: flex;
        align-items: center;
    }

    .badge-rating img {
        margin-right: 5px;
    }

    .badge-rating .px-2 {
        padding: 0 12px;
        font-size: 17.8px;
        color: #A4A4A4;
    }

    .badge-rating p {
        font-size: 17.8px;
        color: #A4A4A4;
        margin: 0;
    }

    .badge-rating .rating-gallery-link {
        padding: 0 12px;
        margin: 0;
        border-right: 1px solid #CFCFCF;
    }

    /* .badge-rating .rating-gallery-link:first-child {
        padding-left: 0
    } */

    .badge-rating .rating-gallery-link.br-0 {
        border-right: 0;
        padding-right: 0;
    }

    .mb-1 {
        margin-bottom: 5px;
    }

    img.rating-gallery-image {
        height: 100%;
        max-width: 150px;
        margin: 10px 0;
    }

    @media (max-width: 768px) {

        .badge-rating .row {
            flex-direction: column;
            align-items: flex-start;
        }
    }
</style>

<div class="badge-rating">
    <div class="row">
        <div class="col px-2 mb-1">
            <?php for($i=0; $i<4; $i++) {
                echo '<img src="'.$full_star.'" alt="" class="rating-star">';
            }
            echo '<img src="'.$half_star.'" alt="" class="rating-star">';
            ?>
        </div>
        <div class="col px-2">
            <p>Top Rated Project Management Software</p>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <?php 
                $i = 1;
                foreach( $image_gallery as $image ) {
                $image_count == $i ? $border_class = 'br-0' : 'br-1';
                echo '<a href='.$image['alt'].' target="_blank" class="rating-gallery-link '.$border_class.'">
                        <img src="'.$image['url'].'" alt="" class="rating-gallery-image '.$border_class.'">
                    </a>';
                $i++;
                } ?>
        </div>
    </div>
</div>