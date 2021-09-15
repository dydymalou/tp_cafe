function showHint(str) {
  if (str.length == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    var reponse = this.responseText;
    document.getElementById("txtHint").innerHTML = ` <i> ${reponse} </i> `;
  }
  xhttp.open("GET", "gethint.php?q="+str);
  xhttp.send();
}
