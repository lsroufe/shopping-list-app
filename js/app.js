$(document).ready(function () {
    $('button').click(function () {
        $('#todo').append("<ul>" + $("input[name=newItem]").val() + " <a href='#' class='btn btn-danger' aria-hidden='true'>&times;</a></ul>");
    });
    $("body").on('click', '#todo a', function () {
        $(this).closest("ul").remove();
    });
});



// $(document).ready(function () {
// 	$('form').on('submit', function(e) {
// 		e.preventDefault();

// 		var inputValue = $('#food').val();
// 		console.log(inputValue);

// 		var newItem = $('<label><input type="checkbox" name="food"> ' + inputValue + '<a href="#">Delete</a></label>');
// 		$('fieldset').append(newItem);
// 	});
	// on form submit
	//  get input text value
	//  create new label element with checkbox, text and delete button
	//  preappend or append the new label to the div
// });