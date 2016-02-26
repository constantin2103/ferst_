
    f = function() {	
	if (window.innerWidth > 1150 && window.innerHeight > 700 ){var link = document.createElement("link");

	var head = document.head || document.getElementsByTagName('head')[0];

	link.type = "text/css";
	
	link.href = "css_1200_more_700_more.css";

	link.rel = "stylesheet";

	head.appendChild(link);};
	
	if (window.innerWidth > 1150 && window.innerHeight < 700 ){var link = document.createElement("link");

	var head = document.head || document.getElementsByTagName('head')[0];

	link.type = "text/css";
	
	link.href = "css_1200_more_700.css";

	link.rel = "stylesheet";

	head.appendChild(link);};
	
	if (window.innerWidth < 1150 && window.innerWidth >= 800 && window.innerHeight > 600 )
	{
	
	
	var link = document.createElement("link");

	var head = document.head || document.getElementsByTagName('head')[0];

	link.type = "text/css";
	
	link.href = "css_800_more_500_more.css";

	link.rel = "stylesheet";

	head.appendChild(link);};
	
	if (window.innerWidth < 1150 && window.innerWidth >= 800 && window.innerHeight <= 600 )
	{
	
	
	var link = document.createElement("link");

	var head = document.head || document.getElementsByTagName('head')[0];

	link.type = "text/css";
	
	link.href = "css_800_more_500.css";

	link.rel = "stylesheet";

	head.appendChild(link);};
	
	if (window.innerWidth < 800 && window.innerHeight > 600 )
	{
	
	
	var link = document.createElement("link");

	var head = document.head || document.getElementsByTagName('head')[0];

	link.type = "text/css";
	
	link.href = "css_800_500_more.css";

	link.rel = "stylesheet";

	head.appendChild(link);};
	
	if (window.innerWidth < 800 && window.innerHeight <= 600 )
	{
	
	
	var link = document.createElement("link");

	var head = document.head || document.getElementsByTagName('head')[0];

	link.type = "text/css";
	
	link.href = "css_800_500.css";

	link.rel = "stylesheet";

head.appendChild(link);};
};
	window.setInterval(f,100);