<?php
/**
 * Enqueue scripts for custom blocks
 */
function custom_block_scripts()
{
   // Add custom Gutenberg block scripts
   wp_enqueue_script(
      'custom-block-scripts',
      get_template_directory_uri() . '/assets/js/blocks.js',
      array(
         'wp-blocks',
         'wp-components',
         'wp-element',
         'wp-i18n',
         'wp-editor',
         'wp-block-editor'
      ),
      '1.0.0',
      true
   );

    //register style for editor/backend only
    wp_enqueue_style(
      'editor-css', // Unique handle.
      get_template_directory_uri() . '/assets/css/editor.css',
      [], // Dependencies, defined above.
      filemtime(get_template_directory_uri() . '/assets/css/editor.css'), // Version: filemtime - Gets file modification time.
      'all'
   );

   // Register custom block types
   register_block_type(
      'customcore/blocks',
      array(
         'editor_script' => 'custom-block-scripts',
      )
   );
}
add_action('enqueue_block_editor_assets', 'custom_block_scripts');

//register style for frontend and editor/backend
function custom_block_style()
{

   wp_enqueue_style(
      'main-css', // Unique handle.
      get_template_directory_uri() . '/assets/css/main.css',
      [], // Dependencies, defined above.
      filemtime(get_template_directory_uri() . '/assets/css/main.css'), // Version: filemtime - Gets file modification time.
      'all'
   );
   wp_enqueue_style('fonts-css', get_template_directory_uri() . '/assets/fonts/fonts.css', [], false, 'all');


   wp_enqueue_script(
      'main-js',
      get_template_directory_uri() . '/assets/js/main.js',
      array('jquery', 'gsap-js'),
      '1.0.0',
      true
   );
}
add_action('enqueue_block_assets', 'custom_block_style');



//Remove Gutenberg Block Library CSS from loading on the frontend
function smartwp_remove_wp_block_library_css(){
 wp_dequeue_style( 'wp-block-library' );
 wp_dequeue_style( 'wp-block-library', '' );
 wp_dequeue_style( 'wp-block-library-theme' );
 wp_dequeue_style('wp-block-editor');
 wp_dequeue_style( 'wc-blocks-style' ); // Remove WooCommerce block CSS
} 
add_action( 'wp_enqueue_scripts', 'smartwp_remove_wp_block_library_css', 100 );


//CUSTOM BLOCK CATEGORY
function register_layout_category($categories)
{
   $new_category = array(
      'slug' => 'blocks-core',
      'title' => 'Orangeline Core'
   );
   if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
      $categories = array_merge(array($new_category), $categories);
   } else {
      array_unshift($categories, $new_category);
   }
   return $categories;
}

if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
   add_filter('block_categories_all', 'register_layout_category');
} else {
   add_filter('block_categories', 'register_layout_category');
}

//enque GSAP: The proper way to enqueue GSAP script in WordPress
// wp_enqueue_script($handle, $src, $deps, $ver, $in_footer);
function theme_gsap_script()
{
   // The core GSAP library
   wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/gsap.min.js', array(), false, true);
   // ScrollTrigger - with gsap.js passed as a dependencys
   wp_enqueue_script('gsap-st', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.3/ScrollTrigger.min.js', array('gsap-js'), false, true);
}
add_action('wp_enqueue_scripts', 'theme_gsap_script');

// Allow SVG
add_filter('wp_check_filetype_and_ext', function ($data, $file, $filename, $mimes) {
   global $wp_version;
   if ($wp_version !== '4.7.1') {
      return $data;
   }

   $filetype = wp_check_filetype($filename, $mimes);

   return [
      'ext' => $filetype['ext'],
      'type' => $filetype['type'],
      'proper_filename' => $data['proper_filename']
   ];

}, 10, 4);

function cc_mime_types($mimes){
   $mimes['svg'] = 'image/svg+xml';
   return $mimes;
}
add_filter('upload_mimes', 'cc_mime_types');

function fix_svg(){
   echo '<style type="text/css">
         .attachment-266x266, .thumbnail img {
              width: 100% !important;
              height: auto !important;
         }
         </style>';
}
add_action('admin_head', 'fix_svg');

/*

* Function for post duplication. Dups appear as drafts. The user is redirected to the edit screen

*/
function rd_duplicate_post_as_draft(){
   global $wpdb;
   if (!(isset($_GET['post']) || isset($_POST['post']) || (isset($_REQUEST['action']) && 'rd_duplicate_post_as_draft' == $_REQUEST['action']))) {
      wp_die('No post to duplicate has been supplied!');
   }
   /*
   * Nonce verification
   */
   if (!isset($_GET['duplicate_nonce']) || !wp_verify_nonce($_GET['duplicate_nonce'], basename(__FILE__)))
      return;
   /*
   * get the original post id
   */
   $post_id = (isset($_GET['post']) ? absint($_GET['post']) : absint($_POST['post']));
   /*
   * and all the original post data then
   */
   $post = get_post($post_id);
   /*
   * if you don't want current user to be the new post author,
   * then change next couple of lines to this: $new_post_author = $post->post_author;
   */

   $current_user = wp_get_current_user();
   $new_post_author = $current_user->ID;
   /*
   * if post data exists, create the post duplicate  
   */
   if (isset($post) && $post != null) {
      /*
      * new post data array
      */
      $args = array(

         'comment_status' => $post->comment_status,
         'ping_status' => $post->ping_status,
         'post_author' => $new_post_author,
         'post_content' => $post->post_content,
         'post_excerpt' => $post->post_excerpt,
         'post_name' => $post->post_name,
         'post_parent' => $post->post_parent,
         'post_password' => $post->post_password,
         'post_status' => 'draft',
         'post_title' => $post->post_title,
         'post_type' => $post->post_type,
         'to_ping' => $post->to_ping,
         'menu_order' => $post->menu_order
      );
      /*
      * insert the post by wp_insert_post() function
      */

      $new_post_id = wp_insert_post($args);
      /*
      * get all current post terms and set them to the new post draft     
      */
      $taxonomies = get_object_taxonomies($post->post_type); // returns array of taxonomy names for post type, ex array("category", "post_tag");
      foreach ($taxonomies as $taxonomy) {
         $post_terms = wp_get_object_terms($post_id, $taxonomy, array('fields' => 'slugs'));
         wp_set_object_terms($new_post_id, $post_terms, $taxonomy, false);
      }
      /*
      * duplicate all post meta just in two SQL queries
      */

      $post_meta_infos = $wpdb->get_results("SELECT meta_key, meta_value FROM $wpdb->postmeta WHERE post_id=$post_id");
      if (count($post_meta_infos) != 0) {
         $sql_query = "INSERT INTO $wpdb->postmeta (post_id, meta_key, meta_value) ";
         foreach ($post_meta_infos as $meta_info) {
            $meta_key = $meta_info->meta_key;
            if ($meta_key == '_wp_old_slug')
               continue;
            $meta_value = addslashes($meta_info->meta_value);
            $sql_query_sel[] = "SELECT $new_post_id, '$meta_key', '$meta_value'";
         }
         $sql_query .= implode(" UNION ALL ", $sql_query_sel);
         $wpdb->query($sql_query);
      }
      /*
      * finally, redirect to the edit post screen for the new draft    
      */
      wp_redirect(admin_url('post.php?action=edit&post=' . $new_post_id));
      exit;
   } else {
      wp_die('Post creation failed, could not find original post: ' . $post_id);
   }
}

add_action('admin_action_rd_duplicate_post_as_draft', 'rd_duplicate_post_as_draft');

/*
* Add the duplicate link to action list for post_row_actions
*/
function rd_duplicate_post_link($actions, $post){
   if (current_user_can('edit_posts')) {
      $actions['duplicate'] = '<a href="' . wp_nonce_url('admin.php?action=rd_duplicate_post_as_draft&post=' . $post->ID, basename(__FILE__), 'duplicate_nonce') . '" title="Duplicate this item" rel="permalink">Duplicate</a>';
   }
   return $actions;
}
add_filter('page_row_actions', 'rd_duplicate_post_link', 10, 2);

