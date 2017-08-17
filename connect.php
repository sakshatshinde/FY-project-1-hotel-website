<?php

$dbconnect=mysqli_connect("localhost","root","","bookings");

if(mysqli_connect_errno ($dbconnect))
{
    echo "failed to connect";
}

else{
    echo "connection successful";
}

?>