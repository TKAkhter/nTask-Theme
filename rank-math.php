<?php
/**
 * Filter to enable/disable SearchAction JSON-LD data
 */
add_filter( 'rank_math/json_ld/disable_search', '__return_false' );