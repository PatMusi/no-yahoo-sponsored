window.setInterval(function() {
  console.log("clearing sponsored content");
  var taglines = document.getElementsByClassName('C(#959595)');
  for (var i = 0; i < taglines.length; i++) {
    if (taglines[i].innerHTML == 'Sponsored') {
      taglines[i].closest('li').style.display = 'none';
    }
  }
}, 1000);
