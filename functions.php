<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
      wp_enqueue_style(
        'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array('parent-style'),
        filemtime(get_stylesheet_directory() . '/style.css')
    );
    
}

// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}
function foce_child_enqueue_scripts() {

    // SWIPER CSS
    wp_enqueue_style(
        'swiper-css',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css',
        array(),
        '11.0.0'
    );

    // SWIPER JS
    wp_enqueue_script(
        'swiper-js',
        'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js',
        array(),
        '11.0.0',
        true
    );

    // JS
    wp_enqueue_script(
        'foce-child-animations',
        get_stylesheet_directory_uri() . '/js/animations.js',
        array('swiper-js'),
        filemtime(get_stylesheet_directory() . '/js/animations.js'),
        true
    );
}

add_action(
    'wp_enqueue_scripts',
    'foce_child_enqueue_scripts'
);
// Le menu personnalise remplace navigation script du theme parent
function foce_child_remove_parent_navigation() {
    wp_dequeue_script('foce-navigation');
}
add_action('wp_enqueue_scripts', 'foce_child_remove_parent_navigation', 20);
