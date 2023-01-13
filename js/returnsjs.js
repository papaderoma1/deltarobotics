function validateFormm() {
  var a = document.forms["form1m"]["firstnamem"].value;
  if (a == null || a == "") {
    alert("Firstname must be filled out");
    return false;
  }
  var b = document.forms["form1m"]["lastnamem"].value;
  if (b == null || b == "") {
    alert("Lastname must be filled out");
    return false;
  }
  var c = document.forms["form1m"]["telephonem"].value;
  if (c == null || c == "") {
    alert("Telephone must be filled out");
    return false;
  }
  var d = document.getElementById('emailm').value;
  if (d == null || d == "") {
    alert("E-mail must be filled out");
    return false;
  }
  var e = document.getElementById('emailm').value;
  atpos = e.indexOf("@");
  dotpos = e.lastIndexOf(".");
  if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID");
       return false;
       document.form1m.emailm.focus() ;
   }
  if(document.querySelector('input[name="robotm"]:checked') == null) {
    alert("You need to choose an robot!");
	return false;
	}
  
  if(document.getElementById("describem").value.length == 0){
	alert("Please briefly describe the problem")
	return false;
	}
  else {alert("Thank you for contacting us, one of our colleagues will call you!");}
}
function validateForm() {
  var f = document.forms["form1"]["firstname"].value;
  if (f == null || f == "") {
    alert("Firstname must be filled out");
    return false;
  }
  var g = document.forms["form1"]["lastname"].value;
  if (g == null || g == "") {
    alert("Lastname must be filled out");
    return false;
  }
  var h = document.forms["form1"]["telephone"].value;
  if (h == null || h == "") {
    alert("Telephone must be filled out");
    return false;
  }
  var i = document.getElementById('email').value;
  if (i == null || i == "") {
    alert("E-mail must be filled out");
    return false;
  }
  var j = document.getElementById('email').value;
  atpos = j.indexOf("@");
  dotpos = j.lastIndexOf(".");
  if (atpos < 1 || ( dotpos - atpos < 2 )) 
   {
       alert("Please enter correct email ID");
	   return false;
       document.form1m.emailm.focus() ;  
   }
  if(document.querySelector('input[name="robot"]:checked') == null) {
    alert("You need to choose an robot!");
	return false;
	}
	
  if(document.getElementById("describe").value.length == 0){
	alert("Please briefly describe the problem")
	return false;
	}
  else {alert("Thank you for contacting us, one of our colleagues will call you!");}
}