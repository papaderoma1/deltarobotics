function validateFormm() {
  var a = document.getElementById('firstnamem').value;
  if (a == null || a == "") {
    alert("Firstname must be filled out");
    return false;
  }
  var b = document.getElementById('lastnamem').value;
  if (b == null || b == "") {
    alert("Lastname must be filled out");
    return false;
  }
  var c = document.getElementById('emailm').value;
  if (c == null || c == "") {
    alert("E-mail must be filled out");
    return false;
  }
  var d = document.getElementById('emailm').value;
  atpos = d.indexOf("@");
  dotpos = d.lastIndexOf(".");
  if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID");
	   return false;
       document.form1m.emailm.focus() ;

   }
   var e = document.getElementById('telephonem').value;
  if (e == null || e == "") {
    alert("Telephone Number must be filled out");
    return false;
  }
  if(document.getElementById("describem").value.length == 0){
	alert("Please briefly describe the problem")
	return false;
	}
  else {alert("Thank you for contacting us, one of our colleagues will contact you!");}
}
function validateForm() {
  var f = document.getElementById('firstname').value;
  if (f == null || f == "") {
    alert("Firstname must be filled out");
    return false;
  }
  var g = document.getElementById('lastname').value;
  if (g == null || g == "") {
    alert("Lastname must be filled out");
    return false;
  }
  var h = document.getElementById('email').value;
  if (h == null || h == "") {
    alert("E-mail must be filled out");
    return false;
  }
  var i = document.getElementById('email').value;
   atpos = i.indexOf("@");
   dotpos = i.lastIndexOf(".");
   if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID");
       return false;
       document.form1.email.focus() ;
   }
   var j = document.getElementById('telephone').value;
  if (j == null || j == "") {
    alert("Telephone Number must be filled out");
    return false;
  }
  if(document.getElementById("describe").value.length == 0){
	alert("Please briefly describe the problem")
	return false;
	}
  else {alert("Thank you for contacting us, one of our colleagues will contact you!");}
}


