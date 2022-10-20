<?php
/**
 * Twenty Twenty-Two functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_Two
 * @since Twenty Twenty-Two 1.0
 */


if ( ! function_exists( 'twentytwentytwo_support' ) ) :

	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_support() {

		// Add support for block styles.
		add_theme_support( 'wp-block-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style.css' );

	}

endif;

add_action( 'after_setup_theme', 'twentytwentytwo_support' );

if ( ! function_exists( 'twentytwentytwo_styles' ) ) :

	/**
	 * Enqueue styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_styles() {
		// Register theme stylesheet.
		$theme_version = wp_get_theme()->get( 'Version' );

		$version_string = is_string( $theme_version ) ? $theme_version : false;
		wp_register_style(
			'twentytwentytwo-style',
			get_template_directory_uri() . '/style.css',
			array(),
			$version_string
		);

		// Add styles inline.
		wp_add_inline_style( 'twentytwentytwo-style', twentytwentytwo_get_font_face_styles() );

		// Enqueue theme stylesheet.
		wp_enqueue_style( 'twentytwentytwo-style' );

	}

endif;

add_action( 'wp_enqueue_scripts', 'twentytwentytwo_styles' );

if ( ! function_exists( 'twentytwentytwo_editor_styles' ) ) :

	/**
	 * Enqueue editor styles.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_editor_styles() {

		// Add styles inline.
		wp_add_inline_style( 'wp-block-library', twentytwentytwo_get_font_face_styles() );

	}

endif;

add_action( 'admin_init', 'twentytwentytwo_editor_styles' );


if ( ! function_exists( 'twentytwentytwo_get_font_face_styles' ) ) :

	/**
	 * Get font face styles.
	 * Called by functions twentytwentytwo_styles() and twentytwentytwo_editor_styles() above.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return string
	 */
	function twentytwentytwo_get_font_face_styles() {

		return "
		@font-face {
			font-family: 'Lato', sans-serif;
			src: url('" . get_theme_file_uri( 'assets/fonts/Lato/lato-bold-webfont.woff2')."') format('woff2'),
				 url('" . get_theme_file_uri( 'assets/fonts/Lato/lato-bold-webfont.woff')."') format('woff');
			font-weight: 700;
			font-style: normal;
		
		}
		@font-face {
			font-family: 'Lato-Regular', sans-serif;
			src: url('" . get_theme_file_uri( 'assets/fonts/Lato/lato-regular-webfont.woff2')."') format('woff2'),
				 url('" . get_theme_file_uri( 'assets/fonts/Lato/lato-regular-webfont.woff')."') format('woff');
			font-weight: normal;
			font-style: normal;
		
		}
		@font-face {
			font-family: 'Poppins', sans-serif;
			src: url('poppins-bold-webfont.woff2') format('woff2'),
				 url('poppins-bold-webfont.woff') format('woff');
			font-weight: 600 700;
			font-style: normal;
		
		}
		@font-face {
			font-family: 'Poppins', sans-serif;
			src: url('poppins-medium-webfont.woff2') format('woff2'),
				 url('poppins-medium-webfont.woff') format('woff');
			font-weight: 500;
			font-style: normal;
		
		}
		@font-face {
			font-family: 'Poppins', sans-serif;
			src: url('poppins-regular-webfont.woff2') format('woff2'),
				 url('poppins-regular-webfont.woff') format('woff');
			font-weight: normal;
			font-style: normal;
		
		}
		";

	}

endif;

if ( ! function_exists( 'twentytwentytwo_preload_webfonts' ) ) :

	/**
	 * Preloads the main web font to improve performance.
	 *
	 * Only the main web font (font-style: normal) is preloaded here since that font is always relevant (it is used
	 * on every heading, for example). The other font is only needed if there is any applicable content in italic style,
	 * and therefore preloading it would in most cases regress performance when that font would otherwise not be loaded
	 * at all.
	 *
	 * @since Twenty Twenty-Two 1.0
	 *
	 * @return void
	 */
	function twentytwentytwo_preload_webfonts() {
		?>
		<!-- <link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Lato/lato-regular-webfont.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Lato/lato-bold-webfont.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Poppins/poppins-regular-webfont.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Poppins/poppins-medium-webfont.woff2' ) ); ?>" as="font" type="font/woff2" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Poppins/poppins-bold-webfont.woff2' ) ); ?>" as="font" type="font/woff2" crossorign> -->
		<link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Exo:wght@400;500;600;700&display=swap" rel="stylesheet">
		<!-- <link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Lato/lato-regular-webfont.woff' ) ); ?>" as="font" type="font/woff" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Lato/lato-bold-webfont.woff' ) ); ?>" as="font" type="font/woff" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Poppins/poppins-regular-webfont.woff' ) ); ?>" as="font" type="font/woff" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Poppins/poppins-medium-webfont.woff' ) ); ?>" as="font" type="font/woff" crossorigin>
		<link rel="preload" href="<?php echo esc_url( get_theme_file_uri( 'assets/fonts/Poppins/poppins-bold-webfont.woff' ) ); ?>" as="font" type="font/woff" crossorigin> -->
		<?php
	}

endif;

add_action( 'wp_head', 'twentytwentytwo_preload_webfonts' );

// Add block patterns
require get_template_directory() . '/inc/block-patterns.php';

require_once 'functions-custom.php';