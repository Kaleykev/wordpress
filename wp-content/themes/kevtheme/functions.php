<?php
/**
 * tezla functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package tezla
 */

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function tezla_setup() {
	/*
		* Make theme available for translation.
		* Translations can be filed in the /languages/ directory.
		* If you're building a theme based on tezla, use a find and replace
		* to change 'tezla' to the name of your theme in all the template files.
		*/
	load_theme_textdomain( 'tezla', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	add_theme_support( 'automatic-feed-links' );

	/*
		* Let WordPress manage the document title.
		* By adding theme support, we declare that this theme does not use a
		* hard-coded <title> tag in the document head, and expect WordPress to
		* provide it for us.
		*/
	add_theme_support( 'title-tag' );

	/*
		* Enable support for Post Thumbnails on posts and pages.
		*
		* @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		*/
	add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'tezla' ),
		)
	);

	/*
		* Switch default core markup for search form, comment form, and comments
		* to output valid HTML5.
		*/
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

	// Set up the WordPress core custom background feature.
	add_theme_support(
		'custom-background',
		apply_filters(
			'tezla_custom_background_args',
			array(
				'default-color' => 'ffffff',
				'default-image' => '',
			)
		)
	);

	// Add theme support for selective refresh for widgets.
	add_theme_support( 'customize-selective-refresh-widgets' );

	/**
	 * Add support for core custom logo.
	 *
	 * @link https://codex.wordpress.org/Theme_Logo
	 */
	add_theme_support(
		'custom-logo',
		array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		)
	);
}
add_action( 'after_setup_theme', 'tezla_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function tezla_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'tezla_content_width', 640 );
}
add_action( 'after_setup_theme', 'tezla_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function tezla_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'tezla' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'tezla' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'tezla_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function tezla_scripts() {
	wp_enqueue_style( 'tezla-style', get_stylesheet_uri(), array(), _S_VERSION );
	wp_style_add_data( 'tezla-style', 'rtl', 'replace' );

	wp_enqueue_script( 'tezla-navigation', get_template_directory_uri() . '/js/navigation.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'tezla_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}


// ajout des fichier css et js personalisés.
function ajout_css_js() {
	// fichier style.css à la racine du theme.
	wp_enqueue_style( 'style', get_stylesheet_uri() );
	// un autre css.
	wp_enqueue_style( 'mon-id-de-slider', get_template_directory_uri() . '/css/color.css' );
	// un js.
	wp_enqueue_script( 'mon-id-de-js', get_template_directory_uri() . '/js/perso.js');
}
add_action( 'wp_enqueue_scripts', 'ajout_css_js' );



// Afficher un CPT :

// require du fichier cpt.php
require get_template_directory() . '/cpt.php';


// la logique qui affiche le cpt (custom post type).

$paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

$args = array(
	'paged'		=> $paged,
	'post_type' => 'car'
);


$the_query = new WP_Query($args);
?>

<?php if ($the_query->have_posts()) : ?>
	<?php while ($the_query->have_posts()) : $the_query->the_post(); ?>
		<?php get_template_part('template-parts/content', 'car'); ?>
	<?php endwhile; ?>
	<?php wp_reset_postdata(); ?>
<?php endif; ?>

<?php
/*
//function.php : personnalisation du BO

// personnalisation des entrées du backoffice
function custom_backoffice() {
	// on récupère le menu
	global $menu;
	// on défini les entrées à exclure
	$restricted = array(__('Links'), __('Comments'), __('Media'),
	__('Plugins'), __('Tools'), __('Users'));
	end ($menu);
	while (prev($menu)){
	$value = explode(' ',$menu[key($menu)][0]);
	// on retire les entrées
	if (in_array($value[0] != NULL?$value[0]:"" , $restricted)){
		unset($menu[key($menu)]);}
	}

	// plus simple : on défini quelles entrées sont à retirer
	remove_menu_page( 'themes.php' );
	remove_menu_page( 'options-general.php' );
	remove_menu_page( 'edit.php?post_type=acf-field-group' );
	// pour un sous-menu
	remove_submenu_page( 'index.php', 'update-core.php' );

}
add_action( 'admin_menu', 'custom_backoffice');

// function.php personnalisation de la barre admin

// admin bar
function admin_bar_custom() {
	// récupérer la barre d'admin
	global $wp_admin_bar;
	// retirer l'accès aux commentaires
	$wp_admin_bar->remove_menu('comments');
	// retirer l'accès aux mises à jours
	$wp_admin_bar->remove_menu('updates');
	// enlever le logo de WP
	$wp_admin_bar->remove_menu('wp-logo');
}
*/




