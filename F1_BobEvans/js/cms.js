$(function(){
	$("#br_submit").click(addNewBreakfast);
	$("#delete_btn").click(removeBreakfast);
	localStorage.clear();
});

const addNewBreakfast = () => {
	const t = $("#br_title").val();
	const d = $("#br_desc").val();
	const i = `images/${$("#br_img").val()}`;
	const p = $("#br_price").val();
	if (t === "" || d === "" || i === "" || p === "") {
		alert("Do not leave fields empty...");
		return;
	}
	$.getJSON("../json/menu.json", function(result) {
		result[t] = {"DESC":d, "IMG":i, "PRICE":p};
		let newData = JSON.stringify(result);
		$.post("../php/add_to_json.php", {newData: newData}, function(){});
		$("#br_title").val("");
		$("#br_desc").val("");
		$("#br_img").val("");
		$("#br_price").val("");
		localStorage.setItem("retry", "true");
		alert("ADDED SUCCESSFULLY");
	});
};

const removeBreakfast = () => {
	const r = $("#br_remove").val();
	if (r==="") {
		alert("Do not leave field empty...");
		return;
	}
		$.getJSON("../json/menu.json", function(result) {
	 	delete result[r];
		let newData = JSON.stringify(result);
		$.post("../php/add_to_json.php", {newData: newData}, function(){});
		$("#br_remove").val("");
		localStorage.setItem("retry", "true");
		alert("REMOVED SUCCESSFULLY");
	});
};