document.getElementById("Button").onclick = reservation

function reservation() {

  var name = document.getElementById("name").value;
  var nombre = document.getElementById("nombre").value;
  var message = document.getElementById("message").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;

  var contact = [name, nombre, message, date, time];

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    console.log("ok")
  }
  xhttp.open("GET", "reservation.php?q="+ contact);
  xhttp.send();
}
