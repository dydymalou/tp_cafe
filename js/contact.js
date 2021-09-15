

document.getElementById("Button").onclick = form;

function form() {

  var name = document.getElementById("name").value;
  var nombre = document.getElementById("nombre").value;
  var message = document.getElementById("message").value;
  var date = document.getElementById("date").value;
  //var age = CalculAge()

  contact=[name, nombre, message, date];
 console.log(document.cookie)


  // enregistrement dans les cookies

document.cookie = `form=${contact}; secure`

//----------------------CalculAge--------------------------
//if (age<13) {
  //document.getElementById("votreage").innerHTML = "vous n'avez pas encore 13 ans il faut attedndre encore un peu"
//}
//else {
  //document.getElementById("votreage").innerHTML ="merci de votre inscription"
//}-----------------------------------------------------------
}
