$('.nav-link , .footer-link a').click(function () {
	var target = $(this.hash);
	$('html, body').animate({
		scrollTop: target.offset().top - $('header').height()
	}, 500);
	return false;
})

$(document).ready(function () {
	laodImgDone();
});

function scrollDo() {
    showAnimation('.addbottom', 'antobottom', 100);
	showAnimation('.addtop', 'antotop', 100);
	showAnimation('.addleft', 'antoleft', 100);
	showAnimation('.addright', 'antoright', 100);
}

function showAnimation(divName, cssName, offset){
 	if ($(divName).length > 0) {
  		$(divName).each(function() {
   			var divTop = $(this).offset().top;
   			var divTopOffset = eval(divTop + offset);
   			var scrollTop = $(window).scrollTop();
   			var windowHeight = $(window).height();
   			if (scrollTop + windowHeight > divTopOffset && scrollTop < divTopOffset) {
    			$(this).addClass((cssName));
   			}
  		});
 	}
}

var maxCount = 100;
function laodImgDone() {
 	maxCount--;
 	var allImgTotle = $("img").length;
 	var allImgCount = 0;
 	$("img").each(function() {
  		if (this.complete) allImgCount++;
 	});
 	if(allImgTotle != allImgCount && maxCount > 0) {
  		setTimeout("laodImgDone()", 200);
 	}
 	else {
  		scrollDo();
  		$(window).scroll(function () {
   			scrollDo();
  	});
  }
}
