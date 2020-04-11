function submitbtn()  {
var textinput=document.forms["submitform"]["text"].value;
 var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if(eval('textinput')==null || eval('textinput')==''){

 
	var formvalidaton=document.getElementById('formvalidaton');
formvalidaton.innerHTML='<h6> <span>Please Enter Email.</span></h6>';
 setTimeout(()=>formvalidaton.remove(),3000);
return false;
	

}

else if(!(textinput.value.match(mailformat))){
var formvalidaton=document.getElementById('formvalidaton');
formvalidaton.innerHTML='<h6> <span>Please Valid Email.</span></h6>';
 setTimeout(()=>formvalidaton.remove(),3000);
return false;
  
}
else {
  return true;
}

}

 
/*


  mobileNav = document.querySelector(".mobile-nav-lists");
const openNavBtn = document.querySelector(".openNavBtn");
const closeNavBtn = document.querySelector(".closeNavBtn");

openNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openNavBtn.classList.add("hide");
  mobileNav.classList.add("open");
  closeNavBtn.classList.remove("hide");
});

closeNavBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeNavBtn.classList.add("hide");
  mobileNav.classList.remove("open");
  openNavBtn.classList.remove("hide");
});


$(document).ready(function(){
 
    var btntogle=false;

 $('#hamburger').on('click',function(){
  if(btntogle)
  {
      $('#w3s').attr('src', 'images/icon-close.svg');
  btntogle=true;
  }
    $('#w3s').attr('src', 'images/icon-hamburger.svg');
btntogle=false;
 });
 
 });
 *
 var modal = document.getElementByclassname('show-menu-btn');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }*/