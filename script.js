const api = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const generate = document.querySelector("#gen");
var qr = document.querySelector("#qr");
var text = document.querySelector("#text");
var box=document.querySelector("#img")
generate.addEventListener("click", function (e) {
  if(text.value==""){
    alert("Please enter a text");
    return;
  }
  else{
      e.preventDefault();
  box.style.display="block";
  text.value;
  qr.src = api + text.value;
  }
  

});

