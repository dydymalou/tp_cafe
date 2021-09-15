<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3307);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);

$stmt = $mysqli->prepare("INSERT INTO reservation (name, nombre_de_personne, date, heure, message) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[3], $tableau[4], $tableau[2]);
$stmt->execute();

var_dump($mysqli->error);

$stmt->close();
$mysqli->close();





//$stmt = $mysqli->prepare("INSERT INTO reservation (nom, nb, date, heure, message) VALUES (:nom, :nb, :date, :heure, :message)");
//$stmt->bindParam(':nom', $tableau[0]);
//$stmt->bindParam(':nb', $tableau[1]);
//$stmt->bindParam(':date', $tableau[2]);
//$stmt->bindParam(':heure', $tableau[3]);
//$stmt->bindParam(':message', $tableau[4]);

//$stmt->execute();

die("stop");
