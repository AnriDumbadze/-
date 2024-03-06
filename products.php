<?php
$servername = "localhost:5502"; // Replace with your server name
$username = "anri"; // Replace with your MySQL username
$password = "Anri123"; // Replace with your MySQL password
$dbname = "	%anri"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
