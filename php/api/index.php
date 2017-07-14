<?php

  // Good job here! 

  $db = Array (
    Array ("name" => "apples", "value" => 5, "img" => "/content/apple.jpg"),
    Array ("name" => "oranges", "value" => 3, "img" => "/content/orange.jpg"),
    Array ("name" => "pears", "value" => 12, "img" => "/content/pear.jpg")
  );

  header("Content-type:application/json");
  header("HTTP/1.1 200 Success");

  echo json_encode($db);

?>