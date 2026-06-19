<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Fleurs_d\'oranger_&_Chats_errants
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#primary">
		<?php esc_html_e( 'Skip to content', 'foce' ); ?>
	</a>

	<header id="masthead" class="site-header">
		<nav id="site-navigation" class="main-navigation">

			<a class="site-title" href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
				<?php bloginfo( 'name' ); ?>
			</a>

			<button class="menu-toggle" aria-controls="primary-menu" aria-expanded="false" aria-label="Ouvrir le menu">
				<span class="line"></span>
				<span class="line"></span>
				<span class="line"></span>
			</button>

			<ul id="primary-menu" class="fullscreen-menu">
    
		<img
  class="menu-logo"
  src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo.png"
  alt="Fleurs d'oranger et chats errants">
  
	  <img class="menu-cat menu-cat-purple"
       src="/wp-content/uploads/2022/06/Kawaneko.png"
       alt="chat violet animation menu fullscreen">

     <img class="menu-cat menu-cat-orange"
      src="/wp-content/uploads/2022/06/Orenjiiro-1.png"
      alt="">

     <img class="menu-cat menu-cat-black"
      src="/wp-content/uploads/2022/06/Jaakuna-1.png"
      alt="">

      <div class="menu-flower menu-flower-1"></div>
<div class="menu-flower menu-flower-2"></div>
<div class="menu-flower menu-flower-3"></div>
<div class="menu-flower menu-flower-4"></div>
<div class="menu-flower menu-flower-5"></div>

	<li><a href="#story">Histoire</a></li>
	<li><a href="#characters">Personnages</a></li>
	<li><a href="#place">Lieu</a></li>
	<li><a href="#studio">Studio Koukaki</a></li>

	<p class="menu-footer-text">STUDIO KOUKAKI</p>
</ul>

		</nav>
	</header><!-- #masthead -->
