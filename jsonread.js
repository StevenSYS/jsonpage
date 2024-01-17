const URLParams = new URLSearchParams(window.location.search);
if (!URLParams.has("jsonfile") && sessionStorage.getItem("jsonfile") == null) {window.location.href = "index.html";};
if (URLParams.has("jsonfile")) {
	$.getJSON(URLParams.get("jsonfile"), function(json) {
		readJSON(json);
		sessionStorage.removeItem("jsonfile");
	});
} else {if (sessionStorage.getItem("jsonfile") != null) {readJSON(JSON.parse(sessionStorage.getItem("jsonfile")));}};
function readJSON(jsonfile) {
	for(var i = 1; eval("jsonfile.lineset" + i + " != undefined"); i++) {
		eval("var lineset = jsonfile.lineset" + i);
		if (lineset.image != undefined) {
			if (lineset.clink != undefined) {
				$(".linesets").append("<a href=\"" + lineset.clink + "\"><img src=\"" + lineset.image + "\"></img></a>");
			} else {
				$(".linesets").append("<img src=\"" + lineset.image + "\"></img>");
		}};
		for(var li = 1; eval("lineset.line" + li + " != undefined"); li++) {
		if (eval("lineset.clink" + li) != undefined) {
			if (eval("lineset.header" + li) != undefined) {
				$(".linesets").append("<h" + eval("lineset.header" + li) + "><a href=\"" + eval("lineset.clink" + li) + "\">" + eval("lineset.line" + li)+ "</a></h" + eval("lineset.header" + li) + "><p></p>");
			} else {
				$(".linesets").append("<a href=\"" + eval("lineset.clink" + li) + "\">" + eval("lineset.line" + li) + "</a><p></p>");
			}} else {
				if (eval("lineset.header" + li) != undefined) {
				$(".linesets").append("<h" + eval("lineset.header" + li) + ">" + eval("lineset.line" + li) + "</h" + eval("lineset.header" + li) + ">");
				} else {
				$(".linesets").append("<p>" + eval("lineset.line" + li) + "</p>");
		}}};
		if (lineset.nobar != true) {$(".linesets").append("<hr>");};
	};
	if (jsonfile.css != undefined) {
		$("body").css("color", jsonfile.css.color);
		$("a").css("color", jsonfile.css.linkcolor);
		$("body").css("font-family", jsonfile.css.fontfamily);
		$(".linesets").css("font-size", jsonfile.css.fontsize);
		$("body").css("text-align", jsonfile.css.textalign);
		$("body").css("background-color", jsonfile.css.backgroundcolor);
		$("body").css("background-image", "url(\"" + jsonfile.css.backgroundimage + "\")");
	};
	if (jsonfile.madewith == false) {$(".madewith").remove();};
};