document.getElementById("form").addEventListener("submit",function(e){
  e.preventDefault();
  const name=this.name.value.trim();
  const email=this.email.value.trim();
  const msg=this.message.value.trim();
  const res=document.getElementById("response");
  if(name && email && msg){
    res.textContent="Thank you for your message!";
    this.reset();
  }else{
    res.textContent="Please fill in all fields correctly.";
  }
});
