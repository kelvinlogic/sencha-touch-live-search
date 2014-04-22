<?php
    require_once('functions.php');
    $connection = mysql_connect("brewmenudb.db.11076734.hostedresource.com","brewmenudb","kellyPASS@123");
    confirm_query($connection);
    $db = mysql_select_db("brewmenudb", $connection);
    confirm_query($db);
?>