function showreservation() {

  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("planning").innerHTML = this.responseText;
  }
  xhttp.open("GET", "getreservation.php");
  xhttp.send();
}
