$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault();

    var newItem 	= $('input[type="text"]').val();
    var checkBox 	= $('<input type="checkbox">');
    var aTag 		= $('<a href="#" class="btn btn-danger" aria-hidden="true">&times;</a>');
    var listItem 	= $('<li class="list-item"> ' + newItem + '</li>');
    listItem.prepend(checkBox);
    listItem.append(aTag);

    $('#todo').append( listItem );
  });

	$('body').on('change', '.list-item input', onChange);
    $('body').on('click', '.list-item a', onClick);

//THe checkbox has changed
  function onChange(){
    $(this).closest('.list-item').toggleClass('active', this.checked);
  }
  
//The delete button has been clicked
  function onClick(){
  	$(this).closest('.list-item').remove();
  }
});

    // on click on the checkbox / check
    // change text-decoration of li
    // either
    // 	$().toggleClass('')



// $(document).ready(function () {
// 	$('form').on('submit', function(e) {
// 		e.preventDefault();

// 		var inputValue = $('#food').val();
// 		console.log(inputValue);

// 		var newItem = $('<label><input type="checkbox" name="food"> ' + inputValue + '<a href="#">Delete</a></label>');
// 		$('fieldset').append(newItem);
// 	});