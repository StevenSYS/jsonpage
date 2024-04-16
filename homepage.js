if (localStorage.getItem("darkmode") == "enabled") {
	$("body").addClass("dark");
} else {
	$("body").removeClass("dark");
}
sessionStorage.removeItem("jsonfile");
$(".uploadjson").change(function () {
	let fileReader = new FileReader();
	fileReader.onload = function () {sessionStorage.setItem("jsonfile", fileReader.result);};
	fileReader.readAsText($(".uploadjson").prop("files")[0]);
	window.location.href = "loader.html";
})