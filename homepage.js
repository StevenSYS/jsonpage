if (localStorage.getItem("darkMode") == "enabled") {
	$("body").addClass("dark");
} else {
	$("body").removeClass("dark");
}
sessionStorage.removeItem("jsonFile");
$(".uploadJSON").change(function () {
	let fileReader = new FileReader();
	fileReader.onload = function () {
		sessionStorage.setItem("jsonFile", fileReader.result);
	}
	fileReader.readAsText($(".uploadJSON").prop("files")[0]);
	window.location.href = "loader.html";
})