document.onreadystatechange = function() {
	if (document.readyState == "complete") {
		
		var skillsCopyToClipboard = "Java, C, Python, XML, HTML, CSS, Javascript, Android, PostGreSQL, ExpressJS, AngularJS, NodeJS, Socket.io, Bootstrap, PyQt, Hadoop: Mapreduce, Git, Mercurial";

		// Variable declaration
		var body = document.getElementsByTagName("body")[0];
		var navbar = document.getElementById("navbar");
		var navbarSpacer = document.getElementById("navbar-spacer");
	  var navbarTopPos = offset(navbar).top;
		var skillsTitle = document.getElementById("skills-title");	

		window.onscroll = navBarScroll;
		skillsTitle.onclick = copyToClipboard;

		function navBarScroll() {
			var currTopPos = scrollTop();
			if (currTopPos > navbarTopPos) {
				addClass(navbar, "navbar-fixed");
				navbarSpacer.style.display = 'block';
			}				
			if (currTopPos < navbarTopPos + 1) {
				removeClass(navbar, "navbar-fixed");
				navbarSpacer.style.display = 'none';
			}
		}

		function copyToClipboard() {
			var hiddenTxtField = document.createElement("input");
			hiddenTxtField.type = "text";
			body.appendChild(hiddenTxtField);
			hiddenTxtField.value = skillsCopyToClipboard;
			hiddenTxtField.select();
			document.execCommand("copy");
			hiddenTxtField.remove();
		}
	}	
};



function addClass(element, className) {
	if (!hasClass(element, className)) {
		element.className += " " + className;
	}
}

function removeClass(element, className) {
	if (hasClass(element, className)) {
		var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
		element.className = element.className.replace(reg, ' ');
	}
}

function hasClass(element, className) {
	return !!element.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}

function offset(element) {
	var offset = null;
	if (element) {
		offset = {left: 0, top: 0};
		do {
			offset.top += element.offsetTop;
			offset.left += element.offsetLeft;
			element = element.offsetParent;
		} while (element);
	}
	return offset;
}

function scrollTop() {
	if (window.pageYOffset !== undefined) {
		return window.pageYOffset;
	}
	return (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

function startPosition() {
	return scrollTop();
}

function endPosition(elemID) {
	var element = document.getElementById(elemID);
	var offset = element.offsetTop;
	var currElem = element;
	while (currElem.offsetParent && currElem.offsetParent != document.body) {
		currElem = currElem.offsetParent;
		offset += currElem.offsetTop;
	} 
	return offset;
}

function smoothScroll(elemID) {
	var startY = startPosition();
	var stopY = endPosition(elemID);
	var distance  = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
  		window.scrollTo(0, stopY);
  		return;
  }

  var speed = Math.round(distance / 100);
  if (speed >= 20) {
  	speed = 20;
  }
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
 		for (var i=startY; i<stopY; i+=step) {
 			setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
 			leapY += step;
 			if (leapY > stopY) {
 				leapY = stopY;
 			}
 			timer++;
 		}
 		return;
  }
  for (var i=startY; i > stopY; i-=step) {
  	setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
  	leapY -= step; 
  	if (leapY < stopY) {
  		leapY = stopY;
  	}
  	timer++;
  }
}