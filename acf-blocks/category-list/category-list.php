<?php 
//_______________DETECT DEVICES__________________//
$tablet_browser = 0;
$mobile_browser = 0;

if (preg_match('/(tablet|ipad|playbook)|(android(?!.*(mobi|opera mini)))/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
    $tablet_browser++;
}

if (preg_match('/(up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone|android|iemobile)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
    $mobile_browser++;
}

if ((strpos(strtolower($_SERVER['HTTP_ACCEPT']),'application/vnd.wap.xhtml+xml') > 0) or ((isset($_SERVER['HTTP_X_WAP_PROFILE']) or isset($_SERVER['HTTP_PROFILE'])))) {
    $mobile_browser++;
}

$mobile_ua = strtolower(substr($_SERVER['HTTP_USER_AGENT'], 0, 4));
$mobile_agents = array(
    'w3c ','acs-','alav','alca','amoi','audi','avan','benq','bird','blac',
    'blaz','brew','cell','cldc','cmd-','dang','doco','eric','hipt','inno',
    'ipaq','java','jigs','kddi','keji','leno','lg-c','lg-d','lg-g','lge-',
    'maui','maxo','midp','mits','mmef','mobi','mot-','moto','mwbp','nec-',
    'newt','noki','palm','pana','pant','phil','play','port','prox',
    'qwap','sage','sams','sany','sch-','sec-','send','seri','sgh-','shar',
    'sie-','siem','smal','smar','sony','sph-','symb','t-mo','teli','tim-',
    'tosh','tsm-','upg1','upsi','vk-v','voda','wap-','wapa','wapi','wapp',
    'wapr','webc','winw','winw','xda ','xda-');

if (in_array($mobile_ua,$mobile_agents)) {
    $mobile_browser++;
}

if (strpos(strtolower($_SERVER['HTTP_USER_AGENT']),'opera mini') > 0) {
    $mobile_browser++;
    //Check for tablets on opera mini alternative headers
    $stock_ua = strtolower(isset($_SERVER['HTTP_X_OPERAMINI_PHONE_UA'])?$_SERVER['HTTP_X_OPERAMINI_PHONE_UA']:(isset($_SERVER['HTTP_DEVICE_STOCK_UA'])?$_SERVER['HTTP_DEVICE_STOCK_UA']:''));
    if (preg_match('/(tablet|ipad|playbook)|(android(?!.*mobile))/i', $stock_ua)) {
      $tablet_browser++;
    }
}

if ($tablet_browser > 0) {
   // do something for tablet devices
//    echo '<pre>'.print_r('is tablet',TRUE).'</pre>';
}
else if ($mobile_browser > 0) {
   // do something for mobile devices
//    echo '<pre>'.print_r('is mobile',TRUE).'</pre>';
}
else {
   // do something for everything else
//    echo '<pre>'.print_r('is desktop',TRUE).'</pre>';
}   
 //_______________END DETECTING DEVICES__________________//
?>



<?php
$categories = get_the_category();
$current_category = $categories[0]->cat_ID;
$categories = get_categories();
?>
<ul class="wp-block-categories-list post-categories-list wp-block-categories">
    <?php
$i = 0;
$more_option = '<option class="level-0" value="">More...</option>';
foreach($categories as $category) {
    if($i < 4) { ?>
    <li
        class="cat-item cat-item-<?php echo $category->term_id ?> <?php echo $current_category == $category->term_id ? 'current-cat' : '' ?>">
        <a href="<?php echo get_category_link($category->term_id) ?>"><?php echo $category->name ?></a>
    </li>
    <?php
    } else {
        $more_option .= '<option value="'.get_option('home').'/blog/category/'.$category->slug.'">
        '.$category->cat_name.
        '</option>';
    }
    $i++;
    }
    ?>
    <select name="cat-dropdown" onchange='document.location.href=this.options[this.selectedIndex].value;'>
        <?php echo $more_option; ?>
    </select>
</ul>