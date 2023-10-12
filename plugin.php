<?php
/**
 * Plugin Name:       Metadata block
 * Description:       Example of editing meta using blocks.
 * Requires PHP:      7.0
 * Author:            Molke
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       metadata-block
 *
 * @package           blocks-u
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function blocks_u_memo_data_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'blocks_u_memo_data_block_init' );