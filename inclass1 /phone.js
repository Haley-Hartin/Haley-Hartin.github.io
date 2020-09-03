//load page
$(document).ready(function() { // do this when the document is loaded
	$("#dial_content").show(); // show the element with ID "element"
	$("#contacts_content").hide(); // hide the element with ID "otherElement"
    $("#add_content").hide();
});

//render dial tab
$("#dial").click(function() { // when "button_id" is clicked
	$("#dial_content").show(); // show element
	$("#contacts_content").hide(); // hide the element with ID "otherElement"
    $("#add_content").hide();
});

//render contact tab
$("#contact").click(function() { // when "button_id" is clicked
	$("#contacts_content").show(); // show element
	$("#add_content").hide(); // hide the element with ID "otherElement"
    $("#dial_content").hide();
});

//render add contact tab
$("#add_contact").click(function() { // when "button_id" is clicked
	$("#add_content").show(); // show element
	$("#contacts_content").hide(); // hide the element with ID "otherElement"
    $("#dial_content").hide();
});