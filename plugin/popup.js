document.addEventListener('DOMContentLoaded', function() {
  var doItButton = document.getElementById('hideIt');
  doItButton.addEventListener('click', function() {
    var taglines = document.getElementsByClassName('C(#959595)');
    for (var i = 0; i < taglines.length; i++) {
      if (taglines[i].innerHTML == 'Sponsored') {
        taglines[i].closest('li').style.display = 'none';
      }
    }
  }, false);
});
