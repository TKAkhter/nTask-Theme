<?php

require_once 'register-blocks/register-blocks.php';

// custom ACF Category
function add_acf_category( $block_categories, $editor_context ) {
    if ( ! empty( $editor_context->post ) ) {
        array_push(
            $block_categories,
            array(
                'slug'  => 'acf-category',
                'title' => __( 'ACF Custom Blocks', 'acf-category' ),
                'icon'  => null,
            )
        );
    }
    return $block_categories;
}
 
add_filter( 'block_categories_all', 'add_acf_category', 1, 2 );

/**
 * Registers an editor stylesheet for the theme.
 * Custom script with no dependencies, enqueued in the header.
 */
function add_global_styles () {
	wp_enqueue_style('admin-styles', get_template_directory_uri().'/custom-styles.css');
}

function add_global_scripts () {
    wp_enqueue_script('custom-axios', get_stylesheet_directory_uri().'/axios.js', array('jquery'));
    wp_enqueue_script('custom-firebase', get_stylesheet_directory_uri().'/firebase.js', array('jquery'));
    wp_enqueue_script('custom-social-signup', get_stylesheet_directory_uri().'/custom-social-signup.js', array('jquery'));
    wp_enqueue_script('custom-signup', get_stylesheet_directory_uri().'/custom-signup.js', array('jquery'));
}

add_action( 'admin_enqueue_scripts', 'add_global_styles' );
add_action( 'wp_enqueue_scripts', 'add_global_styles' );
add_action( 'wp_enqueue_scripts', 'add_global_scripts' );

function add_custom_color_picker() { ?>
<script type="text/javascript">
	(function ($) {
		acf.add_filter('color_picker_args', function (args, $field) {
			// add the hexadecimal codes here for the colors you want to appear as swatches
			args.palettes = ['#0096ff', '#0082dc', '#922BD6', '#38C0E3', '#00E30F', '#F58E17', '#E43B85',
				'#3A4DF5', '#1BC46F', '#19CCA3', '#1BBE99', '#969696'
			];
			// return colors
			return args;
		});
	})(jQuery);

</script>
<?php }

// add_action('acf/input/admin_footer', 'add_custom_color_picker');

function prefix_category_title( $title ) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    }
    return $title;
}

add_filter( 'get_the_archive_title', 'prefix_category_title' );

add_filter('manage_posts_columns', 'posts_columns', 5);
add_action('manage_posts_custom_column', 'posts_custom_columns', 5, 2);
 
function posts_columns($defaults){
    $defaults['riv_post_thumbs'] = __('Thumbs');
    return $defaults;
}
 
function posts_custom_columns($column_name, $id){
    if($column_name === 'riv_post_thumbs'){
        echo the_post_thumbnail( 'featured-thumbnail' );
    }
}
