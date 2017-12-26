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

// Ordinating numbers: http://stackoverflow.com/questions/15809950/javascript-ordinal-suffix-for-numbers-with-specific-css-class
ordinate = function(num){
    var /*num = this,*/
        numStr = num.toString(),
        last = numStr.slice(-1),
        ord = '';
    switch (last) {
        case '1':
            ord = numStr.slice(-2) === '11' ? 'th' : 'st';
            break;
        case '2':
            ord = numStr.slice(-2) === '12' ? 'th' : 'nd';
            break;
        case '3':
            ord = numStr.slice(-2) === '13' ? 'th' : 'rd';
            break;
        default:
            ord = 'th';
            break;
    }
    return num.toString() + ord;
};