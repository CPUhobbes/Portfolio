
function inputFocus(i){
	if(i.value==i.defaultValue)
		{ i.value=""; i.style.color="#000"; 
	}
}
function inputBlur(i){
	if(i.value==""){ 
		i.value=i.defaultValue; i.style.color="#888";
	}
}
function message() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var msg = document.getElementById("msg").value;
	alert("Hello "+name+".\n\n"+"I see that your email is "+email+".\n\n"+"Thank you for your message of: \n\n"+msg);

}
