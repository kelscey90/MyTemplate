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