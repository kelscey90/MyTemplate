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
var parallel = document.querySelector('.parallel');
window.addEventListener("load", function(){
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
	parallel.style.animationName = "moveRight";
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
window.onscroll = function() {
if (mobile.matches) {
	navbar.style.background = "#fff";
  	navbar.style.boxShadow = "none";
} else {
	if (document.documentElement.scrollTop > 150 || document.body.scrollTop > 150) {
		    navbar.style.background = "#fff";
		    navbar.style.boxShadow = "0 1px 5px 0 #222";
	} else{
	  		navbar.style.background = "transparent";
	  		navbar.style.boxShadow = "none";
	  	}
  }
	
}
