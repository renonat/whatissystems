// Document listener for dropdown clicks, to expand/hide dropdown for learn links
document.addEventListener('click', function(event) {
  var dropdown = document.getElementById('dropdown-links');
  var isClickInDropdown = dropdown.contains(event.target);
  var isClickOnButton = document.getElementById('dropdown-button').contains(event.target);

  // If is click in dropdown, ignore click event
  if (!isClickInDropdown) {
    if (isClickOnButton) {
        // Clicks on the button toggle the dropdown
        if (dropdown.className.includes(' show')) {
            dropdown.className = dropdown.className.replace(' show', '');
        } else {
            dropdown.className += ' show';
        }
    } else {
        // Clicks outside of the dropdown hide the dropdown
        dropdown.className = dropdown.className.replace(' show', '');
    }
  }

});