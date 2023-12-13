<?php
/**
 * Blog page
 * @package RAY
 */
get_header();
$args = array(
   'post_type'         => 'post',
   'posts_per_page'    => 10
);
$the_query = new WP_Query( $args );
?>
<container class="blog-post-section">
   <div class="all-post">
      <p>All Post</p>
      <div class="search-bar">
         <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
               <g clip-path="url(#clip0_15_152)">
                  <rect width="24" height="24" fill="none"></rect>
                  <circle cx="10.5" cy="10.5" r="6.5" stroke="#000000" stroke-linejoin="round"></circle>
                  <path
                     d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                     fill="#000000"></path>
               </g>
               <defs>
                  <clipPath id="clip0_15_152">
                     <rect width="24" height="24" fill="none"></rect>
                  </clipPath>
               </defs>
            </g>
         </svg>
         <?php get_search_form(); ?>
      </div>
   </div>
   <?php
   
   if ($the_query -> have_posts()): 
      while ($the_query -> have_posts()): 
         $the_query -> the_post();
         // $post_id =  get_the_ID();
         $thumbnail = get_the_post_thumbnail($post_id, 'medium');
         ?>
         <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <div class="blog-header">
               <a href="<?php echo get_permalink($post_id); ?>">
                  <?php echo $thumbnail; ?>
               </a>
            </div>
            <div class="blog-content">

               <header class="entry-header">
                  <?php the_title('<h4 class="entry-title h4">', '</h4>'); ?>
                  <div class="entry-meta">
                     <span class="posted-on">
                        <?php
                        printf(
                           esc_html__('Posted on %s', 'text-domain'),
                           '<a href="' . esc_url(get_permalink()) . '" rel="bookmark"><time class="entry-date published" datetime="' . esc_attr(get_the_date('c')) . '">' . esc_html(get_the_date()) . '</time></a>'
                        );
                        ?>
                     </span>
                  </div>
               </header>

               <div class="entry-content">
                  <?php ray_the_excerpt(150);
                  echo ray_excerpt_read_more(); ?>
               </div>
         </article>
         <?php
      endwhile;
   endif;
   wp_reset_postdata();
   ?>
</container>
<?php
get_footer();
?>