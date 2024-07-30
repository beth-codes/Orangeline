<?php
function wp_projects() {
	register_post_type('project',
		array(
			'labels'      => array(
				'name'          => 'Projects',
				'singular_name' => 'All Project',
            'add_new' => 'Add New',
            'add_new_item' => 'Add New Project',
            'edit_item' => 'Edit Project',
            'new_item' => 'New Project',
            'view_item' => 'View Project',
            'search_items' => 'Search Project',
            'not_found' => 'No projects found',
            'not_found_in_trash' => 'No projects found in Trash',
            'parent_item_colon' => 'Parent projects:',
            'menu_name' => 'Projects',
            'all_items' => 'All Projects'
			),
				'public'      => true,
				'has_archive' => true,
            'menu_icon'   => 'dashicons-images-alt2',
            'rewrite'     => array( 'slug' => 'project' ),
            'supports' => array( 'title', 'editor', 'excerpt', 'author', 'thumbnail', 'revisions', 'page-attributes' ),
            'taxonomies' => array( 'category', 'post_tag', 'page-category' ),
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'publicly_queryable' => true,
            'exclude_from_search' => false,
            'query_var' => true,
            'can_export' => true,
            'capability_type' => 'page',
            'show_in_rest' => true,
            // 'register_meta_box_cb' => 'add_event_date_metabox'
		)
	);
}
add_action('init', 'wp_projects');

