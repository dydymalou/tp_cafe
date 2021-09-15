<?php
$mysqli = new mysqli("localhost", "root", "", "cafe", 3307);
if($mysqli->connect_error) {
  exit('Could not connect');
}

$tableau = explode(",", $_GET['q']);

$stmt = $mysqli->prepare('SELECT sum(nombre_de_personne) from reservation WHERE date = ? and heure BETWEEN ? and ?');

$stmt->bind_Param("sss", $tableau[2], $tableau[5], $tableau[6]);

$stmt->execute();

$stmt->bind_result($nb);
$stmt->fetch();
$stmt->close();

echo "<p>il y a ".$nb." reservations</p>";

$resteAvant = 50 - $nb;
$nb = $nb + $tableau[1];
$reste = 50 - $nb;

if ( $nb < 50){
  echo "Il y a assez de place pour vous. Après votre reservation il nous reste ".$reste." places!";
  $stmt = $mysqli->prepare('INSERT INTO reservation (name,nombre_de_personne,date,heure,message) VALUES (?,?,?,?,?)');

  $stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2],  $tableau[3], $tableau[4] );

  $stmt->execute();
  $stmt->close();

}elseif ($nb == 50) {
  echo "Super, vous venez de prendre les dernières places disponibles!";
  $stmt = $mysqli->prepare('INSERT INTO reservation (name,nombre_de_personne,date,heure,message) VALUES (?,?,?,?,?)');

  $stmt->bind_Param("sisss", $tableau[0], $tableau[1], $tableau[2],  $tableau[3], $tableau[4] );


  $stmt->execute();
  $stmt->close();
}
else{
  echo "Malheureusement, il ne nous reste que ".$resteAvant." places... Votre reservation n'a donc pas été prise...";
}


?>
