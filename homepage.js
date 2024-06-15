/*
	This file is part of JSONpage.

	JSONpage is free software: you can redistribute it and/or modify
	it under the terms of the GNU Lesser General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

    JSONpage is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

	You should have received a copy of the GNU Lesser General Public License along with JSONpage.
	If not, see <https://www.gnu.org/licenses/>.
*/

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