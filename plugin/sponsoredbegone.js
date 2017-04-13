window.setInterval(function() {
  var taglines = document.getElementsByClassName('C(#959595)');
  for (var i = 0; i < taglines.length; i++) {
    if (taglines[i].innerHTML == 'Sponsored') {
      taglines[i].closest('li').style.display = 'none';
    }
  }
}, 2000);
