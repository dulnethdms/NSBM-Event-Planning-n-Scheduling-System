<?php

$servername = "";
$username = "";
$password = "";

$conn = new mysqli($servername, $username, $password);

$sql = "CREATE DATABASE IF NOT EXISTS eventsdb"
$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS event_details(
        eventId INT AUTO_INCREMENT PRIMARY KEY,
        eventName VARCHAR(100) NOT NULL,
        details VARCHAR(5000) NOT NULL,
        eventDate DATE,
        eventStartTime TIME,
        eventDuration INT(2),
        eventCategory VARCHAR(70),
        );";

$conn->query($sql);

$sql = "CREATE TABLE IF NOT EXISTS event_photos(
        eventId INT,
        photoID INT AUTO_INCREMENT PRIMARY KEY,
        photoPath VARCHAR(200),
        FOREIGN KEY (eventId) references event_details(eventId)
        );";

$conn->query($sql);

?>