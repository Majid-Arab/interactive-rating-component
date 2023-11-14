let listItems = document.querySelectorAll('.list');

  // Add click event listener to each li element
  listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      // Change the background color to gray
      item.classList.add('gray');

      // Log the value to the console
      console.log(item.getAttribute('value'));
    });
  });