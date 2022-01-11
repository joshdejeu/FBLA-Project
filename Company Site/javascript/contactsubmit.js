var email = document.getElementById('email');
var message = document.getElementById('contact_textarea');
var emailRequired = document.getElementById('email_required');
var messageRequired = document.getElementById('message_required');
function contactSubmit(){
  if(email.value.length == 0){
    emailRequired.innerHTML = "*required";
    email.style.background = "rgba(255, 210, 210, 0.7)";
  }else{
    emailRequired.innerHTML = "";
    email.style.background = "rgba(255, 255, 255, 0.7)";
  }
  if(message.value.length == 0){
    messageRequired.innerHTML = "*required";
    message.style.background = "rgba(255, 210, 210, 0.7)";
  }else{
    messageRequired.innerHTML = "";
    message.style.background = "rgba(255, 255, 255, 0.7)";
  }
  if(email.value.length > 0 && message.value.length > 0){
    emailRequired.innerHTML = "";
    messageRequired.innerHTML = "";
  }
}
