<?php

//register menu
function custom_menu() {
   register_nav_menus(
       array(
           'header-menu' => _( 'Header Menu' ),
           'footer-menu' =>_(' Footer Menu')
       )
   );
}
add_action( 'init', 'custom_menu' );

