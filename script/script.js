document.onreadystatechange = function() {
	if (document.readyState == "complete") {
		
		var skillsCopyToClipboard = "Java, C, Python, XML, HTML, CSS, Javascript, SQL, Android, Skeleton, Bootstrap, PyQt, Hadoop: Mapreduce, Git, Mercurial";

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