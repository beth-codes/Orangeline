<?php
/**
 * single post pages
 * @package Orangeline-Interior
*/
get_header();
?>

<section class="single-post-container">
 <!-- USES THE MOST RECENT POST IMAGE AS A BANNER -->
   <!-- <?php if(the_post_thumbnail()): ?>
      <figure class="single-post-bannner">
         <?php the_post_thumbnail( 'post-thumbnail', [ 'class' => 'absolute w-full h-full left-0 top-0 object-cover' ] ); ?>
      </figure>
   <? endif;?> -->

   <section class="single-post-content">
      <div class="container">
         <?php
            if (is_home() && ! is_front_page()) {
               ?>
                  <h1><?php single_post_title(); ?></h1>
               <?php
            }
         ?>
            <!-- start loop -->
            <?php while (have_posts()): the_post();
             the_content();              
            endwhile;
            ?>
            <!-- pagination link on post page -->
          
      </div>
      <!-- <div class='postlink-container'>
         <div class="prev-link"><?php previous_post_link();?></div>
         <div class="next-link"><?php  next_post_link(); ?></div>
      </div> -->
   </section>
<?php get_footer();?>

