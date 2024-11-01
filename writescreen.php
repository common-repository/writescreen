<?php
/* 
 * Plugin Name: Writescreen
 * Description: Provides a full browser window view for editing posts.
 * Version: 1.0
 * Author: Jerome Covington
 * License: GPL2
 */

/*  Copyright 2011  Jerome Covington  (email : jeromecovington@gmail.com)

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License, version 2, as
    published by the Free Software Foundation.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program; if not, write to the Free Software
    Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

class Writescreen {

    function writescreen_styles() {
        $style_url = WP_PLUGIN_URL . '/writescreen/writescreen.css';
        wp_enqueue_style( 'writescreen', $style_url );
    }

    function writescreen_script() {
        $script_url = WP_PLUGIN_URL . '/writescreen/writescreen.js';
        wp_enqueue_script( 'writescreen', $script_url, false, false, true );
    }

    function init() {
        $writescreen_styles = $this->writescreen_styles();
        $writescreen_script = $this->writescreen_script();

        add_action( 'admin_print_styles', $writescreen_styles );
        add_action( 'admin_print_scripts', $writescreen_script );
    }

}

$writescreen = new Writescreen;
$writescreen->init();