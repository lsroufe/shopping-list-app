$(document).ready(function () {
    $('form').on('submit',function(e) {
    	e.preventDefault();

    	var newItem = $('input').val();
    	var listItem = '<li>'+
    				       '<input type="checkbox" id="item"> ' + newItem + '<a href="#" class="btn btn-danger" aria-hidden="true">&times;</a>' +
    				    '</li>';

    	$('#todo').append(listItem);
    });

    $("body").on('click', '#todo a', function () {
        $(this).closest("li").remove();
    });

     $('#todo').change(function() {
     	$('#list-items').toggleClass('active', this.checked)
     });

    // on click on the checkbox / check
    // change text-decoration of li
    // either
    // 	$().toggleClass('')
});



// $(document).ready(function () {
// 	$('form').on('submit', function(e) {
// 		e.preventDefault();

// 		var inputValue = $('#food').val();
// 		console.log(inputValue);

// 		var newItem = $('<label><input type="checkbox" name="food"> ' + inputValue + '<a href="#">Delete</a></label>');
// 		$('fieldset').append(newItem);
// 	});