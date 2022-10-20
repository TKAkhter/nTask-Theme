<?php 
    // echo '<pre>'.print_r(get_categories(),TRUE).'</pre>';
    // echo '<pre>'.print_r('test2',TRUE).'</pre>';
    $categories = get_categories();
    $colors = ['#FFEC99','#DFBAF1','#FECE99','#F4A4D0','#99EAD2','#99DDF7'];
    $i = 0;
?>

<ul class="wp-block-categories-list post-categories custom-post-categories">
    <?php 
        foreach($categories as $category) {
            if($i == 6) $i = 0;
            echo '<li style="background:'.$colors[$i].';" class="cat-item cat-item-'.$category->term_id.'">
                    <a href="'.get_category_link($category->term_id).'">
                        '.$category->name.'
                    </a>
                </li>';
            $i++;
        }
    ?>
</ul>

<style>
.custom-post-categories {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
}

.custom-post-categories li {
    padding: 5px 10px;
    border-radius: 5px;
    margin: 5px 5px 5px 0;
}

.custom-post-categories li a {
    color: #000;
    font-family: "Exo" ,sans-serif;
    font-size: 15px;
    text-transform: uppercase;
}
</style>