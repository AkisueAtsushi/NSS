var move_amount = 20;
var interval = 10;

var number = 1;
var photo_width = 480;
var photo_margin = 15;
var after_left = 0;
var now_left = -15;
var slide;

function loaded() {
	var num_photo = document.getElementsByClassName("photo").length;
	var showcases_width = (num_photo * photo_width) + (num_photo * photo_margin * 2);

	var showcases = document.getElementById("showcases");
	showcases.style.width = showcases_width + "px";

	var previous = document.getElementById("previous");
	previous.onclick = function(){	number--;
																	if(number == 1)
																		previous.style.visibility = "hidden";
																	if(number == num_photo-1)
																		next.style.visibility = "visible";
																	after_left = -(((photo_width + (photo_margin * 2)) * (number-1)) + (photo_margin));
																	slide = setInterval("previous_slider()", interval);
																};

	var next = document.getElementById("next");
	next.onclick = function(){	if(number == 1)
																previous.style.visibility = "visible";
															number++;
															if(number == num_photo)
																next.style.visibility = "hidden";
															after_left = -(((photo_width + (photo_margin * 2)) * (number-1)) + (photo_margin));
															slide = setInterval("next_slider()", interval);
														};
}

function previous_slider() {
	showcases.style.left = (now_left + move_amount) + "px";
	now_left += move_amount;

	if((now_left+move_amount) >= after_left) {
		showcases.style.left = after_left + "px";
		clearInterval(slide);
	}
}

function next_slider() {
	showcases.style.left = (now_left - move_amount) + "px";
	now_left -= move_amount;

	if((now_left-move_amount) <= after_left) {
		showcases.style.left = after_left + "px";
		clearInterval(slide);
	}
}

if(window.addEventListener)
	document.addEventListener('DOMContentLoaded', function () { setTimeout(loaded, 300); }, false);
else
	window.attachEvent('onload', loaded);