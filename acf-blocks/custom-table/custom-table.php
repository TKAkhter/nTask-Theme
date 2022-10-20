<?php
$table = get_field('table');

// echo '<pre>'.print_r($table,TRUE).'</pre>';

if (!empty($table))
{
    echo '<table class="custom-table" >';
    if (!empty($table['caption']))
    {
        echo '<caption>' . $table['caption'] . '</caption>';
    }
    if (!empty($table['header']))
    {
        echo '<thead>';
        echo '<tr>';
        foreach ($table['header'] as $th)
        {
            echo '<th>';
            echo $th['c'];
            echo '</th>';
        }
        echo '</tr>';
        echo '</thead>';
    }
    echo '<tbody>';
    foreach ($table['body'] as $tr)
    {
        echo '<tr>';
        foreach ($tr as $td)
        {
            echo '<td>';
            echo $td['c'];
            echo '</td>';
        }
        echo '</tr>';
    }
    echo '</tbody>';
    echo '</table>';
}

?>

<style>
	.custom-table {
		width: 100%;
		table-layout: auto;
	}

	.custom-table td {
		border: 1px solid #EBF2F5;
		text-align: center;
		padding: 20px;
		color: #161717;
		font-size: 16px;
		font-weight: 700;
        width: 16.66%;
	}

	td:first-child {
		text-align: left;
		width: 33.33%;
	}

	td:nth-child(4) {
		background-color: #E6FAF4;
	}

	tr:last-child td:first-child {
		border-left: 0;
		border-bottom: 0;
	}

    tr:last-child td:last-child {
        border-right: 0;
		border-bottom: 0;
    }

	.custom-table td:first .custom-table table,
	.custom-table td,
	.custom-table th {
		border-collapse: collapse;
	}

	.custom-table svg {
		width: 20px;
	}

</style>
