<?php
    require_once('connect.php');
    if(isset($_GET['q'])){
        $q = mysql_real_escape_string( $_GET["q"] );
        $count = mysql_query("SELECT COUNT(id) AS count FROM food_table WHERE  foodName LIKE '%". $q ."%' AND  available= '1'");
        $array = mysql_fetch_array ($count);
        $total = $array['count'];
        $query = mysql_query("SELECT * FROM food_table WHERE  foodName LIKE '%". $q ."%' AND  available= '1' LIMIT 10");
        $arr = array();
        while( $row = mysql_fetch_array ( $query )){
            $arr[] = array(
                "fID"      => $row["id"],
                "name"    => $row["foodName"],
                "image"   => "http://192.168.173.1/senchatouchprojects/SenchaTouchV2.3.1/project/CustomerDesign/image/".$row["foodImage"],
                "price"   => $row["foodPrice"],
                "content" => $row["foodDetails"]
            );
        }
        $data = array(
            "menu"=>$arr,
            "count"=>$total
        );
        //echo json_encode($arr);
         if(isset($_REQUEST['request'])){
            $callback = $_REQUEST['request'];
            if ($callback) {
                header('Content-Type: text/javascript');
                echo  $callback . '(' . json_encode($arr) . ');';
            } else {
                header('Content-Type: application/x-json');
                echo json_encode($arr);
           }
         }
        
    }
    
?>