<?php
$price_month = get_field('price_month');
$price_year = get_field('price_year');
$member_text = get_field('member_text');
$month_text = get_field('month_text');
$year_text = get_field('year_text');
$text_color = get_field('text_color');

$random_number = rand();

echo '<h2 class="custom-price-tag-'.$random_number.'" style="color: '.$text_color.';">
        <span class="price-prefix">$</span>
        <span class="price">'.$price_year.'</span>
        <span>/</span>
        <span class="month">'.$month_text.'</span>
    </h2>
    <p class="bill-text" style="color: '.$text_color.';margin-top: 0;"><b>Billed <span>Yearly</span></b></p>';

?>

<style>
	<?php echo '.custom-price-tag-'.$random_number; ?> {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		color: #161717;
		font-size: 22px;
		font-weight: 500;
        margin-bottom: 0;
	}

	<?php echo '.custom-price-tag-'.$random_number. ' .price'; ?>,
    <?php echo '.custom-price-tag-'.$random_number. ' .price-prefix'; ?> {
		font-size: 44px;
		font-weight: 700;
	}

</style>

<script>
    $ = window.jQuery;
    $('.price-dropdown select').on('change', function () {
        let users = $(this).val();
        let price = getPrice<?php echo $random_number; ?>();
        calculate<?php echo $random_number; ?>(price, users)
    });

    $('.switch-button-checkbox').click(function() {
        let users = getUsers<?php echo $random_number; ?>();
        let price = getPrice<?php echo $random_number; ?>();
        if ($('.switch-button-checkbox').is(':checked')) {
            $('.bill-text span').text('Monthly')
        } else {
            $('.bill-text span').text('Yearly')
        }
        calculate<?php echo $random_number; ?>(price, users);
    });

    function getUsers<?php echo $random_number; ?>() {
        return $('.price-dropdown select').find(":selected").val();
    }

    function getPrice<?php echo $random_number; ?>() {
        let price = 4;
        if ($('.switch-button-checkbox').is(':checked')) {
            price = <?php echo $price_month; ?>;
        } else {
            price = <?php echo $price_year; ?>;
        }
        return price;
    }

    function calculate<?php echo $random_number; ?>(price, users) {
        $('.custom-price-tag-<?php echo $random_number; ?> .price').each(function (index, element) {
            let final = users * price;
            $(element).text(final.toString());
        })
    }
    
</script>