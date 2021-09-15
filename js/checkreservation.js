
document.getElementById("Button").onclick = checkReservation

function checkReservation() {
    const xhttp = new XMLHttpRequest();
    var str = getresa();
    var temps = convertH(str.split(",")[3]);
    str=str.concat(",",temps[0],",",temps[1]);
    console.log(str);
    xhttp.onload = function() {
      document.getElementById("dispo").innerHTML = this.responseText;
    }
    xhttp.open("GET", "checkreservation.php?q="+str);
    xhttp.send();
  }


function getresa(){
  let reservation = [];

  reservation.push(document.getElementById("name").value);
  reservation.push(document.getElementById("nombre").value);
  reservation.push(document.getElementById("date").value);
  reservation.push(document.getElementById("time").value);
  reservation.push(document.getElementById("message").value);
  var str = "";
  reservation.forEach((item) => {
      str = str.concat(item, ",")
  });
  str = str.substring(0, str.length - 1)
  console.log(str);
  return str;

}

function convertH(heure){
  var tableau = heure.split(":");
  console.log(tableau);
  var temps = parseInt(tableau[0]*60)+parseInt(tableau[1])-30;
  tableau[0] = parseInt(temps/60);
  tableau[1]= temps - tableau[0]*60;
  var str1 = "".concat(tableau[0],":",tableau[1]);
  var str2 = "".concat(tableau[0]+1,":",tableau[1]);
  return [str1,str2];
}
