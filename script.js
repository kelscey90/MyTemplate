/*Responsive Navigation*/
var menubar = document.querySelector('#menubar');
var navbar = document.querySelector('#navbar');
menubar.addEventListener("click", function(){
	navbar.classList.toggle("show");
});

/*Navigation Click*/
var btn = document.querySelectorAll('.btn');
for (var i = 0; i < btn.length; i++) {
	btn[i].addEventListener("click", function(){
		navbar.classList.toggle("show");
	});
}

/*Loading*/
window.addEventListener("load", function(){
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
});

/*Active Class Pass onscoll*/
window.addEventListener('scroll', function(){ 
    scrollpos = window.scrollY;
    if(scrollpos < 350){
    	btn[0].classList.add("active");
    	btn[1].classList.remove("active");
    } else if(scrollpos <= 1000){
    	btn[1].classList.add("active");
    	btn[0].classList.remove("active");
    }
});

/*Hide Navigation onscroll*/

var mobile = window.matchMedia("(max-width: 1050px)")

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

if(mobile.matches){
	navbar.style.top = "0";
} else{
	if (prevScrollpos > currentScrollPos) {
  		navbar.style.top = "0";
  } else {
  		navbar.style.top = "-80px";
  }
}
  prevScrollpos = currentScrollPos;
}
