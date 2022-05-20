/* Le but de cet exercice est d'apprendre a manipuler les formulaires avec
 * jQuery.

var maxLength = 15;
$('textarea').keyup(function() {
  var textlen = maxLength - $(this).val().length;
  $('#rchars').text(textlen);
});
