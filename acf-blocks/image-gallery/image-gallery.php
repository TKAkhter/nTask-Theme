<style>
    .image-gallery {
        width: 98%;
        margin: 30px auto;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        list-style: none !important;
        padding: 0;
    }

    .image-gallery li {
        padding: 20px;
    }

    .image-gallery .image-gallery-image {
        max-height: 100px;
    }

    @media (min-width: 1100px) {
        .strike {
            display: block;
            text-align: center;
            overflow: hidden;
            white-space: nowrap;
        }

        .strike>ul:before,
        .strike>ul:after {
            content: "";
            position: absolute;
            top: 65%;
            width: 25vw;
            height: 1px;
            background: #E3E3E3;
        }

        .strike>ul:before {
            right: 100%;
            margin-right: 15px;
        }

        .strike>ul:after {
            left: 100%;
            margin-left: 15px;
        }
    }
</style>

<?php 

    $image_gallery = get_field('image_gallery');

    if( $image_gallery ) {
        echo '<div class="strike">
                <ul class="slides image-gallery">';
                    foreach( $image_gallery as $image ) {
                        echo '<li>
                            <img src="'.$image.'" alt="at&amp;t Logo" class="image-gallery-image">
                        </li>';
                    }
        echo '</ul></div>';
    }
?>