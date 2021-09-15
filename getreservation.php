<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3307);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$sql = "SELECT name, nombre_de_personne, date, heure, message
FROM reservation";

$stmt = $mysqli->prepare($sql);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($name, $nombre_de_personne, $date, $heure, $message);
$stmt->fetch();
$stmt->close();

$sql = "SELECT * FROM reservation";
$result = $mysqli->query($sql);

if ($result->num_rows > 0) {
  // output data of each row
  while($row = $result->fetch_assoc()) {
    echo "nom: " . $row["name"]. " - nombre de réservation: " . $row["nombre_de_personne"]. " date: " . $row["date"] . " message: " . $row["message"] . " heure: " . $row["heure"] . "<br>" . "<br>";
  }
}
else {
  echo "0 results";
}
$mysqli->close();


?>
