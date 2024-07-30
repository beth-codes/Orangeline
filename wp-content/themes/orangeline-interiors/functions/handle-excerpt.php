<?php
/**
 * Handle excerpts for blog posts
 */
function the_custom_excerpt($trim_character_count = 0){
   
   $excerpt = wp_strip_all_tags(get_the_excerpt());
   $excerpt = substr($excerpt, 0, $trim_character_count);
   $excerptr = substr($excerpt, 0, strrpos($excerpt, ' '));

   echo $excerptr . ' ';
}

function  custom_excerpt_read_more($more = '') {
   if (! is_single()) {
      $more = sprintf( '<a href="%1$s"><button class="blog-button">%2$s</button></a>', 
      get_permalink(get_the_ID()),
      __('Read more', 'orangeline-interiors')
   );
   }
   return $more;
}

function custom_excerpt_more( $more ) {
   return '';
}
add_filter( 'excerpt_more', 'custom_excerpt_more' );


//Add a function to retrieve the recent events
function get_recent_events($number_of_events = 5) {
   $args = array(
       'post_type'      => 'project',
       'posts_per_page' => $number_of_events,
   );

   $recent_events = new WP_Query($args);
   return $recent_events;
}


//add section
// function add_event_date_metabox() {
//    add_meta_box(
//        'event_date_metabox',
//        'Event Date',
//        'display_event_date_metabox',
//        'project',
//        'side',
//        'default'
//    );
// }

// Display the event date meta box
function display_event_date_metabox($post) {
   wp_nonce_field('event_date_metabox_nonce', 'event_date_metabox_nonce');
   $event_date = get_post_meta($post->ID, 'event_date', true);
   ?>
   <label for="event_date">Event Date:</label>
   <input type="date" id="event_date" name="event_date" value="<?php echo $event_date; ?>">
   <?php
}


function save_event_date_meta($post_id) {
   if (!isset($_POST['event_date_metabox_nonce']) || !wp_verify_nonce($_POST['event_date_metabox_nonce'], 'event_date_metabox_nonce')) {
       return $post_id;
   }
   if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
       return $post_id;
   }

   if ('project' !== $_POST['post_type']) {
       return $post_id;
   }

   if (!current_user_can('edit_post', $post_id)) {
       return $post_id;
   }

   $event_date = sanitize_text_field($_POST['event_date']);
   update_post_meta($post_id, 'event_date', $event_date);
}
add_action('save_post', 'save_event_date_meta');

//Add a shortcode to display the recent events
function display_recent_events($atts) {
   $atts = shortcode_atts( array(
       'number' => 3,
   ), $atts );
   
   // Retrieve the recent events
   $recent_events = get_recent_events($atts['number']);
   
   // Start the loop
   $output = '';
   if ($recent_events->have_posts()) {
       $output .= '<section class="events-post-section pd-inline pd-block"><div class="events-post-container">';
       $output .= '<div class="events-post-header"><h2>Next Events<h2></div><div class="events-post-list">';
       while ($recent_events->have_posts()) {
           $recent_events->the_post();
           $output .= '<div class="events-post-item">';
           $output .= '<h3 class="events-post-head">' . date('d/M/Y', strtotime(get_post_meta(get_the_ID(), 'event_date', true))) . '</h3>';
           $output .= '<div class="events-post-content"><p class="events-post-title">' . get_the_title() . '</p>';
           $output .= '<p>' . wp_trim_words( get_the_content(), 5, '...' ) . '</p></div>';
           $output .= '</div>';
       }
       $output .= '</div>';
       $output .= '<a class="events-post-btn" href="' . get_post_type_archive_link( 'project' ) . '"> More Info>> </a></div></section>';
      } else {
         $output .= 'No events found.';
      }
      
      
   // Restore the global $post object
   wp_reset_postdata();
   
   return $output;
}
add_shortcode('recent_events', 'display_recent_events');


   

         
