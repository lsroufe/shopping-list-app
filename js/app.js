function addListItem() {
	var write = $('#newItem').val();
	var list = $('#itemList');
	var item = $('<li><button class="checkbox">&#x2713;</button><span class="list">' + write + '</span><button class="delete">X</button></li>');
	var newItem = $('#newItem');

	if (write.length === 0 || write.length > 33) {
		return false;
	}

	list.append(item);
	$(newItem).val('');
}

function deleteItem() {
	$(this).parent().remove();
}

function dimItem() {
	$(this).parent().toggleClass('strikethrough');
}

$(function() {
	var add = $('addItem');
	var newItem = $('#newItem');
	var list = $('itemList');

	add.on('click', addListItem);
	list.on('click', '.checkbox', dimItem);
	list.on('click', '.delete', deleteItem);
	newItem.on('keypress', function (e) {
		if (e.which == 13) {
			addListItem();
		}
	})
})













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