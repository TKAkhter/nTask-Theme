<?php 

function social_buttons() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'social-buttons',
			'title'				=> __('Social Buttons'),
			'description'		=> __('A custom block for Social Buttons'),
			'render_template'	=> 'acf-blocks/social-buttons/social-buttons.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'heading' ),
			'mode' => 'auto',
		));
	}
}

function register_form() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'register-form',
			'title'				=> __('Register Form'),
			'description'		=> __('A custom block for Register Form'),
			'render_template'	=> 'acf-blocks/register-form/register-form.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'heading' ),
			'mode' => 'auto',
		));
	}
}

function icon_list() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'icon-list',
			'title'				=> __('Icon List'),
			'description'		=> __('A custom block for Icon List'),
			'render_template'	=> 'acf-blocks/icon-list/icon-list.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'list', 'icon' ),
			'mode' => 'auto',
		));
	}
}

function heading_with_icon() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'heading-with-icon',
			'title'				=> __('Heading With Icon'),
			'description'		=> __('A custom block for Heading With Icon'),
			'render_template'	=> 'acf-blocks/heading-with-icon/heading-with-icon.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'heading' ),
			'mode' => 'auto',
		));
	}
}

function custom_button() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'custom-button',
			'title'				=> __('Custom Button'),
			'description'		=> __('A custom block for Custom Button'),
			'render_template'	=> 'acf-blocks/custom-button/custom-button.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'heading' ),
			'mode' => 'auto',
		));
	}
}

function image_gallery() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'image-gallery',
			'title'				=> __('Custom Gallery'),
			'description'		=> __('A custom block for Custom Gallery'),
			'render_template'	=> 'acf-blocks/image-gallery/image-gallery.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'image', 'gallery'),
			'mode' => 'auto',
		));
	}
}

function social_icons_list() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'social-icons-list',
			'title'				=> __('Social Icons List'),
			'description'		=> __('A custom block for Custom Social Icons List'),
			'render_template'	=> 'acf-blocks/social-icons-list/social-icons-list.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'Social', 'Icons', 'List'),
			'mode' => 'auto',
		));
	}
}

function color_palette() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'color-palette',
			'title'				=> __('Color Palette'),
			'description'		=> __('A custom block for Custom Color Palette'),
			'render_template'	=> 'acf-blocks/color-palette/color-palette.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'color', 'palette', 'List'),
			'mode' => 'auto',
		));
	}
}

function price_dropdown() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'price-dropdown',
			'title'				=> __('Price Dropdown'),
			'description'		=> __('A custom block for Custom Price Dropdown'),
			'render_template'	=> 'acf-blocks/price-dropdown/price-dropdown.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'price', 'dropdown', 'List'),
			'mode' => 'auto',
		));
	}
}

function button_switcher() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'button-switcher',
			'title'				=> __('Button Switcher'),
			'description'		=> __('A custom block for Custom Button Switcher'),
			'render_template'	=> 'acf-blocks/button-switcher/button-switcher.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'button', 'switch', 'List'),
			'mode' => 'auto',
		));
	}
}

function custom_table() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'custom-table',
			'title'				=> __('Custom Table'),
			'description'		=> __('A custom block for Custom Table'),
			'render_template'	=> 'acf-blocks/custom-table/custom-table.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'table', 'List'),
			'mode' => 'auto',
		));
	}
}

function custom_price_tag() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'custom-price-tag',
			'title'				=> __('Custom Price Tag'),
			'description'		=> __('A custom block for Custom Price Tag'),
			'render_template'	=> 'acf-blocks/custom-price-tag/custom-price-tag.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'price', 'tag'),
			'mode' => 'auto',
		));
	}
}

function text_gradient() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'text-gradient',
			'title'				=> __('Custom Text Gradient'),
			'description'		=> __('A custom block for Custom Text Gradient'),
			'render_template'	=> 'acf-blocks/text-gradient/text-gradient.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'gradient', 'price', 'tag'),
			'mode' => 'auto',
		));
	}
}

function multi_text_gradient() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'multi-text-gradient',
			'title'				=> __('Multi Text Gradient'),
			'description'		=> __('A custom block for Multi Text Gradient'),
			'render_template'	=> 'acf-blocks/multi-text-gradient/multi-text-gradient.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'gradient', 'multi', 'text'),
			'mode' => 'auto',
		));
	}
}

function custom_post_categories() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'custom-post-categories',
			'title'				=> __('Custom Post Categories'),
			'description'		=> __('A custom block for Custom Post Categories'),
			'render_template'	=> 'acf-blocks/custom-post-categories/custom-post-categories.php',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'post', 'category', 'text'),
			'mode' => 'auto',
		));
	}
}

function custom_cta() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'custom-call-to-action',
			'title'				=> __('Custom Call To Action'),
			'description'		=> __('A custom block for Custom Call To Action'),
			'render_template'	=> 'acf-blocks/custom-call-to-action/custom-call-to-action.php',
			'enqueue_style' 	=> get_template_directory_uri() . '/acf-blocks/custom-call-to-action/custom-call-to-action.css',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'call', 'cta', 'action'),
			'mode' => 'auto',
		));
	}
}

function badge_gallery() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'badge-gallery',
			'title'				=> __('Custom Badge Gallery'),
			'description'		=> __('A custom block for Custom Badge Gallery'),
			'render_template'	=> 'acf-blocks/badge-gallery/badge-gallery.php',
			'enqueue_style' 	=> get_template_directory_uri() . '/acf-blocks/badge-gallery/badge-gallery.css',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'badge', 'gallery'),
			'mode' => 'auto',
		));
	}
}

function badge_rating() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'badge-rating',
			'title'				=> __('Badge Rating'),
			'description'		=> __('A custom block for Custom Badge Rating'),
			'render_template'	=> 'acf-blocks/badge-rating/badge-rating.php',
			'enqueue_style' 	=> get_template_directory_uri() . '/acf-blocks/badge-rating/badge-rating.css',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'badge', 'rating'),
			'mode' => 'auto',
		));
	}
}

function paypal_modal() {
	
	// check function exists
	if( function_exists('acf_register_block_type') ) {
		
		// register a portfolio item block
		acf_register_block_type(array(
			'name'				=> 'paypal-modal',
			'title'				=> __('Paypal modal'),
			'description'		=> __('A custom block for Custom Paypal modal'),
			'render_template'	=> 'acf-blocks/paypal-modal/paypal-modal.php',
			'enqueue_style' 	=> get_template_directory_uri() . '/acf-blocks/paypal-modal/paypal-modal.css',
			'enqueue_script' 	=> get_template_directory_uri() . '/acf-blocks/paypal-modal/paypal-modal.js',
			'category'			=> 'acf-category',
			'icon'				=> 'block-default',
			'keywords'			=> array('acf', 'custom', 'pay', 'pal'),
			'mode' => 'auto',
		));
	}
}

add_action('acf/init', 'paypal_modal');
add_action('acf/init', 'badge_rating');
add_action('acf/init', 'badge_gallery');
add_action('acf/init', 'custom_cta');
add_action('acf/init', 'custom_post_categories');
add_action('acf/init', 'multi_text_gradient');
add_action('acf/init', 'text_gradient');
add_action('acf/init', 'custom_price_tag');
add_action('acf/init', 'custom_table');
add_action('acf/init', 'button_switcher');
add_action('acf/init', 'price_dropdown');
add_action('acf/init', 'color_palette');
add_action('acf/init', 'social_icons_list');
add_action('acf/init', 'image_gallery');
add_action('acf/init', 'custom_button');
add_action('acf/init', 'heading_with_icon');
add_action('acf/init', 'icon_list');
add_action('acf/init', 'register_form');
add_action('acf/init', 'social_buttons');